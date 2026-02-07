const SAVE_KEY = "idle_clicker_save";

/* STATE */
var score = 0;
var clickMultiplier = 1;
var rebirthCount = 0;
var currentSkin = "skin_0.jpg";

var upgrades = {
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
  bareng:{count:0,cps:75000,cost:25000}
};

var talents = [
  {name:"Yuliana Wiwi",cost:30},{name:"Anisa",cost:150},
  {name:"Tiara",cost:300},{name:"Katarina Apriliana Aren",cost:1000},
  {name:"Piona",cost:1750},{name:"Kornelia Septetian",cost:3000},
  {name:"Vetronela Dara Pabayo",cost:5000},{name:"Julia Aurel",cost:10000},
  {name:"Nova",cost:17500},{name:"Emilia Panita",cost:30000}, {name:"utami",cost:50000},
  {name:"Owe",cost:100000}
];

var secretSkins = {
  Anisa:"scr_0.jpg", Aren:"scr_1.jpg",
  Varen:"scr_2.jpg", Wiwi:"scr_3.jpg", Panita:"scr_4.jpg", Aurel:"scr_5.jpg",
  Anong:"scr_6.jpg"
};

var boughtTalents = {};
var unlockedSkins = {0:true};
var unlockedSecrets = {};
var unlockedRewards = {};

function format(n){
  if(n < 1000) return n;
  var u=["rb","jt","M","T"];
  var i=-1;
  while(n>=1000 && i<u.length-1){ n/=1000; i++; }
  return n.toFixed(2).replace(".00","")+" "+u[i];
}

/* COST SKIN – APK SAFE */
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

/* CLICK */
function clickObject(e){
  score += clickMultiplier;
  floatingText(e);
  checkUnlocks();
  updateUI(); saveGame();
}

function floatingText(e){
  var t=document.createElement("div");
  t.className="floating";
  t.innerText="+"+clickMultiplier;
  t.style.left=e.clientX+"px";
  t.style.top=e.clientY+"px";
  document.body.appendChild(t);
  setTimeout(function(){t.remove();},1000);
}

/* UPGRADE */
function buyUpgrade(k){
  var u=upgrades[k];
  if(score>=u.cost){
    score-=u.cost;
    u.count++;
    u.cost=Math.round(u.cost*1.15);
    updateUI(); saveGame();
  }
}

/* TALENT */
function buyTalent(i){
  if(boughtTalents[i]) return;
  if(score>=talents[i].cost){
    score-=talents[i].cost;
    boughtTalents[i]=true;
    clickMultiplier*=3;
    updateUI(); saveGame();
  }
}

function renderSecretSkins(){
  const g = document.getElementById("secretSkinGrid");
  g.innerHTML = "";

  for (const code in secretSkins){
    if (!unlockedSecrets[code]) continue;

    const img = document.createElement("img");
    img.src = "images/" + secretSkins[code];
    img.onclick = () => {
      currentSkin = secretSkins[code];
      updateUI();
      save();
    };

    g.appendChild(img);
  }
}

/* REWARD */
function rewardThreshold(i){
  if(i===0) return 1000000;
  if(i===1) return 1000000000;
  if(i===2) return 1000000000000;
  return Math.pow(10,6+i*3);
}

function checkUnlocks(){
  for(var i=1;i<200;i++){
    if(!unlockedSkins[i] && score>=skinCost(i)){
      unlockedSkins[i]=true;
      break;
    }
  }
  for(var r=0;r<10;r++){
    if(score>=rewardThreshold(r)) unlockedRewards[r]=true;
  }
}

function submitSecret(){
  const input = document.getElementById("secretInput");
  const msg = document.getElementById("secretMsg");
  const code = input.value.trim();

  if(secretSkins[code] && !unlockedSecrets[code]){
    unlockedSecrets[code] = true;
    msg.innerText = "Secret skin unlocked!";
    renderSecretSkins();
    save();
  } else {
    msg.innerText = "Code tidak valid / sudah dipakai";
  }

  input.value = "";
}

