let birdImages = [];
let birdKeys = {};
let birdFiles = [
  "AnnasHummingbird", "BarredOwl", "CrestedCaracara", "Dunlin", "EuropeanStarling",
  "FerruginousHawk", "GunnisonSageGrouse", "HarrissHawk", "IndianPeafowl", "JuniperTitmouse",
  "Killdeer", "LaplandLonspur", "Merlin", "NashvilleWarbler", "Osprey",
  "PipingPlover", "Quetzal", "Razorbill", "StiltSandpiper", "TuftedTitmouse",
  "UplandSandpiper", "Veery", "Willet", "XinjiangGroundJay", "YellowbelliedSapsucker",
  "ZonetailedHawk"
];

function preload() {
  for (let i = 0; i < birdFiles.length; i++) {
    let letterCode = 65 + i; // A-Z keycodes
    let img = loadImage(`/Bird Picture/${birdFiles[i]}.jpg`);
    birdImages.push(img);
    birdKeys[letterCode] = {
      image: img,
      name: birdFiles[i]
    };
  }
}

function setup() {
  createCanvas(1250, 600);
  textAlign(CENTER, BOTTOM);
  textSize(32);
  fill(0);
  noStroke();
}

function draw() {
  background(255);
  for (let code in birdKeys) {
    if (keyIsDown(Number(code))) {
      let bird = birdKeys[code];
      image(bird.image, 25, 25, 1200, 550);
      text(bird.name.replace(/([A-Z])/g, ' $1').trim(), width / 2, height - 10);
      break; // Only show one bird at a time
    }
  }
}