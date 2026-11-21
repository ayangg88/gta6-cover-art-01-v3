export function paintSunset(c,w,h){
 const sky=c.createLinearGradient(0,0,0,h);
 for(const [stop,color] of [[0,'#27224b'],[.25,'#936086'],[.53,'#ee917a'],[.72,'#ffc274'],[1,'#433157']])sky.addColorStop(stop,color);
 c.fillStyle=sky;c.fillRect(0,0,w,h);c.globalAlpha=.15;
 for(let i=0;i<9;i++){c.fillStyle=i%2?'#ffd0a0':'#7c3b75';c.fillRect(0,h*(.28+i*.065),w,h*.025);}
 c.globalAlpha=1;
 const x=w*.68,y=h*.59,r=Math.min(w,h)*.19;
 const glow=c.createRadialGradient(x,y,r*.5,x,y,r*1.9);
 glow.addColorStop(0,'#ffcf8b99');glow.addColorStop(1,'#ffcf8b00');
 c.fillStyle=glow;c.fillRect(0,0,w,h);c.fillStyle='#ffdd99';c.beginPath();c.arc(x,y,r,0,7);c.fill();
 c.fillStyle='#302b46';
 const margin=w*.022,step=(w-2*margin)/45;
 for(let i=0;i<45;i++){const bh=(.025+((i*17)%13)/240)*h;c.fillRect(margin+i*step,h*.84-bh,step*.92,bh+h*.16);}
 function palm(px,scale,lean){
  // Keep every frond inside the frame, including the trunk's lean.
  const reach=scale*(150+Math.abs(lean))+margin;
  px=Math.max(reach,Math.min(w-reach,px));
  c.save();c.translate(px,h);c.scale(scale,scale);
  c.strokeStyle='#191e2b';c.fillStyle='#191e2b';c.lineWidth=15;
  c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(lean*.5,-140,lean,-320);c.stroke();
  for(let i=0;i<9;i++){
   const a=-Math.PI+i*.39;c.beginPath();c.moveTo(lean,-320);
   c.quadraticCurveTo(lean+Math.cos(a)*100,-320+Math.sin(a)*70,lean+Math.cos(a)*150,-275+Math.sin(a)*65);
   c.quadraticCurveTo(lean+Math.cos(a)*75,-300+Math.sin(a)*40,lean,-320);c.fill();
  }
  c.restore();
 }
 palm(w*.08,h/650,30);palm(w*.94,h/780,-20);palm(w*.15,h/1000,-10);
 c.strokeStyle='#342e46';c.lineWidth=w*.0015;
 for(let i=0;i<5;i++){
  const bx=w*(.40+i*.045),by=h*(.30+(i%3)*.035);
  c.beginPath();c.moveTo(bx-10,by+3);c.quadraticCurveTo(bx-5,by-5,bx,by);c.quadraticCurveTo(bx+5,by-5,bx+12,by+3);c.stroke();
 }
}
