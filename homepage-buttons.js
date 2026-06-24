let button1;
let button2;
let button3;
let button4;

function preload(){
    overlay = loadImage('/assets/overlay.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    button1 = createImg('assets/ui/experience.png', 'experience'); 
    button1.position(750,280);
    button1.style('cursor','pointer');
    button1.size(350, 53);
    button1.mousePressed(experience);
    button1.mouseOver(() => {
        button1.attribute('src', 'assets/ui/experience-hovered.png');
        });
    button1.mouseOut(() => {
        button1.attribute('src', 'assets/ui/experience.png');
        });

    button2 = createImg('assets/ui/creator.png', 'creator'); 
    button2.position(750,360);
    button2.style('cursor','pointer');  
    button2.size(350, 53);
    button2.mousePressed(creator);
    button2.mouseOver(() => {
        button2.attribute('src', 'assets/ui/creator-hovered.png');
        });
    button2.mouseOut(() => {
        button2.attribute('src', 'assets/ui/creator.png');
        });

    button3 = createImg('assets/ui/githubrepo.png', 'github repo'); 
    button3.position(750,440);
    button3.style('cursor','pointer');
    button3.size(350, 53);
    button3.mousePressed(githubRepo);
    button3.mouseOver(() => {
        button3.attribute('src', 'assets/ui/githubrepo-hovered.png');
        });
    button3.mouseOut(() => {
        button3.attribute('src', 'assets/ui/githubrepo.png');
        });

    button4 = createImg('assets/ui/blueplay.png', 'start'); 
    button4.position(1675,825);
    button4.style('cursor','pointer');
    button4.size(120,120);
    button4.mousePressed(start);
    button4.mouseOver(() => {
        button4.attribute('src', 'assets/ui/play.png');
        });
    button4.mouseOut(() => {
        button4.attribute('src', 'assets/ui/blueplay.png');
        });

}

function draw() {
    clear();

    textSize(100);
    textAlign(CENTER);
    noStroke();
    fill('#502031');
    textFont('Blackadder ITC');
    text('Frames of Time', 900, 150);
}

function experience(){
    window.location.href = "about-the-experience.html";
}

function creator(){
    window.location.href = "about-the-creator.html";
}

function githubRepo(){
    window.open = ("https://github.com/m1rabee/frames-of-time", "_blank");
}

function start(){
    window.location.href = "frames.html";
}