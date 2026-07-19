// FRAMES AND SLIDER 
let frames = []; // array containing frames
let origFrames = []; // array containing chronological frames
let currentFrame = 1;
let previousFrame = -1;
let loop = 4; // how many times the animation will loop 
let slider; // controls the frames and animation 
let ui; // ui buttons 
let index = 0;
let isPlaying = false;
let display = "animation";
let angle = 0;
let lastStep = 0;
let currentPrompt;
let popup1, popup2, popup3, popup4, popup5, popup6, popup7, popup8, popup9, popup10, popup11;
let shutter;
let strobeInterval = 40;
let flashDuration = 20;
let realMouseX, realMouseY; 
let pixelScale = 1;

function preload() {
  // LOAD ANIMATION FRAMES 
  for (let i = 1; i <= 12; i++) {
    let path = `assets/frames/frame${String(i).padStart(2, "0")}.png`;

    frames[i - 1] = loadImage(path);
  }

  // image assets
  trackUI = loadImage("assets/ui/slider-track.png"); // SLIDER TRACK 
  thumbUI = loadImage("assets/ui/slider-thumb.png"); // SLIDER THUMB
  thumbUIHovered = loadImage("assets/ui/slider-thumb-hovered.png"); // SLIDER THUMB hovered ver
  fpsInput = loadImage("assets/ui/fps-input-blue.png"); // DECORATIVE FPS INPUT BOX 
  fpsInputDisabled = loadImage("assets/ui/fps-input-disabled.png"); // DECORATIVE FPS INPUT BOX disabled ver 
  phenakistoscope = loadImage("assets/fredv2.png");
  phenakistoscopeCover = loadImage("assets/phenakistoscope-cover.png");
  border = loadImage("assets/border.png");
  bgImage = loadImage("assets/background01.jpg");
  
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
    let canvas = createCanvas(1920, 1080);
    canvas.parent("game-container");

    function updateRealMouse(evt){
        const rect = canvas.elt.getBoundingClientRect();

        const sx = rect.width / width;
        const sy = rect.height / height;
        

        realMouseX = (evt.clientX - rect.left) / sx;
        realMouseY = (evt.clientY - rect.top) / sy;
    }
    
    canvas.elt.addEventListener("mousemove", updateRealMouse);
    canvas.elt.addEventListener("mousedown", updateRealMouse);
    canvas.elt.addEventListener("mouseup", updateRealMouse);

    scaleGame();
    textSize(40);
    origFrames = frames.slice(); // DISPLAYS ORIGINAL (CHRONOLOGICAL) FRAMES FOR RESET BUTTON 
    
    ui = new UIButtons();
    slider = new Slider();
    popup1 = new PopUp(prompt1);
    popup2 = new PopUp(prompt2);
    popup3 = new PopUp(prompt3);
    popup4 = new PopUp(prompt4);
    popup5 = new PopUp(prompt5);
    popup6 = new PopUp(prompt6);
    popup7 = new PopUp(prompt7);
    popup8 = new PopUp(prompt8);
    popup9 = new PopUp(prompt9);
    popup10 = new PopUp(prompt10);
    reflectionPopUp = new PopUp(reflection);

//    playBGM();

}

