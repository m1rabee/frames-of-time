// HOLDS ALL BUTTONS
class UIButtons {
    constructor(){

        this.disabledVersion = 'assets/ui/disabled-v2.png';

        this.input = createInput('5', 'number');
        this.input.position(1805, 122);
        this.input.size(40, 20);

        this.input.style('background', 'transparent');
        this.input.style('border', 'none');
        this.input.style('outline', 'none');
        this.input.style('color', '#BDCCD4');
        this.input.style('font-size', '20px');

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
        });

        this.nextButton = createImg('assets/ui/next.png', 'next'); 
        this.nextButton.position(1550,780);
        this.nextButton.size(30,30); 
        this.nextButton.style('cursor', 'pointer');
        this.nextButton.isDisabled = false;
        this.nextButton.mousePressed(next);
        this.nextButton.mouseOver(() => {
          this.nextButton.attribute('src', 'assets/ui/next-hovered.png');
        });
        this.nextButton.mouseOut(() => {
          this.nextButton.attribute('src', 'assets/ui/next.png');
        });
      
        this.backButton = createImg('assets/ui/back.png', 'back');
        this.backButton.position(300,780);
        this.backButton.size(30,30); 
        this.backButton.style('cursor', 'pointer');
        this.backButton.mousePressed(back);
        this.backButton.mouseOver(() => {
          this.backButton.attribute('src', 'assets/ui/back-hovered.png');
        });
        this.backButton.mouseOut(() => {
          this.backButton.attribute('src', 'assets/ui/back.png');
        });

        this.removeButton = createImg('assets/ui/remove.png','remove');
        this.removeButton.position(265,980);
        this.removeButton.size(200, 56);
        this.removeButton.style('cursor', 'pointer');
        this.removeButton.isDisabled = false;
        this.removeButton.enabledVersion = 'assets/ui/remove.png';
        this.removeButton.mousePressed(removeFrame);
        this.removeButton.mouseOver(() => {
          this.removeButton.attribute('src', 'assets/ui/remove-hovered.png');
        });
        this.removeButton.mouseOut(() => {
          this.removeButton.attribute('src', 'assets/ui/remove.png');
        });
        
        this.shuffleButton = createImg('assets/ui/shuffle.png', 'shuffle');
        this.shuffleButton.position(505,980);
        this.shuffleButton.size(200, 56);
        this.shuffleButton.style('cursor', 'pointer');
        this.shuffleButton.isDisabled = false;
        this.shuffleButton.enabledVersion = 'assets/ui/shuffle.png';
        this.shuffleButton.mousePressed(shuffleFrame);
        this.shuffleButton.mouseOver(() => {
          this.shuffleButton.attribute('src', 'assets/ui/shuffle-hovered.png');
        });
        this.shuffleButton.mouseOut(() => {
          this.shuffleButton.attribute('src', 'assets/ui/shuffle.png');
        });
        
        this.resetButton = createImg('assets/ui/reset.png', 'reset');
        this.resetButton.position(810,980);
        this.resetButton.size(60, 60);
        this.resetButton.style('cursor', 'pointer');
        this.resetButton.mousePressed(resetFrame);
        this.resetButton.mouseOver(() => {
          this.resetButton.attribute('src', 'assets/ui/reset-hovered.png');
        });
        this.resetButton.mouseOut(() => {
          this.resetButton.attribute('src', 'assets/ui/reset.png');
        });
        
        this.playButton = createImg('assets/ui/play.png', 'play');
        this.playButton.position(915,980);
        this.playButton.size(60, 60);
        this.playButton.style('cursor', 'pointer');
        this.playButton.mousePressed(play);
        this.playButton.mouseOver(() => {
          this.playButton.attribute('src', 'assets/ui/play-hovered.png');
        });
        this.playButton.mouseOut(() => {
          this.playButton.attribute('src', 'assets/ui/play.png');
        });        
        
        this.pauseButton = createImg('assets/ui/pause.png', 'pause');
        this.pauseButton.position(1015,980);
        this.pauseButton.size(60, 60);
        this.pauseButton.style('cursor', 'pointer');
        this.pauseButton.mousePressed(pause);
        this.pauseButton.mouseOver(() => {
          this.pauseButton.attribute('src', 'assets/ui/pause-hovered.png');
        });
        this.pauseButton.mouseOut(() => {
          this.pauseButton.attribute('src', 'assets/ui/pause.png');
        });        
        
        
        this.galleryButton = createImg('assets/ui/gallery.png', 'gallery');
        this.galleryButton.position(1225, 980);
        this.galleryButton.size(200, 56);
        this.galleryButton.style('cursor', 'pointer');
        this.galleryButton.isDisabled = false;
        this.galleryButton.enabledVersion = 'assets/ui/gallery.png';
        this.galleryButton.mousePressed(() => display="gallery");
        this.galleryButton.mouseOver(() => {
          this.galleryButton.attribute('src', 'assets/ui/gallery-hovered.png');
        });
        this.galleryButton.mouseOut(() => {
          this.galleryButton.attribute('src', 'assets/ui/gallery.png');
        });
        
        this.animationButton = createImg('assets/ui/animate.png', 'animation');
        this.animationButton.position(1450, 980);
        this.animationButton.size(200, 56);
        this.animationButton.style('cursor', 'pointer');
        this.animationButton.isDisabled = false;
        this.animationButton.enabledVersion = 'assets/ui/animate.png';
        this.animationButton.mousePressed(() => display="animation"); 
        this.animationButton.mouseOver(() => {
          this.animationButton.attribute('src', 'assets/ui/animate-hovered.png');
        });
        this.animationButton.mouseOut(() => {
          this.animationButton.attribute('src', 'assets/ui/animate.png');
        });

        this.phase1Button = createButton('1');
        this.phase1Button.position(880,30);
        this.phase1Button.mousePressed(phase1);

        this.phase2Button = createButton('2');
        this.phase2Button.position(910,30);
        this.phase2Button.mousePressed(phase2);

        this.phase3Button = createButton('3');
        this.phase3Button.position(940,30);
        this.phase3Button.mousePressed(phase3);

        this.phase4Button = createButton('4');
        this.phase4Button.position(970,30);
        this.phase4Button.mousePressed(phase4);
    }
    
    update(){
        setButtonState(
            this.removeButton,
            this.removeButton.enabledVersion,
            this.disabledVersion,
            this.removeButton.isDisabled,
        );

        setButtonState(
            this.shuffleButton,
            this.shuffleButton.enabledVersion,
            this.disabledVersion,
            this.shuffleButton.isDisabled,
        );

        setButtonState(
            this.galleryButton,
            this.galleryButton.enabledVersion,
            this.disabledVersion,
            this.galleryButton.isDisabled,
        );

        setButtonState(
            this.animationButton,
            this.animationButton.enabledVersion,
            this.disabledVersion,
            this.animationButton.isDisabled,
        );
        
        setButtonState(
            this.nextButton,
            null,
            null,
            this.nextButton.isDisabled,
        );
        }
}


function setButtonState(button, enabledVersion, disabledVersion, isDisabled){
  if (isDisabled){
      if (disabledVersion !== null){
        button.attribute('src', disabledVersion);
      }
      button.style('pointer-events', 'none');
      button.style('cursor', 'default');
  
    } else {
      if (enabledVersion !== null){
        button.attribute('src', enabledVersion);
      }
      button.style('pointer-events', 'auto');
      button.style('cursor', 'pointer');
  }
}