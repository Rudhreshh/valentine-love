function showPara(num) {
  const paraBox = document.getElementById("paraBox");
  let text = "";

  if (num === 1) {
    text = `Heyy nybagam iruka  
idhudha namma Bayandhu bayandhgu eduthukita first photo ,

Nee kuda edukum podhu  
sekroo maadu nu sonna  
avulo payandhagoli nee...

Aana azhaguu dii neenu  
rombaa yeee  
kanmaniyeee 🧿💜`;
  }

  else if (num === 2) {
    text = `Indha photo paare  
namma IV pogum podhu  
first time ennoda kai ya pudichaa ,

naanu 96 padam paakum podhu la  
nenachenn ennoda over ra irukunu  
aana adhe feel neenu thottona  
naanu feel pannenn

adhoda first photo la  
olinju olinju eduthom  
aana idhu kodaikanal la  
nadu road la yellaru munnadiyu eduthadhuu

semma laa nee yee  
pokkishamm diii 🔮💜`;
  }

  else if (num === 3) {
    text = `Idhu guna cave ku munnadi eduthadhu maa  
appo kudaa nee photo eduka kuptaa  
naanu vandhge  
aana thoorama ninnen

pakkathula nikkama  
neenu enna paathu moracha  
nyabgam irukaa

apro raj abi la  
pakkathula ponu sonnaga  
naanum vandhe  
appo eduthom indha photo

idhula kuda paaru  
nee maharani maari okkandhu iruka...  
yeee azhaguuu radhiyeee 💜🌙`;
  }

  else if (num === 4) {
    text = `Idhu ennamo AI ya irundhalum  
ennoda roshmiii pannadhu  
enaku therinju

AI pannadhula  
master peice idhu ,

naanu unta  
nalla illanu dha sonnee  
aana adha paathu paathu  
yevulo rasichenu  
enaku dha azhagiii theriyumm 😄💜`;
  }

  else if (num === 5) {
    text = `HAAGAA  
idhudhaa ennoda recent fav,

adhulaa yee saami ooda face sa paaru  
kolandha kuda thothurumm  
avuloo cute ta irukaa

thalaila frangipani flower ooda  
chinna kolandha vida  
cute ta irukkaa

patuhhhh nee paaru  
unna thooki  
idhula vachu  
konja poren  
kolandha maari 😄💜`;
  }

  else if (num === 6) {
    text = `Unnoda individual photos la  
yee naanu adhigama rasicha photo na  
adhu idhudhaa pattuh maa,

adhavadhu oru ponnu  
azhaga irukalam  
aana naanu orunaal full la  
paakura level ku  
azhaga irundha  
enna pandradhu

chello neene solluu...

yeee chellaaa  
mysore paaku yeee  
mundhiri ladddoooo  
yeee rosee kuttyyy maaa 😄💜`;
  }

  paraBox.innerText = text;
  paraBox.style.display = "block";
  paraBox.scrollIntoView({ behavior: "smooth" });
}
