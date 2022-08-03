noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://static.thenounproject.com/png/13324-200.png');
}
  
function setup() {
    canvas = createCanvas(400, 325);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}
  
function draw() {
    image(video, 0, 0, 400, 325)
    mustaches()
}

function mustaches() {
    image(mustache, noseX, noseY, 120, 100);
}

function take_snapshot(){
    save('myFliteredImage.png')
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotResult(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 190;
        console.log("Nose x = " + noseX);
        noseY = results[0].pose.nose.y - 100;
        console.log("Nose y = " + noseY);
    }
}