/* RENDER */
function renderSkins(){
  var g=document.getElementById("skinGrid");
  var f=document.getElementById("skinFilter").checked;
  g.innerHTML="";
  for(var i=0;i<200;i++){
    if(f && !unlockedSkins[i]) continue;
    var img=document.createElement("img");
    img.src="images/skin_"+i+".jpg";
    if(!unlockedSkins[i]) img.className="locked";
    else img.onclick=(function(n){
      return function(){ currentSkin="skin_"+n+".jpg"; updateUI(); saveGame(); };
    })(i);
    g.appendChild(img);
  }
}

function renderRewards(){
  var g=document.getElementById("rewardGrid");
  g.innerHTML="";
  for(var i=0;i<10;i++){
    var box=document.createElement("div");
    box.className="reward-item";

    var v=document.createElement("video");
    v.src="video/Rwd_"+(i+1)+".mp4";
    v.muted=true;
    v.loop=true;
    v.preload="metadata";

    v.onmouseenter = () => v.play();
    v.onmouseleave = () => v.pause();

    var o=document.createElement("div");
    o.className="reward-overlay";
    o.innerText=unlockedRewards[i]?"UNLOCKED":format(rewardThreshold(i));

    if(unlockedRewards[i]) {
      box.onclick=(function(n){
        return function(){openVideo(n);};
      })(i);
    }

    box.appendChild(v);
    box.appendChild(o);
    g.appendChild(box);
  }
}


function renderTalents(){
  var b=document.getElementById("talentList");
  b.innerHTML="";
  for(var i=0;i<talents.length;i++){
    b.innerHTML+=
      '<div class="talent"><span>'+talents[i].name+
      '</span><button '+(boughtTalents[i]?"disabled":"")+
      ' onclick="buyTalent('+i+')">'+format(talents[i].cost)+'</button></div>';
  }
}

/* SAVE */
function saveGame(){
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    score,
    clickMultiplier,
    rebirthCount,
    currentSkin,
    upgrades,
    boughtTalents,
    unlockedSkins,
    unlockedRewards,
    unlockedSecrets
  }));
}

function loadGame(){
  var d = JSON.parse(localStorage.getItem(SAVE_KEY));
  if(!d) return;

  score = d.score || 0;
  clickMultiplier = d.clickMultiplier || 1;
  rebirthCount = d.rebirthCount || 0;
  currentSkin = d.currentSkin || "skin_0.jpg";
  upgrades = d.upgrades || upgrades;
  boughtTalents = d.boughtTalents || {};
  unlockedSkins = d.unlockedSkins || {0:true};
  unlockedRewards = d.unlockedRewards || {};
  unlockedSecrets = d.unlockedSecrets || {};
}

/* RESET */
var resetArmed=false;
function confirmReset(){
  if(!resetArmed){ alert("Klik RESET sekali lagi untuk hapus semua data"); resetArmed=true; return; }
  localStorage.clear(); location.reload();
}

/* REBIRTH */
function buyRebirth(){
  var cost=10000000*Math.pow(2,rebirthCount);
  if(score<cost) return alert("Score tidak cukup");
  score=0; rebirthCount++; clickMultiplier*=2;
  upgrades=JSON.parse(JSON.stringify(upgrades));
  boughtTalents={}; unlockedSkins={0:true}; unlockedRewards={};
  updateUI(); saveGame();
}

/* VIDEO */
function openVideo(i){
  var v=document.getElementById("rewardVideo");
  v.src="video/Rwd_"+(i+1)+".mp4";
  document.getElementById("videoModal").classList.remove("hidden");
  v.play();
}
function closeVideo(){
  var v=document.getElementById("rewardVideo");
  v.pause(); v.src="";
  document.getElementById("videoModal").classList.add("hidden");
}

/* LOOP */
setInterval(function(){
  for(var k in upgrades) score+=upgrades[k].count*upgrades[k].cps;
  checkUnlocks(); updateUI(); saveGame();
},1000);

function updateUI(){
  document.getElementById("score").innerText=format(score);
  document.getElementById("cps").innerText=format(
    Object.values(upgrades).reduce(function(a,u){return a+u.count*u.cps;},0)
  );
  document.getElementById("mainSkin").src="images/"+currentSkin;
  document.getElementById("rebirthInfo").innerText="Rebirth: "+rebirthCount;
  for(var k in upgrades){
    document.getElementById(k+"Cost").innerText=format(upgrades[k].cost);
  }
  renderTalents(); renderSkins(); renderRewards();
}

loadGame();
updateUI();