const font='Impact, "Arial Narrow", "Liberation Sans Narrow", sans-serif';
export function textFit(c,text,x,y,width,size,fill,stroke=true,spacing=0){c.save();c.font=`900 ${size}px ${font}`;if('letterSpacing'in c)c.letterSpacing=spacing+'px';const squeeze=Math.min(1,width/Math.max(c.measureText(text).width,1));c.translate(x,y);c.scale(squeeze,1);if(Array.isArray(fill)){const gradient=c.createLinearGradient(0,-size,0,0);fill.forEach(([stop,color])=>gradient.addColorStop(stop,color));fill=gradient;}c.lineJoin='round';if(stroke){c.strokeStyle='#171a21';c.lineWidth=size*.045;c.shadowColor='#171a21';c.shadowOffsetX=size*.025;c.shadowOffsetY=size*.04;c.strokeText(text,0,0);c.shadowColor='transparent';}c.fillStyle=fill;c.fillText(text,0,0);c.restore();}
function burst(c,x,y,r,color){c.save();c.translate(x,y);c.rotate(-.13);c.beginPath();for(let i=0;i<48;i++){let a=i*Math.PI/24,rr=i%2?r*.88:r;c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr);}c.closePath();c.fillStyle=color;c.fill();c.strokeStyle='#242426';c.lineWidth=3;c.stroke();c.fillStyle='#242426';c.textAlign='center';c.font=`900 ${r*.30}px ${font}`;c.fillText('NOTHING',0,-r*.17);c.font=`900 ${r*.43}px ${font}`;c.fillText('TO LOSE',0,r*.27);c.font=`${r*.13}px Arial`;c.fillText('EVERYTHING TO LIVE FOR',0,r*.53);c.restore();}
export function titleBlock(c,w,h,s){const wide=w/h>1.35,mast=s.layout==='masthead',snap=s.layout==='snapshots',story=h/w>1.6,top=mast||snap;let y=top?h*(wide?.22:.15):story?h*.55:h*.87,size=(wide?w*(s.layout==='mosaic'?.11:.155):w*.18)*s.titleSize,x=w*.038,tw=w*.924;
 if(!top){c.fillStyle='#141820e8';c.fillRect(0,story?h*.405:h*.72,w,story?h*.2:h*.28);}else{const shade=c.createLinearGradient(0,0,0,h*.33);shade.addColorStop(0,'#191325b0');shade.addColorStop(1,'#19132500');c.fillStyle=shade;c.fillRect(0,0,w,h*.33);}
 let fill=s.titleStyle==='sunset'?[[0,'#fff0c3'],[.48,s.color],[1,'#d878a5']]:s.titleStyle==='chrome'?[[0,'#ffffff'],[.4,'#c6e3e5'],[.49,'#ffffff'],[.52,'#657b89'],[1,'#f0f3ed']]:s.titleStyle==='ink'?'#171b21':s.color;
 c.letterSpacing=s.spacing+'px';
 if(s.titleStyle==='neon'||s.titleStyle==='ink'){c.save();c.font=`900 ${size}px ${font}`;c.translate(x,y);c.scale(Math.min(1,tw/c.measureText(s.title.toUpperCase()).width),1);c.lineJoin='round';c.lineWidth=size*(s.titleStyle==='ink'?.06:.018);c.strokeStyle=s.titleStyle==='ink'?'#fff2d8':s.color;if(s.titleStyle==='neon'){c.shadowColor=s.color;c.shadowBlur=22;}c.strokeText(s.title.toUpperCase(),0,0);if(s.titleStyle==='ink'){c.fillStyle=fill;c.fillText(s.title.toUpperCase(),0,0);}c.restore();}else textFit(c,s.title.toUpperCase(),x,y,tw,size,fill,true,s.spacing);
 const tagY=y+h*.048;c.fillStyle='#fff2d8';c.font=`700 ${w*.014}px Arial`;c.letterSpacing=wide?'4px':'2px';c.fillText(s.tagline.toUpperCase(),x,tagY,tw);c.letterSpacing='0px';c.fillStyle=s.color;c.font=`${w*.019}px Arial`;c.fillText('★'.repeat(Number(s.heat))+'☆'.repeat(5-Number(s.heat)),x,tagY+h*.045);
 if(mast&&s.coverLines){let lineY=h*(wide?.43:.37);s.lines.forEach((line,i)=>{c.fillStyle=s.color;c.fillRect(x,lineY-h*.028,w*.028,h*.005);textFit(c,line.toUpperCase(),x,lineY+h*.027,w*(wide?.29:.61),w*(wide?.034:.057),'#fff4df');c.fillStyle='#f5e7cc';c.font=`${w*(wide?.009:.016)}px Arial`;c.fillText(['THE ART OF GETTING AWAY','GOOD TIMES. GREAT ESCAPES.','YOUR NEXT CHAPTER STARTS HERE'][i],x,lineY+h*.057,w*.45);lineY+=h*.16;});}
 if(mast)burst(c,w*.865,h*.76,Math.min(w,h)*.13,s.color);
 if(s.layout==='mosaic'){
  const bandY=story?h*.405:h*.72,bandH=story?h*.2:h*.28;
  c.fillStyle='#141820';c.fillRect(w*.48,bandY+bandH*.58,w*.49,bandH*.27);
  c.fillStyle='#ef91cc';c.font=`italic ${w*.026}px cursive`;
  c.fillText('after dark, before forever',w*.50,bandY+bandH*.78,w*.38);
  c.save();c.translate(w*.94,bandY+bandH*.73);c.rotate(-.13);
  const radius=Math.min(w*.024,bandH*.09);
  c.fillStyle=s.color;c.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2?radius*.58:radius;c.lineTo(Math.cos(a)*r,Math.sin(a)*r);}c.closePath();c.fill();
  c.fillStyle='#131820';c.font=`900 ${radius*.44}px Arial`;c.textAlign='center';c.fillText('NEW',0,radius*.16);c.restore();
 }
 if(snap){c.save();c.translate(w*.5,h*.93);c.rotate(-.025);c.fillStyle='#ffdb95';c.fillRect(-w*.43,-h*.042,w*.86,h*.073);c.fillStyle='#362b35';c.textAlign='center';c.font=`italic bold ${w*.027}px Georgia`;c.fillText(s.tagline,0,h*.008,w*.80);c.restore();}
 if(s.ribbon){
  const unit=Math.min(w,h),length=unit*.235,thickness=unit*.041;
  const inset=(length+thickness)/Math.SQRT2/2+unit*.028;
  c.save();c.translate(w-inset,inset);c.rotate(Math.PI/4);
  c.fillStyle=s.color;c.fillRect(-length/2,-thickness/2,length,thickness);
  c.fillStyle='#191c22';c.textAlign='center';c.textBaseline='middle';
  c.font=`900 ${unit*.018}px Arial`;c.fillText(s.ribbon,0,0,length*.84);c.restore();
 }
 c.fillStyle='#12181d';c.fillRect(0,h*.958,w,h*.042);c.fillStyle='#f6e8cc';c.font=`700 ${Math.min(w*.0095,h*.016)}px Arial`;c.letterSpacing='2px';c.fillText(s.issue,w*.038,h*.984,w*.78);c.textAlign='right';c.fillText('GH / 001',w*.962,h*.984);c.textAlign='left';c.letterSpacing='0px';
}
