import {panelGeometry,sizes} from './looks.js';
import {paintSunset} from './sunset-sky.js';
import {drawPanel} from './panel.js';
import {finishEffects} from './effects.js';
import {titleBlock} from './lettering.js';
export function drawCover(canvas,s,photos,size=s.size){let [,w,h]=sizes[size];canvas.width=w;canvas.height=h;const c=canvas.getContext('2d');c.fillStyle='#171b24';c.fillRect(0,0,w,h);if(s.sky)paintSunset(c,w,h);const panels=panelGeometry(s.layout,w,h);panels.forEach((p,i)=>drawPanel(c,p,s.panels[i],photos[s.panels[i].photo],s,i));finishEffects(c,w,h,s);if(s.layout==='masthead'){const scrim=c.createLinearGradient(0,0,w*.55,0);scrim.addColorStop(0,'#131e26ad');scrim.addColorStop(1,'#131e2600');c.fillStyle=scrim;c.fillRect(0,0,w,h);}titleBlock(c,w,h,s);return panels;}
