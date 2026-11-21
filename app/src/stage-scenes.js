import {looks} from './looks.js';
export function stageScene(s){const shot=new URLSearchParams(location.search).get('shot');if(!shot)return null;s.size=shot==='portrait'?1:shot==='square'?0:2;const look=shot==='cover-a'?0:shot==='cover-b'?1:2;Object.assign(s,looks[look],{look});if(shot!=='editor')document.body.classList.add('shot');return shot;}
