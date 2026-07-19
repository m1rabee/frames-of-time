let button1;
let button2;
let button3;
let currentPage = "menu";

function preload() {
  hoverSFX = loadSound("assets/sounds/hover-sfx-v2.mp3"); 
  selectSFX = loadSound("assets/sounds/select-sfx.mp3");
  
  bgHomepage = loadImage("assets/homepage.jpg");
  bg = loadImage("assets/overlay.png");
}
function setup() {
    let canvas = createCanvas(1920, 1080);
        canvas.parent("game-container");
    
    scaleGame();
    menu = new homepageButtons();
}

function draw() {
    clear();

    image(bgHomepage, 0, 0, 1920, 1080);

    if (currentPage === "menu"){
        textSize(100);
        textAlign(CENTER);
        noStroke();
        fill('#502031');
        textFont('IM Fell English');
        text('Frames of Time', 900, 150);
        menu.button1.show();
        menu.button2.show();
        menu.button3.show();
        menu.button4.hide();

    } else if (currentPage === "creator"){
        menu.button1.hide();
        menu.button2.hide();
        menu.button3.hide();
        menu.button4.show();

        image(bg, 360, 100, 1100, 700);
        textSize(30);
        textAlign(CENTER);
        text("A patron of all things weird, trance-like, and miserably profound. Through art and technology, I try very very hard to make sense of things that don’t make much much sense. Uncomfortable thoughts become poetry, embarrassing desires become video essays, and, well, in this case, fears of being left behind became an interactive web experience about the illusion of time and perception.", 470, 240, 900);
        text("I wanted to cope with being delayed in college. I wanted to cope with feeling stuck. I wanted to cope with not achieving great things at my age. I wanted to believe, wholeheartedly, not just with hope or wishful thinking, that we are all moving at our own pace, and, well, what better way to convince myself than to take lessons from Immanuel Kant himself?", 470, 470, 900);
    } else if (currentPage === "experience"){
        menu.button1.hide();
        menu.button2.hide();
        menu.button3.hide();
        menu.button4.show();
        
        image(bg, 360, 100, 1100, 700);
        textSize(30);
        textAlign(CENTER);
        text("Frames of Time is a combination of all the heavy research I’ve done for a subject I felt an odd attachment to even before I felt like I was racing with time itself.", 470, 250, 900);
        text("It is an interactive web exploration of time and animation, how the two subjects meet at illusion and change, and what perception has to do with all of them.", 470, 360, 900);
        text("Essentially, animation becomes a medium to explain why time sometimes feels slow or fast or still, why our individual experiences defy the theory that time is linear, and why there seems to be discrepancies between different realities.", 470, 470, 900);
    }

}

function experience(){
    currentPage = "experience";
}

function creator(){
    currentPage = "creator";
}

function start(){
    window.location.href = "frames.html";
}

function exit(){
    currentPage = "menu";
}

function windowResized(){
    scaleGame();
}

class homepageButtons {
    constructor (){
        this.button1 = createImg('assets/ui/experience.png', 'experience'); 
        this.button1.parent("game-container");
        this.button1.position(750,280);
        this.button1.style('cursor','pointer');
        this.button1.size(350, 53);
        this.button1.mousePressed(experience);
        this.button1.mouseOver(() => {
            hoverSFX.stop();
            hoverSFX.play();
            this.button1.attribute('src', 'assets/ui/experience-hovered.png');
            });
        this.button1.mouseOut(() => {
            this.button1.attribute('src', 'assets/ui/experience.png');
            });

        this.button2 = createImg('assets/ui/creator.png', 'creator');
        this.button2.parent("game-container"); 
        this.button2.position(750,360);
        this.button2.style('cursor','pointer');  
        this.button2.size(350, 53);
        this.button2.mousePressed(creator);
        this.button2.mouseOver(() => {
            hoverSFX.stop();
            hoverSFX.play();
            this.button2.attribute('src', 'assets/ui/creator-hovered.png');
            });
        this.button2.mouseOut(() => {
            this.button2.attribute('src', 'assets/ui/creator.png');
            });

        this.button3 = createImg('assets/ui/blueplay.png', 'start');
        this.button3.parent("game-container"); 
        this.button3.position(1675,825);
        this.button3.style('cursor','pointer');
        this.button3.size(120,120);
        this.button3.mousePressed(start); 
        this.button3.mouseOver(() => {
            selectSFX.stop();
            selectSFX.play();
            this.button3.attribute('src', 'assets/ui/play.png');
            });
        this.button3.mouseOut(() => {
            this.button3.attribute('src', 'assets/ui/blueplay.png');
            });

        this.button4 = createImg('assets/ui/exit.png');
        this.button4.parent("game-container");
        this.button4.position(1350, 170);
        this.button4.style('cursor', 'pointer');
        this.button4.size(35,35);
        this.button4.mousePressed(exit);
    }
}
