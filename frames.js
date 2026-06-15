// FRAMES AND SLIDER 
let frames = []; // array containing frames
let origFrames = []; // array containing chronological frames
let loop = 2; // how many times the animation will loop 
let slider; // controls the frames and animation 
let ui;
let trackUI;
let thumbUI; 


// STORY 
let story = [ // array containing progressing text
  // PHASE 1 
  "Meet Fred, a lone horse recently separated from his family to follow his dreams.", // 0
  "His goal? To escape this loop he somehow found himself in.", // 1
  "Help him by adjusting the slider!", // 2
  "Fred is moving pretty slow, isn’t he? At this rate, will he even escape this loop? Will he still be able to chase his dreams at this pace?", // 3
  "Now try making him run once again.", // 4
  "Now he’s moving fast! He might actually have a shot now!", // 5
  "What if we intentionally sabotage him and make him run in reverse?", // 6
  "Why don’t we have some fun and make Fred do whatever we want!", // 7
  "Move the slider knob slowly if you want to make him run slow. Move it quickly if you want to make him run fast. Alternatively, you can adjust his rate manually through this box and simply press the play button.", // 8
  "Once you’re done playing with Fred, press next!", // 9
  "Press the play button and watch him run.", // 10
  "This is Fred’s “actual” pace—that is, if there exists a consistent universal truth where everyone and everything agrees on this speed.", // 11
  "That is, if all clocks measured his speed the same way, if Fred can confirm that he is running at this pace, if every observer arrives at the same conclusion.", // 12
  "That is, if you, as the perception, is not in any way manipulating his speed.", // 13
  "Of course, mathematically, Fred’s speed cannot be manipulated; it can be measured and be labeled as slow or fast or normal depending on the average speed of a horse. However, perception is a tricky eyeglass tint, making us see Fred’s speed slower or faster depending on our distance from him.", // 14
  "Distance, in this context, can mean many things.", // 15
  "Distance, physically, can allude to the space between the observer and the thing being observed.", // 16
  "Distance, psychologically, can allude to the cognitive biases distorting how we observe. Events become distorted, blurry, exaggerated, even sharpened. It all depends on how deeply we are affected by these cognitive biases.", // 17
  
  // PHASE 2 
  "This is what animation looks like in frames. Very similar to what time looks like in moments. If one looks closely, they would see that there are subtle changes in between frames.", // 18, display="gallery"
  "When these frames are watched chronologically, one frame after the other, people assume motion and change that isn't there.", // 19
  "Try skipping frames", // 20, snapTo=null, clickableTrack=true
  "Try removing some frames", // 21
  "Try shuffling the frames to see reality go crazy", // 22

  // PHASE 3 
  "This is the start of Phase 3", // 23
  "BLABLABLABLA", // 24

  // PHASE 4 
  "This is the start of Phase 4", // 25
];
let index = 0;
let isPlaying = false;
let display = "animation";

