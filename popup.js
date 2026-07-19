let prompt1 = [
  {
    question: "Are you having fun? Controlling how fast Fred gallops and which direction he goes?",
    option1: "Yes! I get to see different sides of Fred.",
    target1: 1,
    option2: "No, I feel guilty controlling him.",
    target2: 4,
    end: null,
  }, // 0
  
  {
    question: "So you enjoyed making him slow? What about his dreams?",
    option1: "It's about the journey anyway, not the destination.",
    target1: 2,
    option2: "I made him fast too, though. It's all about the balance.",
    target2: 3,  
    end: null,
  }, // 1

  {
    question: "Don't you think you should've made him run fast too?",
    option1: "I did!",
    target1: 3,
    option2: "No, I wanted him to enjoy the pace.",
    target2: 5,  
    end: null,
  }, // 2

  {
    question: "Don't you think you might have overworked him by making him run fast? What if he gets tired?",
    option1: "At least he reached the end of his loop faster. He'll reach his dreams faster that way.",
    target1: 5,
    option2: "No, because it's all about the balance.",
    target2: 5,  
    end: null,
  }, // 3

  {
    question: null,
    option1: null,
    target1: null,
    option2: null,
    target2: null,
    end: "But this is your fate, Perception. This is what you're meant to do.",
  }, // 4

  {
    question: null,
    option1: null,
    target1: null,
    option2: null,
    target2: null,
    end: "I see. This is your fate, after all, Perception. This is what you're meant to do.",
  }, // 5
];

let prompt2 = [
  {
    question: "So which pace did you enjoy more?",
    option1: "Fast",
    target1: 1,
    option2: "Slow",
    target2: 4,
    end: null,
  }, // 0
  
  {
    question: "Why?",
    option1: "It felt like Fred was on top of the world!",
    target1: 2,
    option2: "We reached the end of his loop faster.",
    target2: 2,  
    end: null,
  }, // 1

  {
    question: "Did you not enjoy when he was running slow?",
    option1: "It felt agitating, I wanted to get to the end of his loop faster.",
    target1: 5,
    option2: "I just, but I just preferred watching him run fast.",
    target2: 5,
    end: null,  
  }, // 2

  {
    question: "Why?",
    option1: "It was calming to watch him go slow.",
    target1: 4,
    option2: "There were details to observe in his motion.",
    target2: 4,  
    end: null,
  }, // 3

  {
    question: "Did you not enjoy when he was running fast?",
    option1: "It felt overwhelming, like I couldn't keep up with how fast he was running.",
    target1: 5,
    option2: "I did, but I just preferred watching him slow.",
    target2: 5,
    end: null,
  }, // 4

  {
    question: null,
    option1: null,
    target1: null,
    option2: null,
    target2: null,
    end: "I see...",
  }, // 5
];

let prompt3 = [
  {
    question: "Did he actually reach the end of his loop? Do you agree with this?",
    option1: "Yes, because the animation always ends at one point.",
    target1: 1,
    option2: "No, because loops aren't meant to end. They need to be escaped.",
    target2: 2,
    end: null,
  }, // 0

  {
    end: "But you repeat the animation again and again, don't you? Doesn't that mean he technically doesn't end his loop because the loop restarts over and over again?",
  }, // 1

  {
    end: "Getting philosophical here, I see. Technically, he does reach the end of his loop every time. He doesn't escape it, yes, but he reaches the end because he never stops in the middle.",
  }, // 2

];

let prompt4 = [
  {
    question: "Sometimes it feels like we're running out of time. Do you agree?",
    option1: "Yes.",
    target1: 1,
    option2: "No.",
    target2: 1,
    end: null,
  }, // 0

  {
    question: "Sometimes it feels like we're not progressing fast enough in life. Do you agree?",
    option1: "Yes.",
    target1: 2,
    option2: "No.",
    target2: 2,
    end: null,
  }, // 1

  {
    question: "Entire years seem to disappear in the blink of an eye yet some days feel endless. Do you agree?",
    option1: "Yes.",
    target1: 3,
    option2: "No.",
    target2: 3,
    end: null,
  }, // 2

  {
    question: null,
    option1: null,
    target1: null,
    option2: null,
    target2: null,
    end: "It feels like I'm getting to know you deeper and deeper, Perception.",
  }, // 3
];

let prompt5 = [
  {
    question: "Does it look like he's moving?",
    option1: "Yes, even though he looks weird.",
    target1: 1,
    option2: "No, because I already understand how frames work",
    target2: 1,
  }, // 0

  {
    end: "Whatever you say, Perception...",
  }, // 1
];

