// HOLDS ALL BUTTONS
class UIButtons {
    constructor(){

        this.disabledVersion = 'assets/ui/disabled-v2.png';

        this.input = createInput('5', 'number');
        this.input.parent("game-container");
        this.input.position(1492, 136);
        this.input.size(38, 15);

        this.input.style('background', 'transparent');
        this.input.style('border', 'none');
        this.input.style('outline', 'none');
        this.input.style('color', '#BDCCD4');
        this.input.style('font-size', '15px');

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
        );

        this.nextButton = createImg('assets/ui/next.png', 'next'); 
        this.nextButton.parent("game-container");
        this.nextButton.position(1550,780);
        this.nextButton.size(30,30); 
        this.nextButton.style('cursor', 'pointer');
        this.nextButton.isDisabled = false;
        this.nextButton.mousePressed(next);
        this.nextButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.nextButton.attribute('src', 'assets/ui/next-hovered.png');
        });
        this.nextButton.mouseOut(() => {
          this.nextButton.attribute('src', 'assets/ui/next.png');
        });
      
        this.backButton = createImg('assets/ui/back.png', 'back');
        this.backButton.parent("game-container");
        this.backButton.position(320,780);
        this.backButton.size(30,30); 
        this.backButton.style('cursor', 'pointer');
        this.backButton.mousePressed(back);
        this.backButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.backButton.attribute('src', 'assets/ui/back-hovered.png');
        });
        this.backButton.mouseOut(() => {
          this.backButton.attribute('src', 'assets/ui/back.png');
        });

        this.removeButton = createImg('assets/ui/remove.png','remove');
        this.removeButton.parent("game-container");
        this.removeButton.position(265,980);
        this.removeButton.size(200, 56);
        this.removeButton.style('cursor', 'pointer');
        this.removeButton.isDisabled = false;
        this.removeButton.enabledVersion = 'assets/ui/remove.png';
        this.removeButton.mousePressed(removeFrame);
        this.removeButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.removeButton.attribute('src', 'assets/ui/remove-hovered.png');
        });
        this.removeButton.mouseOut(() => {
          this.removeButton.attribute('src', 'assets/ui/remove.png');
        });
        
        this.shuffleButton = createImg('assets/ui/shuffle.png', 'shuffle');
        this.shuffleButton.parent("game-container");
        this.shuffleButton.position(505,980);
        this.shuffleButton.size(200, 56);
        this.shuffleButton.style('cursor', 'pointer');
        this.shuffleButton.isDisabled = false;
        this.shuffleButton.enabledVersion = 'assets/ui/shuffle.png';
        this.shuffleButton.mousePressed(shuffleFrame);
        this.shuffleButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.shuffleButton.attribute('src', 'assets/ui/shuffle-hovered.png');
        });
        this.shuffleButton.mouseOut(() => {
          this.shuffleButton.attribute('src', 'assets/ui/shuffle.png');
        });
        
        this.resetButton = createImg('assets/ui/reset.png', 'reset');
        this.resetButton.parent("game-container");
        this.resetButton.position(810,980);
        this.resetButton.size(60, 60);
        this.resetButton.style('cursor', 'pointer');
        this.resetButton.isDisabled = false;
        this.resetButton.enabledVersion = 'assets/ui/reset.png';
        this.resetButton.disabledVersion = 'assets/ui/reset-disabled.png';
        this.resetButton.mousePressed(resetFrame);
        this.resetButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.resetButton.attribute('src', 'assets/ui/reset-hovered.png');
        });
        this.resetButton.mouseOut(() => {
          this.resetButton.attribute('src', 'assets/ui/reset.png');
        });
        
        this.playButton = createImg('assets/ui/play.png', 'play');
        this.playButton.parent("game-container");
        this.playButton.position(915,980);
        this.playButton.size(60, 60);
        this.playButton.style('cursor', 'pointer');
        this.playButton.isDisabled = false;
        this.playButton.enabledVersion = 'assets/ui/play.png';
        this.playButton.disabledVersion = 'assets/ui/play-disabled.png';
        this.playButton.mousePressed(play);
        this.playButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.playButton.attribute('src', 'assets/ui/play-hovered.png');
        });
        this.playButton.mouseOut(() => {
          this.playButton.attribute('src', 'assets/ui/play.png');
        });        
        
        this.pauseButton = createImg('assets/ui/pause.png', 'pause');
        this.pauseButton.parent("game-container");
        this.pauseButton.position(1015,980);
        this.pauseButton.size(60, 60);
        this.pauseButton.style('cursor', 'pointer');
        this.pauseButton.isDisabled = false;
        this.pauseButton.enabledVersion = 'assets/ui/pause.png';
        this.pauseButton.disabledVersion = 'assets/ui/pause-disabled.png';
        this.pauseButton.mousePressed(pause);
        this.pauseButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.pauseButton.attribute('src', 'assets/ui/pause-hovered.png');
        });
        this.pauseButton.mouseOut(() => {
          this.pauseButton.attribute('src', 'assets/ui/pause.png');
        });        
        
        this.galleryButton = createImg('assets/ui/gallery.png', 'gallery');
        this.galleryButton.parent("game-container");
        this.galleryButton.position(1225, 980);
        this.galleryButton.size(200, 56);
        this.galleryButton.style('cursor', 'pointer');
        this.galleryButton.isDisabled = false;
        this.galleryButton.enabledVersion = 'assets/ui/gallery.png';
        this.galleryButton.mousePressed(() => display="gallery");
        this.galleryButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.galleryButton.attribute('src', 'assets/ui/gallery-hovered.png');
        });
        this.galleryButton.mouseOut(() => {
          this.galleryButton.attribute('src', 'assets/ui/gallery.png');
        });
        
        this.animationButton = createImg('assets/ui/animate.png', 'animation');
        this.animationButton.parent("game-container");
        this.animationButton.position(1450, 980);
        this.animationButton.size(200, 56);
        this.animationButton.style('cursor', 'pointer');
        this.animationButton.isDisabled = false;
        this.animationButton.enabledVersion = 'assets/ui/animate.png';
        this.animationButton.mousePressed(() => display="animation"); 
        this.animationButton.mouseOver(() => {
          hoverSFX.stop();
          hoverSFX.play();
          this.animationButton.attribute('src', 'assets/ui/animate-hovered.png');
        });
        this.animationButton.mouseOut(() => {
          this.animationButton.attribute('src', 'assets/ui/animate.png');
        });

        this.phase1Button = createImg('assets/ui/phase.png', '1');
        this.phase1Button.parent("game-container");
        this.phase1Button.position(850,20);
        this.phase1Button.size(33, 40);
        this.phase1Button.style('cursor', 'pointer');
        this.phase1Button.mousePressed(phase1);
        this.phase1Button.mouseOver(() => {
          hoverSFXV2.stop();
          hoverSFXV2.play();
          this.phase1Button.attribute('src', 'assets/ui/phase-check.png');
        });
        this.phase1Button.mouseOut(() => {
          this.phase1Button.attribute('src', 'assets/ui/phase.png');
        });

        this.phase2Button = createImg('assets/ui/phase.png','2');
        this.phase2Button.parent("game-container");
        this.phase2Button.position(910,20);
        this.phase2Button.size(33, 40);
        this.phase2Button.style('cursor', 'pointer');
        this.phase2Button.mousePressed(phase2);
        this.phase2Button.mouseOver(() => {
          hoverSFXV2.stop();
          hoverSFXV2.play();
          this.phase2Button.attribute('src', 'assets/ui/phase-check.png');
        });
        this.phase2Button.mouseOut(() => {
          this.phase2Button.attribute('src', 'assets/ui/phase.png');
        });

        this.phase3Button = createImg('assets/ui/phase.png','3');
        this.phase3Button.parent("game-container");
        this.phase3Button.position(970,20);
        this.phase3Button.size(33, 40);
        this.phase3Button.style('cursor', 'pointer');
        this.phase3Button.mousePressed(phase3);
        this.phase3Button.mouseOver(() => {
          hoverSFXV2.stop();
          hoverSFXV2.play();
          this.phase3Button.attribute('src', 'assets/ui/phase-check.png');
        });
        this.phase3Button.mouseOut(() => {
          this.phase3Button.attribute('src', 'assets/ui/phase.png');
        });

        this.phase4Button = createImg('assets/ui/phase.png', '4');
        this.phase4Button.parent("game-container");
        this.phase4Button.position(1030,20);
        this.phase4Button.size(33, 40);
        this.phase4Button.style('cursor', 'pointer');
        this.phase4Button.mousePressed(phase4);
        this.phase4Button.mouseOver(() => {
          hoverSFXV2.stop();
          hoverSFXV2.play();
          this.phase4Button.attribute('src', 'assets/ui/phase-check.png');
        });
        this.phase4Button.mouseOut(() => {
          this.phase4Button.attribute('src', 'assets/ui/phase.png');
        });
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

        setButtonState(
            this.resetButton,
            this.resetButton.enabledVersion,
            this.resetButton.disabledVersion,
            this.resetButton.isDisabled,
        );

        setButtonState(
            this.playButton,
            this.playButton.enabledVersion,
            this.playButton.disabledVersion,
            this.playButton.isDisabled,
        );

        setButtonState(
            this.pauseButton,
            this.pauseButton.enabledVersion,
            this.pauseButton.disabledVersion,
            this.pauseButton.isDisabled,
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
