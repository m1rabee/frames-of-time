// STORY 
let story = [ // array containing progressing text
  // PHASE 1 
  "Meet Fred, a lone horse recently separated from his family to follow his dreams.", // 0
  "His goal? To escape this loop he somehow found himself in.", // 1
  "As Perception, help him by adjusting the slider!", // 2

  "Fred is moving pretty slow, isn’t he? At this rate, will he even escape this loop? Will he still be able to chase his dreams?", // 3

  "Try making him run once again.", // 4
  "Now he’s moving fast! He might actually have a shot now!", // 5

  "But what if we intentionally sabotage him and make him run in reverse?", // 6
  "Are you having fun? Controlling how fast Fred gallops and what direction he moves?", // 7
  "Why don’t you have even more fun and make Fred go crazy?", // 8

  "Move the slider knob slowly if you want to make him run slow. Move it quickly if you want to make him run fast.", // 9
  "Alternatively, you can adjust his rate manually through the input box and simply press the play button.", // 10
  "Once you’re done playing with Fred, press next!", // 11
  
  "Press the play button and watch him run.", // 12
  
  "This is Fred’s “actual” pace—that is, if there exists a consistent universal truth where everyone and everything agrees on this speed.", // 13
  "That is, if all clocks measured his speed the same way, if Fred can confirm that he is running at this pace, and if every observer arrives at the same conclusion.", // 14
  "That is, if you, as the perception, is not in any way manipulating his speed.", // 15
  "Of course, mathematically, Fred’s speed cannot be manipulated; it can be measured and be labeled as slow or fast or normal depending on the average speed of a horse.", // 16
  "However, you are one tricky lens,  Perception, making us see motion differently depending on our distance from him.", // 17
  
  "Distance, in this context, can mean many things.", // 18
  "Fred may seem slower if we were watching him gallop deep in the forest, but if he were running past us at arm's length, he may seem faster.", // 19
  "If we were running with Fred, however, he may seem slower if we're not yet tired, faster if we're already finding it hard to breathe and keep up.", // 20
  "This is because distance can also be psychological, through cognitive biases that influence how we observe.", // 21
  "Events can become distorted, blurry, exaggerated, even sharpened.", // 22

  "By controlling the slider, you, Perception, changed how Fred's motion was experienced.", // 23
  "Yet no matter how fast or slow or even backward he ran, he always reached the end of his loop.", // 24
  "This is because you only controlled the FPS, not the frames.", // 25
  "We still viewed the frames in complete, chronological order. Fred's movement wasn't affected at all, just his speed.", // 26
  "No stops, no skips. Just like how time works, right? Linear--from one point to another.", // 27


  "Yet history tells us that time might not be linear at all. It is a measurement of change, after all.", // 28
  "And the world changes through cycles and seasons. Time became a way of understanding movement of life through sequence.", // 29
  "Our ancestors wanted to learn how to move with the world, plant crops or prepare for the cold according to the shadow of the sun.", // 30
  "They observed how the trees grew, how the skies moved, and how the animals behaved. To be more in tune with the world, they needed to predict the cycles.", // 31
  "So they created sundials to measure what time of the day it is, calendars to measure what month or season it is.", // 32
  "Eventually, we revolutionized the sundial and started measuring time through clocks.", // 33
  "Somewhere along the way, it seems we got all confused.", // 34
  "If time is merely a measurement, then why do we feel powerless against it?", // 35
  "Why do we move as though it controls us and not the other way around?", // 36
  "Don't we decide when to slow down and when to move fast? Not the shadow of the sun nor the ticking of a clock?", // 37
  "If the shadow of the sun moves at the same pace for everyone and clocks tick at a consistent rate,", // 38
  "then why are our experiences of time unpredictable and hard to explain?", // 39
  "Why do some hours feel endless while entire years disappear in the blink of an eye?", // 40
  "All this confusion has to do with you, Perception.", // 41

  "Time kept moving regardless of how fast Fred galloped. When you controlled the FPS, you adjusted the number of frames displayed per second.", // 42
  "So when Fred was running slow, approximately three frames were being displayed per second.", // 43
  "When he was fast, approximately five frames were being displayed per second.", // 44
  "Of course, you still had the ultimate power here. You were the one controlling the slider after all.", // 45
  "You changed how Fred's motion was experienced and, well, remembered.", // 46
  "You wanted us to see him slow, so we saw him slow. You wanted us to see him fast, so we saw him fast.", // 47
  "You even made him go backward because that's what you wanted us too experience.", //  48
  "You wanted to play with his pace and direction, yet his motion wasn't truly impacted.", // 49
  "Fred continued on, kept on running and attempting to chase his dreams.", // 50
  "You might have changed how fast he was moving, but he continued moving nonetheless.", // 51
  "You controlled the experience, not reality.", // 52
  "What happens if you mess with frames now, instead of FPS? Will you be able to control reality by then?", // 53


  // PHASE 2 
  "Controlling reality is quite ambitious, Perception.", // 54
  "If you truly want to control reality, you must first get a better understanding of time, motion, and change.", // 55
  "Let's take a trip down memory lane, shall we?", // 56
  "Before motion pictures took over the world by storm, there was no way of actually capturing motion—that is, until Muybridge entered the picture.", // 57
  "Chronophotography is a crucial development in the invention of motion pictures.", // 58
  "It involves capturing continuous images of a moving object, revealing very change in the object's motion evident per image.", // 59
  "And when displayed chronologically, viewers can see how this object shifts from one moment to another.", // 60
  "Feel familiar? Animation and—quite frankly—time functions similarly. And with time, we see more of reality, don't we?", // 61
  "Let's test this by dissecting Fred's motion frame by frame. Play with the slider to your heart's content, Perception!", // 62
  
  "This is what animation looks like in frames. Very similar to what time looks like in moments. We can observe subtle changes in between frames.", // 63
  "When these frames are watched chronologically, one frame after the other, people assume motion and change that isn't there.", // 64
  "But when we look at it as a gallery, we see how animation works. It’s many frames with subtle changes arranged chronologically to mimic movement.", // 65
  "This is the illusion of animation and time. Our brains make up motion from still images the same way our brains make time from change.", // 66
  "Chronophotography helped shape the linear understanding of motion as well as time, further reinforcing the Arrow of Time theory.", // 67
  "The arrow of time relies on the existence of past, present, and future. We can only move forward.", // 68
  "Yet Immanuel Kant proposed that time is only a construct, a way for us to understand change.", // 69
  "The past only exists as memories and the future only exists as expectations.", // 70
  "If time is truly linear, then why does reality feel fragmented and complicated?", // 71
  "Earlier, you could only control Fred's speed, not his motion.", // 72
  
  "Now try clicking on the track and skipping some frames. You can even skip to the end if that's what you want Fred to do.", // 73

  "Let's make things easier for you and remove some rames so you could adjust the slider manually instead.", // 74
  "Hint: click on the gallery display to check which specific frames are being removed!", // 75
  "His movement seems jumpy, doesn't it? Like he's missing some steps but somehow he's still moving.", // 76
  "Not as smooth as before but still... moving... right?", // 77
  "Now click on the remove button as much as you want! Each click removes a new random frame.", // 78
  "See the magic that you did.", // 79
  "Despite erasing a couple frames, everything's still linear right? In a chronological order.", // 80 
  "Start to finish, though we missed some moments here and there.", // 81

  "Let's ensue chaos, then. Shuffle his movement. Get rid of all things that make sense.", // 82
  "Click on the shuffle button to shuffle the frames. Then adjust the slider again!", // 83

  // PHASE 3 
  "This is the start of Phase 3", // 84
  "BLABLABLABLA", // 85

  // PHASE 4 
  "This is the start of Phase 4", // 86
];
