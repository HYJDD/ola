function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(660,150);

    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}
function  modelLoaded(){
  console.log ('poseNet se inicializo')
}

function gotposes(results){
    if (results.length>0){
        console.log (results);
    }
}
function draw(){
    background ('#969A97');
}