let prompt6 = [
  {
    question: "Aren't we filled with the same beauty? Don't we deserve the same grace?",
    option1: "We do, but this is easier said than done.",
    target1: 1,
    option2: "We don't. We're humans, not plants or animals.",
    target2: 1,
  }, // 0

  {
    text: "Is it because we're not as linear or as cyclical as time?",
  }, // 1

  {
    text: "Or perhaps it's because we don't understand ourselves well?",
  }, // 2

  {
    text: "Perhaps we're a little bit jumbled.",
  }, // 3

  {
    text: "Do you remember last year well?",
  }, // 4

  {
    question: "Do you think you can recall every day in a chronological order without looking in your gallery or journal?",
    option1: "The months have blurred into one another.",
    target1: 6,
    option2: "I can't even remember what happened yesterday.",
    target2: 6,
  }, // 5

  {
    text: "Perhaps we've lost some parts of us to time.",
  }, // 6

  {
    question: "Do you remember every memory? Are you the same person as you were a year ago?",
    option1: "No.",
    target1: 8,
    option2: "I don't know.",
    target2: 8,
  }, // 7

  {
    text: "Perhaps we’ve only been skipping forward to the good parts because we needed to have something to look forward to.",
  }, // 8 

  {
    question: "Have you only been focusing on survival? That the only memories you remember are the ones you’ve looked forward to?",
    option1: "No.",
    target1: 10,
    option2: "I don't know.",
    target2: 10,
  }, // 9

  {
    end: "Thank you for being honest with me, Perception.",
  }, // 10
];

let prompt7 = [
  {
    question: "Does it look like he's moving?",
    option1: "No, only the phenakistoscope seems to be spinning.",
    target1: 1,
    option2: "Yes, technically he's moving but his motion isn't clear.",
    target2: 1,
  }, // 0

  {
    question: "Huh... why do you think so?",
    option1: "The phenakistoscope is spinning too fast.",
    target1: 2,
    option2: "The phenakistoscope doesn't have slits.",
    target2: 2,
  }, // 1

  {
    end: "Valid concern, Perception...",
  }, // 2
];

let prompt8 = [
  {
    question: "Does it look like he's moving now?",
    option1: "Yes!",
    target1: 1,
    option2: "Yes, but he’s moving pretty slow...",
    target2: 1,
  }, // 0

  {
    question: "How did that happen when there are still no slits on the phenakistoscope?",
    option1: "I don’t know.",
    target1: 2,
    option2: "You are tricking me somehow...",
    target2: 2,
  }, // 1

  {
    end: "Hmm...",
  }, // 2
];

let prompt9 = [
  {
    question: "Do you think you know yourself well?",
    option1: "Of course",
    target1: 1,
    option2: "No.",
    target2: 1,
  }, // 0

  {
    end: "Let's see...",
  }, // 1
];

let prompt10 = [
  {
    text: "How am I powerless against myself? How are you, a victim of the mind, still powerful against me?",
  }, // 0

  {
    text: "I would very much like to control things like you do, Perception.",
  }, // 1

  {
    question: "How do I take control? How do I hone my power?",
    option1: "I am just a lens. I do not control you.",
    target1: 3,
  }, // 2

  {
    text: "But it's you who decides what I see and feel, and it's my brain that decides how I interpret things.",
  }, // 3

  {
    question: "What's my role, then? What's my responsibility? (Hint: one word)",
    input: true,
    correctAnswer: "patience",
    correct: 5,
    wrong: 6,
  }, // 4

  {
    text: "I agree.",
    next: 8,
  }, // 5

  {
    text: "That's very sweet of you, Perception... and this answer says a lot about you.",
    next: 7,
  }, // 6

  {
    text: "I personally think it's patience.",
    next: 8,
  }, // 7

  {
    text: "Patience to give grace, to step back when needed, to sit with any feeling.",
  }, // 8

  {
    text: "Patience to understand how your brain works and how you process information.",
  }, // 9

  {
    text: "Patience to look within, to recognize patterns within yourself. ",
  }, // 10

  {
    end: "How did Fred manage to run even when he was missing some frames? There were patterns, were there not?",
  }, // 11

];

let reflection = [];

