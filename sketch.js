/*
	Week 4: Glitch Image Arrays
	by Taylor Malligan

	Using p5.js to create interactive slides
*/


//creating variabkles for my statees
let r;
let g;
let b;

let col = {
  
  r: 250,
  g: 76,
  b: 206
};


let dot = {
  x: 50,
  y: 50,
  size: 20
};

let extraCanvas; //create new canvas

//create state variables
var state;
var static = 0;
var state1 = 1;
var state2 = 2;
var state3 = 3;
var state4 = 4;
var state5 = 5;
var state6 = 6;

// preload() will execture before setup()
function preload() {
  img1 = loadImage('assets/image1.jpg'); // Load the image
  img2 = loadImage('assets/image2.jpg');
  img3 = loadImage('assets/image3.jpg');
  img4 = loadImage('assets/image4.jpg');
  img5 = loadImage('assets/image5.jpg');
  img6 = loadImage('assets/image6.jpg');
}

let timeStarted;
function setup() {
	imageMode(CENTER);
	print("");
	print(img1);

	createCanvas(1024, 800);
	frameRate(8);
	background(20,250,230);
	smooth();

//	timeStarted = millis();

	state = static;
}

function draw() {
	//
	background(0);
if (state == static) {
	drawStatic();
}
else if (state == state1) {
     drawImage1(); 
 	}
 else if (state == state2) {
 	drawImage2();
 	
 	}
else if (state == state3) {
  	drawImage3();

 }
 else if(state == state4){
 	drawImage4();

 }
 else if (state == state5){
 	drawImage5();
 }
 else if(state == state6){
 	drawImage6();
 }

else{
  	drawStatic();
  	}

}
//static state function
function drawStatic(){
	dot.x = random(0, width);
	dot.x = random(0, width);
  	dot.y = random(0, 350);
  	dot.size = random(3, 88);
  	col.r = random(9, 59);
  	col.g = random(232, 15);
  	col.b = random(242, 166);
  	fill(col.r, col.g, col.b);
  	noStroke();
  	ellipse(dot.x, dot.y, dot.size);


	textSize(200);
	fill(249, 250, 250 );
	text('travel',200, 300);
	fill(37, 162, 212 );
	text('travel',200, 350);
	fill(82, 240, 218);
	text('travel', 200, 400);
}
//image 1 state 
function drawImage1(){	
	background(random(25), random(216), random(62));
	image(img1, width/2, height/2);
}

//image 2 state
function drawImage2(){
	dot.x = random(0, width);
	dot.x = random(0, width);
  	dot.y = random(0, 850);
  	dot.size = random(3, 88);
  	rect(dot.x, dot.y, 380,40);
	rect(dot.x, dot.y, 510,40);
	image(img2, width/2, height/2);
	
}

 //image 3 background
function waveBackground(){ //wave referenced from p5.js library
	let xspacing = 16; // Distance between each horizontal location
	let w; // Width of entire wave
	let theta = 0.0; // Start angle at 0
	let amplitude = 75.0; // Height of wave
	let period = 500.0; // How many pixels before the wave repeats
	let dx; // Value for incrementing x
	let yvalues; // Using an array to store height values for the wave


	 theta += 0.02; 
	  // For every x value, calculate a y value with sine function
	  let x = theta;
	  for (let i = 0; i < yvalues; i++) {
	    yvalues[i] = sin(x) * amplitude;
	    x += dx;
	  }

	  noStroke();
	  fill(255);
	  // A simple way to draw the wave with an ellipse at each location
	  for (let x = 0; x < yvalues; x++) {
	    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
		}
}

//image 3 state
function drawImage3(){
	//waveBackground();
	image(img3, width/2, height/2);
	waveBackground();
}

//image 4 state
function drawImage4(){
	image(img4, width/2, height/2);
	push();
    translate(350,400);
    rotate(radians(frameCount));
    textSize(50);
    fill(247, 23, 8)
    text("yyyuuuuuummmm", 0,0);
	pop();	
}

//image 5 state
function drawImage5(){
	image(img5, width/2, height/2);
	fill(242, 177, 62);
	stroke(242, 147, 62);
	strokeWeight(10);
	// rect(100, 140, 380,40);
	// rect(450, 600, 510,40);
	dot.x = random(0, width);
	dot.x = random(0, width);
  	dot.y = random(0, 850);
  	dot.size = random(3, 88);
  	rect(dot.x, dot.y, 380,40);
	rect(dot.x, dot.y, 510,40);
  	noStroke();
}

//image 6 state
function drawImage6(){ 
//background circles get big/small  using mouseX/mouseY
 	let x = mouseX;
  	let y = mouseY;
  	let ix = width - mouseX;  // Inverse X
  	let iy = height - mouseY; // Inverse Y
  	background(0);
  	fill(211, 97, 250);
  	ellipse(x, height/2, y, y);
  	fill(229, 161, 253 );
  	ellipse(ix, height/2, iy, iy);

	image(img6, width/2, height/2); 

}

//function mousePressed to change colour background
function mousePressed() {
  background(random(225), random(200), random(225));

}

//function keyPressed to change state
function keyPressed() {
  if (key === '1') {
  	state = state1;
  	//millisecond(8);
  }
  else if(key =='2'){
  	state = state2;
  	}
  else if(key == '3'){
  	state = state3;
  	}
  else if(key == '4'){
  	state = state4;

  }	
  else if(key == '5'){
  	state = state5;
  }
  else if(key == '6'){
  	state = state6;
  }
}
//function keyPressed to go to static state
function keyReleased(){
	state = static;
}
