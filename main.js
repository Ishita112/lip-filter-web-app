
noseX=0;
noseY=0;

function preload() {
   lipstick= loadImage('https://i.postimg.cc/26BD2Rb6/lips-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()


    pose = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick,  noseX-20, noseY+10, 45, 35);

}

function take_snapshot(){
    save('myFilterImage.png');
}