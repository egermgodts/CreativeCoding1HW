var redColor = 500;
var greenColor = 5;
var blueColor = 400;

var x = 250;
var y = 200;
var textSize;

var movement1;
var movement2;
var movement3;
var movement4;

function setup()
{
    createCanvas(500, 600);

    movement1 = Math.floor(Math.random() * 5) + 1;
    movement2 = Math.floor(Math.random() * 6) + 1;
    movement3 = Math.floor(Math.random() * 7) + 2;
    movement4 = Math.floor(Math.random() * 8) + 1;
}

function draw()
{
    background(40,0,350)

    //head
    fill(88880,33330,6660);
    circle(x,120,140);
    if (x >= 800 || x <= 0) {
        movement1 *= -1;
      }
      x += movement1;
   
    //arms
    fill(1000,1000,1000);
    rect(280,y,90,20);
    rect(130,y,90,20);
    
        if (y >= 800 || y <= 0) {
        movement2 *= -1;
      }
      y += movement2;
   
    
    // legs
    rect(220,390,10,70);
    rect(260,390,10,70);

    //skirt
    fill(4000,0,3000);
    triangle(150,420,250,220,350,420);
    
    
    //body
    rect(x ,190,70,100);
    if (x >= 800 || x <= 0) {
        movement3 *= -1;
      }
      x += movement3;

    //eyes
    fill(0);
    strokeWeight(10);
    point(230,110);
    point(280,110);   

    //nose or mouth
    point(x, y);
     if (x >= 800 || x <= 0) {
        movement4 *= -1;
      }
      x += movement4;
    if (y >= 800 || y <= 0) {
        movement3 *= -1;
      }
      y += movement3;
    //hair
    fill(4000,20,150);
    ellipse(194,180,30,250);
    ellipse(320,180,30,250);
    ellipse(255,70,150,40);

    //signature
    textSize(32);
    fill(0,600,70000);
    text('Ella Ermgodts', 250, 590);

    //title
    text('Silly Little Ella!',10,30)
}