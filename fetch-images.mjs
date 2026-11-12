import fs from 'node:fs/promises';
const files=['Ver-o-peso - Bélem - PA - Brasil.jpg','Estação das Docas - 2.jpg','Mangal das Garças - Belém-PA 04.jpg'];
await fs.mkdir('public/photos',{recursive:true});
for(let i=0;i<files.length;i++){
 const url='https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1280&titles='+encodeURIComponent('File:'+files[i]);
 const r=await fetch(url);const data=await r.json();const info=Object.values(data.query.pages)[0].imageinfo[0];
 await fs.writeFile('public/photos/'+i+'.jpg',Buffer.from(await (await fetch(info.thumburl||info.url)).arrayBuffer()));
 await fs.writeFile('public/photos/'+i+'.json',JSON.stringify(info,null,2));console.log(i,info.descriptionurl,info.extmetadata.LicenseShortName.value);
}
