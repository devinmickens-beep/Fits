/* Board-only derived previews. Source photos are never rewritten. */
(function(root){
  const cache=new Map();
  function clearBackdrop(data,width,height){
    // Remove only a neutral, nearly uniform background connected to the edge.
    // Enclosed light details stay opaque, unlike multiply or global white removal.
    const corners=[0,width-1,(height-1)*width,width*height-1];
    if(corners.every(p=>data[p*4+3]<16)) return data;
    const samples=corners.map(p=>Array.from(data.slice(p*4,p*4+3)));
    const bg=samples[0];
    if(Math.min(...bg)<210 || Math.max(...bg)-Math.min(...bg)>15 || samples.some(s=>s.some((v,i)=>Math.abs(v-bg[i])>10))) return data;
    const seen=new Uint8Array(width*height), queue=new Int32Array(width*height); let head=0,tail=0;
    function add(p){
      if(seen[p]) return; seen[p]=1;
      const i=p*4;
      if(data[i+3]>15 && Math.max(Math.abs(data[i]-bg[0]),Math.abs(data[i+1]-bg[1]),Math.abs(data[i+2]-bg[2]))>13) return;
      queue[tail++]=p;
    }
    for(let x=0;x<width;x++){add(x);add((height-1)*width+x);}
    for(let y=0;y<height;y++){add(y*width);add(y*width+width-1);}
    while(head<tail){const p=queue[head++];data[p*4+3]=0;const x=p%width; if(x>0)add(p-1);if(x<width-1)add(p+1);if(p>=width)add(p-width);if(p<width*(height-1))add(p+width);}
    return data;
  }
  function snapPosition(piece,pieces,rect){
    let x=piece.x,y=piece.y,snapped=false;
    let bestX=9/rect.width*100,bestY=9/rect.height*100;
    const centers=[...pieces.filter(p=>p.id!==piece.id).map(p=>p.x+p.w/2),50];
    for(const center of centers){const delta=center-(piece.x+piece.w/2);if(Math.abs(delta)<bestX){bestX=Math.abs(delta);x=piece.x+delta;snapped=true;}}
    for(const other of pieces){if(other.id===piece.id)continue;const delta=other.y-piece.y;if(Math.abs(delta)<bestY){bestY=Math.abs(delta);y=other.y;snapped=true;}}
    return {x:Math.max(0,Math.min(100-piece.w,x)),y:Math.max(0,Math.min(80,y)),snapped};
  }
  function reorderLayers(pieces,id,action){
    const ordered=[...pieces].sort((a,b)=>a.z-b.z);
    const index=ordered.findIndex(piece=>piece.id===id);
    if(index<0 || !['front','back','top','bottom'].includes(action)) return ordered;
    const [piece]=ordered.splice(index,1);
    const destination=action==='top' ? ordered.length : action==='bottom' ? 0 : Math.max(0,Math.min(ordered.length,index+(action==='front'?1:-1)));
    ordered.splice(destination,0,piece);
    ordered.forEach((entry,layer)=>{entry.z=layer+1;});
    return ordered;
  }
  async function preview(source){
    if(cache.has(source)) return cache.get(source);
    const task=(async()=>{
      const image=new Image(); image.crossOrigin="anonymous";
      let url=source;
      if(/^https?:/i.test(source) && new URL(source,location.href).origin!==location.origin) url='/api/img?url='+encodeURIComponent(source);
      image.src=url; await image.decode();
      const ratio=Math.min(1,800/Math.max(image.naturalWidth,image.naturalHeight));
      const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*ratio));canvas.height=Math.max(1,Math.round(image.naturalHeight*ratio));
      const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(image,0,0,canvas.width,canvas.height);
      const pixels=ctx.getImageData(0,0,canvas.width,canvas.height);clearBackdrop(pixels.data,canvas.width,canvas.height);ctx.putImageData(pixels,0,0);
      let left=canvas.width,right=-1,top=canvas.height,bottom=-1;
      for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++)if(pixels.data[(y*canvas.width+x)*4+3]>20){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
      if(right<left || bottom<top) return source;
      const cropped=document.createElement('canvas');cropped.width=right-left+5;cropped.height=bottom-top+5;
      cropped.getContext('2d').drawImage(canvas,left,top,right-left+1,bottom-top+1,2,2,right-left+1,bottom-top+1);
      return cropped.toDataURL('image/png');
    })().catch(()=>source);
    cache.set(source,task);if(cache.size>100)cache.delete(cache.keys().next().value);
    return task;
  }
  async function hydrate(board){
    if(!board) return;
    // Sequential work keeps dragging responsive even on larger boards.
    for(const img of board.querySelectorAll('img[data-layer-source]')){
      const source=img.dataset.layerSource;
      const result=await preview(source);
      if(!img.isConnected) break;
      if(img.dataset.layerSource===source){img.src=result;img.dataset.layerReady='true';}
    }
  }
  root.FitsBoardLayers={clearBackdrop,snapPosition,reorderLayers,hydrate};
})(typeof window==='undefined'?globalThis:window);