function preload() {
  // LOAD ANIMATION FRAMES 
  for (let i = 1; i <= 12; i++) {
    let path = `assets/frames/frame${String(i).padStart(2, "0")}.png`;

    frames[i - 1] = loadImage(path);
  }

  trackUI = loadImage("assets/ui/slider-track.png");
  thumbUI = loadImage("assets/ui/slider-thumb.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(40);
    origFrames = frames.slice(); // DISPLAYS ORIGINAL (CHRONOLOGICAL) FRAMES 
    
    ui = new UIButtons();
    slider = new Slider();
}

function draw() {
    clear();

    // PLAY AND PAUSE THE ANIMATION USING BUTTONS AND NOT SLIDER
    if (isPlaying){
        slider.sliderX += 50 * slider.weight;
    
        if (slider.sliderX >= slider.sliderMax){
          slider.sliderX = slider.sliderMax;
          isPlaying = false;
        }
    }
  
  // BEHAVIOR CHANGES DEPENDING ON PART OF STORY
    textAlign(CENTER);
    noStroke();
    fill('#502031');
    textFont('Blackadder ITC');
    text(story[index], 390, 600, 1000);
    
    // PHASE 1 START
    if (index >= 0 && index <=1){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.03;
        slider.clickableTrack = false;
        ui.input.value("3");
      //  shuffleButton.removeAttribute('disabled');
      //  removeButton.removeAttribute('disabled');
    }
    
    // SLOW 
    if (index === 2 && slider.isDragging){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.01;
        slider.clickableTrack = false;
        ui.input.value("1");
        
        if (slider.sliderX > (slider.sliderMax + slider.sliderMin) /2) {
          index = 3;
        }
    }
    
    if (index === 3){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.01;
        slider.clickableTrack = false;
        ui.input.value("1");
    }

    // FAST
    if (index === 4 && slider.isDragging){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");

        if (slider.sliderX > 900){
          index = 5;
        }
    }  
    
    if (index === 5){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");
    }  

    // REVERSE
    if (index === 6){
        slider.direction = "reverse";
        slider.snapTo = slider.sliderMax;
        slider.weight = 0.03;
        slider.clickableTrack = false;
        ui.input.value("3");
    }    

    // ALL 
    if (index >= 7 && index <= 9){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }

    if (index >= 10 && index <= 13){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");
    }    

    if (index >= 14 && index <= 17){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }

    // PHASE 2 START - GALLERY DISPLAY 
    if (index === 18){
        slider.direction = slider.sliderMin;
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="gallery";
    }    

    if (index === 19){
        slider.direction = slider.sliderMin;
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="animation";
    }        

    // ALLOW SKIP 
    if (index >= 20 && index <= 21){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }    

    // PHASE 3 START
    if (index === 22){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
        display="zoetrope";
    }    

    // PHASE 4 START
    if (index === 24){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }
    
    text("FPS: " + floor(frameRate()), 50,50);
    text("Frames: " + frames.length, 50, 80);
    
    slider.update();

    // TYPES OF FRAMES DISPLAY 
    if (display === "animation") {
        displayAnimation();
    } else if (display === "gallery"){
        displayGallery();
    } else if (display === "zoetrope"){
        displayZoetrope();
    }
    
    slider.render();
    }

// DISPLAYS FRAME BY FRAME 
function displayAnimation(){
  // MAP FRAME TO SLIDER VALUE
  let currentFrame = floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length * loop) % frames.length);
  image(frames[currentFrame], 520, 100, 800, 450);
}

// DISPLAYS ALL FRAMES IN ONE WINDOW 
function displayGallery(){
    let cols = 4;
    let imgW = 200;
    let imgH = 130;
    
    let currentFrame = floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length - 1));
    
    for (let i = 0; i < frames.length; i++){
        let col = i % cols;
        let row = floor(i / cols);
        let x = 550 + col * imgW;
        let y = 110 + row * imgH;
      
        if (i === currentFrame){
            y -= 20;
        }
      
        image(frames[i], x, y, imgW, imgH);
    }
}

function displayZoetrope() {

}

function mousePressed() {
    slider.mousePressed();
}

function mouseReleased() {
    slider.mouseReleased();
}

function phase1(){
  index = 0;
}

function phase2(){
  index = 18;
}

function phase3(){
  index = 23;
}

function phase4(){
  index = 25;
}

// PROGRESSES FORWARD IN THE STORY
function next(){
  index++;

  if (index > story.length - 1){
    index = 0;
  }
}

// PROGRESSES BACKWARD IN THE STORY
function back(){
    index--;
    
    if(index < 0){
        index = 0;
    }
    }

// SHUFFLES THE FRAMES DIFFERENTLY PER BUTTON PRESS 
function shuffleFrame(){
    for(let i = frames.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [frames[i], frames[random]] = [frames[random], frames[i]];
        }
    }

// REMOVES FRAMES ONE BY ONE DEPENDING ON HOW MANY TIMES THE BUTTON IS PRESSED 
function removeFrame(){
    if (frames.length > 1){
        const randomFrame = Math.floor(Math.random() * frames.length);
        frames.splice(randomFrame,1);
    }
    }

// PLAYS THE ANIMATION 
function play(){
    isPlaying = true;
    }

// PAUSES THE ANIMATION 
function pause(){
    isPlaying = false;
    }

// RESETS THE ANIMATION AFTER ANY INTERACTION 
function resetFrame(){
    frames = [...origFrames];
    slider.sliderX = slider.snapTo;
}

