const SAVE_KEY = "idle_clicker_fixed_full_v1";
const TOTAL_SKINS = 116;
const TOTAL_REWARDS = 25;

const BASE_UPGRADES = {
  cursor:{count:0,cps:1,cost:15},
  oyo:{count:0,cps:5,cost:75},
  lc:{count:0,cps:25,cost:250},
  beli:{count:0,cps:100,cost:750},
  sewa:{count:0,cps:250,cost:2000},
  bikin:{count:0,cps:550,cost:3000},
  remas:{count:0,cps:850,cost:5000},
  dikocokin:{count:0,cps:2500,cost:10000},
  basah:{count:0,cps:7500,cost:75000},
  tribute:{count:0,cps:15000,cost:100000},
  bareng:{count:0,cps:75000,cost:250000}, 
  super:{count:0,cps:200000,cost:500000},
  ultra:{count:0,cps:750000,cost:2000000},
  mega:{count:0,cps:2500000,cost:7500000},
  giga:{count:0,cps:10000000,cost:25000000},
  tera:{count:0,cps:50000000,cost:100000000}, 
  peta:{count:0,cps:250000000,cost:400000000},
  zeta:{count:0,cps:1200000000,cost:1500000000},
  exa:{count:0,cps:6000000000,cost:8000000000},
  nova:{count:0,cps:30000000000,cost:40000000000},
  omega:{count:0,cps:150000000000,cost:250000000000},
  singularity:{count:0,cps:800000000000,cost:1200000000000},
  ascension:{count:0,cps:4000000000000,cost:7000000000000},
  eternity:{count:0,cps:20000000000000,cost:40000000000000},
  apex:{count:0,cps:100000000000000,cost:250000000000000},
  infinity:{count:0,cps:500000000000000,cost:1000000000000000}
};

const RARITY = {
  common:{mult:1},
  rare:{mult:1.5},
  epic:{mult:2},
  legendary:{mult:3}
};

