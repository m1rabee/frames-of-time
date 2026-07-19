// STORY 
let story = [ // array containing progressing text
  // PHASE 1 
  "Meet Fred, a lone horse recently separated from his family to follow his dreams.", // 0
  "His goal? To escape this loop he somehow found himself in.", // 1
  "As Perception, help him by adjusting the slider!", // 2

  "Fred is moving pretty slow, isn’t he? At this rate, will he even escape this loop? Will he still be able to chase his dreams?", // 3

  "Try making him run once again.", // 4
  "Now he’s moving fast! He might actually have a shot now!", // 5

  "But what if you intentionally sabotage him and make him run in reverse?", // 6
  "Why don’t you have even more fun and make Fred do whatever your heart desires?", // 7

  "Move the slider knob slowly if you want to make him run slow. Move it quickly if you want to make him run fast.", // 8, trigger 9 after slider interaction
  "Alternatively, you can adjust his rate manually through the input box and simply press the play button.", // 9

  "", // 10, trigger popup 1 
  "Keep playing with Fred as long as you want. Once you’re done, press next!",  // 11 
  "Now press the play button and watch him run.", // 12
  
  "This is Fred’s “actual” pace—that is, if there exists a consistent universal truth where everyone and everything agrees on this speed.", // 13
  "That is, if all clocks measured his speed the same way, if Fred can confirm that he is running at this pace, and if every observer arrives at the same conclusion.", // 14
  "That is, if you, Perception, are not in any way manipulating his speed.", // 15
  "Of course, mathematically, Fred’s speed cannot be manipulated; it can be measured and be labeled as slow or fast or normal depending on the average speed of a horse.", // 16
  "However, you are one tricky lens, Perception, making us see Fred's motion differently depending on our distance from him.", // 17
  
  "Distance, in this context, can mean many things.", // 18
  "Distance, physically, can allude to the space between the observer and the thing being observed.", // 19
  "Fred may seem slower if we were watching him gallop deep in the forest, but if he were running past us at arm's length, he may seem faster.", // 20
  "If we were running with Fred, however, he may seem slower if we're not yet tired, faster if we're already finding it hard to breathe and keep up.", // 21
  "This is because distance can also be psychological, through cognitive biases that influence how we observe. Events can become distorted, blurry, exaggerated, even sharpened.", // 22

  "", // 23 trigger popup 2

  "By controlling the slider, you, Perception, changed how Fred's motion was experienced.", // 24
  "Yet no matter how fast or slow or even backward he ran, he always reached the end of his loop.", // 25

  "", // 26, trigger popup 3 

  "Fred might have never escaped his loop—not yet—but he does reach the end because the frames are designed to have a starting point and an ending point.", // 27
  "And since you never rearranged the frames only Fred's speed was affected.", // 28
  "In animation terms, only the FPS was manipulated.", // 29
  "We still viewed the frames in complete, chronological order. No stops, no skips. Just like how time works, right? Linear—from one point to another.", // 30
  "Yet history tells us that time might not be linear at all. It is a measurement of change, after all, and doesn't the world change through cycles and seasons?", // 31
  "One year ends and another begins. People are in a constant loop that feels a little bit different depending on who's experiencing it.", // 32
  "Time became a way of understanding these cycles—to be in tune with the world, to predict what was coming next, to know when to plant crops and when to prepare for the cold.", // 33
  "They studied the movement of the sun, how its shadow determined what time of day it is. They created sundials to measure the time and calendars to tell the month or season.", // 34
  "Eventually, they revolutionized the sundial and started measuring time through clocks.", // 35
  "Somewhere along the way, it seems we got all confused.", // 36
  "If time is merely a measurement, then why do we feel powerless against it?", // 37
  "Why do we move as though it controls us and not the other way around?", // 38
  "Don't we decide when to slow down and when to move fast? Not the shadow of the sun nor the ticking of a clock?", // 39
  "If the shadow of the sun moves at the same pace for everyone and clocks tick at a consistent rate, then why are do our experiences of time vary from one another?", // 40

  "", // 41

  "All this confusion has to do with you, Perception.", // 42

  "Time kept moving regardless of how fast Fred galloped. When you controlled the FPS, you adjusted the number of frames displayed per second.", // 43
  "So when Fred was running slow, approximately three frames were being displayed per second.", // 44
  "When he was fast, approximately five frames were being displayed per second.", // 45
  "Of course, you still had the ultimate power here. You were the one controlling the slider after all.", // 46
  "You, Perception, changed how Fred's motion was experienced and, well, remembered.", // 47
  "You wanted us to see him slow, so we saw him slow. You wanted us to see him fast, so we saw him fast.", // 48
  "You even made him go backward because that's what you wanted us to experience.", //  49
  "You wanted to play with his pace and direction, yet his motion wasn't truly impacted.", // 50
  "Fred continued on, kept on running and attempting to chase his dreams.", // 51
  "You might have changed how fast he was moving, but he continued moving nonetheless.", // 52
  "You controlled the experience, not reality.", // 53
  "What happens if you mess with frames now, instead of FPS? Will you be able to control reality by then?", // 54


  // PHASE 2 
  "Controlling reality is quite ambitious, Perception.", // 55
  "If you truly want to control reality, you must first get a better understanding of time, motion, and change.", // 56
  "Let's take a trip down memory lane, shall we?", // 57
  "Before motion pictures took over the world by storm, there was no way of actually capturing motion—that is, until Muybridge entered the picture (get it?).", // 58
  "Muybridge introduced chronophotography, a crucial development in the invention of motion pictures.", // 59
  "It involves capturing continuous images of a moving object, revealing every change in the object's motion.", // 60
  "When these images are displayed chronologically, viewers can see how the object shifts from one moment to another.", // 61
  "Feel familiar? Animation and time functions similarly.", // 62
  "Let's test this by dissecting Fred's motion frame by frame. Play with the slider to your heart's content, Perception!", // 63 gallery display 
  
  "This is what animation looks like in frames. Very similar to what time looks like in moments. We can observe subtle changes in between frames.", // 64 
  "When these frames are watched chronologically, one frame after the other, people assume motion and change that isn't there. Click on the animate button and play!", // 65 enable animation button
  "But when we look at it as a gallery, we see how animation works. It’s many frames with subtle changes arranged chronologically to mimic movement.", // 66 animateion display
  "You can adjust the slider to see how the animation works behind the scenes. You can switch between the gallery and animation display to witness the magic happen.", // 67
  "This is the illusion of animation and time. Our brains make up motion from still images the same way our brains make time from change.", // 68
  "Chronophotography helped shape the linear understanding of motion as well as time, further reinforcing the arrow of time theory.", // 69
  "It is believed that time is represented by an arrow, starting from one point (the past) and stretching infinitely to the future.", // 70
  "But we also learned earlier that time passes in cycles; the world moves through seasons. Perhaps instead of a line or an arrow, time is a circle.", // 71
  "Immanuel Kant doesn’t think much about the movement of time—whether it’s linear or cyclical or even static.", // 72
  "He focused on time being a mental framework, something that only exists in our heads to organize change and life experiences.", // 73
  "Augustine of Hippo added on by stating that the past only exists as memories and the future only exists as expectations. We construct time based on how we experience it.", // 74
  
  "What do you think your role is in all this, Perception?", // 75
  "Earlier, you could only control Fred’s speed, not his motion.", // 76

  // SKIP 
  "Now try clicking on the track and skipping some frames. You can even skip to the end if that's what you want Fred to do.", // 77

  // REMOVE 
  "Let's make things easier for you and remove some frames so you could adjust the slider manually instead.", // 78
  "Hint: click on the gallery display to check which specific frames are being removed! There is also a frame tracker to check how many frames are left.", // 79
  "Feel free to remove as many frames as you want. Each click removes a new random frame. If you want Fred to go back to normal, you can click on the reset button.", // 80
  "Watch how Fred runs now.", // 81
  "His movement seems jumpy, doesn't it? Like he's missing some steps but somehow he's still moving.", // 82
  "Not as smooth as before but at least he’s still moving... right?", // 83
  "Despite erasing a couple frames, everything's still linear, right? In a chronological order. Start to finish—though we missed some moments here and there.", // 84

  "", // 85, trigger popup 5 

  // SHUFFLE 
  "Let's ensue chaos, then. Shuffle his movement. Get rid of all things that make sense.", // 86
  "Click on the shuffle button to shuffle the frames. Then adjust the slider again!", // 87

  "Once you’re done playing, click next!", // 88

  "Time rarely feels linear, whether we’re experiencing it first-hand or looking back at it.", // 89
  "It’s always inconsistent and unpredictable, unlike the movement of the skies or the seasons of life.", // 90
  "Which makes it weird because didn’t we base time on consistency and predictability? Isn’t this how we got better at being in tune with the world?", // 91
  "We created an entire system of time based on nature and the cosmos. We understand that sunflowers bloom fast while peonies take their time.", // 92
  "We understand that sometimes the clouds cry and sometimes the animals sleep for a long time.", // 93
  "And so we give them grace. We hear the thunder roar and prepare for the storm. We hear the wind whistle and we extend our arms out for a hug.", // 94
  "We understand the world and so we adjust to its tantrums and wishes. We are more patient with it than we are with ourselves.", // 95

  "", // 96, popup 6 

  "Perception, when you deconstructed the frames earlier, we believed what we saw. We believed what we experienced.", // 97
  "We believed that Fred was galloping a little funny. We believed that Fred somehow reached the end of his loop even at times when he wasn’t even moving his legs.", // 98
  "You, Perception, are in charge of what we see, what we believe, and what we process.", // 99

  "You dictate how we experience time but you are not in charge of everything.", // 100
  "Have you forgotten about… the mind?", // 101
  "The all-powerful mind that decides how we process our experiences and helps us make decisions?", // 102
  "The all-powerful mind that never gets deceived by any illusion… right?", // 103

  // PHASE 3 
  "Earlier, you attempted to deconstruct reality. Yet Fred still somehow ran… however weird his gallop looked like.", // 104
  "This is because you, Perception, are also a victim.", // 105
  "You controlled the previous experiences, yes. You controlled how we witnessed Fred’s motion, yes. But guess what?", // 106
  "We still found a way to create sense from your attempts at reality manipulation.", // 107
  "We still saw Fred run even though his motion was rearranged and some of his movements wre removed.", // 108
  "Even when you skipped to the end we knew that Fred somehow galloped his way to that ending.", // 109
  "Just like time, animation also “tricks” our brain into reconstructing sense out of… basically anything. ", // 110
  "However nonsensical an experience or an observation is, our brain processes it like there’s a ticking bomb waiting to be defused.", // 111
  "Tick, tick. Decide, decide. Our brain needs to make fast decisions for survival. This is how we have evolved. This is how we have learned to go through life.", // 112
  "Our brain prioritizes efficiency over accuracy.", // 113
  "Which unfortunately makes it very very vulnerable to illusions.", // 114
  "Early animation took advantage of this particular mind design.", // 115
  
  // PHENAKISTOSCOPE DISPLAY 
  "This is the phenakistoscope, one of the earliest animation tools invented.", // 116
  "It is a sequence of frames drawn on a disc with slits. When spinned, the phenakistoscope creates the illusion of motion.", // 117
  "Adjust the slider to see how the phenakistoscope displays Fred’s gallop.", // 118
  
  "", // 119, trigger prompt 7 

  "The slits on the original phenakistoscope are responsible for the illusion of motion because it relies on optical illusions—specifically, the persistence of vision. ", // 120
  "The persistence of vision enables the human eye to briefly retain an image after it has disappeared from view.", // 121 
  "Supposedly, each frame should look like it is continuously being replaced with its succeeding one. When this is done rapidly, motion is born.", // 122
  "However, without the slits, you can only see the phenakistoscope spinning and not the individual frames shifting into a different one.", // 123
  "Click the play button or adjust the slider again to see how the phenakistoscope displays Fred’s gallop this time.", // 124
  
  "", // 125, trigger prompt 8 
  
  "The slits on the phenakistoscope function the same as a mechanical shutter. They interrupt the human eye for a barely unnoticeable yet still significant amount of time.", // 126
  "This interruption is a fundamental animation design—it allows the observer to see a tiny slice of time at each angle, which freezes the motion enough for edges to remain sharp", // 127
  "Digitally, this can be achieved through a strobe effect, which means displaying the phenakistoscope at a certain frequency instead of a continuous spin. ", // 128
  "The phenakistoscope is a carefully designed tool of illusion. It is a timing system of drawings, rotation, and sampling.", // 129
  "The brain combines what it sees over short time windows. If the images change quickly enough and the changes are consistent, motion is perceived.", // 130
  
  "Click the play button or adjust the slider again to see how the phenakistoscope displays Fred’s gallop this time.", // 131
  "Can you find the right frequency that makes Fred’s gallop the most crisp and believable?", // 132
  "This time, you are in charge. This time, the strobe effect isn’t consistent. It’s on you, Perception, to create the illusion.", // 133
  
  "Because of the slits–or in this digital case, the strobe effect—there’s distortion.", // 134
  "Because of the distortion, we believe there’s motion even when we know there isn’t.", // 135
  "The frames seem to be moving even though individually they are not.", // 136
  "When carefully displayed,  through the genius timing system of the phenakistoscope, the frames feel sequential, in rhythm.", // 137
  "Fred looks like he’s galloping without any interruption, without any care in the world.", // 138
  "Our brains do not want to process the strobing lights because it wants to reconstruct a version of reality that makes the most sense", // 139
  
  "This is only good news if our brains are on our side 100% of the time.", // 140
  "But we don’t actually know how our brains reconstruct “new” and “better” realities. We don’t know what influences it to think this or that way. We don’t know how it processes illusions.", // 141
  "Yet we trust it all the same.", // 142
  "This is the illusion of introspection: the belief that we understand our own perception.", // 143
  "", // 144

  // PHASE 4 
  "Time, to this day, is still a curious subject.", // 145
  "Whether it's a fundamental aspect of the universe or a manifestation of our internal consciousness is still a debate.", // 146
  "Where should we put our trust in when we're constantly being blindsided? When our understanding of time and reality is distorted?", // 147
  "How are we going to determine what's actually real or not?", // 148
  "Well, this very question assumes a fundamental nature of the universe. It assumes a reality that is independent of human limitations, one that is malleable at that.", // 149
  "But what is the reality that we know of?", // 150
  "Is it the one we made up in our heads? Is it what we can see through our eyes? Is it what everyone and everything can agree upon?", // 151
  "Kant believes that how we observe time and reality is not based on a universal truth; rather our own unique understanding and interpretation of the world.", // 152
  "Our brains are conditioned by our personal experiences. Our cultures, histories, backgrounds, identities—they manipulate how we observe time and reality.", // 153
  "They manipulate you, Perception.", // 154
  "And you manipulate us.", // 155
  
  "", // 156

  "Here's every response you gave to the questions I asked earlier.", // 157
  "TO BE UPDATED", // 158
  "Notice any pattern? Try to reflec on what these answers might indicate in terms of how you process time and speed.", // 159
  "Perhaps you tend to lead with emotion.", // 160
  "Perhaps you tend to focus on how far you can go and how fast you can get there.", // 161
  "Perhaps you tend to appreciate even the smallest details before you even notice how fast you're running.", // 162
  "But these are things for you to find out.", // 163
  "And for you to find acceptance in.", // 164
  "And the most importance answer of them all—what you think your role is in all this.", // 165
  "When I asked you earlier about your responsibility, you said:", // 166
  "", // 167
  "Reflect on this.", // 168
  "Is this a responsibility? A burden? A quality you desire? A quality you look for in your loved ones?", // 169
  "Perhaps a quality ou give to your loved ones but fail to give to yourself?", // 170
  "Reflect.", // 171
  "Illusion exposes how our brains process reality, not how we are easily deceived. It shows us the systems we rely on to make sense of the world.", // 172
  "People have different systems, different personal ways of understanding reality and illusions.", // 173
  "This doesn't mean that we're broken or there's something that needs to be fixed.", // 174
  "It simply means that there's something that needs to be understood.", // 175
  "Preferably with patience.", // 176
  "The end. I hope you enjoyed experiencing time and motion with Fred!", // 177
];
