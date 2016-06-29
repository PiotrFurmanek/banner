// JavaScript Document

// EaselJS
function init() {

	// Define variables
	var preload,
		stage,
		sky,
		samsung,
		marksandspencer,
		headerOne,
		descriptionOne;

	stage = new createjs.Stage("demoCanvas");


	// Assign sky logo
	sky = new createjs.Bitmap("images/sky-logo.png");
	sky.x = 10;
	sky.y = 210;
	stage.addChild(sky);

	// Assign samsung
	samsung = new createjs.Bitmap("images/samsung.png");
	samsung.x = 40;
	samsung.y = 120;
	stage.addChild(samsung);

	// Assign marksandspencer
	marksandspencer = new createjs.Bitmap("images/m-and-s.png");
	marksandspencer.x = 175;
	marksandspencer.y = 120;
	stage.addChild(marksandspencer);

	// Assign headerOne
	headerOne = new createjs.Text("Choose your reward\n\n", "22px sky-regular", "#ff7700");
	headerOne.x = 150;
	headerOne.y = 10;
	headerOne.lineWidth = 300;
	headerOne.textAlign = "center";
	stage.addChild(headerOne);

	// Assign DescriptionOne
	descriptionOne = new createjs.Text("when you switch to 12 months\nfree Sky Broadband Unlimited", "14px sky-regular", "#a90000");
	descriptionOne.x = 150;
	descriptionOne.y = 30;
	descriptionOne.lineWidth = 300;
	descriptionOne.textAlign = "center";
	stage.addChild(descriptionOne);






	// Animate samsung
	createjs.Tween.get(samsung, { loop: true })
	  .to({ alpha: 1, y: 120 }, 500, createjs.Ease.getPowInOut(2))
	  .to({ alpha: 0, y: 120 }, 5000, createjs.Ease.getPowInOut(20)) // logo to disappear after 5 seconds

	// Animate marksandspencer
	createjs.Tween.get(marksandspencer, { loop: false })
	  .to({ alpha: 1, y: 120 }, 500, createjs.Ease.getPowInOut(2))
	  .to({ alpha: 0, y: 120 }, 5000, createjs.Ease.getPowInOut(20))

	// Animate heading
	//createjs.Tween.get(headerOne, { loop: false })
	  //.to({ alpha: 0, y: 0 }, 100)
	  //.to({ alpha: 1, y: 10 }, 500, createjs.Ease.getPowInOut(2))
	  //.to({ alpha: 0, y: 10 }, 5000, createjs.Ease.getPowInOut(20))

	createjs.Ticker.setFPS(15);
	createjs.Ticker.addEventListener("tick", stage);

  preload = new createjs.LoadQueue();
  preload.addEventListener("fileload", handleFileComplete);
  preload.loadFile("images/samsung.png");


function loadImage() {
  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload", handleFileComplete);
  preload.loadFile("../images/bg.png");
}

function handleFileComplete(event) {
  document.body.appendChild(event.result);
  console.log("Success");
}


// setTimeout(function(){ init.stop() }, 15000);
}







//var queue = new createjs.LoadQueue(true);
//queue.addEventListener("fileload", handleFileComplete);

//queue.loadManifest([{id:"bg", src:"images/bg.jpg"}, {id:"bg", src:"images/samsung.png"}]);


	  //function handleFileComplete(event) {
	    //console.log("Success");
	  //}






	  //function loadImage() {
	    //var preload = new createjs.LoadQueue();
	    //preload.addEventListener("fileload", handleFileComplete);
	    //preload.loadFile("../images/bg.jpg");
	  //}

	  //function handleFileComplete(event) {
	    //document.body.appendChild(event.result);
	  //}


