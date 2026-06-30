// FRAMES AND SLIDER 
let frames = []; // array containing frames
let origFrames = []; // array containing chronological frames
let currentFrame = 1;
let previousFrame = -1;
let loop = 4; // how many times the animation will loop 
let slider; // controls the frames and animation 
let ui;
let trackUI;
let thumbUI; 
let index = 0;
let isPlaying = false;
let display = "animation";
let PopUp = false; 
 
function preload() {
  // LOAD ANIMATION FRAMES 
  for (let i = 1; i <= 12; i++) {
    let path = `assets/frames/frame${String(i).padStart(2, "0")}.png`;

    frames[i - 1] = loadImage(path);
  }

  // image assets
  popUpDisplay = loadImage("assets/ui/pop-up-v2.png");
  trackUI = loadImage("assets/ui/slider-track.png"); // SLIDER TRACK 
  thumbUI = loadImage("assets/ui/slider-thumb.png"); // SLIDER THUMB
  thumbUIHovered = loadImage("assets/ui/slider-thumb-hovered.png"); // SLIDER THUMB hovered ver
  fpsInput = loadImage("assets/ui/fps-input-blue.png"); // DECORATIVE FPS INPUT BOX 
  fpsInputDisabled = loadImage("assets/ui/fps-input-disabled.png"); // DECORATIVE FPS INPUT BOX disabled ver 
  
  // preload audio assets
  hoverSFX = loadSound("assets/sounds/hover-sfx-v1.mp3"); 
  hoverSFXV2 = loadSound("assets/sounds/hover-sfx-v2.mp3");
  selectSFX = loadSound("assets/sounds/select-sfx.mp3");
  gallopSFX = loadSound("assets/sounds/gallop-test.mp3");
  bgm = loadSound("assets/sounds/angevin-b.mp3");
  sparkleSFX = loadSound("assets/sounds/select-sfx.mp3");
//  ambientSFX = loadSound("assets/sounds/angevin-b.mp3");
}

function setup() {
    createCanvas(1920, 1080);
    textSize(40);
    origFrames = frames.slice(); // DISPLAYS ORIGINAL (CHRONOLOGICAL) FRAMES FOR RESET BUTTON 
    
    ui = new UIButtons();
    slider = new Slider();

//    playBGM();

}

function draw() {
    clear();
  
//     ambientSFX.loop()

  // BEHAVIOR CHANGES DEPENDING ON PART OF STORY
    textAlign(CENTER);
    noStroke();
    fill('#502031');
    textFont('Blackadder ITC');
    textSize(40);
    text(story[index], 370, 720, 1150);

    if (currentFrame !== previousFrame){
        if (currentFrame === 2){
            gallopSFX.stop();
            gallopSFX.play();
        }
        previousFrame = currentFrame;
    }
    
    // PHASE 1 START
    if (index >= 0 && index <=58){
        ui.removeButton.isDisabled = true;
        ui.shuffleButton.isDisabled = true;
        ui.galleryButton.isDisabled = true;
        ui.animationButton.isDisabled = true;
        ui.resetButton.isDisabled = true;
        ui.playButton.isDisabled = true;
        ui.pauseButton.isDisabled = true;
        display="animation";
    }

    if (index >=0 && index <=8){
        image(fpsInputDisabled, 1680, 100, 200, 65);
    }

    if (index >= 0 && index <=1){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.04;
        slider.clickableTrack = false;
        ui.input.value("4");
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
        ui.nextButton.isDisabled = false;
    }

    // FAST
    if (index === 4 && slider.isDragging){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.06;
        slider.clickableTrack = false;
        ui.input.value("6");

        if (slider.sliderX > 900){
          index = 5;
        }
    }  
    
    if (index === 5){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("6");    
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
    
    if (index === 9){
        PopUp = false;
    }
    

    if (index === 10){
    //    PopUp = true;
    }

    if (index >= 9) {
        image(fpsInput, 1680, 100, 200, 65);
    }

    if (index >= 9 && index <= 10){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        ui.playButton.isDisabled = false;
        ui.pauseButton.isDisabled = false;
    }

    if (index >= 11){
        ui.playButton.isDisabled = false;
        ui.pauseButton.isDisabled = false;
    }

    if (index === 11){
        PopUp = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");
        if (slider.sliderX >= 900){
            index = 12;
        }   
    }

    if (index === 12){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");
    }    

    if (index >= 13 && index <= 50){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }

    // PHASE 2 START 
    if (index >= 51){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        ui.nextButton.isEnabled = false;
    }

    if (index >= 0 && index <= 58){
        display="animation";
    }

    // GALLERY DISPLAY
    if (index === 59 && slider.isDragging){
        ui.galleryButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="gallery";
        if (slider.sliderX >= 900){
            index = 60;
        }
    }    

    if (index === 60){
        ui.galleryButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="gallery";
    }    

    // ANIMATION DISPLAY 
    if (index === 61){
        ui.galleryButton.isDisabled = false;
        ui.animationButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }        

    // ALLOW SKIP 
    if (index === 73){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
        if (slider.sliderX >= 900){
            ui.nextButton.isDisabled = false;
        }
    }    

    if (index >= 74){
        ui.removeButton.isDisabled = false;
        slider.clickableTrack = true;    
    }

    if (index >= 76){
        ui.resetButton.isDisabled = false;
    }

    if (index >= 81){
        ui.removeButton.isDisabled = false;
        ui.shuffleButton.isDisabled = false;
        ui.galleryButton.isDisabled = false;
        ui.animationButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }

    // PHASE 3 START
    if (index === 102){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }    

    // PHASE 4 START
    if (index === 103){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }

    textSize(26);
    text("FPS: ", 380,170);
    text("# of Frames: " + frames.length, 420, 130);
    
    ui.update();

    slider.update();

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

    // TYPES OF FRAMES DISPLAY 
    if (display === "animation") {
        displayAnimation();
    } else if (display === "gallery"){
        displayGallery();
    } else if (display === "zoetrope"){
        displayZoetrope();
    }
    
    if (PopUp) {
        displayPopUp();
    //    darkenBackground();
    }


    slider.render();
    }

// DISPLAYS FRAME BY FRAME 
function displayAnimation(){
  // MAP FRAME TO SLIDER VALUE
  currentFrame = floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length * loop) % frames.length);
  image(frames[currentFrame], 500, 150, 800, 450);
}

