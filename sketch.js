let img;

function preload(){
  img = loadImage('40f.png');
}

function setup() {
  frameRate(7);
  rectMode(CENTER);
  createCanvas(400, 400);
  }

function draw() {
  console.log(mouseX + ", " + mouseY);
  //let step = frameCount % 20;
  //translate(20, 20);
  //applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  //rect(0, 0, 50, 50);
  //console.log (mouseX + "," +mouseY);
  background(220,20,60);
  //image(img,0,0, img.width / 5, img.height / 5);
  
   //thunderbolt
  fill(255,255,0);
  if (mouseIsPressed){
  beginShape();
  vertex(27,0);
  vertex(0,57);
  vertex(41,94);
  vertex(9,195);
  vertex(96,93);
  vertex(48,48);
  vertex(72,0);
  vertex(27,0);
  endShape();
  
  beginShape();
  vertex(128,0);
  vertex(146,25);
  vertex(134,44);
  vertex(146,60);
  vertex(140,82);
  vertex(164,59);
  vertex(152,44);
  vertex(163,25);
  vertex(148,0);
  vertex(128,0);
  endShape();
  
  beginShape();
  vertex(198,0);
  vertex(186,26);
  vertex(206,43);
  vertex(195,64);
  vertex(211,95);
  vertex(214,64);
  vertex(228,40);
  vertex(207,21);
  vertex(218,0);
  vertex(198,0);
  endShape();
  
  beginShape();
  vertex(271,0);
  vertex(285,30);
  vertex(268,52);
  vertex(299,86);
  vertex(294,54);
  vertex(309,31);
  vertex(297,0);
  vertex(271,0)
  endShape();
  
  beginShape();
  vertex(330,0);
  vertex(354,55);
  vertex(332,119);
  vertex(376,198);
  vertex(370,119);
  vertex(400,55);
  vertex(375,0);
  endShape();
  }
  //body outline
  fill(244,208,63);
  noStroke();
  beginShape();
  vertex(44,58);
  quadraticVertex(108,75,152,124);
  quadraticVertex(198,117,236,122);
  quadraticVertex(315,81,360,77);
  quadraticVertex(317,148,288,162);
  quadraticVertex(312,224,321,300);
  vertex(102,300);
  vertex(107,284);
  quadraticVertex(84,243,89,217);
  quadraticVertex(94,195,110,156);
  quadraticVertex(72,120,44,58)
  endShape();
  
  //mouth
 fill(245,183,177);
 beginShape();
 vertex(172,245);
 quadraticVertex(172,230,190,230);
 quadraticVertex(208,226,209,247);
 quadraticVertex(209,259,193,260);
 quadraticVertex(177,258,172,245);
 endShape();
  
  //left ear details
  fill(0,0,0);
  beginShape();
  vertex(44,58);
  vertex(66,65);
  quadraticVertex(63,85,71,109);
  quadraticVertex(54,81,44,58);
  endShape();
  //right ear details
  beginShape();
  vertex(360,77);
  quadraticVertex(344,106,324,130);
  quadraticVertex(337,101,335,81);
  quadraticVertex(360,77);
  endShape();
  
  //nose
  ellipse(184,208,15,8);
  //eyes
  ellipse(143,186,22,26);
  ellipse(240,186,22,26);
  //pupils maybe -1 of right side pupil
  //fill(255,255,255);
  //ellipse(141,181,10,10);
  //ellipse(238,181,10,10);
  //cheeks
  fill(231,76,60);
  ellipse(110,226,34,28);
  ellipse(268,227,34,28);
  
  fill(255,255,255);
  let x1 = map(mouseX,0, width,141,145);
  ellipse(x1, 181, 10, 10);
  //This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
  let x2 = map(mouseX, 0, width, 238, 242, true);
  ellipse(x2, 181, 10, 10);
  }