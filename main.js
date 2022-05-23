nose_x =0;
nose_y =0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(520, 150);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(mustache, nose_x, nose_y, 80, 60);
}

function modelLoaded() {
    console.log("Model is Initialized");
}

function gotResults(results) {
    console.log(results);
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function preload() {
    mustache = loadImage("https://i.postimg.cc/7ZQz8dbZ/m.png");
}

function take_snapshot() {
    save("mySnapshot.png");
}