// DISPLAYS ALL FRAMES IN ONE WINDOW 
function displayGallery(){
    let cols = 4;
    let imgW = 258;
    let imgH = 145;
    
    currentFrame = floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length - 1));
    
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

function displayPopUp(){
//    push();
//    rectMode(CORNER);
//    noStroke();
//    fill(0,180);
//    rect(0,0, width, height);

//    pop();

    image(popUpDisplay, 600, 200, 715, 388); // pop up display

    fill(220);
    textSize(35);
    textStyle(NORMAL);
    textAlign(screenLeft, TOP);
    text("Are you having fun? Controlling how fast Fred gallops and which direction he goes?", 950, 290, 500);

    textSize(27);
    // textFont("Roboto");
    textAlign(LEFT);
    text("> Yes! I get to see different sides of Fred.", 800, 420, 500);
    text("> No, I feel guilty controlling him.", 800, 470, 500);
    
}

function closePopUp(){
    PopUp = false; 
    restoreBackground;
}

function mousePressed() {
    slider.mousePressed();
}

function mouseReleased() {
    slider.mouseReleased();
}

function phase1(){
  index = 0;
  sparkleSFX.pause();
  sparkleSFX.play();    
}

function phase2(){
  index = 51;
  sparkleSFX.pause();
  sparkleSFX.play();  
}

function phase3(){
  index = 102;
  sparkleSFX.pause();
  sparkleSFX.play();  
}

function phase4(){
  index = 103;
  sparkleSFX.pause();
  sparkleSFX.play();  
}

// PROGRESSES FORWARD IN THE STORY
function next(){
  index++;

  if (index > story.length - 1){
    index = 0;
  }

  if (index === 62){
    display="gallery";
  }

  const disableNext = [2, 4, 6, 73];
  ui.nextButton.isDisabled = disableNext.includes(index);

  if (index === 6 || index === 7){
    slider.sliderX = slider.sliderMax;
  }

  if (index === 11 || index === 9 || index === 8){
    slider.sliderX = slider.sliderMin;
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

function darkenBackground(){
    ui.nextButton.style('opacity', '0.2');
    ui.backButton.style('opacity', '0.2');
    ui.removeButton.style('opacity', '0.5');
    ui.shuffleButton.style('opacity', '0.5');
    ui.galleryButton.style('opacity', '0.5');
    ui.animationButton.style('opacity', '0.5');
    ui.resetButton.style('opacity', '0.4');
    ui.playButton.style('opacity', '0.4');
    ui.pauseButton.style('opacity', '0.4');
    ui.input.style('opacity', '0.15');
    ui.phase1Button.style('opacity', '0.15');
    ui.phase2Button.style('opacity', '0.15');
    ui.phase3Button.style('opacity', '0.15');
    ui.phase4Button.style('opacity', '0.15');
}

function resetBackground(){
    ui.nextButton.style('opacity', '1');
    ui.backButton.style('opacity', '1');
    ui.removeButton.style('opacity', '1');
    ui.shuffleButton.style('opacity', '1');
    ui.galleryButton.style('opacity', '1');
    ui.animationButton.style('opacity', '1');
    ui.resetButton.style('opacity', '1');
    ui.playButton.style('opacity', '1');
    ui.pauseButton.style('opacity', '1');
    ui.input.style('opacity', '1');
    ui.phase1Button.style('opacity', '1');
    ui.phase2Button.style('opacity', '1');
    ui.phase3Button.style('opacity', '1');
    ui.phase4Button.style('opacity', '1');
}

// function playBGM(){
//    if (!ambientSFX.isPlaying()){
//        ambientSFX.loop();
//        ambientSFX.setVolume(0.05);
//    }
//}
