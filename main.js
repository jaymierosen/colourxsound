//app object
const app = {};
//app object variables
app.mic;
app.canvas;
// app.sound;
// app.audio;
// app.value = 0;
// app.song = null;
app.saveBtn;
//setup function
//does not loop -- runs once
function setup(){
	//setting up the canvas
	app.canvas = createCanvas(1600, 600);
	// app.canvas.position(0, 0);
	//setting up the mic
	app.mic = new p5.AudioIn();
	app.mic.start();
	//no stroke
	noStroke();
	//colormode -- HSB, HSL, or RGB
	colorMode(RGB);
};

//draw function
//loops -- runs forever
function draw(){
	fill(random(255), random(255), random(255));
	const x = map(app.mic.getLevel(), 0, 0.1, 0.5, 200);
	const y = map(app.mic.getLevel(), 0, 0.1, 0.5, 200);
	ellipse(width/2, height/2, width / (Math.random() * 10) , height / (Math.random() * 10) );
};

//save button
app.saveBtn = $('#btn__save');
app.saveBtn.on('click', function(){
	saveCanvas(app.canvas, 'myCanvas', 'jpg')
});

function touchStarted(event) {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  console.log(event);
}

//init function
app.init = function() {
  touchStarted();
}
//document ready
$(function(){
	app.init();
});