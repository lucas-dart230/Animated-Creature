let xPos=-100

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(16,42,133);
  
  fill(118,85,43);
  noStroke();
  rect(0,300,400,100);
  
  //Squid Body
  fill(245,180,189)
  ellipse(xPos-200,150,130,90);
  ellipse(xPos-200,181,110,170);
  
  //Squid OuterEye
  fill(1000)
  ellipse(xPos-200,180,50,40)
  
  //Squid Pupil
  fill(0)
  ellipse(xPos-200,180,25,30)
  
  //Line
  stroke(199,14,32)
  line(xPos+1000,xPos+1,xPos-200,200)
  xPos= xPos + 0.5
  
  //Forehead Gem
  fill(255,128,144)
  stroke(205,130)
  rect(xPos-205,130,10,10)
  
  //Squid Tentacles
  fill(245,180,189)
  noStroke()
  ellipse(xPos-150,280,10,150)
  ellipse(xPos-160,280,10,150)
  ellipse(xPos-170,280,10,150)
  ellipse(xPos-180,280,10,150)
  ellipse(xPos-190,280,10,150)
  ellipse(xPos-200,280,10,150)
  ellipse(xPos-210,280,10,150)
  ellipse(xPos-220,280,10,150)
  ellipse(xPos-230,280,10,150)
  ellipse(xPos-240,280,10,150)
  ellipse(xPos-250,280,10,150)
  
}