let birdImage = null;
let birdSong = null;
let birdName = null;
let lastKey = "start";
let currentName = "Please press a letter Key a-z";
let currentImage = null;


function preload() {
  birdImage = {
  start: loadImage('./Bird Picture/startimage.jpg'),
  a: loadImage('./Bird Picture/AnnasHummingbird.jpg'),
  b: loadImage('./Bird Picture/BarredOwl.jpg'),
  c: loadImage('./Bird Picture/CrestedCaracara.jpg'),
  d: loadImage('./Bird Picture/Dunlin.jpg'),
  e: loadImage('./Bird Picture/EuropeanStarling.jpg'),
  f: loadImage('./Bird Picture/FerruginousHawk.jpg'),
  g: loadImage('./Bird Picture/GunnisonSageGrouse.jpg'),
  h: loadImage('./Bird Picture/HarrissHawk.jpg'),
  i: loadImage('./Bird Picture/IndianPeafowl.jpg'),
  j: loadImage('./Bird Picture/JuniperTitmouse.jpg'),
  k: loadImage('./Bird Picture/Killdeer.jpg'),
  l: loadImage('./Bird Picture/LaplandLongspur.jpg'),
  m: loadImage('./Bird Picture/Merlin.jpg'),
  n: loadImage('./Bird Picture/NashvilleWarbler.jpg'),
  o: loadImage('./Bird Picture/Osprey.jpg'),
  p: loadImage('./Bird Picture/PipingPlover.jpg'),
  q: loadImage('./Bird Picture/Quetzal.jpg'),
  r: loadImage('./Bird Picture/Razorbill.jpg'),
  s: loadImage('./Bird Picture/StiltSandpiper.jpg'),
  t: loadImage('./Bird Picture/TuftedTitmouse.jpg'),
  u: loadImage('./Bird Picture/UplandSandpiper.jpg'),
  v: loadImage('./Bird Picture/Veery.jpg'),
  w: loadImage('./Bird Picture/Willet.jpg'),
  x: loadImage('./Bird Picture/XinjiangGroundJay.jpg'),
  y: loadImage('./Bird Picture/YellowbelliedSapsucker.jpg'),
  z: loadImage('./Bird Picture/ZonetailedHawk.jpg')
  };
  
  birdSong = {
  start: loadSound('./Bird Songs/AnnasHummingbird.mp4'),
  a: loadSound('./Bird Songs/AnnasHummingbird.mp4'),
  b: loadSound('./Bird Songs/BarredOwl.m4a'),
  c: loadSound('./Bird Songs/CrestedCaracara.m4a'),
  d: loadSound('./Bird Songs/Dunlin.m4a'),
  e: loadSound('./Bird Songs/EuropeanStarling.m4a'),
  f: loadSound('./Bird Songs/FerruginousHawk.m4a'),
  g: loadSound('./Bird Songs/GunnisonSageGrouse.m4a'),
  h: loadSound('./Bird Songs/HarrissHawk.m4a'),
  i: loadSound('./Bird Songs/IndianPeafowl.m4a'),
  j: loadSound('./Bird Songs/JuniperTitmouse.m4a'),
  k: loadSound('./Bird Songs/Killdeer.m4a'),
  l: loadSound('./Bird Songs/LaplandLongspur.m4a'),
  m: loadSound('./Bird Songs/Merlin.m4a'),
  n: loadSound('./Bird Songs/NashvilleWarbler.m4a'),
  o: loadSound('./Bird Songs/Osprey.m4a'),
  p: loadSound('./Bird Songs/PipingPlover.m4a'),
  q: loadSound('./Bird Songs/Quetzal.m4a'),
  r: loadSound('./Bird Songs/Razorbill.m4a'),
  s: loadSound('./Bird Songs/StiltSandpiper.m4a'),
  t: loadSound('./Bird Songs/TuftedTitmouse.m4a'),
  u: loadSound('./Bird Songs/UplandSandpiper.m4a'),
  v: loadSound('./Bird Songs/Veery.m4a'),
  w: loadSound('./Bird Songs/Willet.m4a'),
  x: loadSound('./Bird Songs/XinjiangGroundJay.m4a'),
  y: loadSound('./Bird Songs/YellowbelliedSapsucker.m4a'),
  z: loadSound('./Bird Songs/ZonetailedHawk.m4a')
  };

  birdName = {
  a: "Anna's Hummingbird",
  b: "Barred Owl",
  c: "Crested Caracara",
  d: "Dunlin",
  e: "European Starling",
  f: "Ferruginous Hawk",
  g: "Gunnison Sage Grouse",
  h: "Harris's Hawk",
  i: "Indian Peafowl",
  j: "Juniper Titmouse",
  k: "Killdeer",
  l: "Lapland Longspur",
  m: "Merlin",
  n: "Nashville Warbler",
  o: "Osprey",
  p: "Piping Plover",
  q: "Quetzal",
  r: "Razorbill",
  s: "Stilt Sandpiper",
  t: "Tufted Titmouse",
  u: "Upland Sandpiper",
  v: "Veery",
  w: "Willet",
  x: "Xinjiang Ground Jay",
  y: "Yellowbellied Sapsucker",
  z: "Zonetailed Hawk"
  };
 
}

function setup() {
  createCanvas(1250, 600);
}

function draw()
{
background(0,50,0);
fill(10000)
textSize(32);
text(currentName, 450, 40);
image(birdImage[lastKey], 25, 50, 1200, 550);
   

}

 
function keyPressed()
{
 
      if (birdSong[lastKey].isPlaying()) {
      birdSong[lastKey].stop();
    }

      currentName = birdName[key];
      birdSong[key].play();
      lastKey = key;
 
}