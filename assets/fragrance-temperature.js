(function(root){
  "use strict";

  const STATUS_PRIORITY = {perfect:0,great:1,wearable:2,"not-today":3};

  function finiteNumber(value){
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function fragranceTemperatureProfile(fragrance){
    if(!fragrance) return null;
    const minTempF = finiteNumber(fragrance.minTempF);
    const maxTempF = finiteNumber(fragrance.maxTempF);
    const sweetSpotMinF = finiteNumber(fragrance.sweetSpotMinF);
    const sweetSpotMaxF = finiteNumber(fragrance.sweetSpotMaxF);
    if([minTempF,maxTempF,sweetSpotMinF,sweetSpotMaxF].some(value=>value===null)) return null;
    if(minTempF > maxTempF || sweetSpotMinF > sweetSpotMaxF) return null;
    if(sweetSpotMinF < minTempF || sweetSpotMaxF > maxTempF) return null;
    return {minTempF,maxTempF,sweetSpotMinF,sweetSpotMaxF};
  }

  function distanceFromRange(value,min,max){
    if(value < min) return min-value;
    if(value > max) return value-max;
    return 0;
  }

  function getFragranceTemperatureMatch(fragrance,tempF,options={}){
    const profile = fragranceTemperatureProfile(fragrance);
    const temperature = finiteNumber(tempF);
    if(!profile || temperature===null) return {status:"unknown",label:"Temperature not set",distance:null,profile};
    const wearableToleranceF = Math.max(0,finiteNumber(options.wearableToleranceF) ?? 7);
    let status = "not-today";
    if(temperature >= profile.sweetSpotMinF && temperature <= profile.sweetSpotMaxF) status = "perfect";
    else if(temperature >= profile.minTempF && temperature <= profile.maxTempF) status = "great";
    else if(distanceFromRange(temperature,profile.minTempF,profile.maxTempF) <= wearableToleranceF) status = "wearable";
    const distance = distanceFromRange(temperature,profile.sweetSpotMinF,profile.sweetSpotMaxF);
    return {
      status,
      label:{perfect:"Perfect",great:"Great",wearable:"Wearable","not-today":"Not Today"}[status],
      distance,
      profile
    };
  }

  function temperatureToChartPosition(tempF,lowF=30,highF=100){
    const low = finiteNumber(lowF) ?? 30;
    const high = finiteNumber(highF) ?? 100;
    const temp = finiteNumber(tempF) ?? low;
    if(high <= low) return 0;
    return Math.max(0,Math.min(100,((temp-low)/(high-low))*100));
  }

  function rankFragrancesForWeather(fragrances,tempF,options={}){
    return (Array.isArray(fragrances) ? fragrances : [])
      .map(fragrance=>({fragrance,match:getFragranceTemperatureMatch(fragrance,tempF,options)}))
      .filter(entry=>entry.match.profile)
      .sort((a,b)=>{
        const status = (STATUS_PRIORITY[a.match.status] ?? 9) - (STATUS_PRIORITY[b.match.status] ?? 9);
        if(status) return status;
        const distance = a.match.distance-b.match.distance;
        if(distance) return distance;
        const rating = Number(b.fragrance.personalRating||b.fragrance.rating||0)-Number(a.fragrance.personalRating||a.fragrance.rating||0);
        if(rating) return rating;
        const topShelf = Number(Boolean(b.fragrance.topTen))-Number(Boolean(a.fragrance.topTen));
        if(topShelf) return topShelf;
        return `${a.fragrance.brand||""} ${a.fragrance.name||""}`.localeCompare(`${b.fragrance.brand||""} ${b.fragrance.name||""}`);
      });
  }

  function getPerfectFragrances(fragrances,tempF,options={}){
    return rankFragrancesForWeather(fragrances,tempF,options).filter(entry=>entry.match.status==="perfect");
  }

  function fahrenheitToCelsius(tempF){
    const value = finiteNumber(tempF);
    return value===null ? null : (value-32)*5/9;
  }

  function celsiusToFahrenheit(tempC){
    const value = finiteNumber(tempC);
    return value===null ? null : value*9/5+32;
  }

  root.FragranceTemperature = Object.freeze({
    fragranceTemperatureProfile,
    getFragranceTemperatureMatch,
    getPerfectFragrances,
    rankFragrancesForWeather,
    temperatureToChartPosition,
    fahrenheitToCelsius,
    celsiusToFahrenheit
  });
})(typeof window!=="undefined" ? window : globalThis);