const talents = [{"name": "Jeni", "baseCost": 100, "baseClick": 1, "rarity": "common", "rebirthReq": 0}, {"name": "Anisa", "baseCost": 170, "baseClick": 2, "rarity": "common", "rebirthReq": 0}, {"name": "Tiara", "baseCost": 300, "baseClick": 3, "rarity": "common", "rebirthReq": 0}, {"name": "Katarina Apriliana Aren", "baseCost": 520, "baseClick": 5, "rarity": "common", "rebirthReq": 0}, {"name": "Piona", "baseCost": 900, "baseClick": 8, "rarity": "common", "rebirthReq": 0}, {"name": "Kornelia Septetian", "baseCost": 1600, "baseClick": 12, "rarity": "rare", "rebirthReq": 1}, {"name": "Vetronela Dara Pabayo", "baseCost": 2800, "baseClick": 18, "rarity": "rare", "rebirthReq": 1}, {"name": "Julia Aurel", "baseCost": 4800, "baseClick": 26, "rarity": "rare", "rebirthReq": 1}, {"name": "Nova", "baseCost": 8200, "baseClick": 38, "rarity": "rare", "rebirthReq": 1}, {"name": "Emilia Panita", "baseCost": 14000, "baseClick": 55, "rarity": "rare", "rebirthReq": 1}, {"name": "Utami", "baseCost": 24000, "baseClick": 80, "rarity": "epic", "rebirthReq": 2}, {"name": "Owe", "baseCost": 42000, "baseClick": 120, "rarity": "epic", "rebirthReq": 2}, {"name": "Arumi Widyaputri", "baseCost": 75000, "baseClick": 180, "rarity": "epic", "rebirthReq": 2}, {"name": "Anita", "baseCost": 130000, "baseClick": 270, "rarity": "epic", "rebirthReq": 2}, {"name": "Debora Malelak", "baseCost": 225000, "baseClick": 400, "rarity": "epic", "rebirthReq": 2}, {"name": "Rahel Glenny Passu", "baseCost": 380000, "baseClick": 600, "rarity": "legendary", "rebirthReq": 3}, {"name": "Clara Lena", "baseCost": 650000, "baseClick": 900, "rarity": "legendary", "rebirthReq": 3}, {"name": "Maria Olivia Veres", "baseCost": 1100000, "baseClick": 1350, "rarity": "legendary", "rebirthReq": 3}, {"name": "Paulina Desvita", "baseCost": 1850000, "baseClick": 2000, "rarity": "legendary", "rebirthReq": 3}, {"name": "Maria Rosary Laura", "baseCost": 3100000, "baseClick": 3000, "rarity": "legendary", "rebirthReq": 3}, {"name": "Natasya Lie", "baseCost": 5200000, "baseClick": 4500, "rarity": "legendary", "rebirthReq": 4}, {"name": "Jessica Varensia", "baseCost": 8700000, "baseClick": 6700, "rarity": "legendary", "rebirthReq": 4}, {"name": "Margareth Aca", "baseCost": 14500000, "baseClick": 10000, "rarity": "legendary", "rebirthReq": 4}, {"name": "Yuliana Emi", "baseCost": 24000000, "baseClick": 15000, "rarity": "legendary", "rebirthReq": 4}, {"name": "Aloisia Stepani", "baseCost": 40000000, "baseClick": 22500, "rarity": "legendary", "rebirthReq": 4}, {"name": "Christania Natasya", "baseCost": 67000000, "baseClick": 34000, "rarity": "legendary", "rebirthReq": 5}, {"name": "Clarisa Juniarti", "baseCost": 110000000, "baseClick": 51000, "rarity": "legendary", "rebirthReq": 5}, {"name": "Laura Kasih", "baseCost": 180000000, "baseClick": 76000, "rarity": "legendary", "rebirthReq": 5}, {"name": "Slevia Dramayanti", "baseCost": 300000000, "baseClick": 115000, "rarity": "legendary", "rebirthReq": 5}, {"name": "Nona", "baseCost": 500000000, "baseClick": 170000, "rarity": "legendary", "rebirthReq": 5}, {"name": "Selma Winata", "baseCost": 850000000, "baseClick": 250000, "rarity": "legendary", "rebirthReq": 6}, {"name": "Angela Uni Safitri", "baseCost": 1400000000, "baseClick": 380000, "rarity": "legendary", "rebirthReq": 6}, {"name": "Maria Vingka", "baseCost": 2300000000, "baseClick": 570000, "rarity": "legendary", "rebirthReq": 6}, {"name": "Theresia Chelsi Mega Safitri", "baseCost": 3800000000, "baseClick": 850000, "rarity": "legendary", "rebirthReq": 6}, {"name": "Stevany", "baseCost": 6200000000, "baseClick": 1250000, "rarity": "legendary", "rebirthReq": 6}, {"name": "Anong", "baseCost": 10000000000, "baseClick": 1900000, "rarity": "legendary", "rebirthReq": 7}, {"name": "Della Jane", "baseCost": 16000000000, "baseClick": 2800000, "rarity": "legendary", "rebirthReq": 7}];

const secretSkins = {
  Anisa:"scr_0.jpg", Aren:"scr_1.jpg", Varen:"scr_2.jpg", Dara:"scr_3.jpg", Panita:"scr_4.jpg", Aurel:"scr_5.jpg",
  Dala:"scr_6.jpg", Laura:"scr_7.jpg", PantatVeres:"scr_8.jpg", lala:"scr_9.jpg", Veres:"scr_10.jpg", Pantai:"scr_11.jpg"
};

let isLoaded = false, isResetting = false;
let score = 0;
let upgrades = JSON.parse(JSON.stringify(BASE_UPGRADES));
let talentLevel = {};
let talentClickBonus = 0;
let rebirthCount = 0;
let rebirthCpsMultiplier = 1;
let rebirthTalentMultiplier = 1;
let unlockedSkins = {0:true};
let unlockedRewards = {};
let unlockedSecrets = {};
let currentSkin = "skin_0.jpg";

function format(n){
  if(n < 1000) return Math.floor(n).toString();
  const u=["rb","jt","M","T","Qd","Qn","Sx","Sp","Oc","No","De"];
  let i=-1; while(n>=1000 && i<u.length-1){ n/=1000; i++; }
  return n.toFixed(2).replace(".00","")+" "+u[i];
}
function skinCost(n){
  if (n <= 0) return 0;
  if (n < 10) return n * 100;
  if (n < 20) return (n - 9) * 1000;
  if (n < 30) return (n - 19) * 10000;
  if (n < 40) return (n - 29) * 100000;
  if (n < 50) return (n - 39) * 1000000;
  if (n < 70) return 10000000 + (n - 49) * 2000000;
  return 50000000 + (n - 69) * 5000000;
}
function rewardThreshold(i){ return Math.pow(10, 6 + i * 2); }
function getRebirthCost(){ return 10000000 * Math.pow(2, rebirthCount); }

