function setup() {
  createCanvas(1200,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  textSize(25);
  fill("aqua");
  textFont("italic");
  text("INDIAN INTERNATIONAL CLOCK ",440,120);
 
  


  textSize(17);
  fill("orange");
  textFont("italic");
  text("ORANGE COLOUR - HOUR HAND",460,140);

  textSize(17);
  fill("white");
  textFont("italic");
  text("WHITE COLOUR - MINUTE HAND",490,160);

  textSize(17);
  fill("lime");
  textFont("italic");
  text("LIME COLOUR - SECOND HAND",520,180);

  translate(200,200);
  rotate(-90);
 let hr = hour();
 let mn = minute();
 let sc = second();

 strokeWeight(8);
 stroke("Lime");
 noFill();

 let secondAngle = map(sc,0,60,0,360);
 arc(0, 0, 300, 300, 0, secondAngle);

 stroke("white");
 let minuteAngle = map(mn,0,60,0,360);
 arc(0, 0, 280, 280, 0, minuteAngle);

 stroke("orange");
 let hourAngle = map(hr % 12, 0, 12, 0, 360);
 arc(0, 0, 260, 260, 0, hourAngle);

 push();
 rotate(secondAngle);
 stroke("orange");
 line(0,0,100,0);
 pop();

 push();
 rotate(minuteAngle);
 stroke("green");
 line(0,0,75,0);
 pop();

 push();
 rotate(hourAngle);
 stroke("white");
 line(0,0,50,0);
 pop();

 stroke(255);
 point(0,0);

 push();
 fill(255);
 noStroke();
 rotate(90);
 textSize(30);
 textAlign(CENTER);
 text(hr + ':' + mn + ':' + sc,10,190);
 pop();

 

 drawSprites();
}