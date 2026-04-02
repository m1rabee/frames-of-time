const image = document.getElementById("animationFrame");
const slider = document.getElementById("frameSlider");
const button = document.getElementById("nextBtn");

let currentFrame = 1;

button.addEventListener("click", function () {
  if (currentFrame === 1) {
    currentFrame = 2;
  } else {
    currentFrame = 1;
  }

  image.src = 'assets/test-frames/frame_0${currentFrame}.png';

}); 
      