// CONTROLS ALL SLIDER BEHAVIORS
class Slider {
  constructor(
    value = 0,
    sliderX = 700,
    sliderY = 820,
    isDragging = false,
    weight = 0.05,
    sliderMin = 700,
    sliderMax = 1150,
    thumbSize = 30,
    direction = null,
    snapTo = null,
    clickableTrack = false
  ) {
    this.value = value;
    this.sliderX = sliderX;
    this.sliderY = sliderY;
    this.isDragging = isDragging;
    this.weight = weight;
    this.sliderMin = sliderMin;
    this.sliderMax = sliderMax;
    this.thumbSize = thumbSize;
    this.direction = direction;
    this.snapTo = snapTo ?? null;
    this.clickableTrack = clickableTrack;
  }

  mousePressed() {
    // CHECK IF MOUSE IS ON THUMB
    let onThumb =
      dist(mouseX, mouseY, this.sliderX, this.sliderY) <
      this.thumbSize;

    if (onThumb) {
      this.isDragging = true;
    }

    // CHECK IF MOUSE IS ON TRACK
    let onTrack =
      abs(mouseY - this.sliderY) < this.thumbSize;

    if (this.clickableTrack && onTrack) {
      this.sliderX = constrain(
        mouseX,
        this.sliderMin,
        this.sliderMax
      );

      this.isDragging = true;
    }
  }

  mouseReleased() {
    if (this.isDragging) {
      this.isDragging = false;

      // SNAP TO POSITION
      if (this.snapTo !== null) {
        this.sliderX = this.snapTo ?? slider.Max;
      }
    }
  }

  update() {
    if (this.isDragging) {
      let targetX = mouseX;

      // DIRECTION CONTROL
      if (this.direction === "forward") {
        targetX = max(this.sliderX, mouseX);
      } else if (this.direction === "reverse") {
        targetX = min(this.sliderX, mouseX);
      }

      // KEEP INSIDE TRACK
      targetX = constrain(targetX, this.sliderMin, this.sliderMax);

      // RESISTANCE / WEIGHT
      let speed = targetX - this.sliderX;

      this.sliderX +=
        speed * this.weight * (deltaTime / 16.67);
    }
  }

  render() {
    // TRACK
    // line(this.sliderMin, this.sliderY, this.sliderMax, this.sliderY);
    image(trackUI, this.sliderMin, this.sliderY - 10, this.sliderMax - this.sliderMin, 20);

    // THUMB
    image(thumbUI, this.sliderX - 15, this.sliderY - 25, 70, 50);
  }
}