function rebuildTalentBonus(){
  talentClickBonus = 0;
  for(const i in talentLevel){
    const t = talents[i];
    const r = RARITY[t.rarity] || {mult:1};
    talentClickBonus += talentLevel[i] * t.baseClick * r.mult * rebirthTalentMultiplier;
  }
}

function clickObject(){
  const gain = Math.floor((1 + talentClickBonus) * (1 + rebirthCount * 0.2));
  score += gain; updateUI(); saveGame();
}
function buyUpgrade(k){
  const u = upgrades[k]; if(score < u.cost) return;
  score -= u.cost; u.count++; u.cost = Math.round(u.cost * 1.15);
  updateUI(); saveGame();
}
function buyTalent(i){
  const lvl = talentLevel[i] || 0;
  const cost = Math.floor(talents[i].baseCost * Math.pow(1.5, lvl));
  if(score < cost) return;
  score -= cost; talentLevel[i] = lvl + 1;
  rebuildTalentBonus(); updateUI(); saveGame();
}

function checkUnlocks(){
  let changed=false;
  for(let i=1;i<TOTAL_SKINS;i++){
    if(!unlockedSkins[i] && score>=skinCost(i)){ unlockedSkins[i]=true; changed=true; break; }
  }
  for(let r=0;r<TOTAL_REWARDS;r++){
    if(score>=rewardThreshold(r) && !unlockedRewards[r]){ unlockedRewards[r]=true; changed=true; }
  }
  if(changed){ renderRewards(); saveGame(); }
}

function renderSkins(){
  const g=document.getElementById("skinGrid");
  const f=document.getElementById("skinFilter").checked;
  g.innerHTML="";
  for(let i=0;i<TOTAL_SKINS;i++){
    if(f && !unlockedSkins[i]) continue;
    const img=document.createElement("img");
    img.src="images/skin_"+i+".jpg";
    if(!unlockedSkins[i]) img.className="locked";
    else img.onclick=()=>{ currentSkin="skin_"+i+".jpg"; updateUI(); saveGame(); };
    g.appendChild(img);
  }
}
function renderSecretSkins(){
  const g=document.getElementById("secretSkinGrid"); g.innerHTML="";
  for(const code in secretSkins){
    if(!unlockedSecrets[code]) continue;
    const img=document.createElement("img");
    img.src="images/"+secretSkins[code];
    img.onclick=()=>{ currentSkin=secretSkins[code]; updateUI(); saveGame(); };
    g.appendChild(img);
  }
}
function renderRewards(){
  const g=document.getElementById("rewardGrid"); g.innerHTML="";
  for(let i=0;i<TOTAL_REWARDS;i++){
    const box=document.createElement("div");
    box.className="reward-item "+(unlockedRewards[i]?"":"reward-locked");
    box.innerHTML=`<div class="reward-question">${unlockedRewards[i]?"▶":"?"}</div><div class="reward-cost">${unlockedRewards[i]?"UNLOCKED":format(rewardThreshold(i))}</div>`;
    if(unlockedRewards[i]) box.onclick=()=>openVideo(i);
    g.appendChild(box);
  }
}
function renderTalents(){
  const b=document.getElementById("talentList"); b.innerHTML="";
  talents.forEach((t,i)=>{
    const locked = rebirthCount < t.rebirthReq;
    const lvl = talentLevel[i] || 0;
    const cost = Math.floor(t.baseCost * Math.pow(1.5, lvl));
    const div=document.createElement("div");
    div.className="talent-card";
    div.innerHTML=`
      <div class="talent-image-box"><img src="talent/${i}.jpg" onerror="this.src='images/skin_0.jpg'"></div>
      <div class="talent-meta">
        <div class="name">${t.name} Lv.${lvl}</div>
        <button ${locked?"disabled":""} data-talent="${i}">${locked?("REBIRTH "+t.rebirthReq):format(cost)}</button>
      </div>`;
    b.appendChild(div);
  });
  b.querySelectorAll("[data-talent]").forEach(btn=>btn.onclick=()=>buyTalent(btn.dataset.talent));
}

