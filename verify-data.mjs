import assert from 'node:assert/strict';
import {accessData} from './src/accessibility.js';
assert.equal(accessData.length,3);
const matching=needs=>accessData.map((a,i)=>needs.every(n=>a.features.includes(n))?i:null).filter(i=>i!==null);
assert.deepEqual(matching(['lift']),[1,2]);
assert.deepEqual(matching(['braille']),[1]);
assert.deepEqual(matching(['libras']),[]);
assert.deepEqual(matching(['parking','toilet']),[1,2]);
for(const a of accessData){assert.ok(a.source.startsWith('https://'));assert.ok(a.rows.some(r=>r[1]==='Não confirmado'));assert.ok(a.questions.length>0)}
console.log('OK: filtros, combinação de recursos e indicação de dados não confirmados.');
