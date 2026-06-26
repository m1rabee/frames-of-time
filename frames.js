// FRAMES AND SLIDER 
let frames = []; // array containing frames
let origFrames = []; // array containing chronological frames
let loop = 2; // how many times the animation will loop 
let slider; // controls the frames and animation 
let ui;
let trackUI;
let thumbUI; 
let index = 0;
let isPlaying = false;
let display = "animation";

function preload() {
  // LOAD ANIMATION FRAMES 
  for (let i = 1; i <= 12; i++) {
    let path = `assets/frames/frame${String(i).padStart(2, "0")}.png`;

    frames[i - 1] = loadImage(path);
  }

  trackUI = loadImage("assets/ui/slider-track.png"); // SLIDER TRACK 
  thumbUI = loadImage("assets/ui/slider-thumb.png"); // SLIDER THUMB
  thumbUIHovered = loadImage("assets/ui/slider-thumb-hovered.png"); // SLIDER THUMB hovered ver
  fpsInput = loadImage("assets/ui/fps-input-blue.png"); // DECORATIVE FPS INPUT BOX 
  fpsInputDisabled = loadImage("assets/ui/fps-input-disabled.png"); // DECORATIVE FPS INPUT BOX disabled ver 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(40);
    origFrames = frames.slice(); // DISPLAYS ORIGINAL (CHRONOLOGICAL) FRAMES FOR RESET BUTTON 
    
    ui = new UIButtons();
    slider = new Slider();
}

function draw() {
    clear();

    // PLAY AND PAUSE THE ANIMATION USING BUTTONS AND NOT SLIDER
    if (isPlaying){
        let step = 50 * slider.weight;

        if (slider.direction === "reverse"){
            slider.sliderX -= step;
            if (slider.sliderX <= slider.sliderMin){
                slider.sliderX = slider.sliderMax;
                isPlaying = false;
            }

        } else {
            slider.sliderX += step;


            if (slider.sliderX >= slider.sliderMax){
                slider.sliderX = slider.sliderMin;
                isPlaying = false;
            }
        }
    }
  
  // BEHAVIOR CHANGES DEPENDING ON PART OF STORY
    textAlign(CENTER);
    noStroke();
    fill('#502031');
    textFont('Blackadder ITC');
    text(story[index], 370, 720, 1150);
    
    // PHASE 1 START
    if (index >= 0 && index <=34){
        ui.removeButton.isDisabled = true;
        ui.shuffleButton.isDisabled = true;
        ui.galleryButton.isDisabled = true;
        ui.animationButton.isDisabled = true;
        display="animation";
    }

    if (index >=0 && index <=9){
        image(fpsInputDisabled, 1680, 100, 200, 65);
    }

    if (index >=10) {
        image(fpsInput, 1680, 100, 200, 65);
    }

    // SLOW
    if (index >= 0 && index <=1){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.03;
        slider.clickableTrack = false;
        ui.input.value("3");
    }

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
        ui.nextButton.isDisabled = false;
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
        ui.nextButton.isDisabled = false;
    }  

    // REVERSE
    if (index >= 6 && index <=7){
        slider.direction = "reverse";
        slider.weight = 0.03;
        slider.clickableTrack = false;
        ui.input.value("3");
    }     
    
    if (index >= 6 && index <=7 && slider.isDragging){
        slider.snapTo = slider.sliderMax;
        slider.direction = "reverse";
        slider.weight = 0.03;
        slider.clickableTrack = false;
        if (slider.sliderX <= 900){
            index = 7;
        }
    }    

    if (index === 7){
        ui.nextButton.isDisabled = false;
    }
    
    // ALL 
    if (index === 8){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        ui.nextButton.isDisabled = false;
    }
    
    if (index >= 9 && index <= 11 && slider.isDragging){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }

    if (index === 12){
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.07;
        slider.clickableTrack = false;
        ui.input.value("7");

    }

    if (index >= 12 && index <= 13){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = 0.07;
        slider.clickableTrack = false;
        ui.input.value("7");
    }    

    if (index >= 14 && index <= 53){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }

    // PHASE 2 START - GALLERY DISPLAY 
    if (index >= 54){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }

    if (index === 63){
        ui.galleryButton.isDisabled = false;
        slider.direction = slider.sliderMin;
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="gallery";
    }    

    if (index === 64){
        ui.animationButton.isDisabled = false;
        slider.direction = slider.sliderMin;
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="animation";
    }        

    // ALLOW SKIP 
    if (index === 73){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }    

    if (index === 74){
        ui.removeButton.isDisabled = false;
    }

    if (index === 83){
        ui.shuffleButton.isDisabled = false;
    }

    // PHASE 3 START
    if (index === 84){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
        display="zoetrope";
    }    

    // PHASE 4 START
    if (index === 86){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }
    
    text("FPS: ", 50,50);
    text("Frames: " + frames.length, 50, 80);
    
    ui.update();

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
  image(frames[currentFrame], 500, 150, 800, 450);
}

// DISPLAYS ALL FRAMES IN ONE WINDOW 
function displayGallery(){
    let cols = 4;
    let imgW = 258;
    let imgH = 145;
    
    let currentFrame = floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length - 1));
    
    for (let i = 0; i < frames.length; i++){
        let col = i % cols;
        let row = floor(i / cols);
        let x = 400 + col * imgW;
        let y = 150 + row * imgH;

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
  index = 54;
}

function phase3(){
  index = 84;
}

function phase4(){
  index = 86;
}

// PROGRESSES FORWARD IN THE STORY
function next(){
  index++;

  if (index > story.length - 1){
    index = 0;
  }

 // const disableNext = [2, 4, 6];
 // ui.nextButton.isDisabled = disableNext.includes(index);

  if (index === 6){
    slider.sliderX = slider.sliderMax;
  }

  if (index === 7){
    slider.sliderX = slider.sliderMax;
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
    slider.sliderX = slider.sliderMin;
    slider.weight = 0.03;
    ui.input.value("5");
    isPlaying = false;
}