function updateUI(){
  document.getElementById("score").innerText=format(score);
  const rawCps = Object.values(upgrades).reduce((a,u)=>a+u.count*u.cps,0);
  document.getElementById("cps").innerText=format(Math.floor(rawCps * rebirthCpsMultiplier));
  document.getElementById("rebirthInfo").innerText=`Rebirth: ${rebirthCount} | CPS x${rebirthCpsMultiplier.toFixed(2)} | Talent x${rebirthTalentMultiplier.toFixed(2)}`;
  document.getElementById("mainSkin").src="images/"+currentSkin;
  Object.keys(upgrades).forEach(k=>{ const el=document.getElementById(k+"Cost"); if(el) el.innerText=format(upgrades[k].cost); });
  const el=document.getElementById("rebirthCost"); if(el) el.innerText=format(getRebirthCost());
  renderTalents(); renderSkins();
}

function saveGame(){
  if(!isLoaded || isResetting) return;
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    score, upgrades, talentLevel, rebirthCount, rebirthCpsMultiplier, rebirthTalentMultiplier,
    unlockedSkins, unlockedRewards, unlockedSecrets, currentSkin
  }));
}
function loadGame(){
  const raw=localStorage.getItem(SAVE_KEY); if(!raw) return;
  const d=JSON.parse(raw);
  score = d.score || 0;
  upgrades = Object.assign(JSON.parse(JSON.stringify(BASE_UPGRADES)), d.upgrades||{});
  talentLevel = d.talentLevel || {};
  rebirthCount = d.rebirthCount || 0;
  rebirthCpsMultiplier = d.rebirthCpsMultiplier || (1+rebirthCount*0.25);
  rebirthTalentMultiplier = d.rebirthTalentMultiplier || (1+rebirthCount*0.15);
  unlockedSkins = d.unlockedSkins || {0:true};
  unlockedRewards = d.unlockedRewards || {};
  unlockedSecrets = d.unlockedSecrets || {};
  currentSkin = d.currentSkin || "skin_0.jpg";
  rebuildTalentBonus();
}

function buyRebirth(){
  const cost=getRebirthCost(); if(score<cost) return alert("Score tidak cukup");
  score=0; rebirthCount++;
  upgrades = JSON.parse(JSON.stringify(BASE_UPGRADES));
  unlockedSkins = {0:true}; unlockedRewards = {};
  rebirthCpsMultiplier = 1 + rebirthCount*0.25;
  rebirthTalentMultiplier = 1 + rebirthCount*0.15;
  rebuildTalentBonus(); updateUI(); saveGame();
}
let resetArmed=false;
function confirmReset(){
  if(!resetArmed){ alert("Klik RESET sekali lagi untuk hapus semua data"); resetArmed=true; return; }
  isResetting=true; localStorage.removeItem(SAVE_KEY); location.reload();
}

function openVideo(i){
  const v=document.getElementById("rewardVideo");
  v.src="video/Rwd_"+(i+1)+".mp4";
  document.getElementById("videoModal").classList.remove("hidden"); v.play();
}
function closeVideo(){
  const v=document.getElementById("rewardVideo"); v.pause(); v.src="";
  document.getElementById("videoModal").classList.add("hidden");
}

setInterval(()=>{
  const totalCps = Object.values(upgrades).reduce((a,u)=>a+u.count*u.cps,0);
  score += Math.floor(totalCps * rebirthCpsMultiplier);
  checkUnlocks(); updateUI(); saveGame();
},1000);

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("clickBtn").onclick = clickObject;
  document.querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>buyUpgrade(b.dataset.up));
  document.getElementById("submitSecretBtn").onclick = ()=>{
    const input=document.getElementById("secretInput"); const msg=document.getElementById("secretMsg");
    const code=input.value.trim();
    if(secretSkins[code] && !unlockedSecrets[code]){ unlockedSecrets[code]=true; msg.innerText="Secret terbuka!"; renderSecretSkins(); saveGame(); }
    else msg.innerText="Code tidak valid / sudah dipakai";
    input.value="";
  };
  document.getElementById("rebirthBtn").onclick = buyRebirth;
  document.getElementById("resetBtn").onclick = confirmReset;
  document.getElementById("closeVideoBtn").onclick = closeVideo;
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.onclick=()=>showSection(b.dataset.tab));
  loadGame(); isLoaded=true; renderRewards(); renderSecretSkins(); updateUI(); showSection("main");
});

function showSection(name){
  ["main","upgrade","talent","skin","reward","reset"].forEach(s=>{
    const el=document.getElementById("section-"+s);
    if(el) el.style.display = (s===name?"block":"none");
    document.querySelector(`[data-tab="${s}"]`)?.classList.toggle("active", s===name);
  });
}
