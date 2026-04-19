let frames = []; // array containing frames 
const totalFrames = 12; // number of frames

function preload(){
    for (let i = 1; i <= totalFrames; i++){
        frames.push(
            loadImage(`/assets/test-frames/frame-${String(i).padStart(2,'0')}.jpg`)
        );
    }
}

function setup(){
    createCanvas(500, 200);
}

function draw(){
    background(255);
    for (i = 0; i < frames.length; i++){
        if (frames[i]){
            image(frames[i], i * 60, 50, 50, 50); // (variable for the image, x, y, w, h)
        }
    }
}
