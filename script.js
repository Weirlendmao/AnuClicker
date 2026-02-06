// ===== SAVE / LOAD =====
const saveKey = 'idleClickerSave';

function saveGame() {
  localStorage.setItem(saveKey, JSON.stringify({
    score,
    cursors,
    oyo,
    lc,
    cursorCost,
    oyoCost,
    lcCost,
    unlockedSkins,
    currentSkin
  }));
}

function loadGame() {
  const data = JSON.parse(localStorage.getItem(saveKey));
  if (!data) return;

  score = data.score ?? 0;
  cursors = data.cursors ?? 0;
  oyo = data.oyo ?? 0;
  lc = data.lc ?? 0;
  cursorCost = data.cursorCost ?? 15;
  oyoCost = data.oyoCost ?? 75;
  lcCost = data.lcCost ?? 250;
  unlockedSkins = data.unlockedSkins ?? { 0: true };
  currentSkin = data.currentSkin ?? 0;
}

// ===== GAME STATE =====
let score = 0;

let cursors = 0;
let oyo = 0;
let lc = 0;

let cursorCost = 15;
let oyoCost = 75;
let lcCost = 250;

let unlockedSkins = { 0: true };
let currentSkin = 0;

const MAX_SKINS = 300;

// ===== CORE =====
function addToScore(amount) {
  score += amount;
  checkSkinUnlock();
  updateUI();
  saveGame();
}

function buyCursor() {
  if (score >= cursorCost) {
    score -= cursorCost;
    cursors++;
    cursorCost = Math.round(cursorCost * 1.15);
    updateUI();
    saveGame();
  }
}

function buyOyo() {
  if (score >= oyoCost) {
    score -= oyoCost;
    oyo++;
    oyoCost = Math.round(oyoCost * 1.15);
    updateUI();
    saveGame();
  }
}

function buyLC() {
  if (score >= lcCost) {
    score -= lcCost;
    lc++;
    lcCost = Math.round(lcCost * 1.15);
    updateUI();
    saveGame();
  }
}

// ===== SKIN =====
function skinName(n) {
  return `images/skin_${n}.jpg`;
}

function checkSkinUnlock() {
  for (let i = 0; i < MAX_SKINS; i++) {
    if (!unlockedSkins[i] && score >= i * 100) {
      unlockedSkins[i] = true;
    }
  }
}

function selectSkin(n) {
  if (!unlockedSkins[n]) return;
  currentSkin = n;
  document.getElementById('mainSkin').src = skinName(n);
  saveGame();
}

function renderSkins() {
  const grid = document.getElementById('skinGrid');
  grid.innerHTML = '';

  for (let i = 0; i < MAX_SKINS; i++) {
    const img = document.createElement('img');
    img.src = skinName(i);

    if (!unlockedSkins[i]) {
      img.classList.add('skin-locked');
      img.title = `Unlock: ${i * 100}`;
    } else {
      img.onclick = () => selectSkin(i);
    }

    grid.appendChild(img);
  }
}

// ===== UI =====
function updateUI() {
  document.getElementById('score').innerText = score;
  document.getElementById('cursors').innerText = cursors + (oyo * 5) + (lc * 10);
  document.getElementById('cursorcost').innerText = cursorCost;
  document.getElementById('oyocost').innerText = oyoCost;
  document.getElementById('lccost').innerText = lcCost;
  document.getElementById('mainSkin').src = skinName(currentSkin);
  renderSkins();
}

// ===== TICK =====
setInterval(() => {
  score += cursors + (oyo * 5) + (lc * 10);
  checkSkinUnlock();
  updateUI();
  saveGame();
}, 1000);

// ===== INIT =====
loadGame();
updateUI();

