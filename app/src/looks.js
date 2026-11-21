export const sizes=[['Square',1080,1080],['Portrait',1080,1350],['Wide',1920,1080],['Story',1080,1920],['Social',1200,628]];
export const layouts={masthead:'Masthead',mosaic:'Mosaic · 8 panels',grid:'Nine-panel grid',hero:'Hero and three',snapshots:'Tilted snapshots',bleed:'Full-bleed hero'};
export const looks=[{name:'Masthead',layout:'masthead',grade:'gold',titleStyle:'sunset',sky:true},{name:'Mosaic Chrome',layout:'mosaic',grade:'neon',titleStyle:'chrome',sky:true},{name:'Snapshot Sunset',layout:'snapshots',grade:'sunset',titleStyle:'ink',sky:true}];
export function initialState(){return {look:2,...looks[2],title:'GOLDEN HOUR',tagline:'A SUNSET HEIST STORY',ribbon:'LAUNCH WEEK',heat:5,color:'#ffc571',titleSize:1,spacing:0,lines:['OFF THE CLOCK.','ON THE EDGE.','THE COAST IS CLEAR.'],issue:'ISSUE 01 • LAUNCH WEEK • $0.00',coverLines:true,vignette:true,texture:true,size:2,selected:0,panels:Array.from({length:9},(_,i)=>({photo:i%2,x:0,y:0,zoom:1}))};}
export function panelGeometry(layout,w,h){const wide=w/h>1.35,story=h/w>1.6,g=9;const r=(x,y,w,h,angle=0)=>({x,y,w,h,angle});
 if(layout==='masthead'||layout==='bleed')return[r(0,0,w,h)];
 if(layout==='snapshots')return wide?[r(w*.09,h*.24,w*.30,h*.61,-.10),r(w*.36,h*.19,w*.29,h*.67,.06),r(w*.65,h*.27,w*.27,h*.58,.13)]:[r(w*.09,h*.22,w*.59,h*.32,-.12),r(w*.33,h*.40,w*.58,h*.32,.10),r(w*.10,h*.57,w*.57,h*.30,-.07)];
 if(layout==='grid'){const cw=(w-4*g)/3,ch=(h*.73-4*g)/3;return Array.from({length:9},(_,i)=>r(g+(i%3)*(cw+g),story?h*[0,.22,.65][Math.floor(i/3)]:g+Math.floor(i/3)*(ch+g),cw,story?h*.21:ch));}
 if(layout==='hero'){if(wide)return[r(0,0,w*.70-g,h),...Array.from({length:3},(_,i)=>r(w*.70,i*h/3+g/2,w*.30-g,h/3-g))];if(story)return[r(g,g,w-2*g,h*.4),...Array.from({length:3},(_,i)=>r(g,h*(.58+i*.14),w-2*g,h*.14-g))];return[r(g,g,w-2*g,h*.62),...Array.from({length:3},(_,i)=>r(g+i*w/3,h*.62+g,w/3-2*g,h*.38-2*g))];}
 if(wide)return[r(0,0,w*.49,h*.50),r(w*.495,0,w*.245,h*.50),r(w*.745,0,w*.255,h*.50),...Array.from({length:5},(_,i)=>r(i*w/5,h*.51,w/5-g,h*.22))];
 if(story)return[r(0,0,w,h*.39),r(0,h*.61,w*.495,h*.22),r(w*.505,h*.61,w*.495,h*.22),...Array.from({length:5},(_,i)=>r(i*w/5,h*.84,w/5-g,h*.16))];
 return[r(0,0,w,h*.35),r(0,h*.36,w*.495,h*.19),r(w*.505,h*.36,w*.495,h*.19),...Array.from({length:5},(_,i)=>r(i*w/5,h*.56,w/5-g,h*.17))];
}
