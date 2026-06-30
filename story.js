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
  "Alternatively, you can adjust his rate manually through the input box and simply press the play button.", // 9, trigger 10 after fps input interaction 
  "I see. Well, feel free to keep playing with Fred! Once you’re done, press next!",  // 10
  
  "Now press the play button and watch him run.", // 11
  
  "This is Fred’s “actual” pace—that is, if there exists a consistent universal truth where everyone and everything agrees on this speed.", // 12
  "That is, if all clocks measured his speed the same way, if Fred can confirm that he is running at this pace, and if every observer arrives at the same conclusion.", // 13
  "That is, if you, Perception, are not in any way manipulating his speed.", // 14
  "Of course, mathematically, Fred’s speed cannot be manipulated; it can be measured and be labeled as slow or fast or normal depending on the average speed of a horse.", // 15
  "However, you are one tricky lens, Perception, making us see Fred's motion differently depending on our distance from him.", // 16
  
  "Distance, in this context, can mean many things.", // 17
  "Distance, physically, can allude to the space between the observer and the thing being observed.", // 18
  "Fred may seem slower if we were watching him gallop deep in the forest, but if he were running past us at arm's length, he may seem faster.", // 19
  "If we were running with Fred, however, he may seem slower if we're not yet tired, faster if we're already finding it hard to breathe and keep up.", // 20
  "This is because distance can also be psychological, through cognitive biases that influence how we observe. Events can become distorted, blurry, exaggerated, even sharpened.", // 21

  "By controlling the slider, you, Perception, changed how Fred's motion was experienced.", // 22
  "Yet no matter how fast or slow or even backward he ran, he always reached the end of his loop.", // 23, trigger "Did he actually? Do you agree with this?"
  
  "Fred might have never escaped his loop—not yet—but he does reach the end because the frames are designed to have a starting point and an ending point.", // 24
  "And since you never rearranged the frames only Fred's speed was affected.", // 25
  "In animation terms, only the FPS was manipulated.", // 26
  "We still viewed the frames in complete, chronological order. No stops, no skips. Just like how time works, right? Linear—from one point to another.", // 27

  "Yet history tells us that time might not be linear at all. It is a measurement of change, after all, and doesn't the world change through cycles and seasons?", // 28
  "One year ends and another begins. People are in a constant loop that feels a little bit different depending on who's experiencing it.", // 29
  "Time became a way of understanding these cycles—to be in tune with the world, to predict what was coming next, to know when to plant crops and when to prepare for the cold.", // 30
  "They studied the movement of the sun, how its shadow determined what time of day it is. They created sundials to measure the time and calendars to tell the month or season.", // 31
  "Eventually, they revolutionized the sundial and started measuring time through clocks.", // 32
  "Somewhere along the way, it seems we got all confused.", // 33
  "If time is merely a measurement, then why do we feel powerless against it?", // 34
  "Why do we move as though it controls us and not the other way around?", // 35
  "Don't we decide when to slow down and when to move fast? Not the shadow of the sun nor the ticking of a clock?", // 36
  "If the shadow of the sun moves at the same pace for everyone and clocks tick at a consistent rate, then why are do our experiences of time vary from one another?", // 37

  "All this confusion has to do with you, Perception.", // 38

  "Time kept moving regardless of how fast Fred galloped. When you controlled the FPS, you adjusted the number of frames displayed per second.", // 39
  "So when Fred was running slow, approximately three frames were being displayed per second.", // 40
  "When he was fast, approximately five frames were being displayed per second.", // 41
  "Of course, you still had the ultimate power here. You were the one controlling the slider after all.", // 42
  "You, Perception, changed how Fred's motion was experienced and, well, remembered.", // 43
  "You wanted us to see him slow, so we saw him slow. You wanted us to see him fast, so we saw him fast.", // 44
  "You even made him go backward because that's what you wanted us too experience.", //  45
  "You wanted to play with his pace and direction, yet his motion wasn't truly impacted.", // 46
  "Fred continued on, kept on running and attempting to chase his dreams.", // 47
  "You might have changed how fast he was moving, but he continued moving nonetheless.", // 48
  "You controlled the experience, not reality.", // 49
  "What happens if you mess with frames now, instead of FPS? Will you be able to control reality by then?", // 50


  // PHASE 2 
  "Controlling reality is quite ambitious, Perception.", // 51
  "If you truly want to control reality, you must first get a better understanding of time, motion, and change.", // 52
  "Let's take a trip down memory lane, shall we?", // 53
  "Before motion pictures took over the world by storm, there was no way of actually capturing motion—that is, until Muybridge entered the picture (get it?).", // 54
  "Muybridge developed chronophotography, a crucial development in the invention of motion pictures.", // 55
  "It involves capturing continuous images of a moving object, revealing every change in the object's motion.", // 56
  "When these images are displayed chronologically, viewers can see how the object shifts from one moment to another.", // 57
  "Feel familiar? Animation and time functions similarly.", // 58
  "Let's test this by dissecting Fred's motion frame by frame. Play with the slider to your heart's content, Perception!", // 59
  
  "This is what animation looks like in frames. Very similar to what time looks like in moments. We can observe subtle changes in between frames.", // 60 gallery display 
  "When these frames are watched chronologically, one frame after the other, people assume motion and change that isn't there. Click on the animate button and play!", // 61 
  "But when we look at it as a gallery, we see how animation works. It’s many frames with subtle changes arranged chronologically to mimic movement.", // 62 animateion display
  "You can adjust the slider to see how the animation works behind the scenes. You can switch between the gallery and animation display to witness the magic happen.", // 63
  "This is the illusion of animation and time. Our brains make up motion from still images the same way our brains make time from change.", // 64
  "Chronophotography helped shape the linear understanding of motion as well as time, further reinforcing the arrow of time theory.", // 65
  "It is believed that time is represented by an arrow, starting from one point (the past) and stretching infinitely to the future.", // 66 
  "But we also learned earlier that time passes in cycles; the world moves through seasons. Perhaps instead of a line or an arrow, time is a circle.", // 67
  "Immanuel Kant doesn’t think much about the movement of time—whether it’s linear or cyclical or even static.", // 68
  "He focused on time being a mental framework, something that only exists in our heads to organize change and life experiences.", // 69
  "Augustine of Hippo added on by stating that the past only exists as memories and the future only exists as expectations. We construct time based on how we experience it.", // 70
  
  "What do you think your role is in all this, Perception?", // 71
  "Earlier, you could only control Fred’s speed, not his motion.", // 72

  // SKIP 
  "Now try clicking on the track and skipping some frames. You can even skip to the end if that's what you want Fred to do.", // 73

  // REMOVE 
  "Let's make things easier for you and remove some frames so you could adjust the slider manually instead.", // 74
  "Hint: click on the gallery display to check which specific frames are being removed! There is also a frame tracker to check how many frames are left.", // 75
  "Feel free to remove as many frames as you want. Each click removes a new random frame. If you want Fred to go back to normal, you can click on the reset button.", // 76
  "Watch how Fred runs now.", // 77
  "His movement seems jumpy, doesn't it? Like he's missing some steps but somehow he's still moving.", // 78
  "Not as smooth as before but at least he’s still moving... right?", // 79
  "Despite erasing a couple frames, everything's still linear, right? In a chronological order. Start to finish—though we missed some moments here and there.", // 80

  // SHUFFLE 
  "Let's ensue chaos, then. Shuffle his movement. Get rid of all things that make sense.", // 81
  "Click on the shuffle button to shuffle the frames. Then adjust the slider again!", // 82

  "Once you’re done playing, click next!", // 83

  "Time rarely feels linear, whether we’re experiencing it first-hand or looking back at it.", // 84
  "It’s always inconsistent and unpredictable, unlike the movement of the skies or the seasons of life.", // 85
  "Which makes it weird because didn’t we base time on consistency and predictability? Isn’t this how we got better at being in tune with the world?", // 86
  "We created an entire system of time based on nature and the cosmos. We understand that some flowers grow faster than others because that’s how they’re wired.", // 87
  "We understand that sometimes the clouds cry and sometimes the animals sleep for a long time.", // 88
  "And so we give them grace. We hear the thunder roar and prepare for the storm. We hear the wind whistle and we extend our arms out for a hug.", // 89
  "We have a better understanding of the world around us than what’s inside us. We are more patient with the trees and the sun and the flowers.", // 90
  "Aren’t we filled with the same beauty? Don’t we deserve the same grace?", // 91
  "Or maybe it’s because we are not as linear or cyclical as time?", // 92
  "Perhaps we’re a little bit jumbled.", // 93
  "Perhaps we’ve lost some parts of us to time.", // 94
  "Perhaps we’ve only been skipping forward to the good parts because we needed to have something to look forward to.", // 95
  "Perception, when you deconstructed the frames earlier, we believed what we saw. We believed what we experienced", // 96
  "We believed that Fred was galloping a little funny. We believed that Fred somehow reached the end of his loop even at times when he wasn’t even moving his legs.", // 97
  "You, Perception, are in charge of what we see, what we believe, and what we process.", // 98
  "You dictate how we experience time but you are not in charge of everything.", // 99
  "Our minds decide how we process our experiences and helps us make decisions.", // 100 
  "The all-powerful mind that never gets deceived by any illusion… right?", // 101

  // PHASE 3 
  "This is the start of Phase 3", // 102

  // PHASE 4 
  "This is the start of Phase 4", // 103
];
