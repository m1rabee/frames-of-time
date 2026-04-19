let img;

function preload(){
    img = loadImage("https://i.pinimg.com/1200x/81/13/bd/8113bd28c2c781a00b51b4e72259ef48.jpg");
}

function setup(){
    createCanvas(400, 200);
}

function draw(){
    background(0);
    image(img, 0, 0, width, height);
}
