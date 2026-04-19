function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = new Slider()
  // slider's behaviors can be adjusted here
  slider.direction = "forward";
  slider.snapTo = slider.sliderMin;
  slider.weight = 0.25;
  slider.clickableTrack = false;
}

function draw() {
  background(255);
  slider.render()
  slider.update()
}

function mousePressed(){
  slider.mousePressed()
}

function mouseReleased(){
  slider.mouseReleased()
}

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
){
      this.sliderX = sliderX
      this.sliderY = sliderY
      this.isDragging = isDragging
      this.weight = weight
      this.sliderMin = sliderMin
      this.sliderMax = sliderMax
      this.thumbSize = thumbSize
      this.direction = direction
      this.snapTo = snapTo
      this.clickableTrack = clickableTrack
    }

  mousePressed(){
    // check if mouse is over thumb
    let onThumb = dist(mouseX, mouseY, this.sliderX, this.sliderY) < this.thumbSize; 
    
    if (onThumb){ // allow dragging if on thumb
      this.isDragging = true;
    }

    // check if mouse is over track 
    let onTrack = abs(mouseY - this.sliderY) < this.thumbSize; 

    if (this.clickableTrack && onTrack){ // controls whether track can be clicked or not
        this.sliderX = constrain (mouseX, this.sliderMin, this.sliderMax); 
        this.isDragging = true;
    }
}
  
  mouseReleased(){
    if (this.isDragging){
      this.isDragging = false;

      // snap to sliderMin or sliderMax 
      if (this.snapTo !== null){
        this.sliderX = this.snapTo;
      }
  }
  }
  
  update(){
    if (this.isDragging){
      let targetX = mouseX;
      
      // controls slider's direction (forward only, reverse only, or null)
      if (this.direction === "forward"){
        targetX = max(this.sliderX, mouseX);
      } else if (this.direction === "reverse") {
        targetX = min(this.sliderX, mouseX); 
      } 

      // constrain to slider track 
      targetX = constrain(targetX, this.sliderMin, this.sliderMax);
      
      // controls weight/resistance of the thumb 
      let speed = targetX - this.sliderX;
      this.sliderX += speed * this.weight * (deltaTime / 16.67);
     // this.sliderX = lerp(this.sliderX, targetX, this.weight);
      }
  
  }
  
  render(){
    // draw slider track
    stroke(0)
    strokeWeight(4)
    line(this.sliderMin, this.sliderY, this.sliderMax, this.sliderY)
    
    // draw thumb
    fill(255)
    ellipse(this.sliderX, this.sliderY, this.thumbSize *2)
  }
}