class PopUp{
    constructor(prompts){
        this.popUpDisplay = createImg('assets/ui/pop-up-v2.png');
        this.popUpDisplay.parent("game-container");
        this.popUpDisplay.position(600, 200);
        this.popUpDisplay.size(715, 388);

        this.prompts = prompts;
        this.current = 0;

        this.questionP = createP();
        this.questionP.parent("game-container");
        this.questionP.position(710, 250);
        this.questionP.style("color", "#dcdcdc");   
        this.questionP.style("align", "left");
        this.questionP.style("width", "500px");
        this.questionP.style("font-family", "DotGothic16");
        this.questionP.style("font-size", "24px");

        this.option1P = createP();
        this.option1P.parent("game-container");
        this.option1P.position(710, 370);
        this.option1P.style("color", "#dcdcdc");   
        this.option1P.style("text-align", "left");
        this.option1P.style("width", "500px");
        this.option1P.style("font-family", "DotGothic16");
        this.option1P.style("font-size", "20px");
        this.option1P.style('cursor', 'pointer');
        this.option1P.mousePressed(() => this.choose(1));

        this.option2P = createP();
        this.option2P.parent("game-container");
        this.option2P.position(710, 450);
        this.option2P.style("color", "#dcdcdc");   
        this.option2P.style("text-align", "left");
        this.option2P.style("width", "500px");
        this.option2P.style("font-family", "DotGothic16");
        this.option2P.style("font-size", "20px");
        this.option2P.style('cursor', 'pointer');
        this.option2P.mousePressed(() => this.choose(2));

        this.endP = createP();
        this.endP.parent("game-container");
        this.endP.position(710, 300);
        this.endP.style("color", "#dcdcdc");
        this.endP.style("align", "left");
        this.endP.style("width", "500px");
        this.endP.style("font-family", "DotGothic16");
        this.endP.style("font-size", "28px");

        this.textInput = createInput();
        this.textInput.parent("game-container");
        this.textInput.position(900, 450);
        this.textInput.size(100);
        this.textInput.elt.onkeydown = (e) => {
          console.log(e.key);
          if (e.key === "Enter"){
            this.submit();
          }
        };

        this.textP = createP();
        this.textP.parent("game-container");
        this.textP.position(710, 300);
        this.textP.style("color", "#dcdcdc");
        this.textP.style("align", "left");
        this.textP.style("width", "500px");
        this.textP.style("font-family", "DotGothic16");
        this.textP.style("font-size", "28px");
        this.textP.style('cursor', 'pointer');
        this.textP.mousePressed(() => {
          if (this.isReflection){
            this.advanceReflection();
          } else {
            this.advance();
          }
        });

        this.exitButton = createImg('assets/ui/exit-V2.png');
        this.exitButton.parent("game-container");
        this.exitButton.position(1240, 245);
        this.exitButton.style('cursor', 'pointer');
        this.exitButton.size(30,30);
        this.exitButton.isDisabled = false;
        this.exitButton.mousePressed(exitPopUp); 

        this.hide();
    }

    show(){
        this.popUpDisplay.show();
        this.questionP.show();
        this.option1P.show();
        this.option2P.show();
        this.endP.show();
        this.exitButton.show();
        this.textP.show();
        this.textInput.show();
        
        this.update();
    }

    hide(){
        this.current = 0;
      
        this.popUpDisplay.hide();
        this.questionP.hide();
        this.option1P.hide();
        this.option2P.hide();
        this.endP.hide();
        this.exitButton.hide();
        this.textP.hide();
        this.textInput.hide();
    }

    update(){
        let prompt = this.prompts[this.current];

        let popUpDone = (prompt.end != null);
        
        if (this.isReflection){
          let r = reflection[this.current];

          if (!r) return;

          this.questionP.show();
          this.questionP.html(r.question);

          this.option1P.show();
          this.option1P.html(">" + r.answer);

          this.option2P.hide();    

          return;
        }
 

        this.exitButton.isDisabled = !popUpDone;
        if (this.exitButton.isDisabled){
          this.exitButton.style('pointer-events', 'none');
          this.exitButton.style('cursor', 'default');
        } else {
            this.exitButton.style('pointer-events', 'auto');
            this.exitButton.style('cursor', 'pointer');
        }

        if (prompt.input){
          this.textInput.show();
        } else {
          this.textInput.hide();
        }
        
        if (prompt.question) {
          this.questionP.show();
          this.questionP.html(prompt.question);
        } else {
          this.questionP.hide();
        }

        if (prompt.option1) {
            this.option1P.show();
            this.option1P.html("> " + prompt.option1);
        } else {
            this.option1P.hide();
        }

        if (prompt.option2) {
            this.option2P.show();
            this.option2P.html("> " + prompt.option2);
        } else {
            this.option2P.hide();
        }

        if (prompt.end) {
          this.endP.show();
          this.endP.html(prompt.end);
        } else {
          this.endP.hide();
        }

        if (prompt.text){
          this.textP.show();
          this.textP.html(prompt.text);
        } else {
          this.textP.hide();
        }
      }

    choose(option){
        let prompt = this.prompts[this.current];

        reflection.push({
          question: prompt.question,
          answer: option == 1 ? prompt.option1 : prompt.option2
        });

        console.log(reflection);
        
        if (option == 1){
            this.current = prompt.target1;
        } else {
            this.current = prompt.target2;
        };


        this.update();
    }

    advance(){
      let prompt = this.prompts[this.current];

      if (prompt.next != null){
        this.current = prompt.next;
      } else {
        this.current++;
      }

      this.update();
    }

    advanceReflection(){
      if (this.current < reflection.length - 1){
        this.current++;
        this.update();
      } else {
        exitPopUp();
      }
    }

    submit(){
      let prompt = this.prompts[this.current];
      let answer = this.textInput.value().trim().toLowerCase();

      reflection.push({
        question: prompt.question,
        answer: answer,
      })

      if (answer == prompt.correctAnswer.toLowerCase()){
        this.current = prompt.correct;
      } else {
        this.current = prompt.wrong;
      }
      
      this.update();
    }
}
