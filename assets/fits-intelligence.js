"use strict";
var FitsIntelligence = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/browser/entry.ts
  var entry_exports = {};
  __export(entry_exports, {
    DEFAULT_WEATHER: () => DEFAULT_WEATHER,
    DEVIN_STYLE_PROFILE: () => DEVIN_STYLE_PROFILE,
    EXCLUSION_WINDOW: () => EXCLUSION_WINDOW,
    FITS_INTELLIGENCE_VERSION: () => FITS_INTELLIGENCE_VERSION,
    HERMES_MEMORY_STORAGE_KEY: () => HERMES_MEMORY_STORAGE_KEY,
    ITEM_METADATA: () => ITEM_METADATA,
    REJECTED_PAIRINGS_STORAGE_KEY: () => REJECTED_PAIRINGS_STORAGE_KEY,
    REPETITION_BASE: () => REPETITION_BASE,
    WARDROBE_ROWS: () => WARDROBE_ROWS,
    analyzeSmartPurchase: () => analyzeSmartPurchase,
    autoJudge: () => autoJudge,
    buildAroundThis: () => buildAroundThis,
    buildCandidates: () => buildCandidates,
    buildCoverageReport: () => buildCoverageReport,
    buildOutfitStudioBrief: () => buildOutfitStudioBrief,
    buildRejectedPairing: () => buildRejectedPairing,
    canSaveOutfitComparisonVersion: () => canSaveOutfitComparisonVersion,
    colorCompat: () => colorCompat,
    colorFamilyFor: () => colorFamilyFor,
    computeRejectionPenalty: () => computeRejectionPenalty,
    createOutfitComparisonDraft: () => createOutfitComparisonDraft,
    defaultHermesMemory: () => defaultHermesMemory,
    detectFitIntent: () => detectFitIntent,
    devinTasteScore: () => devinTasteScore,
    discoverColorPairings: () => discoverColorPairings,
    diversitySignal: () => diversitySignal,
    emptyLaneUsage: () => emptyLaneUsage,
    ensureCanonicalItemFields: () => ensureCanonicalItemFields,
    evaluateAgreement: () => evaluateAgreement,
    evaluateCoherence: () => evaluateCoherence,
    explanationSoundsGeneric: () => explanationSoundsGeneric,
    fireFitScore: () => fireFitScore,
    getItemMetadata: () => getItemMetadata,
    getWeather: () => getWeather,
    hasMetadata: () => hasMetadata,
    hermesTasteScore: () => hermesTasteScore,
    isCampOrResortShirt: () => isCampOrResortShirt,
    isCleanTailoredBottom: () => isCleanTailoredBottom,
    isCurated: () => isCurated,
    isDressierTop: () => isDressierTop,
    isHeavyRuggedBottom: () => isHeavyRuggedBottom,
    isHoundstooth: () => isHoundstooth,
    isMilitaryCargo: () => isMilitaryCargo,
    isPatterned: () => isPatterned,
    isSimpleTop: () => isSimpleTop,
    isStrongShoe: () => isStrongShoe,
    isWarmWeatherMaterial: () => isWarmWeatherMaterial,
    laneExceeds45: () => laneExceeds45,
    laneRepetitionNudge: () => laneRepetitionNudge,
    laneUsageCounts: () => laneUsageCounts,
    loadHermesMemory: () => loadHermesMemory,
    loadRejectedPairings: () => loadRejectedPairings,
    loadWardrobeItems: () => loadWardrobeItems,
    localOpenAiJudgeSim: () => localOpenAiJudgeSim,
    militaryCargoJustified: () => militaryCargoJustified,
    normalizeWardrobeItem: () => normalizeWardrobeItem,
    outfitLanes: () => outfitLanes,
    parseWardrobeRows: () => parseWardrobeRows,
    primaryLane: () => primaryLane,
    rankProductMatches: () => rankProductMatches,
    recordBuild: () => recordBuild,
    recordRejection: () => recordRejection,
    rejectPairing: () => rejectPairing,
    repetitionPenalty: () => repetitionPenalty,
    saveRejectedPairings: () => saveRejectedPairings,
    selectViaAgreement: () => selectViaAgreement,
    serializeHermesMemory: () => serializeHermesMemory,
    setOutfitComparisonPiece: () => setOutfitComparisonPiece,
    tallyLaneUsage: () => tallyLaneUsage,
    topItemOf: () => topItemOf,
    validateItemMetadata: () => validateItemMetadata,
    weatherItemAdjustment: () => weatherItemAdjustment,
    weatherSummary: () => weatherSummary
  });

  // src/wardrobe/itemMetadata.ts
  var ITEM_METADATA = {
    "Aime Leon Dore|ALD NY Yankees Retro Fit Hat": { formality: ["casual", "sport"], pattern: ["solid", "graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    // curated
    "Aime Leon Dore|Mesh V-Neck Tee": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Aime Leon Dore|Aime Cup Soccer Jersey": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|Aime Baseball Jersey": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|ALD Technics Nylon Logo Hat": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Jacquard Striped Tee": { formality: ["casual"], pattern: ["stripe"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Aime Leon Dore|Cotton Slub Cardigan": { formality: ["smart_casual", "casual"], pattern: ["textured"], weight: "light", seasons: ["spring", "fall"], lanes: ["ALD_sport_prep", "elevated_casual", "editorial_layered"], materialTags: ["knit"], silhouette: ["relaxed"] },
    "Aime Leon Dore|ALD New Era Highlanders Hat": { formality: ["casual", "sport"], pattern: ["solid", "graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    // curated
    "Aime Leon Dore|Mesh Batting Practice Jersey": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|ALD Diner Clog": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "elevated_casual", "street_relaxed"], materialTags: ["leather", "clog"], silhouette: ["low_profile"] },
    // curated
    "Aime Leon Dore|Pinstripe Wool Suit Trouser": { formality: ["tailored", "dressy"], pattern: ["stripe"], weight: "medium", seasons: ["fall", "winter", "spring"], lanes: ["tailored_clean", "loafer_trouser_fit", "editorial_layered", "ALD_sport_prep"], materialTags: ["wool", "tailored", "pinstripe"], silhouette: ["pleated", "relaxed_tailored"] },
    // curated
    "Aime Leon Dore|Double-Breasted Pinstripe Wool Suit Jacket": { formality: ["tailored", "dressy"], pattern: ["stripe"], weight: "medium", seasons: ["fall", "winter", "spring"], lanes: ["tailored_clean", "editorial_layered", "ALD_sport_prep"], materialTags: ["wool", "tailored"], silhouette: ["structured"] },
    "Aime Leon Dore|Mitchell and Ness Artisan Hockey Jersey": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|Triborough Dry Goods Hat": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Fur Earflap Hat": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["street_relaxed", "editorial_layered"], materialTags: ["fur"], silhouette: ["trapper"] },
    "Aime Leon Dore|Collegiate Mulberry Hat": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["heritage_prep", "ALD_sport_prep", "elevated_casual"], materialTags: ["wool"], silhouette: ["brimmed"] },
    "Aime Leon Dore|Nylon Sport Hat": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Aime Cycling Jersey": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|The Worlds Borough Hat": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Washed A Logo Hat": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Tropical Wool Suit Trouser": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "tailored_clean", "loafer_trouser_fit", "elevated_casual"], materialTags: ["tropical_wool", "tailored"], silhouette: ["pleated", "relaxed_tailored"] },
    // curated
    "Aime Leon Dore|Wool Heritage Hat": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["heritage_prep", "ALD_sport_prep", "elevated_casual"], materialTags: ["wool"], silhouette: ["brimmed"] },
    "Aime Leon Dore|Double Pleated Pant": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "tailored_clean", "loafer_trouser_fit", "elevated_casual"], materialTags: ["pleated", "tailored"], silhouette: ["wide", "relaxed_tailored"] },
    // curated
    "Aime Leon Dore|Lug Sole Derby": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["tailored_clean", "loafer_trouser_fit", "ALD_sport_prep", "heritage_prep"], materialTags: ["leather", "lug_sole"], silhouette: ["sharp"] },
    // curated
    "Aime Leon Dore|Corduroy Buddy Hat": { formality: ["casual", "smart_casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter"], lanes: ["heritage_prep", "ALD_sport_prep", "elevated_casual"], materialTags: ["wool"], silhouette: ["brimmed"] },
    "Aime Leon Dore|Tuxedo Trouser": { formality: ["tailored", "dressy"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter", "spring"], lanes: ["tailored_clean", "loafer_trouser_fit", "minimal_luxury", "ALD_sport_prep"], materialTags: ["wool", "tailored"], silhouette: ["sharp", "relaxed_tailored"] },
    // curated
    "Aime Leon Dore|Zip Cycling Shirt": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|Military Cargo Pant": { formality: ["casual", "rugged"], pattern: ["camo"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["rugged_workwear", "street_relaxed"], materialTags: ["cotton", "utility"], silhouette: ["relaxed", "cargo"] },
    // curated
    "Aime Leon Dore|Cycling Logo Hat": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Leather Team Football Jersey": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|Currency Cap": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Mesh Moto Long-Sleeve Tee": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Aime Leon Dore|Team Leon Soccer Hat": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Aime Leon Dore|Raglan Sweater Tee": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Aime Leon Dore|Blanket Overshirt": { formality: ["casual", "smart_casual"], pattern: ["mixed"], weight: "medium", seasons: ["fall", "winter"], lanes: ["editorial_layered", "elevated_casual", "street_relaxed"], materialTags: ["wool"], silhouette: ["relaxed"] },
    "Aime Leon Dore|Alpaca Fleece Pullover": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Aime Leon Dore|New Era Tonal Wool Yankees Hat": { formality: ["casual", "sport"], pattern: ["solid", "graphic"], weight: "light", seasons: ["spring", "fall", "winter"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["wool", "sport"], silhouette: ["baseball_cap"] },
    // curated
    "Aime Leon Dore|Chain Stitch Suede Hat": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["heritage_prep", "ALD_sport_prep", "elevated_casual"], materialTags: ["wool"], silhouette: ["brimmed"] },
    "Aime Leon Dore|Leon Corduroy Hat": { formality: ["casual", "smart_casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter"], lanes: ["heritage_prep", "ALD_sport_prep", "elevated_casual"], materialTags: ["wool"], silhouette: ["brimmed"] },
    "Aime Leon Dore|Fleece Beanie": { formality: ["casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["knit"], silhouette: ["beanie"] },
    "Aime Leon Dore|Fox Fur Hood": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["street_relaxed", "editorial_layered"], materialTags: ["fur"], silhouette: ["hood"] },
    "Aime Leon Dore|Jake Gloves": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["winter"], lanes: ["editorial_layered", "heritage_prep"], materialTags: ["leather"], silhouette: ["gloves"] },
    "Aime Leon Dore|Packable Logo Tote": { formality: ["casual", "smart_casual"], pattern: ["graphic"], weight: "light", seasons: ["all"], lanes: ["street_relaxed", "elevated_casual", "ALD_sport_prep"], materialTags: ["nylon"], silhouette: ["bag"] },
    "Louis Vuitton x Tyler the Creator|Monogram Craggy Reversible Bucket Hat": { formality: ["casual"], pattern: ["mixed"], weight: "light", seasons: ["spring", "summer"], lanes: ["street_relaxed", "summer_resort", "elevated_casual"], materialTags: ["cotton"], silhouette: ["bucket"] },
    "Louis Vuitton|LV Shark Clogs": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["street_relaxed", "elevated_casual", "minimal_luxury"], materialTags: ["leather", "clog"], silhouette: ["chunky"] },
    // curated
    "Buck Mason|Japanese Denim Ford Standard Jean": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["elevated_casual", "heritage_prep", "ALD_sport_prep", "tailored_clean"], materialTags: ["denim", "selvedge"], silhouette: ["straight", "clean"] },
    // curated
    "Buck Mason|Field-Spec Cotton Heavy Tee White": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Buck Mason|Field-Spec Cotton Heavy Tee Black": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Buck Mason|Seastack Wool Tweed Cable Crew": { formality: ["smart_casual", "casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Buck Mason|Natural Vintage Thermal Henley": { formality: ["casual", "smart_casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter", "spring"], lanes: ["heritage_prep", "elevated_casual", "ALD_sport_prep"], materialTags: ["cotton", "waffle"], silhouette: ["fitted"] },
    "Buck Mason|Italian Doeskin Station Jacket": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["street_relaxed", "elevated_casual", "editorial_layered"], materialTags: ["nylon"], silhouette: ["relaxed"] },
    "Buck Mason x Eddie Bauer|Cascade Down Eddie Bauer Yukon CPO": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["street_relaxed", "rugged_workwear", "elevated_casual"], materialTags: ["nylon", "down"], silhouette: ["relaxed"] },
    "Buck Mason|Avalon Daybreak Crew": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Cole Buxton|Cotton Chore Jacket": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["rugged_workwear", "elevated_casual", "heritage_prep"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Cole Buxton|The Wilson Sneaker": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "street_relaxed", "ALD_sport_prep"], materialTags: ["leather", "sneaker"], silhouette: ["clean", "low_profile"] },
    // curated
    "Cole Buxton|Cropped Insulated Puffer": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["street_relaxed", "rugged_workwear", "elevated_casual"], materialTags: ["nylon", "down"], silhouette: ["relaxed"] },
    "Kith|Kith Pittsburgh Pirates Snapback": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Kith|Kith New York Mets Snapback": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Kith|Kith NYC Cotton Beanie": { formality: ["casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["knit"], silhouette: ["beanie"] },
    "Kith|Kith Linwood Crewneck Sweater": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Kith|Kith Crystal Wash Turtleneck": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Kith|Kith Patchwork Cord Ludlow Shirt": { formality: ["casual", "smart_casual"], pattern: ["mixed"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "John Elliott|Riviera Cropped Tee": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "John Elliott|Solid Hemi Oversized Shirt": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Fear of God ESSENTIALS|Textured Nylon Trucker Jacket": { formality: ["casual", "smart_casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "spring"], lanes: ["street_relaxed", "elevated_casual", "editorial_layered"], materialTags: ["nylon"], silhouette: ["relaxed"] },
    "Joshua Mohamed|JM Work Jacket": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["rugged_workwear", "elevated_casual", "heritage_prep"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Legacy|Black Denim Jacket": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall"], lanes: ["elevated_casual", "street_relaxed", "heritage_prep"], materialTags: ["denim"], silhouette: ["relaxed"] },
    "Lee|Light Grey Denim Jacket": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall"], lanes: ["elevated_casual", "street_relaxed", "heritage_prep"], materialTags: ["denim"], silhouette: ["relaxed"] },
    "Kody Phillips|Lasso Shirt": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["elevated_casual", "rugged_workwear", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Kody Phillips|Kody Pants": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "street_relaxed", "ALD_sport_prep"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    // curated
    "Florence Black|Renzo Pocket Overshirt": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["elevated_casual", "rugged_workwear", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Florence Black|Raife Boxy Shirt": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Florence Black|1954 Black Cap": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "heritage_prep", "street_relaxed"], materialTags: ["cotton", "sport"], silhouette: ["baseball_cap"] },
    "Buck Mason|Heavy White Henley": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter", "spring"], lanes: ["heritage_prep", "elevated_casual", "ALD_sport_prep"], materialTags: ["cotton", "waffle"], silhouette: ["fitted"] },
    "Generic|White Thermal": { formality: ["casual", "smart_casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter", "spring"], lanes: ["heritage_prep", "elevated_casual", "ALD_sport_prep"], materialTags: ["cotton", "waffle"], silhouette: ["fitted"] },
    "Generic|Western Belt": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"], materialTags: ["leather"], silhouette: ["belt"] },
    "Generic|Belt Gold Buckle": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"], materialTags: ["leather"], silhouette: ["belt"] },
    "Generic|Belt Brown": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"], materialTags: ["leather"], silhouette: ["belt"] },
    "Generic|Belt Brown 2": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"], materialTags: ["leather"], silhouette: ["belt"] },
    "UNIQLO|Leather Mesh Belt": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"], materialTags: ["leather"], silhouette: ["belt"] },
    "Joshua Mohamed|Merino Wool Split Sweater": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Reiss|Cream Textured Knit Shirt": { formality: ["smart_casual", "casual"], pattern: ["textured"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "ALD_sport_prep", "tailored_clean"], materialTags: ["breathable", "camp_collar", "knit"], silhouette: ["relaxed"] },
    // curated
    "Reiss|Houndstooth Knit Shirt": { formality: ["smart_casual", "casual"], pattern: ["houndstooth"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "ALD_sport_prep"], materialTags: ["breathable", "camp_collar", "knit"], silhouette: ["relaxed"] },
    // curated
    "Reiss|Navy Striped Knit Shirt": { formality: ["smart_casual", "casual"], pattern: ["stripe"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "ALD_sport_prep", "heritage_prep"], materialTags: ["breathable", "camp_collar", "knit"], silhouette: ["relaxed"] },
    // curated
    "Goodfellow & Co|Crochet Stripe Knit Shirt": { formality: ["casual", "smart_casual"], pattern: ["stripe", "textured"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "ALD_sport_prep", "heritage_prep"], materialTags: ["crochet", "open_knit", "cotton", "breathable"], silhouette: ["relaxed", "camp_collar"] },
    // curated
    "JW Anderson|Striped Polo Shirt": { formality: ["casual", "smart_casual"], pattern: ["stripe"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "ALD_sport_prep", "heritage_prep"], materialTags: ["cotton", "polo", "breathable"], silhouette: ["clean", "regular"] },
    // curated
    "Trythmclub|Mohair Sweater": { formality: ["smart_casual", "casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Abercrombie|Quarter Zip": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "Saalt Studio|Football Jersey Shirt": { formality: ["casual", "sport"], pattern: ["graphic"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Perfect Eleven|Animal Print Soccer Shirt": { formality: ["casual", "sport"], pattern: ["animal"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Porter James|Barrel Pants": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "street_relaxed", "ALD_sport_prep"], materialTags: ["cotton"], silhouette: ["barrel", "relaxed"] },
    // curated
    "Zara|Pleated Pants Grey": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["tailored_clean", "loafer_trouser_fit", "elevated_casual", "ALD_sport_prep"], materialTags: ["pleated", "tailored"], silhouette: ["pleated", "relaxed_tailored"] },
    // curated
    "Zara|Pleated Pants Black": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["tailored_clean", "loafer_trouser_fit", "elevated_casual", "ALD_sport_prep"], materialTags: ["pleated", "tailored"], silhouette: ["pleated", "relaxed_tailored"] },
    // curated
    "Urban Outfitters|Rugby Shirt": { formality: ["casual", "sport"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "street_relaxed"], materialTags: ["sport"], silhouette: ["relaxed"] },
    "Charles Tyrwhitt|CF White Button-Down Washed Oxford": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "heritage_prep", "ALD_sport_prep"], materialTags: ["breathable"], silhouette: ["relaxed"] },
    "Free People|Willow Suede Sneakers": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "street_relaxed", "summer_resort"], materialTags: ["suede", "sneaker"], silhouette: ["clean", "low_profile"] },
    // curated
    "Carhartt|Loose Fit Firm Duck Utility Work Pant": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "heavy", seasons: ["fall", "winter"], lanes: ["rugged_workwear", "street_relaxed"], materialTags: ["duck_canvas", "utility"], silhouette: ["relaxed", "utility"] },
    // curated
    "Banana Republic Factory|Leather Trouser Belt": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"], materialTags: ["leather"], silhouette: ["belt"] },
    "Elwood Clothing|Oversized Crop Core Tee": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Lemaire|Flat Piped Slippers in Leather": { formality: ["smart_casual", "dressy"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["minimal_luxury", "elevated_casual", "tailored_clean"], materialTags: ["leather"], silhouette: ["low_profile", "sharp"] },
    // curated
    "Loewe|Faro Brown Derbies": { formality: ["smart_casual", "tailored", "dressy"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["tailored_clean", "loafer_trouser_fit", "minimal_luxury", "heritage_prep"], materialTags: ["leather"], silhouette: ["sharp"] },
    // curated
    "Aime Leon Dore|Diner Clog": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["ALD_sport_prep", "elevated_casual", "street_relaxed"], materialTags: ["leather", "clog"], silhouette: ["low_profile"] },
    // curated
    "Stoc and Weber|Black Lugged Loafers": { formality: ["smart_casual", "tailored", "dressy"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall", "winter"], lanes: ["tailored_clean", "loafer_trouser_fit", "minimal_luxury", "ALD_sport_prep"], materialTags: ["leather"], silhouette: ["low_profile", "sharp"] },
    // curated
    "Bottega Veneta|Lugged Chelsea Boots": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["tailored_clean", "rugged_workwear", "minimal_luxury", "street_relaxed"], materialTags: ["leather", "lug_sole"], silhouette: ["boot", "sharp"] },
    // curated
    "Lucky Brand|Clean Break Straight Fit Jeans": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["elevated_casual", "street_relaxed", "heritage_prep"], materialTags: ["denim"], silhouette: ["straight", "clean"] },
    // curated
    "H and M|Double-Breasted Wool Coat": { formality: ["tailored", "dressy"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["tailored_clean", "minimal_luxury", "editorial_layered"], materialTags: ["wool"], silhouette: ["structured"] },
    "H and M|Relaxed-Fit Mohair-Blend Cardigan": { formality: ["smart_casual", "casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter"], lanes: ["elevated_casual", "editorial_layered", "heritage_prep", "ALD_sport_prep"], materialTags: ["knit", "wool"], silhouette: ["relaxed"] },
    "H and M|Waxed Cotton Jacket": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["rugged_workwear", "heritage_prep", "elevated_casual"], materialTags: ["waxed_cotton"], silhouette: ["relaxed"] },
    "H and M|Patterned Blouson Jacket": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["editorial_layered", "elevated_casual", "street_relaxed"], materialTags: ["wool"], silhouette: ["relaxed"] },
    "H and M|Relaxed Fit Tailored Trousers": { formality: ["smart_casual", "tailored"], pattern: ["check"], weight: "medium", seasons: ["fall", "spring"], lanes: ["tailored_clean", "heritage_prep", "elevated_casual"], materialTags: ["tailored"], silhouette: ["relaxed_tailored"] },
    // curated
    "H and M|Relaxed-Fit Pants": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall"], lanes: ["elevated_casual", "street_relaxed", "tailored_clean"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    // curated
    "H and M|Regular-Fit Textured-Knit T-Shirt": { formality: ["casual"], pattern: ["textured"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "H and M|Regular Fit Oxford Shirt": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "heritage_prep", "ALD_sport_prep"], materialTags: ["breathable"], silhouette: ["relaxed"] },
    "H and M|Regular-Fit Poplin Shirt": { formality: ["smart_casual", "casual"], pattern: ["stripe"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "heritage_prep", "ALD_sport_prep"], materialTags: ["breathable"], silhouette: ["relaxed"] },
    "COS|Slim Ribbed Cotton Tank Top": { formality: ["casual"], pattern: ["textured"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "COS|Slim Ribbed Cotton T-Shirt": { formality: ["casual"], pattern: ["textured"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "COS|Wide-Leg Cotton-Twill Pants": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["spring", "summer", "fall"], lanes: ["elevated_casual", "tailored_clean", "editorial_layered"], materialTags: ["cotton_twill"], silhouette: ["wide", "relaxed"] },
    // curated
    "COS|Boxy Fit Overshirt": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["elevated_casual", "rugged_workwear", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "COS|Relaxed Fit Knit T-Shirt": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Zara|Utility Pocket Jeans": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["rugged_workwear", "street_relaxed"], materialTags: ["denim", "utility"], silhouette: ["relaxed", "utility"] },
    // curated
    "Zara|Puffer Cape": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["street_relaxed", "rugged_workwear", "elevated_casual"], materialTags: ["nylon", "down"], silhouette: ["relaxed"] },
    "Zara|Boxy Fit Overshirt": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["elevated_casual", "rugged_workwear", "street_relaxed"], materialTags: ["cotton"], silhouette: ["relaxed"] },
    "Zara|Relaxed Fit Knit T-Shirt": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["elevated_casual", "ALD_sport_prep", "street_relaxed"], materialTags: ["cotton"], silhouette: ["clean"] },
    "Ance Studios|Mohair Scarf": { formality: ["casual", "smart_casual"], pattern: ["textured"], weight: "medium", seasons: ["fall", "winter"], lanes: ["editorial_layered", "elevated_casual", "heritage_prep"], materialTags: ["mohair", "knit"], silhouette: ["scarf"] },
    "Zara|Croissant Leather Keychain": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["leather"], silhouette: ["accessory"] },
    "Entire Studios|Eternal Zip": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "medium", seasons: ["fall", "spring"], lanes: ["street_relaxed", "elevated_casual", "editorial_layered"], materialTags: ["nylon"], silhouette: ["relaxed"] },
    "Entire Studios|Heavy Hood": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["fleece"], silhouette: ["relaxed"] },
    "Entire Studios|Black Heavy Hoodie": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["fleece"], silhouette: ["relaxed"] },
    "A.A. Spectrum|Gray Cyberen II Down Jacket": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["street_relaxed", "rugged_workwear", "elevated_casual"], materialTags: ["nylon", "down"], silhouette: ["relaxed"] },
    "Carhartt WIP|Floyde Trousers": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["rugged_workwear", "street_relaxed"], materialTags: ["cotton", "utility"], silhouette: ["relaxed"] },
    // curated
    "Homme Plisse Issey Miyake|Monthly Color Trousers": { formality: ["smart_casual", "tailored"], pattern: ["textured"], weight: "light", seasons: ["spring", "summer", "fall"], lanes: ["editorial_layered", "elevated_casual", "minimal_luxury"], materialTags: ["pleated", "technical"], silhouette: ["pleated", "relaxed"] },
    // curated
    "Buck Mason x Eddie Bauer|Quilted Down Pant": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "heavy", seasons: ["winter"], lanes: ["rugged_workwear", "street_relaxed"], materialTags: ["quilted", "down"], silhouette: ["relaxed"] },
    // curated
    "Buck Mason x Eddie Bauer|Quilted Suspenders": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["fall", "winter"], lanes: ["rugged_workwear", "heritage_prep", "editorial_layered"], materialTags: ["quilted"], silhouette: ["suspenders"] },
    "Louis Vuitton|LV Crush Damier Argyle Beanie": { formality: ["casual"], pattern: ["check"], weight: "medium", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["knit"], silhouette: ["beanie"] },
    "Louis Vuitton|LV Crush Damoflage Beanie": { formality: ["casual"], pattern: ["camo"], weight: "medium", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["knit"], silhouette: ["beanie"] },
    "Louis Vuitton|Keepall Bandouliere": { formality: ["smart_casual"], pattern: ["mixed"], weight: "medium", seasons: ["all"], lanes: ["minimal_luxury", "street_relaxed", "elevated_casual"], materialTags: ["leather"], silhouette: ["bag"] },
    "Louis Vuitton x Tyler the Creator|Monogram Craggy Backpack": { formality: ["smart_casual"], pattern: ["mixed"], weight: "medium", seasons: ["all"], lanes: ["minimal_luxury", "street_relaxed", "elevated_casual"], materialTags: ["leather"], silhouette: ["bag"] },
    "Zara|Multicharm Keychain": { formality: ["casual"], pattern: ["mixed"], weight: "light", seasons: ["all"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["leather"], silhouette: ["accessory"] },
    "Todd Snyder|Relaxed Fit 5-Pocket Linen Pant": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["spring", "summer"], lanes: ["summer_resort", "elevated_casual", "tailored_clean", "ALD_sport_prep"], materialTags: ["linen", "breathable"], silhouette: ["relaxed"] },
    // curated
    "Polo Ralph Lauren|Cuffed Trousers": { formality: ["smart_casual", "tailored"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall"], lanes: ["heritage_prep", "tailored_clean", "loafer_trouser_fit", "elevated_casual"], materialTags: ["cotton", "tailored"], silhouette: ["relaxed_tailored", "cuffed"] },
    // curated
    "Vince|Pull-On Shorts": { formality: ["casual"], pattern: ["solid"], weight: "light", seasons: ["summer"], lanes: ["summer_resort", "elevated_casual"], materialTags: ["cotton", "breathable"], silhouette: ["relaxed"] },
    // curated
    "Kith|Chauncey Cargo Pant": { formality: ["casual", "rugged"], pattern: ["solid"], weight: "medium", seasons: ["spring", "fall", "winter"], lanes: ["rugged_workwear", "street_relaxed"], materialTags: ["cotton", "utility"], silhouette: ["relaxed", "cargo"] },
    // curated
    "Kith|Pinehurst Shaggy Sherpa Full Zip": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["sherpa"], silhouette: ["relaxed"] },
    "Kith|Merrick Sherpa Hoodie": { formality: ["casual"], pattern: ["solid"], weight: "heavy", seasons: ["fall", "winter"], lanes: ["street_relaxed", "elevated_casual"], materialTags: ["fleece"], silhouette: ["relaxed"] },
    "Zara|Green Mohair Shirt Jacket": { formality: ["smart_casual", "casual"], pattern: ["textured"], weight: "light", seasons: ["spring", "fall"], lanes: ["ALD_sport_prep", "elevated_casual", "editorial_layered"], materialTags: ["knit"], silhouette: ["relaxed"] },
    "Kith|Butterfly Crew Sock": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["ALD_sport_prep", "elevated_casual", "heritage_prep"], materialTags: ["cotton"], silhouette: ["crew"] },
    "Aime Leon Dore|ALD Signet Crew Sock": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["ALD_sport_prep", "elevated_casual", "heritage_prep"], materialTags: ["cotton"], silhouette: ["crew"] },
    "Aime Leon Dore|ALD Signet Crew Sock Grey Toe": { formality: ["casual", "smart_casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["ALD_sport_prep", "elevated_casual", "heritage_prep"], materialTags: ["cotton"], silhouette: ["crew"] },
    "Poedagar|Green Dial Nautilus-Style Watch": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["elevated_casual", "ALD_sport_prep", "minimal_luxury"], materialTags: ["steel"], silhouette: ["sport_watch"] },
    "Chanzai|Arabic Numeral Dial Watch": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["elevated_casual", "ALD_sport_prep", "minimal_luxury"], materialTags: ["steel"], silhouette: ["sport_watch"] },
    "Poedagar|White Dial Nautilus-Style Watch": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["elevated_casual", "ALD_sport_prep", "minimal_luxury"], materialTags: ["steel"], silhouette: ["sport_watch"] },
    "Timex x Noah|Moon Phase Square Watch": { formality: ["smart_casual", "tailored", "dressy"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "minimal_luxury", "heritage_prep"], materialTags: ["leather", "steel"], silhouette: ["dress_watch"] },
    "Invicta|Pro Diver Watch": { formality: ["smart_casual", "casual"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["elevated_casual", "ALD_sport_prep", "minimal_luxury"], materialTags: ["steel"], silhouette: ["sport_watch"] },
    "Pascal|Oval Dress Watch": { formality: ["smart_casual", "tailored", "dressy"], pattern: ["solid"], weight: "light", seasons: ["all"], lanes: ["tailored_clean", "minimal_luxury", "heritage_prep"], materialTags: ["leather", "steel"], silhouette: ["dress_watch"] }
  };
  var CURATED_KEYS = /* @__PURE__ */ new Set([
    "Aime Leon Dore|ALD NY Yankees Retro Fit Hat",
    "Aime Leon Dore|ALD New Era Highlanders Hat",
    "Aime Leon Dore|ALD Diner Clog",
    "Aime Leon Dore|Pinstripe Wool Suit Trouser",
    "Aime Leon Dore|Tropical Wool Suit Trouser",
    "Aime Leon Dore|Double Pleated Pant",
    "Aime Leon Dore|Lug Sole Derby",
    "Aime Leon Dore|Tuxedo Trouser",
    "Aime Leon Dore|Military Cargo Pant",
    "Aime Leon Dore|New Era Tonal Wool Yankees Hat",
    "Louis Vuitton|LV Shark Clogs",
    "Buck Mason|Japanese Denim Ford Standard Jean",
    "Cole Buxton|The Wilson Sneaker",
    "Kody Phillips|Kody Pants",
    "Reiss|Cream Textured Knit Shirt",
    "Reiss|Houndstooth Knit Shirt",
    "Reiss|Navy Striped Knit Shirt",
    "Goodfellow & Co|Crochet Stripe Knit Shirt",
    "JW Anderson|Striped Polo Shirt",
    "Porter James|Barrel Pants",
    "Zara|Pleated Pants Grey",
    "Zara|Pleated Pants Black",
    "Free People|Willow Suede Sneakers",
    "Carhartt|Loose Fit Firm Duck Utility Work Pant",
    "Lemaire|Flat Piped Slippers in Leather",
    "Loewe|Faro Brown Derbies",
    "Aime Leon Dore|Diner Clog",
    "Stoc and Weber|Black Lugged Loafers",
    "Bottega Veneta|Lugged Chelsea Boots",
    "Lucky Brand|Clean Break Straight Fit Jeans",
    "H and M|Relaxed Fit Tailored Trousers",
    "H and M|Relaxed-Fit Pants",
    "COS|Wide-Leg Cotton-Twill Pants",
    "Zara|Utility Pocket Jeans",
    "Carhartt WIP|Floyde Trousers",
    "Homme Plisse Issey Miyake|Monthly Color Trousers",
    "Buck Mason x Eddie Bauer|Quilted Down Pant",
    "Todd Snyder|Relaxed Fit 5-Pocket Linen Pant",
    "Polo Ralph Lauren|Cuffed Trousers",
    "Vince|Pull-On Shorts",
    "Kith|Chauncey Cargo Pant"
  ]);
  function getItemMetadata(brand, name) {
    return ITEM_METADATA[`${brand}|${name}`];
  }
  function isCurated(brand, name) {
    return CURATED_KEYS.has(`${brand}|${name}`);
  }

  // src/wardrobe/wardrobeRows.ts
  var WARDROBE_ROWS_RAW = `
Aime Leon Dore|ALD NY Yankees Retro Fit Hat|Jet Black|One Size|120|2026-04|Hats
Aime Leon Dore|Mesh V-Neck Tee|Kalamata|L|130|2026-04|Tops
Aime Leon Dore|Aime Cup Soccer Jersey|Agave|M|150|2026-04|Tops
Aime Leon Dore|Aime Baseball Jersey|Coconut Milk|M|175|2026-03|Tops
Aime Leon Dore|ALD Technics Nylon Logo Hat|Jet Black|One Size|75|2026-03|Hats
Aime Leon Dore|Jacquard Striped Tee|Beige Stripe|M|120|2026-03|Tops
Aime Leon Dore|Cotton Slub Cardigan|Coconut Milk|L|395|2026-03|Outerwear
Aime Leon Dore|ALD New Era Highlanders Hat|Navy Blazer|One Size|75|2026-02|Hats
Aime Leon Dore|Mesh Batting Practice Jersey|Navy Blazer|L|120|2026-02|Tops
Aime Leon Dore|ALD Diner Clog|Jet Black|10|50|2026-01|Shoes
Aime Leon Dore|Pinstripe Wool Suit Trouser|Navy|32|298|2025-12|Bottoms
Aime Leon Dore|Double-Breasted Pinstripe Wool Suit Jacket|Navy|44|750|2025-12|Tops
Aime Leon Dore|Mitchell and Ness Artisan Hockey Jersey|Black|M|350|2025-11|Tops
Aime Leon Dore|Triborough Dry Goods Hat|Kelp|One Size|70|2025-10|Hats
Aime Leon Dore|Fur Earflap Hat|Oatmeal|One Size|120|2025-10|Hats
Aime Leon Dore|Collegiate Mulberry Hat|Chocolate Truffle|One Size|70|2025-10|Hats
Aime Leon Dore|Nylon Sport Hat|Jet Black|One Size|65|2025-05|Hats
Aime Leon Dore|Aime Cycling Jersey|Pink|XL|175|2025-05|Tops
Aime Leon Dore|The Worlds Borough Hat|Navy Blazer|One Size|65|2025-03|Hats
Aime Leon Dore|Washed A Logo Hat|Indigo|One Size|65|2025-03|Hats
Aime Leon Dore|Tropical Wool Suit Trouser|Grey Green Tint|36|495|2025-02|Bottoms
Aime Leon Dore|Wool Heritage Hat|Green|One Size|120|2025-02|Hats
Aime Leon Dore|Double Pleated Pant|Bright White|36|285|2025-04|Bottoms
Aime Leon Dore|Lug Sole Derby|Pine Grove|10|395|2025-02|Shoes
Aime Leon Dore|Corduroy Buddy Hat|Khaki|One Size|70|2024-09|Hats
Aime Leon Dore|Tuxedo Trouser|Black|34|500|2024-09|Bottoms
Aime Leon Dore|Zip Cycling Shirt|Sky Captain|L|195|2024-08|Tops
Aime Leon Dore|Military Cargo Pant|Painterly Camo|34|295|2024-08|Bottoms
Aime Leon Dore|Cycling Logo Hat|Jet Black|One Size|65|2024-02|Hats
Aime Leon Dore|Leather Team Football Jersey|Navy Blazer|L|595|2024-02|Tops
Aime Leon Dore|Currency Cap|Pristine|One Size|65|2024-02|Hats
Aime Leon Dore|Mesh Moto Long-Sleeve Tee|Orange|L|95|2024-02|Tops
Aime Leon Dore|Team Leon Soccer Hat|Jet Black|One Size|80|2024-03|Hats
Aime Leon Dore|Raglan Sweater Tee|Heather Grey|L|295|2024-09|Tops
Aime Leon Dore|Blanket Overshirt|Multi|L|450|2024-09|Outerwear
Aime Leon Dore|Alpaca Fleece Pullover|Foxtrot|L|995|2023-11|Tops
Aime Leon Dore|New Era Tonal Wool Yankees Hat|Black|One Size|70|2023-11|Hats
Aime Leon Dore|Chain Stitch Suede Hat|Moro|One Size|95|2023-11|Hats
Aime Leon Dore|Leon Corduroy Hat|Merlot|One Size|60|2023-10|Hats
Aime Leon Dore|Fleece Beanie|Shadow Purple|One Size|60|2023-10|Hats
Aime Leon Dore|Fox Fur Hood|Jet Black|One Size|150|2023-11|Accessories
Aime Leon Dore|Jake Gloves|Loden|9|160|2023-11|Accessories
Aime Leon Dore|Packable Logo Tote|Navy|One Size|30|2024-02|Bags
Louis Vuitton x Tyler the Creator|Monogram Craggy Reversible Bucket Hat|Brown|M|1187|2026-04|Hats
Louis Vuitton|LV Shark Clogs|Brown||765|2026-04|Shoes
Buck Mason|Japanese Denim Ford Standard Jean|Dark Indigo|34|228|2025-10|Bottoms
Buck Mason|Field-Spec Cotton Heavy Tee White|White|M|62|2025-10|Tops
Buck Mason|Field-Spec Cotton Heavy Tee Black|Black|M|62|2025-10|Tops
Buck Mason|Seastack Wool Tweed Cable Crew|Ivory|L|248|2026-05|Tops
Buck Mason|Natural Vintage Thermal Henley|Natural|L|108|2026-05|Tops
Buck Mason|Italian Doeskin Station Jacket|Palo Santo|L|298|2026-05|Outerwear
Buck Mason x Eddie Bauer|Cascade Down Eddie Bauer Yukon CPO|Burnt Olive|L|225|2026-05|Outerwear
Buck Mason|Avalon Daybreak Crew|Heather Oat|L|168|2026-05|Tops
Cole Buxton|Cotton Chore Jacket|Blue|L|300|2026-03|Outerwear
Cole Buxton|The Wilson Sneaker|Triple Black|9|132|2025-11|Shoes
Cole Buxton|Cropped Insulated Puffer|Black|L|542|2023-11|Outerwear
Kith|Kith Pittsburgh Pirates Snapback|Black|One Size|60|2024-03|Hats
Kith|Kith New York Mets Snapback|Black|One Size|60|2024-03|Hats
Kith|Kith NYC Cotton Beanie|Cypress|One Size|60|2022-10|Hats
Kith|Kith Linwood Crewneck Sweater|Apex|L|220|2022-10|Tops
Kith|Kith Crystal Wash Turtleneck|Pimento|L|125|2022-10|Tops
Kith|Kith Patchwork Cord Ludlow Shirt|Pimento|L|195|2022-10|Tops
John Elliott|Riviera Cropped Tee|Washed Citrus|L|98|2024-08|Tops
John Elliott|Solid Hemi Oversized Shirt|Black|L|298|2024-08|Tops
Fear of God ESSENTIALS|Textured Nylon Trucker Jacket|Black|M|249|2024-09|Outerwear
Joshua Mohamed|JM Work Jacket|Olive|L|159|2026-04|Outerwear
Legacy|Black Denim Jacket|Black|L|120|2026-04|Outerwear
Lee|Light Grey Denim Jacket|Light Grey|L|80|2026-04|Outerwear
Kody Phillips|Lasso Shirt|All Black|L|174|2026-04|Tops
Kody Phillips|Kody Pants|Olive Green|34|288|2026-04|Bottoms
Florence Black|Renzo Pocket Overshirt|Black|L|276|2025-06|Tops
Florence Black|Raife Boxy Shirt|Black|L|248|2025-06|Tops
Florence Black|1954 Black Cap|Black|One Size|30|2025-06|Hats
Buck Mason|Heavy White Henley|White|M|130|2026-04|Tops
Generic|White Thermal|White|L|30|2026-04|Tops
Generic|Western Belt|Black|L|45|2026-04|Accessories
Generic|Belt Gold Buckle|Black|L|35|2026-04|Accessories
Generic|Belt Brown|Brown|L|30|2026-04|Accessories
Generic|Belt Brown 2|Brown|L|30|2026-04|Accessories
UNIQLO|Leather Mesh Belt|Black|MEN L|30|2026-05|Accessories
UNIQLO|Leather Mesh Belt|Dark Brown|MEN L|30|2026-05|Accessories
Joshua Mohamed|Merino Wool Split Sweater|Black|M|159|2026-04|Tops
Reiss|Cream Textured Knit Shirt|Cream|L|145|2026-04|Tops
Reiss|Houndstooth Knit Shirt|Grey White|L|145|2026-04|Tops
Reiss|Navy Striped Knit Shirt|Navy|L|145|2026-04|Tops
Goodfellow & Co|Crochet Stripe Knit Shirt|Cream / Black|M|0|2026-07|Tops
JW Anderson|Striped Polo Shirt|Sage / Cream|M|0|2026-07|Tops
Trythmclub|Mohair Sweater|Grey|L|120|2026-04|Tops
Abercrombie|Quarter Zip|Cream|L|65|2026-04|Tops
Abercrombie|Quarter Zip|Grey|M|65|2026-04|Tops
Saalt Studio|Football Jersey Shirt|Grey|L|85|2026-04|Tops
Perfect Eleven|Animal Print Soccer Shirt|Leopard / Black|L|0|2026-05|Tops
Porter James|Barrel Pants|Black|34|95|2026-04|Bottoms
Zara|Pleated Pants Grey|Grey|34|60|2026-04|Bottoms
Zara|Pleated Pants Black|Black|34|60|2026-04|Bottoms
Urban Outfitters|Rugby Shirt|Blue White|L|59|2026-04|Tops
Charles Tyrwhitt|CF White Button-Down Washed Oxford|White|XL|42|2025-06|Tops
Free People|Willow Suede Sneakers|Tan|11|118|2025-05|Shoes
Carhartt|Loose Fit Firm Duck Utility Work Pant|Black|W36 L32|60|2024-10|Bottoms
Banana Republic Factory|Leather Trouser Belt|Black|L|24|2025-04|Accessories
Elwood Clothing|Oversized Crop Core Tee|Vintage Slate|L|30|2023-06|Tops
Lemaire|Flat Piped Slippers in Leather|Black / Dark Chocolate|EU 43|795|2026-05|Shoes
Loewe|Faro Brown Derbies|Brown|43|667|2026-04|Shoes
Aime Leon Dore|Diner Clog|Green|10|95|2026-04|Shoes
Stoc and Weber|Black Lugged Loafers|Black||380|2026-01|Shoes
Bottega Veneta|Lugged Chelsea Boots|Black||1100|2026-01|Shoes
Lucky Brand|Clean Break Straight Fit Jeans|Light Denim|34|99|2026-04|Bottoms
H and M|Double-Breasted Wool Coat|Brown|L|269|2025-11|Outerwear
H and M|Relaxed-Fit Mohair-Blend Cardigan|Black|M|129|2025-12|Tops
H and M|Waxed Cotton Jacket|Dark Green|L|72|2025-10|Outerwear
H and M|Patterned Blouson Jacket|Dark Beige|L|60|2025-10|Outerwear
H and M|Relaxed Fit Tailored Trousers|Brown Checked|34|50|2025-11|Bottoms
H and M|Relaxed-Fit Pants|Black|M|45|2025-10|Bottoms
H and M|Regular-Fit Textured-Knit T-Shirt|White|L|13|2025-10|Tops
H and M|Regular Fit Oxford Shirt|White|L|25|2025-10|Tops
H and M|Regular-Fit Poplin Shirt|Light Blue Stripe|L|12|2025-07|Tops
COS|Slim Ribbed Cotton Tank Top|White|M|29|2025-11|Tops
COS|Slim Ribbed Cotton T-Shirt|White|L|45|2025-11|Tops
COS|Wide-Leg Cotton-Twill Pants|Beige|52|149|2025-09|Bottoms
COS|Boxy Fit Overshirt|Black|L|90|2026-02|Tops
COS|Relaxed Fit Knit T-Shirt|Cream|L|50|2026-02|Tops
Zara|Utility Pocket Jeans|Black|34|90|2025-10|Bottoms
Zara|Puffer Cape|Khaki|M|60|2025-10|Outerwear
Zara|Boxy Fit Overshirt|Black|L|90|2026-02|Tops
Zara|Relaxed Fit Knit T-Shirt|Cream|L|50|2026-02|Tops
Ance Studios|Mohair Scarf|Grey|One Size|80|2026-04|Accessories
Ance Studios|Mohair Scarf|Black|One Size|80|2026-04|Accessories
Zara|Croissant Leather Keychain|Brown|One Size|20|2026-04|Accessories
Entire Studios|Eternal Zip|Silver|M|64|2026-04|Outerwear
Entire Studios|Heavy Hood|Soot|M|58|2026-04|Tops
Entire Studios|Black Heavy Hoodie|Black|L|131|2026-04|Tops
A.A. Spectrum|Gray Cyberen II Down Jacket|Gray|M|306|2023-11|Outerwear
Carhartt WIP|Floyde Trousers|Black|36|130|2024-09|Bottoms
Homme Plisse Issey Miyake|Monthly Color Trousers|Black|36|251|2024-09|Bottoms
Buck Mason x Eddie Bauer|Quilted Down Pant|Olive|36|195|2026-04|Bottoms
Buck Mason x Eddie Bauer|Quilted Suspenders|Olive|One Size|60|2026-04|Accessories
Louis Vuitton|LV Crush Damier Argyle Beanie|Beige|One Size|1245|2026-04|Hats
Louis Vuitton|LV Crush Damoflage Beanie|Black|One Size|575|2026-04|Hats
Louis Vuitton|Keepall Bandouliere|Monogram / Mustard|One Size|0|2026-05|Bags
Louis Vuitton x Tyler the Creator|Monogram Craggy Backpack|Green Monogram|One Size|0|2026-05|Bags
Zara|Multicharm Keychain|Sandy Brown|One Size|30|2026-01|Accessories
Todd Snyder|Relaxed Fit 5-Pocket Linen Pant|Espresso Bean|34/32|198|2026-04|Bottoms
Polo Ralph Lauren|Cuffed Trousers|Brown|34|120|2026-04|Bottoms
Vince|Pull-On Shorts|Tan|34|95|2026-04|Bottoms
Kith|Chauncey Cargo Pant|Kindling|L|220|2023-10|Bottoms
Kith|Pinehurst Shaggy Sherpa Full Zip|Volume|L|245|2023-10|Outerwear
Kith|Merrick Sherpa Hoodie|Black|L|225|2023-10|Tops
Zara|Green Mohair Shirt Jacket|Green|L|60|2026-04|Outerwear
Kith|Butterfly Crew Sock|Cream|One Size|20|2026-04|Socks
Aime Leon Dore|ALD Signet Crew Sock|Cream|One Size|20|2026-04|Socks
Aime Leon Dore|ALD Signet Crew Sock Grey Toe|Cream / Grey Toe & Heel|One Size|20|2026-04|Socks
Poedagar|Green Dial Nautilus-Style Watch|Green Dial / Steel|Steel Bracelet|45|2026-04|Watches
Chanzai|Arabic Numeral Dial Watch|Black Dial / Steel|Steel Bracelet|60|2026-04|Watches
Poedagar|White Dial Nautilus-Style Watch|White Dial / Steel|Steel Bracelet|45|2026-04|Watches
Timex x Noah|Moon Phase Square Watch|White Dial / Brown Croc Strap|Brown Croc Leather|120|2026-04|Watches
Invicta|Pro Diver Watch|Black Dial / Steel|Steel Bracelet|85|2026-04|Watches
Pascal|Oval Dress Watch|Cream Dial / Gold Tone|Black + Green Croc Leather|40|2026-04|Watches
`.trim();
  function parseWardrobeRows(raw = WARDROBE_ROWS_RAW) {
    return raw.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
      var _a, _b, _c, _d, _e, _f;
      const [brand, name, color, size, price, date, category] = line.split("|");
      return {
        brand: (_a = brand == null ? void 0 : brand.trim()) != null ? _a : "",
        name: (_b = name == null ? void 0 : name.trim()) != null ? _b : "",
        color: (_c = color == null ? void 0 : color.trim()) != null ? _c : "",
        size: (_d = size == null ? void 0 : size.trim()) != null ? _d : "",
        price: Number(price) || 0,
        date: (_e = date == null ? void 0 : date.trim()) != null ? _e : "",
        category: (_f = category == null ? void 0 : category.trim()) != null ? _f : ""
      };
    });
  }
  var WARDROBE_ROWS = parseWardrobeRows();

  // src/wardrobe/normalizeWardrobeItem.ts
  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function itemKey(brand, name) {
    return `${brand}|${name}`;
  }
  function colorFamilyFor(color = "") {
    const c = color.toLowerCase();
    const families = [];
    if (/black|jet|soot|charcoal|shadow/.test(c)) families.push("black");
    if (/white|cream|ivory|coconut|oatmeal|grey white|pristine|bright white|natural|pimento|apex/.test(c)) families.push("light");
    if (/grey|gray|silver|heather|slate|volume/.test(c)) families.push("grey");
    if (/brown|tan|khaki|beige|espresso|camel|tortoise|chocolate|moro|palo santo|kindling|burnt olive|sandy/.test(c)) families.push("earth");
    if (/olive|green|loden|pine|cypress|foxtrot|agave|kelp|grove|mulberry/.test(c)) families.push("green");
    if (/navy|indigo|blue|sky captain|blazer|denim/.test(c)) families.push("blue");
    if (/camo|painterly|fatigue/.test(c)) families.push("green", "earth");
    if (/orange|pink|pimento|red|yellow|leopard|merlot|citrus|purple|multi/.test(c)) families.push("accent");
    return families.length ? families : ["neutral"];
  }
  function deriveFallbackMetadata(row) {
    const t = `${row.brand} ${row.name} ${row.color}`.toLowerCase();
    const cat = row.category.toLowerCase();
    let pattern = ["solid"];
    if (/houndstooth/.test(t)) pattern = ["houndstooth"];
    else if (/camo|camouflage|painterly|fatigue/.test(t)) pattern = ["camo"];
    else if (/pinstripe|stripe|striped/.test(t)) pattern = ["stripe"];
    else if (/plaid/.test(t)) pattern = ["plaid"];
    else if (/check|argyle/.test(t)) pattern = ["check"];
    else if (/leopard|animal/.test(t)) pattern = ["animal"];
    else if (/jacquard|patchwork|monogram|multi/.test(t)) pattern = ["mixed"];
    else if (/tweed|mohair|cable|textured|corduroy|slub|ribbed|waffle|thermal/.test(t)) pattern = ["textured"];
    else if (/logo|jersey|soccer|cycling|football|baseball|hockey|moto/.test(t)) pattern = ["graphic"];
    let formality = ["casual", "smart_casual"];
    let lanes = ["elevated_casual", "street_relaxed"];
    let weight = "medium";
    let seasons = ["all"];
    if (cat.includes("bottoms")) {
      if (/cargo|fatigue|utility|duck/.test(t)) {
        formality = ["casual", "rugged"];
        lanes = ["rugged_workwear", "street_relaxed"];
        seasons = ["spring", "fall", "winter"];
      } else if (/trouser|pleated|tuxedo|suit/.test(t)) {
        formality = ["smart_casual", "tailored"];
        lanes = ["tailored_clean", "loafer_trouser_fit", "elevated_casual", "ALD_sport_prep"];
        seasons = ["spring", "fall"];
      } else if (/linen/.test(t)) {
        formality = ["smart_casual", "casual"];
        lanes = ["summer_resort", "elevated_casual", "tailored_clean"];
        weight = "light";
        seasons = ["spring", "summer"];
      } else if (/denim|jean/.test(t)) {
        lanes = ["elevated_casual", "heritage_prep", "street_relaxed"];
        seasons = ["spring", "fall", "winter"];
      }
    } else if (cat.includes("shoes")) {
      if (/loafer|derby|slipper/.test(t)) {
        formality = ["smart_casual", "tailored", "dressy"];
        lanes = ["tailored_clean", "loafer_trouser_fit", "minimal_luxury", "ALD_sport_prep"];
      } else if (/boot|chelsea/.test(t)) {
        formality = ["smart_casual", "tailored"];
        lanes = ["tailored_clean", "rugged_workwear", "minimal_luxury"];
        seasons = ["fall", "winter"];
      } else {
        lanes = ["elevated_casual", "street_relaxed", "ALD_sport_prep"];
        weight = "light";
        seasons = ["spring", "summer", "fall"];
      }
    } else if (cat.includes("hats")) {
      formality = ["casual", "sport"];
      lanes = ["ALD_sport_prep", "heritage_prep", "street_relaxed"];
      weight = "light";
      seasons = ["spring", "summer", "fall"];
    }
    return { formality, pattern, weight, seasons, lanes, materialTags: ["unclassified"], notes: "fallback metadata \u2014 not yet curated" };
  }
  function normalizeWardrobeItem(row) {
    var _a;
    const key = itemKey(row.brand, row.name);
    const curated = ITEM_METADATA[key];
    const metadata = curated != null ? curated : deriveFallbackMetadata(row);
    const colorFamily = (_a = metadata.colorFamily) != null ? _a : colorFamilyFor(row.color);
    return {
      ...row,
      id: slugify(`wardrobe-${row.brand}-${row.name}-${row.color}`),
      key,
      metadata: { ...metadata, colorFamily },
      // True only for hand-authored entries; seeded entries still have complete
      // valid metadata but are flagged uncurated so the audit can report coverage honestly.
      hasCuratedMetadata: CURATED_KEYS.has(key)
    };
  }
  function loadWardrobeItems(rows = WARDROBE_ROWS) {
    return rows.map(normalizeWardrobeItem);
  }

  // src/style/classifiers.ts
  function nameText(item) {
    return `${item.brand} ${item.name} ${item.color} ${item.category}`.toLowerCase();
  }
  function isBottom(item) {
    return /bottoms/i.test(item.category);
  }
  function isShoeCategory(item) {
    return /shoes/i.test(item.category);
  }
  function hasMetadata(item) {
    var _a, _b, _c;
    return Boolean(((_b = (_a = item == null ? void 0 : item.metadata) == null ? void 0 : _a.lanes) == null ? void 0 : _b.length) && ((_c = item.metadata.formality) == null ? void 0 : _c.length));
  }
  function isMilitaryCargo(item) {
    if (!item) return false;
    if (hasMetadata(item) && isBottom(item)) {
      const m = item.metadata;
      const ruggedLane = m.lanes.includes("rugged_workwear");
      const camo = m.pattern.includes("camo");
      const utility = (m.materialTags || []).some((t2) => /utility|cargo/.test(t2));
      const cargoSilhouette = (m.silhouette || []).some((s) => /cargo|utility/.test(s));
      if (ruggedLane && (camo || utility || cargoSilhouette) || camo) return true;
      if (!ruggedLane && !camo && !utility && !cargoSilhouette) return false;
    }
    const t = nameText(item);
    return /military|fatigue|camo|camouflage|army|cargo|ripstop|olive drab/.test(t) && /pant|cargo|trouser|bottom|fatigue/.test(t);
  }
  function isHoundstooth(item) {
    if (!item) return false;
    if (hasMetadata(item)) return item.metadata.pattern.includes("houndstooth");
    return /houndstooth/.test(nameText(item));
  }
  function isPatterned(item) {
    if (!item) return false;
    if (hasMetadata(item)) {
      return item.metadata.pattern.some((p) => p !== "solid");
    }
    return /houndstooth|plaid|stripe|striped|check|checker|pattern|printed|floral|graphic|camo|camouflage|jacquard|paisley|leopard|animal|painterly|pinstripe|patchwork/.test(nameText(item));
  }
  function isCampOrResortShirt(item) {
    if (!item) return false;
    if (hasMetadata(item) && /tops/i.test(item.category)) {
      const m = item.metadata;
      const campTags = (m.materialTags || []).some((t2) => /camp_collar|breathable/.test(t2));
      const resortLane = m.lanes.includes("summer_resort");
      const lightDressy = m.weight === "light" && m.formality.includes("smart_casual");
      const knit = (m.materialTags || []).some((t2) => /knit/.test(t2));
      if ((campTags || resortLane) && (lightDressy || knit || campTags)) return true;
    }
    const t = nameText(item);
    return /camp|resort|cabana|aloha|vacation|houndstooth|knit shirt|textured knit shirt/.test(t) && /shirt|top|button|collar/.test(t);
  }
  function isDressierTop(item) {
    if (!item) return false;
    if (hasMetadata(item) && /tops/i.test(item.category)) {
      return item.metadata.formality.some((f) => f === "smart_casual" || f === "tailored" || f === "dressy");
    }
    const t = nameText(item);
    return /camp collar|resort|silk|button|collar|dress|houndstooth|knit polo|oxford|poplin/.test(t);
  }
  function isSimpleTop(item) {
    if (!item) return false;
    if (hasMetadata(item)) {
      const m = item.metadata;
      const solid = m.pattern.length === 1 && m.pattern[0] === "solid";
      const lowFormality = m.formality.includes("casual") && !m.formality.includes("dressy");
      return solid && lowFormality && !isCampOrResortShirt(item);
    }
    const t = nameText(item);
    return /tee|tank|henley|thermal|plain|solid|hoodie|sweatshirt|denim shirt|work shirt/.test(t) && !isPatterned(item);
  }
  function isCleanTailoredBottom(item) {
    if (!item) return false;
    if (hasMetadata(item) && isBottom(item)) {
      const m = item.metadata;
      const cleanLane = m.lanes.some((l) => l === "tailored_clean" || l === "loafer_trouser_fit");
      const notRugged = !m.lanes.includes("rugged_workwear") && !m.formality.includes("rugged");
      return cleanLane && notRugged;
    }
    return /tropical wool|pleated|double pleated|wool trouser|linen pant|linen trouser|tailored|slack|suit trouser|tuxedo trouser|white pant|denim|barrel pant/.test(nameText(item));
  }
  function isStrongShoe(item) {
    if (!item) return false;
    if (hasMetadata(item) && isShoeCategory(item)) {
      const m = item.metadata;
      const leather = (m.materialTags || []).some((t) => /leather/.test(t));
      const anchorLane = m.lanes.some((l) => l === "loafer_trouser_fit" || l === "minimal_luxury" || l === "tailored_clean");
      return leather || anchorLane;
    }
    return /loafer|derby|clog|boot|chelsea|leather|slipper/.test(nameText(item));
  }
  function isWarmWeatherMaterial(item) {
    if (!item) return false;
    if (hasMetadata(item)) {
      const m = item.metadata;
      const lightWeight = m.weight === "light";
      const breathable = (m.materialTags || []).some((t) => /breathable|linen|tropical_wool|cotton|mesh|rayon|viscose/.test(t));
      const summerSeason = m.seasons.includes("summer") || m.seasons.includes("spring");
      return lightWeight && summerSeason || breathable;
    }
    return /linen|tropical wool|cotton|mesh|breathable|rayon|viscose|poplin/.test(nameText(item));
  }
  function isHeavyRuggedBottom(item) {
    if (!item) return false;
    if (hasMetadata(item) && isBottom(item)) {
      const m = item.metadata;
      const rugged = m.lanes.includes("rugged_workwear") || m.formality.includes("rugged");
      const heavyish = m.weight === "heavy" || m.weight === "medium";
      return rugged && heavyish;
    }
    return /heavy|thick|ripstop|fatigue|military cargo|camo|duck|utility/.test(nameText(item));
  }

  // src/style/devinStyleProfile.ts
  var DEVIN_STYLE_PROFILE = {
    summary: "Devin leans Aim\xE9 Leon Dore sport-prep: tailored-relaxed fits, premium casual, textured layering, clean trouser + loafer combinations, smart hats as finishers, and a green/brown/cream/black/grey/navy palette with muted statement color. Outfits should feel intentional, premium, and wearable \u2014 not generic, not forced rugged.",
    preferredLanes: [
      "ALD_sport_prep",
      "tailored_clean",
      "loafer_trouser_fit",
      "elevated_casual",
      "heritage_prep"
    ],
    preferredColors: ["green", "brown", "cream", "black", "grey", "navy"],
    preferredShoes: ["loafer", "derby", "clog", "clean sneaker"],
    likes: [
      "Aim\xE9 Leon Dore-inspired sport prep",
      "tailored relaxed fits",
      "cropped and relaxed silhouettes",
      "premium casual",
      "textured layering",
      "loafers, derbies, clogs, and clean sneakers",
      "smart use of hats as outfit finishers",
      "clean trouser + loafer combinations",
      "luxury casual with cultural sharpness",
      "outfits that look intentional, premium, and wearable"
    ],
    dislikes: [
      "the same pants selected repeatedly",
      "the same shoes selected repeatedly",
      "the same hat selected repeatedly",
      "every outfit turned into military/fatigue/workwear",
      "random loud combinations just because pieces technically match",
      "outfits that ignore the anchor piece",
      "basic generic styling",
      "AI that judges correctly but builds in a totally different direction",
      "houndstooth/camp/resort shirts forced with rugged cargos",
      "fixes that only add regex patches instead of true item intelligence"
    ]
  };

  // src/style/coherenceGate.ts
  function clamp10(n) {
    return Math.max(0, Math.min(10, Math.round(n)));
  }
  function topItemOf(outfit) {
    return outfit.midLayer || outfit.baseLayer || outfit.outerwear;
  }
  function colorCompat(a, b) {
    if (!a || !b) return 6;
    const fa = a.metadata.colorFamily || ["neutral"];
    const fb = b.metadata.colorFamily || ["neutral"];
    let best = 5;
    const good = /* @__PURE__ */ new Set([
      "black-light",
      "black-grey",
      "black-earth",
      "black-green",
      "black-blue",
      "earth-light",
      "earth-green",
      "blue-light",
      "green-light",
      "grey-light",
      "earth-grey",
      "blue-grey",
      "earth-blue",
      "green-grey",
      "black-neutral",
      "grey-neutral",
      "earth-neutral",
      "green-neutral",
      "blue-neutral",
      "light-neutral"
    ]);
    for (const x of fa) {
      for (const y of fb) {
        if (x === y) best = Math.max(best, x === "accent" ? 7 : 9);
        else {
          const pair = [x, y].sort().join("-");
          if (good.has(pair)) best = Math.max(best, 8);
          else if (x === "accent" || y === "accent") best = Math.max(best, 5);
          else best = Math.max(best, 6);
        }
      }
    }
    return best;
  }
  function outfitLanes(outfit) {
    const lanes = /* @__PURE__ */ new Set();
    for (const v of Object.values(outfit)) {
      if (v && typeof v === "object" && "metadata" in v) {
        for (const l of v.metadata.lanes) lanes.add(l);
      }
    }
    return [...lanes];
  }
  function militaryCargoJustified(outfit, context) {
    const bottom = outfit.bottoms;
    if (!bottom || !isMilitaryCargo(bottom)) return "n/a";
    if (context.anchorSlot === "bottoms") {
      return "Cargo is the locked anchor \u2014 the build intentionally styles around it.";
    }
    const top = topItemOf(outfit);
    const simple = isSimpleTop(top) || !top;
    const ruggedLane = outfit.styleLane === "rugged_workwear" || outfit.styleLane === "street_relaxed" || outfitLanes(outfit).includes("rugged_workwear");
    const clearColor = colorCompat(bottom, top) >= 7;
    const strongShoe = isStrongShoe(outfit.shoes);
    if (simple && ruggedLane && clearColor && strongShoe) {
      return "Cargo is intentional: simple top, controlled palette, rugged lane, and a strong shoe anchor.";
    }
    return "";
  }
  function evaluateCoherence(outfit, context = {}) {
    var _a, _b, _c;
    const profile = context.styleProfile || DEVIN_STYLE_PROFILE;
    const temp = (_b = (_a = context.weather) == null ? void 0 : _a.temp) != null ? _b : 70;
    const history = context.history || [];
    const top = topItemOf(outfit);
    const bottom = outfit.bottoms;
    const bottomId = bottom ? `${bottom.brand} ${bottom.name}` : "";
    const shoeId = outfit.shoes ? `${outfit.shoes.brand} ${outfit.shoes.name}` : "";
    const hatId = outfit.hat ? `${outfit.hat.brand} ${outfit.hat.name}` : "";
    const anchor = context.anchorSlot;
    const repeatedBottoms = anchor === "bottoms" ? 0 : history.filter((h) => h.bottoms === bottomId).length;
    const repeatedShoes = anchor === "shoes" ? 0 : history.filter((h) => h.shoes === shoeId).length;
    const repeatedHats = anchor === "hat" ? 0 : history.filter((h) => h.hat === hatId).length;
    const cargoDetected = isMilitaryCargo(bottom);
    const cargoJustification = militaryCargoJustified(outfit, context);
    const cargoJustified = cargoDetected ? Boolean(cargoJustification) && cargoJustification !== "n/a" : false;
    let colorHarmony = 7;
    if (top && bottom) colorHarmony = Math.min(9, colorCompat(top, bottom) + 1);
    const accessories = [outfit.shoes, outfit.hat, outfit.belt, outfit.detail].filter(
      (x) => Boolean(x)
    );
    const echo = accessories.filter((x) => bottom && colorCompat(x, bottom) >= 8).length;
    colorHarmony = clamp10(colorHarmony + Math.min(2, echo) * 0.5);
    let patternCompatibility = 8;
    if (isPatterned(top) && isPatterned(bottom)) patternCompatibility -= 4;
    if (isCampOrResortShirt(top) && cargoDetected) patternCompatibility -= 4;
    if (isPatterned(top) && cargoDetected && colorCompat(top, bottom) < 8) patternCompatibility -= 3;
    if (isPatterned(top) && isCleanTailoredBottom(bottom)) patternCompatibility += 1;
    let formalityAlignment = 7;
    if (isCampOrResortShirt(top) && cargoDetected) formalityAlignment -= 3;
    if (isDressierTop(top) && cargoDetected && !cargoJustified) formalityAlignment -= 2;
    if (isCampOrResortShirt(top) && isCleanTailoredBottom(bottom)) formalityAlignment += 2;
    if (isDressierTop(top) && isCleanTailoredBottom(bottom)) formalityAlignment += 1;
    if (isStrongShoe(outfit.shoes)) formalityAlignment += 1;
    let silhouetteBalance = 7;
    if (isCleanTailoredBottom(bottom) && isStrongShoe(outfit.shoes)) silhouetteBalance += 2;
    const topSil = ((top == null ? void 0 : top.metadata.silhouette) || []).join(" ");
    const botSil = ((bottom == null ? void 0 : bottom.metadata.silhouette) || []).join(" ");
    if (/clean|fitted|relaxed/.test(topSil) && /relaxed_tailored|wide|pleated|barrel/.test(botSil)) silhouetteBalance += 1;
    if (cargoDetected && top && /structured|tailored/.test(topSil)) silhouetteBalance -= 3;
    let materialWeatherLogic = 7;
    if (temp >= 68 && temp <= 80) {
      if (isCleanTailoredBottom(bottom) && isWarmWeatherMaterial(bottom)) materialWeatherLogic += 2;
      else if (isCleanTailoredBottom(bottom)) materialWeatherLogic += 1;
      if (cargoDetected && !cargoJustified) materialWeatherLogic -= 3;
      if (isWarmWeatherMaterial(top) && isCleanTailoredBottom(bottom)) materialWeatherLogic += 1;
    }
    if (temp >= 82 && isHeavyRuggedBottom(bottom) && !cargoJustified) materialWeatherLogic -= 2;
    if (temp < 50 && !outfit.outerwear) materialWeatherLogic -= 2;
    let devinStyleAlignment = 6;
    const lanes = outfitLanes(outfit);
    const preferredHits = lanes.filter((l) => profile.preferredLanes.includes(l)).length;
    devinStyleAlignment += Math.min(2, preferredHits);
    if (outfit.hat) devinStyleAlignment += 1;
    if (isStrongShoe(outfit.shoes)) devinStyleAlignment += 1;
    if (isCleanTailoredBottom(bottom)) devinStyleAlignment += 1;
    if (cargoDetected && !cargoJustified) devinStyleAlignment -= 3;
    let freshness = 10;
    freshness -= repeatedBottoms * 4;
    freshness -= repeatedShoes * 3;
    freshness -= repeatedHats * 2;
    const dimensions = {
      colorHarmony: clamp10(colorHarmony),
      patternCompatibility: clamp10(patternCompatibility),
      formalityAlignment: clamp10(formalityAlignment),
      silhouetteBalance: clamp10(silhouetteBalance),
      materialWeatherLogic: clamp10(materialWeatherLogic),
      devinStyleAlignment: clamp10(devinStyleAlignment),
      freshness: clamp10(freshness),
      overallTaste: 0
    };
    const weighted = dimensions.colorHarmony * 1.2 + dimensions.patternCompatibility * 1.5 + dimensions.formalityAlignment * 1.2 + dimensions.silhouetteBalance * 1.1 + dimensions.materialWeatherLogic * 1.2 + dimensions.devinStyleAlignment * 1.3 + dimensions.freshness;
    dimensions.overallTaste = clamp10(weighted / 8.5);
    const reasonCodes = [];
    const notes = [];
    const floor = (dim, code) => {
      if (dimensions[dim] < 7) reasonCodes.push(`${code}_LOW_${dimensions[dim]}`);
    };
    floor("colorHarmony", "COLOR");
    floor("patternCompatibility", "PATTERN");
    floor("formalityAlignment", "FORMALITY");
    floor("silhouetteBalance", "SILHOUETTE");
    floor("materialWeatherLogic", "WEATHER");
    floor("devinStyleAlignment", "DEVIN");
    if (cargoDetected && !cargoJustified) {
      reasonCodes.push("CARGO_UNJUSTIFIED");
      notes.push(`${bottom == null ? void 0 : bottom.name} reads as the default pant. Cargos need a simple top, rugged lane, controlled palette, and a strong shoe \u2014 or swap to tropical wool, pleated, or clean denim.`);
    }
    if (isCampOrResortShirt(top) && cargoDetected) {
      reasonCodes.push("CAMP_SHIRT_PLUS_CARGO");
      notes.push(`${top == null ? void 0 : top.name} (breathable camp/resort shirt) clashes with ${bottom == null ? void 0 : bottom.name} (military cargo) on pattern, formality, and material. Pair the shirt with tropical wool, pleated pants, or clean denim.`);
    }
    if (isPatterned(top) && cargoDetected && colorCompat(top, bottom) < 8 && !isCampOrResortShirt(top)) {
      reasonCodes.push("PATTERN_CARGO_NO_BRIDGE");
      notes.push(`Patterned ${top == null ? void 0 : top.name} plus rugged cargo has no clean color bridge.`);
    }
    if (temp >= 68 && temp <= 78 && isWarmWeatherMaterial(top) && isHeavyRuggedBottom(bottom) && !cargoJustified) {
      reasonCodes.push("WARM_BREATHABLE_PLUS_HEAVY");
      notes.push(`${temp}\xB0F with a breathable top wants a lighter tailored bottom, not heavy rugged pants.`);
    }
    if (isCleanTailoredBottom(bottom) && outfit.shoes && !isStrongShoe(outfit.shoes) && outfit.shoes.metadata.lanes.includes("rugged_workwear") && !lanes.includes("rugged_workwear")) {
      reasonCodes.push("SHOE_FORMALITY_MISMATCH");
      notes.push(`Tailored trousers want a sharper shoe than ${outfit.shoes.name} unless the lane is intentionally rugged.`);
    }
    if (repeatedBottoms > 0) reasonCodes.push(`REPEAT_BOTTOMS_${repeatedBottoms}`);
    if (repeatedShoes > 0) reasonCodes.push(`REPEAT_SHOES_${repeatedShoes}`);
    if (repeatedHats >= 3) reasonCodes.push("REPEAT_HAT");
    if (anchor && !outfit[anchor]) {
      reasonCodes.push("ANCHOR_IGNORED");
      notes.push(`The ${anchor} anchor was dropped from the build.`);
    }
    let score = dimensions.overallTaste * 10;
    if (context.rejectedPenalty && context.rejectedPenalty > 0) {
      score -= context.rejectedPenalty;
      if (context.rejectedPenalty >= 20) {
        reasonCodes.push("REJECTED_PAIRING_CONTEXT");
        notes.push("Devin previously rejected a near-identical pairing in this context.");
      }
      (context.rejectedReasonCodes || []).forEach((c) => reasonCodes.push(`PRIOR_${c}`));
    }
    if (cargoJustified && cargoJustification !== "n/a") notes.push(cargoJustification);
    if (!reasonCodes.length) {
      notes.push(`Coherent ${outfit.styleLane || "elevated"} read: ${(top == null ? void 0 : top.name) || "top"} + ${(bottom == null ? void 0 : bottom.name) || "pants"} share a believable color/formality/material story for ${temp}\xB0F, anchored by ${((_c = outfit.shoes) == null ? void 0 : _c.name) || "the shoe"}.`);
    }
    const passed = reasonCodes.length === 0;
    return {
      passed,
      score: Math.max(0, Math.round(score)),
      reasonCodes,
      notes,
      dimensions
    };
  }

  // src/style/hermesTasteScore.ts
  function worn(outfit) {
    return Object.values(outfit).filter(
      (v) => Boolean(v && typeof v === "object" && "metadata" in v)
    );
  }
  function hermesTasteScore(outfit, context = {}) {
    var _a, _b, _c;
    const items = worn(outfit);
    if (!items.length) return 0;
    const temp = (_b = (_a = context.weather) == null ? void 0 : _a.temp) != null ? _b : 70;
    const top = topItemOf(outfit);
    const bottom = outfit.bottoms;
    let score = 0;
    if (outfit.hat && bottom && (isCleanTailoredBottom(bottom) || bottom.metadata.formality.includes("tailored"))) score += 2;
    if (isStrongShoe(outfit.shoes)) score += 2;
    if (bottom && (isCleanTailoredBottom(bottom) || bottom.metadata.formality.includes("tailored"))) score += 2;
    const lanes = new Set(items.flatMap((i) => i.metadata.lanes));
    const coreHits = DEVIN_STYLE_PROFILE.preferredLanes.filter((l) => lanes.has(l)).length;
    score += Math.min(3, coreHits);
    const materials = new Set(items.flatMap((i) => i.metadata.materialTags || []));
    if (materials.size >= 4) score += 2;
    if (outfit.fragrance) score += 1;
    if (temp >= 68 && temp <= 78 && bottom && isCleanTailoredBottom(bottom) && isWarmWeatherMaterial(bottom)) score += 2;
    if (temp >= 68 && temp <= 78 && isCampOrResortShirt(top) && bottom && isCleanTailoredBottom(bottom)) score += 2;
    if (temp >= 78 && (outfit.midLayer || outfit.outerwear) && (((_c = context.weather) == null ? void 0 : _c.condition) || "dry") === "dry") score -= 2;
    if (!isStrongShoe(outfit.shoes)) score -= 2;
    if (bottom && isMilitaryCargo(bottom)) {
      const justified = militaryCargoJustified(outfit, context);
      if (!justified || justified === "n/a") score -= 2;
    }
    return Math.max(-6, Math.min(14, score));
  }

  // src/style/devinTasteScore.ts
  function clamp102(n) {
    return Math.max(0, Math.min(10, Math.round(n)));
  }
  function devinTasteScore(outfit, context = {}) {
    var _a, _b;
    const items = Object.values(outfit).filter(
      (v) => Boolean(v && typeof v === "object" && "metadata" in v)
    );
    if (!items.length) return 5;
    const temp = (_b = (_a = context.weather) == null ? void 0 : _a.temp) != null ? _b : 70;
    const bottom = outfit.bottoms;
    let s = 5;
    const lanes = new Set(items.flatMap((i) => i.metadata.lanes));
    if (DEVIN_STYLE_PROFILE.preferredLanes.some((l) => lanes.has(l))) s += 1;
    if (bottom && isCleanTailoredBottom(bottom) && isStrongShoe(outfit.shoes)) s += 1;
    if (outfit.hat) s += 1;
    if (isStrongShoe(outfit.shoes)) s += 1;
    const families = items.flatMap((i) => i.metadata.colorFamily || []);
    const accentCount = families.filter((f) => f === "accent").length;
    const mutedCount = families.filter((f) => ["black", "grey", "earth", "green", "blue", "light", "neutral"].includes(f)).length;
    if (accentCount >= 1 && accentCount <= 2 && mutedCount >= 3) s += 1;
    if (temp >= 68 && temp <= 78 && bottom && isCleanTailoredBottom(bottom)) s += 1;
    if (context.anchorSlot && outfit[context.anchorSlot]) s += 1;
    if (hermesTasteScore(outfit, context) >= 8) s += 1;
    if (bottom && isMilitaryCargo(bottom)) {
      const justified = militaryCargoJustified(outfit, context);
      if (!justified || justified === "n/a") s -= 2;
    }
    return clamp102(s);
  }

  // src/style/fireFitScore.ts
  function fireFitScore(outfit, context = {}) {
    var _a, _b, _c;
    const coherence = evaluateCoherence(outfit, context);
    const d = coherence.dimensions;
    const temp = (_b = (_a = context.weather) == null ? void 0 : _a.temp) != null ? _b : 70;
    const top = topItemOf(outfit);
    const bottom = outfit.bottoms;
    const metrics = {
      "Color harmony / echo": d.colorHarmony,
      "Pattern compatibility": d.patternCompatibility,
      "Formality alignment": d.formalityAlignment,
      "Silhouette balance": d.silhouetteBalance,
      "Material / weather logic": d.materialWeatherLogic,
      "Devin style match": d.devinStyleAlignment,
      "Freshness / rotation": d.freshness,
      "Overall taste": d.overallTaste
    };
    let score = (d.colorHarmony * 12 + d.patternCompatibility * 15 + d.formalityAlignment * 12 + d.silhouetteBalance * 11 + d.materialWeatherLogic * 12 + d.devinStyleAlignment * 13 + d.freshness * 10 + d.overallTaste * 15) / 10;
    if (temp >= 68 && temp <= 78 && bottom && isCleanTailoredBottom(bottom) && isWarmWeatherMaterial(bottom)) score += 3;
    if (bottom && isMilitaryCargo(bottom)) {
      const justified = militaryCargoJustified(outfit, context);
      if (!justified || justified === "n/a") score -= 6;
    }
    score += Math.round(hermesTasteScore(outfit, context) * 0.8);
    if (!isStrongShoe(outfit.shoes)) score -= 4;
    if (temp >= 80 && (outfit.midLayer || outfit.outerwear) && (((_c = context.weather) == null ? void 0 : _c.condition) || "dry") === "dry") score -= 8;
    if (temp < 45 && !outfit.outerwear) score -= 8;
    if (d.materialWeatherLogic < 6) score = Math.min(score, 92);
    if (d.colorHarmony < 6) score -= 4;
    return { score: Math.max(1, Math.min(100, Math.round(score))), metrics };
  }

  // src/style/fitIntent.ts
  function detectFitIntent(outfit, anchorSlot) {
    const weights = /* @__PURE__ */ new Map();
    const add = (lane, w) => weights.set(lane, (weights.get(lane) || 0) + w);
    for (const [slot, value] of Object.entries(outfit)) {
      if (!value || typeof value !== "object" || !("metadata" in value)) continue;
      const item = value;
      const slotWeight = slot === "bottoms" ? 3 : slot === "shoes" ? 2 : slot === anchorSlot ? 4 : 1;
      const anchorBoost = slot === anchorSlot ? 3 : 0;
      for (const lane of item.metadata.lanes) add(lane, slotWeight + anchorBoost);
    }
    return [...weights.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([lane]) => lane);
  }
  function primaryLane(outfit, anchorSlot) {
    return detectFitIntent(outfit, anchorSlot)[0];
  }

  // src/style/repetitionGuard.ts
  var REPETITION_BASE = {
    bottoms: 18,
    shoes: 14,
    hat: 12,
    outerwear: 7
  };
  var EXCLUSION_WINDOW = 3;
  function itemId(item) {
    return item ? `${item.brand} ${item.name}` : "";
  }
  function recentUseIndex(history, slot, id) {
    for (let i = 0; i < history.length; i++) {
      if (history[i][slot] === id) return i;
    }
    return -1;
  }
  function repetitionPenalty(outfit, history, anchorSlot) {
    const logs = [];
    const excludedThisBuild = [];
    let penalty = 0;
    ["bottoms", "shoes", "hat"].forEach((slot) => {
      var _a;
      if (anchorSlot === slot) return;
      const id = itemId(outfit[slot]);
      if (!id) return;
      const idx = recentUseIndex(history, slot, id);
      if (idx < 0) return;
      if (idx < EXCLUSION_WINDOW) excludedThisBuild.push(slot);
      const base = REPETITION_BASE[slot] || 5;
      const decay = Math.max(1, EXCLUSION_WINDOW + 1 - idx);
      const points = base * decay;
      penalty += points;
      logs.push({ points, reason: `${slot} ${(_a = outfit[slot]) == null ? void 0 : _a.name} used ${idx + 1} build(s) ago` });
    });
    return { penalty, logs, excludedThisBuild };
  }
  function laneUsageCounts(history) {
    const counts = {};
    for (const h of history) {
      for (const lane of h.lanes || []) counts[lane] = (counts[lane] || 0) + 1;
    }
    return counts;
  }
  function laneRepetitionNudge(outfit, history, anchorSlot) {
    if (anchorSlot) return { penalty: 0, note: "" };
    const recent = history.slice(0, 5);
    if (recent.length < 3) return { penalty: 0, note: "" };
    const counts = laneUsageCounts(recent);
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    const intent = detectFitIntent(outfit, anchorSlot);
    const primary = intent[0];
    if (!primary) return { penalty: 0, note: "" };
    const share = (counts[primary] || 0) / total;
    if (share > 0.6) {
      return { penalty: 6, note: `Lane ${primary} is over-used recently (${Math.round(share * 100)}%); nudging toward a compatible alternative.` };
    }
    return { penalty: 0, note: "" };
  }

  // src/style/styleTypes.ts
  var FORMALITY_VALUES = [
    "casual",
    "smart_casual",
    "tailored",
    "dressy",
    "rugged",
    "sport"
  ];
  var PATTERN_VALUES = [
    "solid",
    "stripe",
    "houndstooth",
    "check",
    "plaid",
    "camo",
    "graphic",
    "textured",
    "animal",
    "mixed"
  ];
  var WEIGHT_VALUES = ["light", "medium", "heavy"];
  var SEASON_VALUES = ["spring", "summer", "fall", "winter", "all"];
  var STYLE_LANE_VALUES = [
    "ALD_sport_prep",
    "tailored_clean",
    "rugged_workwear",
    "elevated_casual",
    "street_relaxed",
    "summer_resort",
    "minimal_luxury",
    "heritage_prep",
    "loafer_trouser_fit",
    "editorial_layered"
  ];
  var METADATA_KEYS = [
    "formality",
    "pattern",
    "weight",
    "seasons",
    "lanes",
    "materialTags",
    "colorFamily",
    "silhouette",
    "notes"
  ];
  var REQUIRED_METADATA_KEYS = [
    "formality",
    "pattern",
    "weight",
    "seasons",
    "lanes"
  ];

  // src/style/styleLaneDiversity.ts
  function emptyLaneUsage() {
    return STYLE_LANE_VALUES.reduce((acc, lane) => {
      acc[lane] = 0;
      return acc;
    }, {});
  }
  function tallyLaneUsage(history) {
    const usage = emptyLaneUsage();
    for (const h of history) {
      for (const lane of h.lanes || []) {
        if (lane in usage) usage[lane] += 1;
      }
    }
    return usage;
  }
  var LANE_ALTERNATIVES = {
    ALD_sport_prep: ["elevated_casual", "heritage_prep", "loafer_trouser_fit"],
    tailored_clean: ["elevated_casual", "loafer_trouser_fit", "minimal_luxury"],
    loafer_trouser_fit: ["elevated_casual", "ALD_sport_prep", "tailored_clean"],
    elevated_casual: ["ALD_sport_prep", "street_relaxed", "loafer_trouser_fit"],
    heritage_prep: ["ALD_sport_prep", "tailored_clean", "elevated_casual"],
    street_relaxed: ["elevated_casual", "ALD_sport_prep", "rugged_workwear"],
    rugged_workwear: ["street_relaxed", "heritage_prep", "elevated_casual"],
    summer_resort: ["elevated_casual", "ALD_sport_prep", "tailored_clean"],
    minimal_luxury: ["tailored_clean", "elevated_casual", "loafer_trouser_fit"],
    editorial_layered: ["elevated_casual", "tailored_clean", "minimal_luxury"]
  };
  function diversitySignal(history, window = 5) {
    const recent = history.slice(0, window);
    const usage = tallyLaneUsage(recent);
    const total = Object.values(usage).reduce((a, b) => a + b, 0);
    if (total === 0 || recent.length < 3) {
      return { dominantShare: 0, boostLanes: [], flagged: false };
    }
    let dominantLane;
    let dominantCount = 0;
    for (const lane of STYLE_LANE_VALUES) {
      if (usage[lane] > dominantCount) {
        dominantCount = usage[lane];
        dominantLane = lane;
      }
    }
    const dominantShare = dominantCount / total;
    const flagged = dominantShare > 0.45;
    const boostLanes = dominantLane && dominantShare > 0.6 ? LANE_ALTERNATIVES[dominantLane] : [];
    return { dominantLane, dominantShare, boostLanes, flagged };
  }
  function laneExceeds45(usage) {
    const total = Object.values(usage).reduce((a, b) => a + b, 0);
    if (total === 0) return null;
    for (const lane of STYLE_LANE_VALUES) {
      const share = usage[lane] / total;
      if (share > 0.45) return { lane, share };
    }
    return null;
  }

  // src/style/rejectedPairings.ts
  var REJECTED_PAIRINGS_STORAGE_KEY = "fitsRejectedPairings";
  function uid() {
    return `rp_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  }
  var SLOT_TO_CATEGORY = {
    baseLayer: "top",
    midLayer: "top",
    outerwear: "outerwear",
    bottoms: "bottom",
    shoes: "shoes",
    hat: "hat",
    belt: "accessory",
    detail: "accessory"
  };
  function buildRejectedPairing(outfit, rejectedSlot, context = {}) {
    const rejected = outfit[rejectedSlot];
    if (!rejected) return null;
    const anchor = context.anchorSlot ? outfit[context.anchorSlot] : void 0;
    const outfitItems = Object.values(outfit).filter((v) => Boolean(v && typeof v === "object" && "id" in v)).map((v) => v.id);
    return {
      id: uid(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      anchorItemId: anchor == null ? void 0 : anchor.id,
      rejectedItemId: rejected.id,
      rejectedCategory: SLOT_TO_CATEGORY[rejectedSlot] || "accessory",
      outfitItems,
      detectedFitIntent: detectFitIntent(outfit, context.anchorSlot),
      localGateScore: context.localGateScore,
      openAiJudgeScore: context.openAiJudgeScore,
      reasonCodes: context.reasonCodes || [],
      userNote: context.userNote
    };
  }
  function computeRejectionPenalty(outfit, context, rejected) {
    if (!rejected.length) return { penalty: 0, reasonCodes: [] };
    const presentIds = new Set(
      Object.values(outfit).filter((v) => Boolean(v && typeof v === "object" && "id" in v)).map((v) => v.id)
    );
    const intent = detectFitIntent(outfit, context.anchorSlot);
    let penalty = 0;
    const reasonCodes = [];
    for (const rp of rejected) {
      if (!presentIds.has(rp.rejectedItemId)) continue;
      const sharedItems = rp.outfitItems.filter((id) => presentIds.has(id)).length;
      const sharedIntent = rp.detectedFitIntent.filter((l) => intent.includes(l)).length;
      const anchorMatch = rp.anchorItemId ? presentIds.has(rp.anchorItemId) : false;
      if ((anchorMatch || sharedItems >= 3) && sharedIntent >= 1) {
        penalty = Math.max(penalty, 30);
        reasonCodes.push(...rp.reasonCodes);
      } else if (sharedItems >= 2 || sharedIntent >= 2) {
        penalty = Math.max(penalty, 10);
      }
    }
    return { penalty: Math.min(40, penalty), reasonCodes: [...new Set(reasonCodes)] };
  }

  // src/ai/openAiJudge.ts
  function explanationSoundsGeneric(value) {
    return /\b(these match|good color harmony|stylish outfit|nice outfit|looks good|works well|adds edge|elevates the look)\b/i.test(value) && !/houndstooth|tropical|pleated|denim|loafer|derby|clog|cargo|silhouette|palette|material|weather|proportion|lane/i.test(value);
  }
  function localOpenAiJudgeSim(outfit, context = {}) {
    var _a, _b, _c;
    const coherence = evaluateCoherence(outfit, context);
    const d = coherence.dimensions;
    const temp = (_b = (_a = context.weather) == null ? void 0 : _a.temp) != null ? _b : 70;
    const top = topItemOf(outfit);
    const bottom = outfit.bottoms;
    const cargo = isMilitaryCargo(bottom);
    const cargoJustified = cargo ? Boolean(militaryCargoJustified(outfit, context)) && militaryCargoJustified(outfit, context) !== "n/a" : false;
    const looksAwkwardInRealLife = isCampOrResortShirt(top) && cargo && !cargoJustified || isPatterned(top) && cargo && colorCompat(top, bottom) < 8 && !cargoJustified || d.formalityAlignment < 6 && d.patternCompatibility < 6;
    const colorWorks = d.colorHarmony >= 7;
    const formalityMakesSense = d.formalityAlignment >= 7;
    const materialWeather = d.materialWeatherLogic >= 7;
    const devinStyleMatch = d.devinStyleAlignment >= 7;
    const explanation = looksAwkwardInRealLife ? `On a real person this fights itself: ${top == null ? void 0 : top.name} and ${bottom == null ? void 0 : bottom.name} pull in different formality/material directions and nothing bridges them. The pants pull the fit too rugged for the top.` : `${outfit.styleLane || "elevated"} read for ${temp}\xB0F \u2014 ${(top == null ? void 0 : top.name) || "the top"} leads, ${(bottom == null ? void 0 : bottom.name) || "the pants"} hold the proportion and palette, anchored by ${((_c = outfit.shoes) == null ? void 0 : _c.name) || "the shoe"}. Color ${d.colorHarmony}/10, material/weather ${d.materialWeatherLogic}/10.`;
    const generic = explanationSoundsGeneric(explanation);
    const reasonCodes = [...coherence.reasonCodes];
    if (looksAwkwardInRealLife) reasonCodes.push("OPENAI_AWKWARD");
    if (generic) reasonCodes.push("OPENAI_GENERIC_EXPLANATION");
    const passed = !looksAwkwardInRealLife && colorWorks && formalityMakesSense && materialWeather && devinStyleMatch && !generic;
    const score = Math.max(1, Math.min(100, Math.round(d.overallTaste * 10 - (looksAwkwardInRealLife ? 30 : 0))));
    return {
      agent: "OpenAI fashion judgment",
      passed,
      score,
      verdict: passed ? "Color, pattern, formality, silhouette, weather, and Devin-style all check out." : "Rebuild before showing \u2014 the style language conflicts.",
      explanation,
      reasonCodes,
      checks: {
        colorWorks,
        formalityMakesSense,
        materialWeather,
        devinStyleMatch,
        looksAwkwardInRealLife,
        explanationSoundsGeneric: generic
      }
    };
  }

  // src/ai/agreementGate.ts
  async function evaluateAgreement(outfit, context = {}, judge = localOpenAiJudgeSim) {
    const local = evaluateCoherence(outfit, context);
    const openAi = await judge(outfit, context);
    const passed = local.passed && openAi.passed;
    const reasonCodes = [.../* @__PURE__ */ new Set([...local.reasonCodes, ...openAi.reasonCodes])];
    return {
      passed,
      localPassed: local.passed,
      openAiPassed: openAi.passed,
      localScore: local.score,
      openAiScore: openAi.score,
      reasonCodes,
      local,
      openAi
    };
  }
  function rejectionNote(a) {
    const parts = [];
    if (!a.localPassed) parts.push(`Local gate failed: ${a.local.reasonCodes.slice(0, 2).join(", ") || "coherence"}`);
    if (!a.openAiPassed) parts.push(`OpenAI judge failed: ${a.openAi.reasonCodes.slice(0, 2).join(", ") || "style language"}`);
    return parts.join(". ") || "Rejected.";
  }
  async function selectViaAgreement(candidates, context = {}, judge = localOpenAiJudgeSim) {
    var _a, _b, _c;
    const rejectedCandidates = [];
    let best = null;
    for (const outfit of candidates) {
      const agreement = await evaluateAgreement(outfit, context, judge);
      if (agreement.passed) {
        const combined = agreement.localScore + agreement.openAiScore;
        if (!best || combined > best.agreement.localScore + best.agreement.openAiScore) {
          best = { outfit, agreement };
        }
      } else {
        rejectedCandidates.push({
          outfit,
          reasonCodes: agreement.reasonCodes,
          localPassed: agreement.localPassed,
          openAiPassed: agreement.openAiPassed,
          note: rejectionNote(agreement)
        });
      }
    }
    if (best) {
      return {
        passed: true,
        localPassed: true,
        openAiPassed: true,
        localScore: best.agreement.localScore,
        openAiScore: best.agreement.openAiScore,
        reasonCodes: [],
        rejectedCandidates,
        selectedCandidate: best.outfit,
        selectedAgreement: best.agreement
      };
    }
    const fallback = rejectedCandidates[0];
    return {
      passed: false,
      localPassed: (_a = fallback == null ? void 0 : fallback.localPassed) != null ? _a : false,
      openAiPassed: (_b = fallback == null ? void 0 : fallback.openAiPassed) != null ? _b : false,
      localScore: 0,
      openAiScore: 0,
      reasonCodes: (_c = fallback == null ? void 0 : fallback.reasonCodes) != null ? _c : ["NO_CANDIDATE"],
      rejectedCandidates
    };
  }

  // src/ai/outfitBuilder.ts
  function pool(wardrobe, category) {
    return wardrobe.filter((x) => category.test(x.category));
  }
  function tx(item) {
    return item ? `${item.brand} ${item.name} ${item.color}`.toLowerCase() : "";
  }
  function laneLabel(lane) {
    return (lane || "elevated_casual").replace(/_/g, " ");
  }
  function pantsReasonFor(bottom, lane, temp) {
    if (!bottom) return "No bottom selected.";
    if (isCleanTailoredBottom(bottom)) {
      return `${bottom.name} keeps the fit in Devin's ${laneLabel(lane)} lane \u2014 a clean tailored bottom that reads premium at ${temp}\xB0F.`;
    }
    if (isMilitaryCargo(bottom)) {
      return `${bottom.name} is styled intentionally rugged here, not as a default \u2014 kept with a simple top and a strong shoe.`;
    }
    return `${bottom.name} holds the proportion in the ${laneLabel(lane)} lane without fighting the top.`;
  }
  function shoeReasonFor(shoes) {
    if (!shoes) return "No shoe anchor selected.";
    if (isStrongShoe(shoes)) {
      const lanes = shoes.metadata.lanes.join(", ").replace(/_/g, " ");
      return `${shoes.name} sharpens the silhouette and anchors the lower half (${lanes}).`;
    }
    return `${shoes.name} keeps the fit relaxed, though a leather loafer/derby would anchor it harder.`;
  }
  function hatReasonFor(hat) {
    if (!hat) return void 0;
    if (hat.metadata.lanes.includes("ALD_sport_prep") || hat.metadata.lanes.includes("heritage_prep")) {
      return `${hat.name} finishes the outfit with sport-prep energy so it reads ALD, not formal.`;
    }
    return `${hat.name} finishes the silhouette the way Devin actually wears clothes.`;
  }
  function whyItWorksFor(outfit, lane, temp, avoided, wardrobe) {
    const top = topItemOf(outfit);
    const bottom = outfit.bottoms;
    const shoes = outfit.shoes;
    const hat = outfit.hat;
    const parts = [];
    parts.push(
      `${(bottom == null ? void 0 : bottom.name) || "The bottom"} keeps this in Devin's ${laneLabel(lane)} lane` + (shoes ? `, ${shoes.name} sharpens the silhouette` : "") + (hat ? `, and ${hat.name} makes it feel ALD instead of formal.` : ".")
    );
    if (top) parts.push(`${top.name} leads the palette without overpowering the lower half.`);
    const avoidedCargo = avoided.find((a) => /cargo|fatigue|rugged/i.test(a.reason));
    if (avoidedCargo) {
      const item = wardrobe.find((w) => w.id === avoidedCargo.itemId);
      parts.push(`I avoided ${(item == null ? void 0 : item.name) || "the heavy cargos"} because ${avoidedCargo.reason.toLowerCase()}.`);
    }
    return parts.join(" ");
  }
  function buildCandidates(input) {
    var _a, _b, _c, _d;
    const { wardrobe, anchor, anchorSlot } = input;
    const weather = input.weather || { temp: 70, condition: "dry" };
    const temp = (_a = weather.temp) != null ? _a : 70;
    const history = input.history || [];
    const rejected = input.rejectedPairings || [];
    const ctx = { weather, history, anchorSlot, styleProfile: DEVIN_STYLE_PROFILE };
    const isTopAnchor = anchorSlot && ["baseLayer", "midLayer", "outerwear"].includes(anchorSlot);
    const tops = isTopAnchor && anchor ? [anchor] : pool(wardrobe, /Tops|Outerwear/).filter(
      (x) => /reiss|shirt|tee|henley|jersey|rugby|overshirt|knit|buck mason|aime leon dore|ald|kith|zara|florence|cos|john elliott|kody|polo|abercrombie|saalt/i.test(`${x.brand} ${x.name}`)
    ).slice(0, 22);
    const bottoms = anchorSlot === "bottoms" && anchor ? [anchor] : pool(wardrobe, /Bottoms/).filter((x) => !/shorts|sweatpant|suspender/i.test(x.name));
    const shoes = anchorSlot === "shoes" && anchor ? [anchor] : pool(wardrobe, /Shoes/);
    const hats = anchorSlot === "hat" && anchor ? [anchor] : pool(wardrobe, /Hats/);
    const scored = [];
    for (const top of tops.slice(0, 14)) {
      for (const bottom of bottoms.slice(0, 22)) {
        for (const shoe of shoes.slice(0, 10)) {
          for (const hat of hats.slice(0, 8)) {
            const styleLane = isMilitaryCargo(bottom) ? "rugged_workwear" : detectFitIntent({ midLayer: top, bottoms: bottom, shoes: shoe, hat }, anchorSlot)[0] || "elevated_casual";
            const outfit = {
              midLayer: top,
              bottoms: bottom,
              shoes: shoe,
              hat,
              concept: "auto-build",
              styleLane,
              heroPiece: (anchor == null ? void 0 : anchor.name) || top.name,
              anchorSlot
            };
            const local = evaluateCoherence(outfit, ctx);
            const fire = fireFitScore(outfit, ctx).score;
            const devin = devinTasteScore(outfit, ctx);
            const rep = repetitionPenalty(outfit, history, anchorSlot);
            const laneNudge = laneRepetitionNudge(outfit, history, anchorSlot);
            const rejPenalty = computeRejectionPenalty(outfit, { anchorSlot }, rejected).penalty;
            let final = fire + devin * 2 + local.score * 0.5 - rep.penalty - laneNudge.penalty - rejPenalty;
            if (local.passed) final += 30;
            if ((_b = input.preferredBottoms) == null ? void 0 : _b.some((rx) => rx.test(tx(bottom)))) final += 20;
            if ((_c = input.preferredShoes) == null ? void 0 : _c.some((rx) => rx.test(tx(shoe)))) final += 15;
            if ((_d = input.preferredTops) == null ? void 0 : _d.some((rx) => rx.test(tx(top)))) final += 15;
            const avoided = [];
            if (!isMilitaryCargo(bottom) && isCleanTailoredBottom(bottom)) {
              const cargo = bottoms.find((b) => isMilitaryCargo(b) && militaryCargoJustified({ ...outfit, bottoms: b }, ctx) === "");
              if (cargo) avoided.push({ itemId: cargo.id, reason: "they would pull the fit too rugged for this top and weather" });
            }
            scored.push({ outfit, fire, local, devin, final, lanes: detectFitIntent(outfit, anchorSlot), avoided });
          }
        }
      }
    }
    scored.sort((a, b) => b.final - a.final);
    const passing = scored.filter((s) => s.local.passed);
    const toCandidate = (s, label) => {
      var _a2, _b2, _c2, _d2, _e;
      const lane = s.lanes[0];
      const avoided = s.avoided;
      return {
        label,
        outfit: s.outfit,
        items: {
          top: (_a2 = topItemOf(s.outfit)) == null ? void 0 : _a2.name,
          bottom: (_b2 = s.outfit.bottoms) == null ? void 0 : _b2.name,
          shoes: (_c2 = s.outfit.shoes) == null ? void 0 : _c2.name,
          hat: (_d2 = s.outfit.hat) == null ? void 0 : _d2.name,
          outerwear: (_e = s.outfit.outerwear) == null ? void 0 : _e.name,
          accessories: [s.outfit.belt, s.outfit.detail].filter(Boolean).map((x) => x.name)
        },
        fitIntent: s.lanes,
        localGateScore: s.local.score,
        localGatePassed: s.local.passed,
        finalScore: Math.round(s.final),
        whyItWorks: whyItWorksFor(s.outfit, lane, temp, avoided, wardrobe),
        pantsReason: pantsReasonFor(s.outfit.bottoms, lane, temp),
        shoeReason: shoeReasonFor(s.outfit.shoes),
        hatReason: hatReasonFor(s.outfit.hat),
        avoidedItems: avoided
      };
    };
    const candidates = [];
    const used = /* @__PURE__ */ new Set();
    const keyOf = (s) => {
      var _a2, _b2, _c2;
      return `${(_a2 = s.outfit.bottoms) == null ? void 0 : _a2.id}|${(_b2 = s.outfit.shoes) == null ? void 0 : _b2.id}|${(_c2 = topItemOf(s.outfit)) == null ? void 0 : _c2.id}`;
    };
    const pickDistinct = (predicate, label) => {
      const found = passing.find((s) => predicate(s) && !used.has(keyOf(s)));
      if (found) {
        used.add(keyOf(found));
        candidates.push(toCandidate(found, label));
      }
    };
    if (passing[0]) {
      used.add(keyOf(passing[0]));
      candidates.push(toCandidate(passing[0], "recommended"));
    }
    pickDistinct((s) => isCleanTailoredBottom(s.outfit.bottoms) && isStrongShoe(s.outfit.shoes), "safest");
    pickDistinct((s) => isCampOrResortShirt(topItemOf(s.outfit)) || s.devin >= 8, "elevated");
    pickDistinct((s) => !isHeavyRuggedBottom(s.outfit.bottoms) && (s.lanes.includes("street_relaxed") || s.lanes.includes("editorial_layered")), "wildcard");
    return candidates;
  }

  // src/ai/autoJudge.ts
  async function autoJudge(outfit, context = {}, judge = localOpenAiJudgeSim) {
    const coherence = evaluateCoherence(outfit, context);
    const fire = fireFitScore(outfit, context).score;
    const agreement = await evaluateAgreement(outfit, context, judge);
    const lane = detectFitIntent(outfit, context.anchorSlot)[0] || "elevated_casual";
    const notes = [];
    notes.push(`Direction detected: ${lane.replace(/_/g, " ")}.`);
    if (outfit.bottoms) notes.push(`Pants selected: ${outfit.bottoms.name}.`);
    notes.push(`Style Coherence Gate: ${coherence.score}/100 ${coherence.passed ? "(pass)" : "(fail)"}.`);
    notes.push(`OpenAI Judge: ${agreement.openAiScore}/100 ${agreement.openAiPassed ? "(pass)" : "(fail)"}.`);
    notes.push(`Auto-judged: Yes.`);
    for (const n of coherence.notes.slice(0, 2)) notes.push(n);
    if (!agreement.passed) {
      notes.push(`Agreement gate: not both passed \u2014 ${agreement.reasonCodes.slice(0, 3).join(", ")}.`);
    }
    return {
      autoJudged: true,
      fireFitScore: fire,
      coherenceScore: coherence.score,
      coherencePassed: coherence.passed,
      openAiScore: agreement.openAiScore,
      openAiPassed: agreement.openAiPassed,
      agreementPassed: agreement.passed,
      detectedLane: lane,
      notes,
      reasonCodes: agreement.reasonCodes,
      agreement
    };
  }

  // src/ai/hermesMemory.ts
  var HERMES_MEMORY_STORAGE_KEY = "fits_hermes_memory_v2";
  function defaultHermesMemory() {
    return {
      styleProfile: DEVIN_STYLE_PROFILE,
      rejectedPairings: [],
      recentBuilds: [],
      laneUsage: emptyLaneUsage()
    };
  }
  function recordBuild(memory, build, limit = 12) {
    const recentBuilds = [build, ...memory.recentBuilds].slice(0, limit);
    return { ...memory, recentBuilds, laneUsage: tallyLaneUsage(recentBuilds) };
  }
  function recordRejection(memory, pairing, limit = 50) {
    const rejectedPairings = [pairing, ...memory.rejectedPairings].slice(0, limit);
    return { ...memory, rejectedPairings };
  }
  function loadHermesMemory(storage) {
    const base = defaultHermesMemory();
    try {
      const raw = storage == null ? void 0 : storage.getItem(HERMES_MEMORY_STORAGE_KEY);
      if (!raw) {
        const rejectedRaw = storage == null ? void 0 : storage.getItem(REJECTED_PAIRINGS_STORAGE_KEY);
        if (rejectedRaw) base.rejectedPairings = JSON.parse(rejectedRaw);
        return base;
      }
      const parsed = JSON.parse(raw);
      return {
        styleProfile: DEVIN_STYLE_PROFILE,
        rejectedPairings: parsed.rejectedPairings || [],
        recentBuilds: parsed.recentBuilds || [],
        laneUsage: parsed.laneUsage || emptyLaneUsage()
      };
    } catch {
      return base;
    }
  }
  function serializeHermesMemory(memory) {
    return JSON.stringify({
      rejectedPairings: memory.rejectedPairings,
      recentBuilds: memory.recentBuilds,
      laneUsage: memory.laneUsage
    });
  }

  // src/weather/weatherTypes.ts
  var DEFAULT_WEATHER = {
    temp: 62,
    condition: "dry",
    source: "default"
  };

  // src/weather/weatherProvider.ts
  function classifyCondition(tempF, code, humidity) {
    if (code >= 71 && code <= 77) return "snow";
    if (code >= 51 && code <= 67 || code >= 80 && code <= 99) return "rain";
    if (tempF <= 45) return "cold";
    if (tempF >= 82 && (humidity != null ? humidity : 0) >= 60) return "humid";
    if (tempF >= 82) return "hot";
    return "dry";
  }
  async function getWeather(opts = {}) {
    var _a, _b, _c, _d, _e;
    if (opts.manual) {
      return { temp: opts.manual.temp, condition: opts.manual.condition || "dry", source: "manual", location: opts.location };
    }
    const f = opts.fetchImpl || (typeof fetch !== "undefined" ? fetch : void 0);
    if (opts.lat != null && opts.lon != null && f) {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${opts.lat}&longitude=${opts.lon}&current=temperature_2m,relative_humidity_2m,weather_code&temperature_unit=fahrenheit`;
        const res = await f(url);
        if (res.ok) {
          const data = await res.json();
          const temp = Math.round((_b = (_a = data.current) == null ? void 0 : _a.temperature_2m) != null ? _b : DEFAULT_WEATHER.temp);
          const condition = classifyCondition(temp, (_d = (_c = data.current) == null ? void 0 : _c.weather_code) != null ? _d : 0, (_e = data.current) == null ? void 0 : _e.relative_humidity_2m);
          return { temp, condition, source: "live", location: opts.location };
        }
      } catch {
      }
    }
    return { ...DEFAULT_WEATHER, location: opts.location };
  }

  // src/weather/weatherStyleAdjustments.ts
  function weatherItemAdjustment(item, weather) {
    var _a;
    const reasons = [];
    let delta = 0;
    const temp = weather.temp;
    const m = item.metadata;
    const heavy = m.weight === "heavy";
    const light = m.weight === "light";
    const tags = (m.materialTags || []).join(" ");
    if (temp >= 68 && temp <= 78) {
      if (isCleanTailoredBottom(item) && isWarmWeatherMaterial(item)) {
        delta += 3;
        reasons.push("tropical/pleated tailored bottom is ideal at 68-78F");
      }
      if (/camp_collar|breathable|linen/.test(tags)) {
        delta += 2;
        reasons.push("breathable layer fits the warm window");
      }
      if (isStrongShoe(item) && /loafer|clog|sneaker/i.test(item.name)) {
        delta += 1;
        reasons.push("loafer/clog reads right for warm weather");
      }
      if (isMilitaryCargo(item)) {
        delta -= 3;
        reasons.push("heavy cargos are too much at 68-78F unless intentional");
      }
    }
    if (weather.condition === "hot" || weather.condition === "humid") {
      if (heavy || /wool|tweed|down|quilted/.test(tags)) {
        delta -= 3;
        reasons.push("heavy/wool fabric is wrong for hot/humid");
      }
      if (isMilitaryCargo(item)) {
        delta -= 2;
        reasons.push("bulky cargos drag in heat");
      }
      if (/boot/i.test(item.name)) {
        delta -= 2;
        reasons.push("heavy boots are wrong for heat");
      }
      if (light && /cotton|linen|tropical_wool|breathable/.test(tags)) {
        delta += 2;
        reasons.push("breathable fabric suits hot/humid");
      }
    }
    if (weather.condition === "cold" || temp <= 45) {
      if (heavy || /wool|down|quilted|sherpa|fleece/.test(tags)) {
        delta += 2;
        reasons.push("warm fabric suits the cold");
      }
      if (/boot/i.test(item.name)) {
        delta += 1;
        reasons.push("boots work in the cold");
      }
      if (light && /tops|shoes/i.test(item.category) && /linen|mesh/.test(tags)) {
        delta -= 2;
        reasons.push("too light for cold");
      }
    }
    if (weather.condition === "rain" || weather.condition === "snow") {
      if (/boot|chelsea/i.test(item.name)) {
        delta += 2;
        reasons.push("boots are rain/snow appropriate");
      }
      if (/waxed|nylon|shell|down/.test(tags)) {
        delta += 2;
        reasons.push("water-resistant outer layer");
      }
      if (/suede/.test(tags)) {
        delta -= 3;
        reasons.push("suede is risky in rain/snow");
      }
      if (((_a = item.metadata.colorFamily) == null ? void 0 : _a.includes("light")) && /bottoms/i.test(item.category)) {
        delta -= 1;
        reasons.push("light pants show rain");
      }
    }
    return { delta, reasons };
  }
  function weatherSummary(weather) {
    const where = weather.location ? ` in ${weather.location}` : "";
    const src = weather.source === "live" ? "live weather" : weather.source === "manual" ? "manual weather" : "default season";
    return `${weather.temp}\xB0F ${weather.condition}${where} (${src})`;
  }

  // src/ui/rejectPairing.ts
  function loadRejectedPairings(storage) {
    try {
      const raw = storage.getItem(REJECTED_PAIRINGS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  function saveRejectedPairings(storage, pairings) {
    try {
      storage.setItem(REJECTED_PAIRINGS_STORAGE_KEY, JSON.stringify(pairings.slice(0, 50)));
    } catch {
    }
  }
  function rejectPairing(storage, input) {
    const pairing = buildRejectedPairing(input.outfit, input.rejectedSlot, {
      anchorSlot: input.anchorSlot,
      localGateScore: input.localGateScore,
      openAiJudgeScore: input.openAiJudgeScore,
      reasonCodes: input.reasonCodes,
      userNote: input.userNote
    });
    if (!pairing) return null;
    const existing = loadRejectedPairings(storage);
    saveRejectedPairings(storage, [pairing, ...existing]);
    return pairing;
  }

  // src/ui/buildAroundThis.ts
  async function buildAroundThis(input) {
    const status = input.onStatus || (() => {
    });
    const context = {
      weather: input.weather || { temp: 70, condition: "dry" },
      history: input.history || [],
      anchorSlot: input.anchorSlot
    };
    status("Building outfit with Hermes memory\u2026");
    const builderInput = {
      wardrobe: input.wardrobe,
      anchor: input.anchor,
      anchorSlot: input.anchorSlot,
      weather: input.weather,
      history: input.history,
      rejectedPairings: input.rejectedPairings
    };
    const candidates = buildCandidates(builderInput);
    status("Checking style coherence\u2026");
    const outfits = candidates.map((c) => c.outfit);
    status("Running AI judge\u2026");
    const selection = await selectViaAgreement(outfits, context, input.judge);
    const selected = selection.selectedCandidate ? candidates.find((c) => c.outfit === selection.selectedCandidate) : void 0;
    let judgeResult;
    if (selected) {
      judgeResult = await autoJudge(selected.outfit, context, input.judge);
      selected.openAiJudgeScore = judgeResult.openAiScore;
    }
    return { candidates, selection, selected, judge: judgeResult };
  }

  // src/ui/outfitComparison.ts
  var COMPARISON_META_KEYS = [
    "vibe",
    "occasion",
    "colorDirection",
    "dressCode",
    "weatherTemp",
    "weatherCondition",
    "styleLane",
    "concept",
    "silhouette",
    "styleDirective",
    "judgeContext"
  ];
  function createOutfitComparisonDraft(fit, heroSlot, slots, now = (/* @__PURE__ */ new Date()).toISOString()) {
    if (!slots.includes(heroSlot)) return null;
    const slotIds = {};
    for (const slot of slots) {
      const item = fit[slot];
      if (typeof (item == null ? void 0 : item.id) === "string" && item.id) slotIds[slot] = item.id;
    }
    const heroId = slotIds[heroSlot];
    if (!heroId) return null;
    const meta = {};
    for (const key of COMPARISON_META_KEYS) {
      const value = fit[key];
      if (typeof value === "string" || typeof value === "number") meta[key] = value;
    }
    const makeVersion = (name) => ({
      name,
      slotIds: { ...slotIds },
      meta: { ...meta }
    });
    return {
      version: 1,
      active: true,
      heroSlot,
      heroId,
      createdAt: now,
      updatedAt: now,
      versions: [makeVersion("Current direction"), makeVersion("Alternate version")]
    };
  }
  function setOutfitComparisonPiece(draft, versionIndex, slot, itemId2, slots, now = (/* @__PURE__ */ new Date()).toISOString()) {
    var _a;
    if (versionIndex !== 0 && versionIndex !== 1) throw new Error("invalid-version");
    if (!slots.includes(slot)) throw new Error("invalid-slot");
    if (slot === draft.heroSlot && itemId2 !== draft.heroId) throw new Error("hero-locked");
    if (itemId2 && itemId2 === draft.heroId && slot !== draft.heroSlot) throw new Error("hero-locked");
    const current = draft.versions[versionIndex];
    const duplicateSlot = itemId2 ? (_a = Object.entries(current.slotIds).find(([otherSlot, otherId]) => otherSlot !== slot && otherId === itemId2)) == null ? void 0 : _a[0] : void 0;
    if (duplicateSlot) throw new Error("duplicate-piece");
    const versions = [...draft.versions];
    const slotIds = { ...current.slotIds };
    if (itemId2) slotIds[slot] = itemId2;
    else delete slotIds[slot];
    versions[versionIndex] = { ...current, slotIds };
    return { ...draft, versions, updatedAt: now };
  }
  function canSaveOutfitComparisonVersion(version) {
    return new Set(Object.values(version.slotIds).filter(Boolean)).size >= 2;
  }

  // src/audit/metadataValidation.ts
  var FORMALITY_SET = new Set(FORMALITY_VALUES);
  var PATTERN_SET = new Set(PATTERN_VALUES);
  var WEIGHT_SET = new Set(WEIGHT_VALUES);
  var SEASON_SET = new Set(SEASON_VALUES);
  var LANE_SET = new Set(STYLE_LANE_VALUES);
  var KEY_SET = new Set(METADATA_KEYS);
  function validateItemMetadata(item) {
    const issues = [];
    const m = item.metadata;
    if (!m || typeof m !== "object") {
      return ["no metadata object"];
    }
    for (const k of REQUIRED_METADATA_KEYS) {
      const v = m[k];
      if (k === "weight") {
        if (typeof v !== "string" || !WEIGHT_SET.has(v)) issues.push(`weight invalid: ${String(v)}`);
      } else if (!Array.isArray(v) || v.length === 0) {
        issues.push(`${k} missing or empty`);
      }
    }
    for (const f of item.metadata.formality || []) if (!FORMALITY_SET.has(f)) issues.push(`invalid formality: ${f}`);
    for (const p of item.metadata.pattern || []) if (!PATTERN_SET.has(p)) issues.push(`invalid pattern: ${p}`);
    for (const s of item.metadata.seasons || []) if (!SEASON_SET.has(s)) issues.push(`invalid season: ${s}`);
    for (const l of item.metadata.lanes || []) if (!LANE_SET.has(l)) issues.push(`invalid lane: ${l}`);
    for (const k of Object.keys(m)) if (!KEY_SET.has(k) && k !== "colorFamily") issues.push(`unknown metadata key: ${k}`);
    return issues;
  }
  function buildCoverageReport(items = loadWardrobeItems()) {
    const missing = [];
    let complete = 0;
    let curated = 0;
    for (const item of items) {
      if (CURATED_KEYS.has(item.key)) curated += 1;
      const issues = validateItemMetadata(item);
      if (issues.length === 0) complete += 1;
      else missing.push({ key: item.key, name: `${item.brand} ${item.name}`, issues });
    }
    return {
      totalItems: items.length,
      itemsWithCompleteMetadata: complete,
      curatedItems: curated,
      seededItems: items.length - curated,
      coverage: items.length ? complete / items.length : 0,
      complete: missing.length === 0,
      missingMetadata: missing
    };
  }

  // src/product/styleOs.ts
  var COLOR_PAIRINGS = [
    { anchor: "cream", partner: "burgundy", intensity: "fresh", relationship: "warm tonal contrast", why: "Burgundy gives cream depth and makes the neutral feel richer without becoming loud.", bridge: "Ground it with chocolate, oxblood, navy, or black leather." },
    { anchor: "cream", partner: "light blue", intensity: "classic", relationship: "soft temperature contrast", why: "Light blue cools cream and creates a clean, relaxed-prep palette.", bridge: "Use brown leather, washed denim, navy, or a green accent." },
    { anchor: "cream", partner: "forest green", intensity: "fresh", relationship: "natural contrast", why: "Forest green gives cream visual weight while keeping the combination refined and grounded.", bridge: "Echo the green once in a cap, sock detail, tie, or scarf." },
    { anchor: "cream", partner: "cobalt blue", intensity: "bold", relationship: "high-energy contrast", why: "Cobalt turns cream into a clean canvas and creates an editorial focal point.", bridge: "Keep trousers and shoes quiet so cobalt remains the only loud note." },
    { anchor: "navy", partner: "rust", intensity: "fresh", relationship: "complementary warmth", why: "Rust warms navy and gives heritage prep more personality than another neutral.", bridge: "Connect them with cream, tan suede, or cognac leather." },
    { anchor: "navy", partner: "pink", intensity: "bold", relationship: "controlled complementary contrast", why: "Dusty pink softens navy while still reading masculine when the silhouette and shoes stay structured.", bridge: "Use gray, cream, denim, or dark brown as the grounding color." },
    { anchor: "olive", partner: "lavender", intensity: "bold", relationship: "muted complementary contrast", why: "Lavender lifts olive's military association and turns it into an intentional fashion palette.", bridge: "Keep the lavender to one refined piece or accessory and ground it with cream." },
    { anchor: "olive", partner: "light blue", intensity: "fresh", relationship: "cool natural contrast", why: "Light blue cleans up olive and moves it from rugged utility toward relaxed tailoring.", bridge: "Brown loafers or a navy cap make the transition feel deliberate." },
    { anchor: "brown", partner: "powder blue", intensity: "fresh", relationship: "warm-cool contrast", why: "Powder blue opens up brown and keeps an earthy outfit from reading flat or overly coordinated.", bridge: "Add cream, faded denim, or a small burgundy detail." },
    { anchor: "brown", partner: "teal", intensity: "bold", relationship: "jewel-tone contrast", why: "Teal gives dark brown a sophisticated color charge that feels richer than basic blue.", bridge: "Use cream or charcoal between the colors and keep metal accessories restrained." },
    { anchor: "burgundy", partner: "powder blue", intensity: "bold", relationship: "split-temperature contrast", why: "Powder blue makes burgundy feel modern and lets the deeper color act as a controlled accent.", bridge: "Navy, gray, cream, and brown leather keep the pairing polished." },
    { anchor: "gray", partner: "mustard", intensity: "bold", relationship: "neutral with warm accent", why: "Mustard gives gray a focal point without the sharpness of primary yellow.", bridge: "Repeat mustard only once and anchor with black or dark brown shoes." },
    { anchor: "black", partner: "emerald green", intensity: "fresh", relationship: "jewel tone on neutral", why: "Emerald adds dimension to black while preserving a clean, evening-ready silhouette.", bridge: "Use silver, cream, or black leather and avoid adding another saturated color." }
  ];
  var normalize = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  var tokens = (value) => new Set(normalize(value).split(" ").filter((x) => x.length > 2));
  function tokenOverlap(a, b) {
    const left = tokens(a);
    const right = tokens(b);
    if (!left.size || !right.size) return 0;
    let shared = 0;
    left.forEach((token) => {
      if (right.has(token)) shared += 1;
    });
    return shared / Math.max(left.size, right.size);
  }
  function buildOutfitStudioBrief(selection) {
    const temp = Number(selection.weatherTemp);
    const weather = Number.isFinite(temp) ? `${Math.round(temp)}F ${selection.weatherCondition || "dry"}` : selection.weatherCondition || "weather-aware";
    return [
      `Season: ${selection.season || "closet-led"}`,
      `Occasion: ${selection.occasion || "everyday"}`,
      `Weather: ${weather}`,
      `Color direction: ${selection.colorDirection || "closet-led"}`,
      `Dress code: ${selection.dressCode || "smart casual"}`,
      "Use owned inventory only. Treat these as constraints, not permission to weaken proportion, weather logic, or style coherence."
    ].join(" | ");
  }
  function ensureCanonicalItemFields(item) {
    return {
      ...item,
      canonicalPhoto: item.canonicalPhoto || item.photo || "",
      fitNotes: item.fitNotes || "",
      tailoringNotes: item.tailoringNotes || ""
    };
  }
  function discoverColorPairings(anchor, intensity, limit = 4) {
    const normalizedAnchor = normalize(anchor);
    const exact = COLOR_PAIRINGS.filter((pair) => normalize(pair.anchor) === normalizedAnchor);
    const filtered = intensity ? exact.filter((pair) => pair.intensity === intensity) : exact;
    const primary = filtered.length ? filtered : exact;
    const fallback = COLOR_PAIRINGS.filter((pair) => !intensity || pair.intensity === intensity);
    return [...primary, ...fallback.filter((pair) => !primary.includes(pair))].slice(0, Math.max(1, limit));
  }
  function rankProductMatches(requirement, matches) {
    const requirementText = `${requirement.brand || ""} ${requirement.name || ""}`;
    const requirementColor = normalize(requirement.color);
    return matches.map((match) => {
      const matchText = `${match.brand || ""} ${match.name || ""}`;
      const identity = tokenOverlap(requirementText, matchText);
      const color = requirementColor && normalize(match.color).includes(requirementColor) ? 1 : 0;
      const sourced = /^https?:\/\//i.test(match.sourceUrl || "") ? 1 : 0;
      const pictured = /^https?:\/\//i.test(match.imageUrl || "") ? 1 : 0;
      const explained = normalize(`${match.whyMatch || ""} ${match.colorTheory || ""}`).length > 24 ? 1 : 0;
      const score = Math.round(identity * 45 + color * 20 + sourced * 15 + pictured * 10 + explained * 10);
      return { ...match, score };
    }).filter((match) => match.score >= 30 && /^https?:\/\//i.test(match.sourceUrl || "")).sort((a, b) => b.score - a.score).slice(0, 3);
  }
  function analyzeSmartPurchase(candidate, owned) {
    var _a;
    const candidateLabel = `${candidate.brand || ""} ${candidate.name || ""}`.trim();
    const candidateCategory = normalize(candidate.category);
    const candidateColor = normalize(candidate.color);
    const probableMatches = owned.filter((item) => item.type !== "wishlist").map((item) => {
      const label = `${item.brand || ""} ${item.name || ""}`.trim();
      const nameScore = tokenOverlap(candidateLabel, label);
      const categoryMatch = Boolean(candidateCategory && candidateCategory === normalize(item.category));
      const colorMatch = Boolean(candidateColor && candidateColor === normalize(item.color));
      const score = Math.round(nameScore * 70 + (categoryMatch ? 20 : 0) + (colorMatch ? 10 : 0));
      return { item, score, label };
    }).filter((match) => match.score >= 35).sort((a, b) => b.score - a.score).slice(0, 4);
    const categoryOwned = owned.filter((item) => normalize(item.category) === candidateCategory && item.type !== "wishlist");
    const price = Math.max(0, Number(candidate.price) || 0);
    const projectedWears = Math.max(8, Math.min(30, 20 - Math.floor(categoryOwned.length / 2)));
    const projectedCostPerWear = price ? price / projectedWears : 0;
    const unlockBase = Math.max(0, owned.filter((item) => item.type === "wardrobe" && normalize(item.category) !== candidateCategory).length);
    const outfitsUnlocked = Math.min(12, Math.max(1, Math.round(Math.sqrt(unlockBase || 1) + (probableMatches.length ? 0 : 3))));
    const duplicateRisk = ((_a = probableMatches[0]) == null ? void 0 : _a.score) >= 75 ? "high" : probableMatches.length ? "medium" : "low";
    const fillsGap = categoryOwned.length < 3 || duplicateRisk === "low";
    return {
      duplicateRisk,
      probableMatches,
      categoryOwnedCount: categoryOwned.length,
      fillsGap,
      projectedWears,
      projectedCostPerWear,
      outfitsUnlocked,
      recommendation: duplicateRisk === "high" ? "Compare before buying" : fillsGap ? "Strong gap candidate" : "Wishlist and wait"
    };
  }

  // src/browser/entry.ts
  var FITS_INTELLIGENCE_VERSION = "3.2.0";
  return __toCommonJS(entry_exports);
})();
