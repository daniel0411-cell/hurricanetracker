// Original teaching compositions; no current forecast or official alert reproduced.
// Explicit authoring command: node scripts/gen-warning-guides.mjs
import { writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
const root = 'public/images/guides/';
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const text = (x,y,lines,size=30,bold=false) => lines.map((s,i)=>`<text x="${x}" y="${y+i*size*1.4}" font-size="${size}" font-weight="${bold?700:400}" fill="#163e50">${esc(s)}</text>`).join('');
function save(name,w,h,body,title){
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${esc(title)}</title><rect width="100%" height="100%" fill="#f3f8fa"/><g font-family="Arial, sans-serif">${body}</g></svg>\n`;
 writeFileSync(root+name+'.svg',svg);
 writeFileSync(root+name+'.png',new Resvg(svg,{font:{loadSystemFonts:true,defaultFontFamily:'Arial'}}).render().asPng());
}
for(const mobile of [false,true]){
 const w=mobile?720:1200, h=mobile?1130:850;
 let b=text(36,65,['Hurricane wind categories'],mobile?40:44,true);
 b+=text(36,120,mobile?['Maximum sustained wind only']:['Maximum sustained wind only — not a complete hazard score'],mobile?30:29);
 b+=text(42,196,['Category'],32,true)+text(mobile?245:365,196,['mph'],32,true)+text(mobile?470:720,196,['knots'],32,true);
 const rows=[['1','74–95','64–82'],['2','96–110','83–95'],['3','111–129','96–112'],['4','130–156','113–136'],['5','157+','137+']];
 rows.forEach((r,i)=>{
  const y=220+i*(mobile?112:85);
  b+=`<rect x="30" y="${y}" width="${w-60}" height="${mobile?96:72}" rx="10" fill="${i>=2?'#fff0dc':'#e3f1f4'}"/>`;
  b+=text(60,y+(mobile?60:48),[r[0]],mobile?38:34,true)+text(mobile?245:365,y+(mobile?60:48),[r[1]],mobile?36:32)+text(mobile?470:720,y+(mobile?60:48),[r[2]],mobile?36:32);
 });
 b+=text(36,mobile?840:710,mobile?['Categories 3–5 are major hurricanes.','Surge, rain and tornado hazards','need separate products and alerts.','No address-level damage prediction.']:['Categories 3–5 are major hurricanes.','Surge, rain and tornado hazards need separate products and alerts.','No address-level damage prediction.'],mobile?30:29);
 save('wind-category-reading-'+(mobile?'mobile':'desktop'),w,h,b,'Saffir-Simpson wind thresholds; wind only, not local water depth');
}
for(const mobile of [false,true]){
 const w=mobile?720:1200,h=mobile?1170:880;
 let b=text(36,65,mobile?['Watch / warning:','read the right clock']:['Watch / warning: read the right clock'],mobile?40:44,true);
 b+=text(36,mobile?195:125,mobile?['Usual issue lead times, not time left']:['Usual issue lead times before anticipated tropical-storm-force winds'],mobile?29:29);
 const axisY=mobile?290:260;
 b+=`<path d="M70 ${axisY} H${w-70}" stroke="#176b87" stroke-width="5"/>`;
 const xs=mobile?[70,215,650]:[70,335,1130];
 xs.forEach(x=>b+=`<path d="M${x} ${axisY-12} V${axisY+12}" stroke="#176b87" stroke-width="5"/>`);
 b+=text(40,axisY-30,['−48 h'],29,true)+text(mobile?185:305,axisY-30,['−36 h'],29,true)+text(w-112,axisY-30,['0 h'],29,true);
 b+=text(36,axisY+60,mobile?['0 h = anticipated tropical-storm-force','wind onset, NOT landfall']:['0 h = anticipated tropical-storm-force wind onset, NOT landfall'],mobile?29:30,true);
 const top=mobile?455:390;
 for(let i=0;i<2;i++){
  const x=mobile?30:30+i*585,y=top+(mobile?i*235:0),cw=mobile?660:555,ch=mobile?210:245;
  b+=`<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="14" fill="${i?'#fff0dc':'#e3f1f4'}" stroke="#91aebc"/>`;
  b+=text(x+24,y+50,[i?'WARNING: expected':'WATCH: possible'],32,true);
  b+=text(x+24,y+110,mobile?['Hurricane conditions in the stated area',i?'Usually issued 36 h before that onset':'Usually issued 48 h before that onset']:['Hurricane conditions in the stated area',i?'Usually issued 36 h before that onset':'Usually issued 48 h before that onset'],mobile?28:26);
 }
 b+=text(36,mobile?1000:720,mobile?['An old message does not restart the clock.','Read the latest area and instructions.','Local orders may require earlier action.']:['An old message does not restart the clock. Read the latest area and instructions.','Local evacuation orders may require earlier action; this is not a travel deadline.'],mobile?29:29);
 save('watch-warning-clock-'+(mobile?'mobile':'desktop'),w,h,b,'Hurricane watch and warning lead times share a tropical-storm-wind reference');
}