// HOLDS ALL BUTTONS
class UIButtons {
    constructor(){
        this.nextButton = createImg('assets/ui/next.png', 'next'); 
        this.nextButton.position(1200,700);
        this.nextButton.size(30,30); 
        this.nextButton.style('cursor', 'pointer');
        this.nextButton.mousePressed(next);
        this.nextButton.mouseOver(() => {
          this.nextButton.attribute('src', 'assets/ui/next-hovered.png');
        });
        this.nextButton.mouseOut(() => {
          this.nextButton.attribute('src', 'assets/ui/next.png');
        });
        
        
        this.backButton = createImg('assets/ui/back.png', 'back');
        this.backButton.position(600,700);
        this.backButton.size(30,30); 
        this.backButton.style('cursor', 'pointer');
        this.backButton.mousePressed(back);
        this.backButton.mouseOver(() => {
          this.backButton.attribute('src', 'assets/ui/back-hovered.png');
        });
        this.backButton.mouseOut(() => {
          this.backButton.attribute('src', 'assets/ui/back.png');
        });
        
        // USER INPUT FOR FPS 
        this.input = createInput('5', 'number');
        this.input.position(100, 500);
        this.input.size(45, 20);
        this.input.attribute('min', '1');
        this.input.attribute('max', '60');
        this.input.input(() => {
          let value = Number(this.input.value()); // LIMIT FPS TO 1-60

          if (value > 60) {
            this.input.value('60');
          }
          if (value < 1) {
            this.input.value('1');
          }
        }
      )
        
        this.shuffleButton = createImg('assets/ui/shuffle.png', 'shuffle');
        this.shuffleButton.position(620,880);
        this.shuffleButton.size(150, 40);
        this.shuffleButton.style('cursor', 'pointer');
        this.shuffleButton.mousePressed(shuffleFrame);
        this.shuffleButton.mouseOver(() => {
          this.shuffleButton.attribute('src', 'assets/ui/shuffle-hovered.png');
        });
        this.shuffleButton.mouseOut(() => {
          this.shuffleButton.attribute('src', 'assets/ui/shuffle.png');
        });
        
        this.removeButton = createImg('assets/ui/remove.png','remove');
        this.removeButton.position(430,880);
        this.removeButton.size(150, 40);
        this.removeButton.style('cursor', 'pointer');
        this.removeButton.mousePressed(removeFrame);
        this.removeButton.mouseOver(() => {
          this.removeButton.attribute('src', 'assets/ui/remove-hovered.png');
        });
        this.removeButton.mouseOut(() => {
          this.removeButton.attribute('src', 'assets/ui/remove.png');
        });
        
        this.resetButton = createImg('assets/ui/reset.png', 'reset');
        this.resetButton.position(850,880);
        this.resetButton.size(50, 50);
        this.resetButton.style('cursor', 'pointer');
        this.resetButton.mousePressed(resetFrame);
        this.resetButton.mouseOver(() => {
          this.resetButton.attribute('src', 'assets/ui/reset-hovered.png');
        });
        this.resetButton.mouseOut(() => {
          this.resetButton.attribute('src', 'assets/ui/reset.png');
        });
        
        this.playButton = createImg('assets/ui/play.png', 'play');
        this.playButton.position(930,880);
        this.playButton.size(50, 50);
        this.playButton.style('cursor', 'pointer');
        this.playButton.mousePressed(play);
        this.playButton.mouseOver(() => {
          this.playButton.attribute('src', 'assets/ui/play-hovered.png');
        });
        this.playButton.mouseOut(() => {
          this.playButton.attribute('src', 'assets/ui/play.png');
        });        
        
        this.pauseButton = createImg('assets/ui/pause.png', 'pause');
        this.pauseButton.position(1010,880);
        this.pauseButton.size(50, 50);
        this.pauseButton.style('cursor', 'pointer');
        this.pauseButton.mousePressed(pause);
        this.pauseButton.mouseOver(() => {
          this.pauseButton.attribute('src', 'assets/ui/pause-hovered.png');
        });
        this.pauseButton.mouseOut(() => {
          this.pauseButton.attribute('src', 'assets/ui/pause.png');
        });        
        
        
        this.galleryButton = createImg('assets/ui/gallery.png', 'gallery');
        this.galleryButton.position(1130, 880);
        this.galleryButton.size(150, 40);
        this.galleryButton.style('cursor', 'pointer');
        this.galleryButton.mousePressed(() => display="gallery");
        this.galleryButton.mouseOver(() => {
          this.galleryButton.attribute('src', 'assets/ui/gallery-hovered.png');
        });
        this.galleryButton.mouseOut(() => {
          this.galleryButton.attribute('src', 'assets/ui/gallery.png');
        });
        
        this.animationButton = createImg('assets/ui/animate.png', 'animation');
        this.animationButton.position(1300, 880);
        this.animationButton.size(150, 40);
        this.animationButton.style('cursor', 'pointer');
        this.animationButton.mousePressed(() => display="animation"); 
        this.animationButton.mouseOver(() => {
          this.animationButton.attribute('src', 'assets/ui/animate-hovered.png');
        });
        this.animationButton.mouseOut(() => {
          this.animationButton.attribute('src', 'assets/ui/animate.png');
        });

        this.phase1Button = createButton('1');
        this.phase1Button.position(900,50);
        this.phase1Button.mousePressed(phase1);

        this.phase2Button = createButton('2');
        this.phase2Button.position(930,50);
        this.phase2Button.mousePressed(phase2);

        this.phase3Button = createButton('3');
        this.phase3Button.position(960,50);
        this.phase3Button.mousePressed(phase3);

        this.phase4Button = createButton('4');
        this.phase4Button.position(990,50);
        this.phase4Button.mousePressed(phase4);

        }
    }