function draw() {
    clear();

    image(bgImage, 0, 0, 1920, 1080);
    
    // TYPES OF FRAMES DISPLAY 
    if (display === "animation") {
        displayAnimation();
    } else if (display === "gallery"){
        displayGallery();
    } else if (display === "phenakistoscope"){
        displayPhenakistoscope();
    }
  
    image(border, 212, 68, 1476, 895);
//    ambientSFX.loop()

  // BEHAVIOR CHANGES DEPENDING ON PART OF STORY
    textAlign(CENTER);
    noStroke();
    fill('#502031');
    textFont('IM Fell English');
    textSize(33);
    text(story[index], 370, 730, 1150);

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
        image(fpsInputDisabled, 1400, 120, 150, 49);
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

    if (index >= 9) {
        image(fpsInput, 1400, 120, 150, 49);
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
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");
        ui.nextButton.isDisabled = false;
    }

    if (index === 12){
        slider.snapTo = null;
        slider.weight = 0.05;
        slider.clickableTrack = false;
        ui.input.value("5");
        if (slider.sliderX >= 1000){
            index = 13;
        }
    }    

    if (index >= 13 && index <= 50){
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        ui.nextButton.isDisabled = false;
    }

    if (index === 15){
        slider.weight = 0.05;
        if (slider.sliderX >= 880){
            slider.weight = 0.02;
        }

    }

    // PHASE 2 START 
    if (index >= 51){
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        ui.nextButton.isEnabled = false;
    }

    if (index >= 0 && index <= 58){
        display="animation";
    }

    if (index === 62){
        ui.galleryButton.isDisabled = true;
        display="animation";
    }

    // GALLERY DISPLAY
    if (index === 63 && slider.isDragging){
        ui.galleryButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="gallery";
        if (slider.sliderX >= 900){
            index = 64;
        }
    }    

    if (index === 64){
        ui.galleryButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
        display="gallery";
    }    

    if (index === 65){
        ui.animationButton.isDisabled = false;
    }

    // ANIMATION DISPLAY 
    if (index === 66){
        ui.galleryButton.isDisabled = false;
        ui.animationButton.isDisabled = false;
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = false;
    }        

    // ALLOW SKIP 
    if (index === 77){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
        if (slider.sliderX >= 900){
            ui.nextButton.isDisabled = false;
        }
    }    

    if (index >= 78){
        ui.removeButton.isDisabled = false;
        slider.clickableTrack = true;    
    }

    if (index >= 80){
        ui.resetButton.isDisabled = false;
    }

    if (index >= 86){
        ui.nextButton.isDisabled = false;
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
    if (index === 101){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }

    // PHENAKISTOSCOPE DISPLAY 
    if (index === 116){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
        display="phenakistoscope";
    }    

    if (index >= 116 && index <= 123){
        strobeEnabled = false;
    }

    if (index >= 124 && slider.isDragging){
        strobeEnabled = true;
    }

    // PHASE 4 START
    if (index === 145){
        slider.direction = "null";
        slider.snapTo = null;
        slider.weight = Number(ui.input.value())/100;
        slider.clickableTrack = true;
    }

    textSize(26);
    text("FPS: ", 380,150);
    text("# of Frames: " + frames.length, 420, 190);
    
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

    slider.render();
    }

function windowResized(){
    scaleGame();
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

function displayPhenakistoscope() {
    let angularVelocity = map(slider.sliderX, slider.sliderMin, slider.sliderMax, -0.5, 0.5);

    angle -= angularVelocity;

    if (strobeEnabled){
        let flash = millis() % strobeInterval < flashDuration;

        if(flash){
            tint(255, 100);
        } else {
            tint(255, 255);
        }
    }

    push();
    translate(960,370);
    rotate(-angle + 0.5);
    imageMode(CENTER);
    image(phenakistoscope,0,0,460,460);
    pop();

    noTint();
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
  index = 55;
  sparkleSFX.pause();
  sparkleSFX.play();  
}

function phase3(){
  index = 104;  
  sparkleSFX.pause();
  sparkleSFX.play();  
}

function phase4(){
  index = 145;
  sparkleSFX.pause();
  sparkleSFX.play();  
}

// PROGRESSES FORWARD IN THE STORY
function next(){
  index++;

  if (index > story.length - 1){
    index = 0;
  }

  if (index === 55){
    sparkleSFX.pause();
    sparkleSFX.play();
  }

  if (index === 104){
    sparkleSFX.pause();
    sparkleSFX.play();
  }

  if (index === 63){
    display="gallery";
  }

  if (index === 66){
    display="animation";
  }

  if (index === 10){
    popup1.show();
  }

  if (index >= 13 && index <= 15){
    isPlaying = true;
  }
  
  if (index === 23){
    popup2.show();
  }

  if (index === 26){
    popup3.show();
  }

  if (index === 41){
    popup4.show();
  }

  if (index === 85){
    popup5.show();
  }

  if (index === 96){
    popup6.show();
  }

  if (index === 119){
    popup7.show();
  }

  if (index === 125){
    popup8.show();
  }

  if (index === 144){
    popup9.show();
  }

  if (index === 145){
    display="animation";
  }

  if (index === 156){
    popup10.show();
  }

  if (index === 158){
//    reflectionPopUp.show();
  }

  if (index >= 116 && index <= 118){
    slider.sliderX = 950;
  }

  const disableNext = [2, 4, 6, 10, 12, 23, 26, 41, 85, 96, 119, 125, 144, 156];
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

    if (index === 55){
        sparkleSFX.pause();
        sparkleSFX.play();
    }

    if (index === 104){
        sparkleSFX.pause();
        sparkleSFX.play();
    }

    if (index === 63){
        display="gallery";
    }

    if (index === 66){
        display="animation";
    }


    if (index === 10){
        popup1.show();
    }

    if (index >= 13 && index <= 15){
        isPlaying = true;
    }
    
    if (index === 23){
        popup2.show();
    }

    if (index === 26){
        popup3.show();
    }

    if (index === 41){
        popup4.show();
    }

    if (index === 85){
        popup5.show();
    }

    if (index === 96){
        popup6.show();
    }

    if (index === 119){
        popup7.show();
    }

    if (index === 125){
        popup8.show();
    }

    if (index === 144){
        popup9.show();
    }

    if (index === 156){
        popup10.show();
    }

    if (index >= 116 && index <= 118){
        slider.sliderX = 950;
    }

    if (index === 6 || index === 7){
        slider.sliderX = slider.sliderMax;
    }

    if (index === 11 || index === 9 || index === 8){
        slider.sliderX = slider.sliderMin;
    }
}

function exitPopUp(){
    index++;
    popup1.hide();
    popup2.hide();
    popup3.hide();
    popup4.hide();
    popup5.hide();
    popup6.hide();
    popup7.hide();
    popup8.hide();
    popup9.hide();
    popup10.hide();
    reflectionPopUp.hide();
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

// function playBGM(){
//    if (!ambientSFX.isPlaying()){
//        ambientSFX.loop();
//        ambientSFX.setVolume(0.05);
//   }
// }
