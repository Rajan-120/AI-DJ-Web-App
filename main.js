var bones = "";
var heat_waves = "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function preload()
{
    bones = loadSound("bones.mp3");
    heat_waves = loadSound("heat waves.mp3");
}