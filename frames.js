// FRAMES AND SLIDER 
let frames = []; // array containing frames that can be manipulated 
let origFrames = []; // array containing chronological frames
let slider; 
let totalFrames = 12;

// STORY 
let story = [ // array containing progressing text
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
  ];
let index = 0;

// BUTTONS
let nextButton;
let backButton;
let input;
let shuffleButton;
let removeButton;
let playButton;
let pauseButton;
let resetButton;
let isPlaying = false;
let animationButton;
let galleryButton;
let display = "animation";

function preload() {
    // LOAD ANIMATION FRAMES 
    for (let i = 1; i <= totalFrames; i++) {
      frames[i - 1] = loadImage(`assets/test-frames/frame-${String(i).padStart(2, "0")}.jpg`);
    }
        origFrames.push(frame);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);

    console.log("frames loaded:", frames.length);
  
    nextButton = createButton('next'); 
    nextButton.position(700,510);
    nextButton.mousePressed(next);
    
    backButton = createButton('back');
    backButton.position(165,510);
    backButton.mousePressed(back);
    
    input = createInput('5', 'number'); // USER FPS INPUT (user can change the FPS manually through input)
    input.position(420, 50);
    input.size(45, 20);
    
    shuffleButton = createButton('shuffle');
    shuffleButton.position(300,50);
    shuffleButton.mousePressed(shuffleFrame);
    
    removeButton = createButton('remove');
    removeButton.position(550,50);
    removeButton.mousePressed(removeFrame);
    
    playButton = createButton('play');
    playButton.position(470,510);
    playButton.mousePressed(play);
    
    pauseButton = createButton('pause');
    pauseButton.position(420,510);
    pauseButton.mousePressed(pause);
    
    resetButton = createButton('reset');
    resetButton.position(425,20);
    resetButton.mousePressed(resetFrame);
    
    galleryButton = createButton('gallery');
    galleryButton.position(800, 200);
    galleryButton.mousePressed(() => display="gallery");
    
    animationButton = createButton('animation');
    animationButton.position(800, 400);
    animationButton.mousePressed(() => display="animation");
    
    slider = new Slider();
}

function draw() {
    background(255);
  
    // animation playback (play and pause)
    if (isPlaying){
        slider.sliderX += 50 * slider.weight;
    
        if (slider.sliderX >= slider.sliderMax){
        slider.sliderX = slider.sliderMax;
        isPlaying = false;
        slider.sliderX = slider.snapTo;
        }
    }
  
  // animation and slider behavior changes depending on story progression 
    text(story[index], 100,700);
    
    if (index >= 0 && index <=1){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.025;
        slider.clickableTrack = false;
    }
    
    if (index >= 2 && index <= 3){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.01;
        slider.clickableTrack = false;
    }
    
    if (index >= 4 && index <= 5){
        slider.direction = "forward";
        slider.snapTo = slider.sliderMin;
        slider.weight = 0.05;
        slider.clickableTrack = false;
    }  
    
    if (index === 6){
        slider.direction = "reverse";
        slider.snapTo = slider.sliderMax;
        slider.weight = 0.025;
        slider.clickableTrack = false;
    }    

    if (index >= 7){
        slider.direction = "null";
        slider.snapTo = slider.sliderMin;
        slider.weight = Number(input.value())/100;
        slider.clickableTrack = false;
    }  
  
    slider.update();

    // CHANGES DISPLAY 
    if (display === "animation") {
        displayAnimation();
    } else if (display === "gallery"){
        displayGallery();
    }
    
    slider.render();
    }

// DISPLAYS FRAME BY FRAME 
function displayAnimation(){
    // MAP SLIDER POSITION TO FRAME 
    let currentFrame = constrain(floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length -1)), 0, frames.length -1);
    if (
      frames.length > 0 &&
      frames[currentFrame] &&
      frames[currentFrame].width 
      ){
    image(frames[currentFrame], 150,100,600,400);
    }
}

// DISPLAYS ALL FRAMES IN ONE CANVAS
function displayGallery(){
    let cols = 4;
    let imgW = 150;
    let imgH = 100;
    
    let currentFrame = floor(map(slider.sliderX, slider.sliderMin, slider.sliderMax, 0, frames.length - 1));
    
    for (let i = 0; i < frames.length; i++){
        let col = i % cols;
        let row = floor(i / cols);
        let x = 100 + col * imgW;
        let y = 100 + row * imgH;
      
        if (i === currentFrame){
            y -= 20;
        }
      
        image(frames[i], x, y, imgW, imgH);
    }
}

function mousePressed() {
    slider.mousePressed();
}

function mouseReleased() {
    slider.mouseReleased();
}

// PROGRESSES FORWARD IN THE STORY
function next(){
    index++;
    
    if(index > story.length-1){
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

// REMOVES ONE RANDOM FRAME PER BUTTON PRESS
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

// RESETS THE ANIMATION AFTER SHUFFLE, REMOVE, PLAY
function resetFrame(){
    frames = [...origFrames];
    slider.sliderX = slider.snapTo;
    }

// CONTROLS ALL SLIDER BEHAVIORS
class Slider {
  constructor(
    value = 0,
    sliderX = 100,
    sliderY = 800,
    isDragging = false,
    weight = 0.05,
    sliderMin = 100,
    sliderMax = 800,
    thumbSize = 20,
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
    this.snapTo = snapTo;
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
        this.sliderX = this.snapTo;
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
      targetX = constrain(
        targetX,
        this.sliderMin,
        this.sliderMax
      );

      // RESISTANCE / WEIGHT
      let speed = targetX - this.sliderX;

      this.sliderX +=
        speed * this.weight * (deltaTime / 16.67);
    }
  }

  render() {
    // TRACK
    stroke(0);
    strokeWeight(4);

    line(
      this.sliderMin,
      this.sliderY,
      this.sliderMax,
      this.sliderY
    );

    // THUMB
    fill(255);

    ellipse(
      this.sliderX,
      this.sliderY,
      this.thumbSize * 2
    );
  }
}

