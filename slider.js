// CONTROLS ALL SLIDER BEHAVIORS
class Slider {
  constructor(
    value = 0,
    sliderX = 750,
    sliderY = 885,
    isDragging = false,
    weight = 0.05,
    sliderMin = 750,
    sliderMax = 1150,
    thumbSize = 30,
    direction = null,
    snapTo = null,
    clickableTrack = false,
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
    this.isHovering = false;
    this.isEnabled = false; 
  }

  mousePressed() {
    // CHECK IF MOUSE IS ON THUMB

  //  if (!this.isEnabled){
  //    return;
  //  }

    let mx = realMouseX;
    let my = realMouseY; 

    let onThumb =
      mx > this.sliderX - 35 &&
      mx < this.sliderX + 35 &&
      my > this.sliderY - 25 &&
      my < this.sliderY + 25;
      
    if (onThumb) {
      this.isDragging = true;
    }

    // CHECK IF MOUSE IS ON TRACK
    let onTrack =
      abs(my - this.sliderY) < this.thumbSize;

    if (this.clickableTrack && onTrack) {
      this.sliderX = constrain(mx, this.sliderMin, this.sliderMax);
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
  //  if (!this.isEnabled){
  //    this.isDragging = false;
  //    return;
  //  }
    
    if (this.isDragging) {
      let targetX = realMouseX;
      
      // DIRECTION CONTROL
      if (this.direction === "forward") {
        targetX = max(this.sliderX, realMouseX);
      } else if (this.direction === "reverse") {
        targetX = min(this.sliderX, realMouseX);
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
    let mx = realMouseX;
    let my = realMouseY; 

    // TRACK
    image(trackUI, this.sliderMin, this.sliderY - 10, this.sliderMax - this.sliderMin, 20);

    // THUMB
    let onThumb =
      mx > this.sliderX - 35 &&
      mx < this.sliderX + 35 &&
      my > this.sliderY - 25 &&
      my < this.sliderY + 25;

//    if (onThumb && !this.isHovering){
//      hoverSFX.stop();
//      hoverSFX.play();
//    }
    
//    this.isHovering = onThumb;

    if (onThumb || this.isDragging) {
      image(thumbUIHovered, this.sliderX - 35, this.sliderY - 25, 70, 50);
    } else {
      image(thumbUI, this.sliderX - 35, this.sliderY - 25, 70, 50);
    }
  }
}
