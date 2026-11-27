// Original explanatory layouts, never observed weather, official maps or UI mockups.
// Run explicitly when these retained SVG/PNG teaching assets need regeneration.
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const root = 'public/images/guides/';
const xml = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
function text(x, y, lines, size = 28, weight = 400, color = '#254653') {
  return lines.map((s,i) => `<text x="${x}" y="${y+i*size*1.45}" font-size="${size}" font-weight="${weight}" fill="${color}">${xml(s)}</text>`).join('');
}
function save(name, width, height, body, title) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title"><title id="title">${xml(title)}</title><rect width="100%" height="100%" fill="#f3f8fa"/><g font-family="Arial, sans-serif">${body}</g></svg>\n`;
  writeFileSync(root+name+'.svg',svg);
  writeFileSync(root+name+'.png',new Resvg(svg,{font:{loadSystemFonts:true,defaultFontFamily:'Arial'}}).render().asPng());
}
const workflows = [
  {name:'source-to-action', title:'Match the question to the source', intro:'Different checks answer different questions.', cards:[
    ['NHC: storm context',['Basin, storm identifier and advisory time','Position and forecast valid times']],
    ['NWS: local weather alerts',['Affected area, hazard and valid period','Read the protective instruction']],
    ['Local authority: action',['Address, zone and current order','Confirm transport and destination']]
  ], footer:['Radar and satellite add observation context.','A missing source is unavailable, not an all-clear.']},
  {name:'local-check-record', title:'Four records for a local check', intro:'A city name or storm distance cannot complete these fields.', cards:[
    ['1. Location',['Exact address and responsible county','ZIP point is not an evacuation zone']],
    ['2. Weather message',['Issuer, affected area and valid time','Keep the original warning link']],
    ['3. Local instruction',['Address lookup and current order','A standing zone is not an active order']],
    ['4. Arrangements',['Permitted route, ride and destination','Requested is different from confirmed']]
  ], footer:['Planning diagram only: no zones, routes or current orders shown.','Use the official resources linked in the guide.']},
  {name:'household-update-handoff', title:'Keep facts, tasks and replies separate', intro:'A blank household workflow, not an official emergency protocol.', cards:[
    ['SOURCE FACT',['Issuer / original link / issue time','Affected area / exact instruction']],
    ['HOUSEHOLD TASK',['Action / owner / backup contact','Official deadline vs household check-in']],
    ['CONFIRMATION',['Unconfirmed / requested / confirmed','Reply time / unresolved item / next check']]
  ], footer:['Keep contact, address and medical details private.','Recording a task does not postpone urgent protective action.']}
];
for(const w of workflows) for(const mobile of [false,true]) {
  const count=w.cards.length, width=mobile?720:1200;
  const height=mobile?280+count*270: count===4?900:720;
  let body=text(40,64,mobile?w.title==='Keep facts, tasks and replies separate'?['Keep facts, tasks and','replies separate']:w.title==='Match the question to the source'?['Match the question','to the source']:[w.title]:[w.title],mobile?36:42,700);
  const top=mobile?190:175;
  // On phones all explanatory text remains at readable intrinsic sizes.
  if(!mobile)body+=text(40,115,[w.intro],26);
  for(let i=0;i<count;i++){
    const x=mobile?32:count===4?40+(i%2)*580:40+i*386;
    const y=mobile?top+i*270:count===4?top+Math.floor(i/2)*290:top;
    const cw=mobile?656:count===4?550:350, ch=mobile?230:count===4?245:350;
    body+=`<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="14" fill="#fff" stroke="#9bb8c4" stroke-width="2"/><rect x="${x}" y="${y}" width="8" height="${ch}" fill="${['#176b87','#39734a','#ad5b23','#5a527c'][i]}"/>`;
    const [heading,lines]=w.cards[i];
    let hs=mobile?30:count===4?30:27;
    const hlines=!mobile&&count===3&&heading.length>24?heading==='Local authority: action'?['Local authority:','action']:heading==='NWS: local weather alerts'?['NWS: local','weather alerts']:[heading]:[heading];
    body+=text(x+24,y+48,hlines,hs,700);
    let wrapped=lines;
    if(!mobile&&count===3)wrapped=lines.flatMap(s=>{const words=s.split(' '),out=[''];for(const v of words){if((out.at(-1)+' '+v).trim().length>21)out.push(v);else out[out.length-1]=(out.at(-1)+' '+v).trim();}return out;});
    body+=text(x+24,y+(mobile?112:count===4?110:145),wrapped,mobile?28:count===4?27:26);
  }
  const footer=mobile?w.footer.flatMap(s=>{const words=s.split(' '),out=[''];for(const v of words){if((out.at(-1)+' '+v).trim().length>43)out.push(v);else out[out.length-1]=(out.at(-1)+' '+v).trim();}return out;}):w.footer;
  // Fit each footer without scaling the whole diagram or squeezing labels.
  const footerY=mobile?top+count*270+5:height-95;
  const actualHeight=mobile?Math.max(height,footerY+footer.length*34+35):height;
  body+=text(40,footerY,footer,mobile?24:26);
  save(w.name+(mobile?'-mobile':'-desktop'),width,actualHeight,body,w.title);
}

// Native-size raster derivatives of existing editable explanatory SVGs.
for(const name of ['radar-vs-satellite','atlantic-hurricane-season-timeline']) {
  writeFileSync(root+name+'.png',new Resvg(readFileSync(root+name+'.svg'),{font:{loadSystemFonts:true,defaultFontFamily:'Arial'}}).render().asPng());
}
save('radar-vs-satellite-mobile',720,920,
  text(36,65,['Radar or satellite?'],38,700)+
  '<rect x="32" y="110" width="656" height="290" rx="16" fill="#e7f3f7"/>'+text(60,165,['RADAR'],34,700)+text(60,225,['Precipitation echoes near coverage','Read the frame time and legend','Not a complete hurricane forecast'],28)+
  '<rect x="32" y="435" width="656" height="290" rx="16" fill="#edf5ee"/>'+text(60,490,['SATELLITE'],34,700)+text(60,550,['Cloud structure, including offshore','Read the product and frame time','Not a surface wind measurement'],28)+
  text(36,800,['Compare official advisories and local alerts.','Teaching comparison, not observed weather.'],26), 'Radar and satellite answer different questions');
save('atlantic-hurricane-season-timeline-mobile',720,840,
  text(36,65,['Atlantic season timing'],38,700)+text(36,125,['June 1 through November 30'],30)+
  '<path d="M65 360 H655" stroke="#176b87" stroke-width="6"/>'+['JUN','JUL','AUG','SEP','OCT','NOV'].map((m,i)=>text(49+i*107,410,[m],24)).join('')+
  '<path d="M405 345 V255" stroke="#ad5b23" stroke-width="4"/>'+text(230,220,['Historical peak: near September 10'],25,700)+
  '<rect x="32" y="485" width="656" height="265" rx="16" fill="#fff" stroke="#9bb8c4"/>'+text(58,540,['Timing is climate context'],32,700)+text(58,602,['Not this year’s storm count','Not a current formation forecast','Activity can occur outside these dates'],27), 'Atlantic season dates and historical peak; not a current forecast');
