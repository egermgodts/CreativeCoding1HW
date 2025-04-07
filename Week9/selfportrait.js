function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(0,0,78);
    
    //head
    fill(88880,33330,6660);
    circle(250,120,140);

   
    //arms
    fill(1000,1000,1000);
    rect(280,195,90,20);
    rect(130,195,90,20);
  
    // legs
    rect(220,390,10,70);
    rect(260,390,10,70);

    //skirt
    fill(4000,0,3000);
    triangle(150,420,250,220,350,420);
    
    //body
    rect(215,190,70,100);

    //eyes
    fill(0);
    strokeWeight(10);
    point(230,110);
    point(280,110);

    //nose or mouth
    point(255,150);

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