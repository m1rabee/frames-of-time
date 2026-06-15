let button1;
let button2;
let button3;
let button4;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(40);

    button1 = createImg('assets/ui/experience.png', 'experience'); 
    button1.position(750,280);
    button1.style('cursor','pointer');
    button1.size(350, 53);
    button1.mousePressed(experience);

    button2 = createImg('assets/ui/creator.png', 'creator'); 
    button2.position(750,360);
    button2.style('cursor','pointer');  
    button2.size(350, 53);
    button2.mousePressed(creator);

    button3 = createImg('assets/ui/githubrepo.png', 'github repo'); 
    button3.position(750,440);
    button3.style('cursor','pointer');
    button3.size(350, 53);
    button3.mousePressed(githubRepo);

    button4 = createImg('assets/ui/blueplay.png', 'start'); 
    button4.position(1700,800);
    button4.style('cursor','pointer');
    button4.size(120,120);
    button4.mousePressed(start);

}

function draw() {
    clear();

    textAlign(CENTER);
    noStroke();
    fill('#502031');
    textFont('Blackadder ITC');
    text("Frames of Time");
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

// HOLDS ALL BUTTONS
class Buttons {
    constructor(){
        this.button1 = createButton('experience'); 
        this.button1.position(1200,700);
        this.button1.style("color", "#502031");
        this.button1.image(button1UI);
        this.button1.mousePressed(experience);

        this.button2 = createButton('creator'); 
        this.button2.position(1200,700);
        this.button2.style("color", "#502031");
        this.button2.mousePressed(creator);

        this.button3 = createButton('github repo'); 
        this.button3.position(1200,700);
        this.button3.style("color", "#502031");
        this.button3.mousePressed(githubRepo);

        this.button4 = createButton('start'); 
        this.button4.position(1200,700);
        this.button4.style("color", "#502031");
        this.button4.mousePressed(start);
    }
}