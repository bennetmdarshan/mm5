import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=fs.readFileSync(path.join(root,'data.js'),'utf8');
const context={};vm.runInNewContext(data+'\nthis.caseData=CASE;',context);
const c=context.caseData;
assert.equal(c.guests.length,4);assert.equal(c.evidence.length,7);
const assets=['hero','sunset','watch',...c.guests.map(g=>g.id),...c.evidence.map(f=>f.id),...c.roomImages,...c.itemImages];
for(const name of new Set(assets))assert.ok(fs.statSync(path.join(root,'assets',name+'.webp')).size>0,`Missing artwork ${name}`);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const m of html.matchAll(/(?:src|href)="((?:assets\/[^"#]+)|(?:styles\.css|app\.js|data\.js))"/g))assert.ok(fs.existsSync(path.join(root,m[1])),`Missing local dependency ${m[1]}`);
new vm.Script(data);new vm.Script(fs.readFileSync(path.join(root,'app.js'),'utf8'));
assert.equal(c.loveMessage,"You are beautiful than all the sunsets I'll get to spend watching with you");
function permutations(a){if(!a.length)return [[]];return a.flatMap((v,i)=>permutations(a.filter((_,j)=>i!==j)).map(p=>[v,...p]));}
const permutations4=permutations([0,1,2,3]),solutions=[];
for(const room of permutations4)for(const item of permutations4){
 // Four guests: Mara, Theo, Iris, Hugo. Room/item indices follow data.js.
 if(room[3]!==1)continue; // Conductor: Hugo in ballroom.
 if(item[2]!==2)continue; // Property observation: Iris holds ribbon.
 if(item[room.indexOf(3)]!==3)continue; // Conservatory guest has fountain pen.
 if(room[1]===0||room[1]===2)continue; // Porter: Theo neither library nor gallery.
 if(room[0]===3)continue; // Witness: Mara not conservatory.
 if(item[room.indexOf(0)]!==0)continue; // Doctor: library guest has candlestick.
 solutions.push({room,item});
}
assert.equal(solutions.length,1,'The case must have exactly one complete assignment.');
const solved=solutions[0];assert.deepEqual(solved.room,[0,3,2,1]);assert.deepEqual(solved.item,[0,3,2,1]);
assert.equal(solved.room.indexOf(0),c.solution.person);assert.equal(c.solution.room,0);assert.equal(c.solution.item,0);assert.equal(c.solution.motive,1);
const imageBytes=fs.readdirSync(path.join(root,'assets')).filter(n=>n.endsWith('.webp')).reduce((sum,n)=>sum+fs.statSync(path.join(root,'assets',n)).size,0);
console.log(`PASS: ${new Set(assets).size} image assets; local dependencies and JavaScript syntax; exact final message; one unique complete puzzle solution. Artwork: ${(imageBytes/1e6).toFixed(2)} MB.`);
