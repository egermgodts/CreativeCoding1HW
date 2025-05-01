var x = 100;
var y = 100;
var x1 = 250;
var y1 = 50;
var movement1;
var movement2
var diameter = 25;
var mousex = 0;
var mousey = 0;
function setup()
{
    createCanvas(600,600);
    movement1 = Math.floor(Math.random() * 5) + 1;
    movement2 = Math.floor(Math.random() * 6) + 1;

}
function draw() 
{

  background(223,8,210);

  fill(0,100,0)
  rect(470,505,170,70)
  textSize(32);
  fill(0);
  text('EXIT -->', 475, 550);


  fill(20,40,0)
  circle(x1,120,140);
  if (x1 >= 800 || x1 <= 0) {
      movement1 *= -1;
    }
    x1 += movement1;

  if(keyIsDown(68))
  {
      x+=5;
  }
  if(keyIsDown(65))
  {
      x-=5;
  }
  if(keyIsDown(87))
    {
        y-=5;
    }
  if(keyIsDown(83))
  {
      y+=5;
  }
  fill(0,600,500)
  circle(x,y,25);
  fill(0)
  textSize(20)
  text('You!',x,y)

  fill(100000,0,0)
  circle(250,200,diameter)
  fill(0,70,90)
  circle(150,500,diameter)
  if(diameter <= 150)
    {
        diameter+=.5;
    }
      
    else if(diameter > 150 && diameter <= 300)
    {
        diameter +=2;
        console.log;
    }
    else if(diameter > 300)
    {
        diameter = 10;
    }

fill(90,0,35)
circle(40,y1,50)
if (y1 >= 800 || y1 <= 0) {
    movement2 *= -1;
  }
  y1 += movement2;
  

if (x > 590 && y > 505){
    fill(0)
    textSize(100)
    text("Winner!",150,300)
}
  fill(20,0,8)
    circle(mousex, mousey, 240);


}
function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
    
}
