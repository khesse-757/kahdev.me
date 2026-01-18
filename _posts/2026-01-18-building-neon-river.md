---
layout: post
title: "Building Neon River"
date: 2026-01-18
tags: [typescript, canvas, gamedev, pixel-art, ai-art]
---
I have been playing Jak and Daxter games since the PS2 era. The Precursor Legacy has a special place in my heart. One mini game was fishing. You stand on a dock with a net, and catch fish swimming by. So simple and so much fun. I spent way too many hours on it as a kid with friends just passing the controller around. The amazing voice of the fisherman, those 5 pound fishies, the poinsonous eels! Naughty Dog just put so much love into this. The world they built is incredible. 

![Neon River gameplay](/assets/images/neon-river-background.png)

I made this game because I wanted to recreate that feeling. Something that just brings joy. A quiet river at night, away from the futuristic city in the distance.

## The Bigger Picture

My friends and I have been talking about building a side scroller together. Something like the old Teenage Mutant Ninja Turtles arcade games or Streets of Rage. Each of us as a playable character with our own abilities. Scan in our faces, give everyone a signature move.

That is a big project. I am working up to it in pieces. Sudoku Terminal taught me state management and testing. Find Four taught me multiplayer and AI. Neon River is teaching me canvas rendering, sprite animation, and game loops. Each project adds tools to the toolbox.

## Standing on Shoulders

Building this gave me a huge appreciation for what actual game studios accomplish. Naughty Dog made that fishing mini game as a side activity in a massive platformer. It was less than 1% of the total game content. And it still required artists to draw the fish, animators to make them swim, designers to balance the difficulty, programmers to handle the physics, sound designers to make it feel right.

I made a simplified version of just that one minigame. The amount of effort, patience, and artistry that goes into any game is staggering. Every sprite, every sound effect, every animation frame represents someone's work. I remember in college, we had to build Space Invaders in Java for a 200 level CS class. This took weeks...

In the age of AI, the barrier is lower. I can generate backgrounds and iterate on concepts instantly.

## Finding the Vision

I started with a vague idea: fishing game, night time, peaceful, some cyberpunk elements. To get my idea visualized, I wrote a detailed prompt and fed it to Gemini using Nano Banana Pro:

> A video game screenshot, third person view from behind and above a mysterious fisherman sitting on the edge of a low, flat moss covered stone bridge over a small creek at night. Camera positioned high, angled downward to show the water surface as the main play area. The fisherman wears a large traditional Japanese kasa and simple dark robes, holding a high tech hinged fishing net. The handle has a glowing cyan joint mechanism allowing the net to angle down into the water while the fisherman remains seated. The net has a sleek bamboo and metal frame with faint neon accents. The creek has calm dark water with subtle reflections, ripples, and glowing fish visible beneath. Riverbanks lined with reeds, cattails, and rounded shrubs frame the sides. Rolling hills with cozy trees in the midground. The distant cyberpunk city skyline is visible on the horizon, glowing with purple and teal neon lights against a dark starry sky with a large moon. Edo Japan with cyberpunk aesthetic. Atmospheric, moody, moonlit. Water surface takes up the center of the frame as gameplay area, city visible in upper portion. Stylized 3D render, video game concept art, Unreal Engine 5.

I was originally thinking Three.js with 3D models and meshes.  What came back helped me see what the game could be:

![Concept art from Gemini](/assets/images/neon-river-unreal.jpg)

 Edo Japan meets Cybperpunk 2077. A mysterious fisherman on a stone bridge. Neon city in the distance. Moonlit water. I kept referring back to it throughout development.

But 3D was going to be a rabbit hole after seeing the assets needed. I pivoted to pixel art. Same aesthetic, simpler implementation. Canvas 2D instead of WebGL. Static background image instead of real-time 3D rendering.

## The AI Art Pipeline

The final game uses art from multiple sources:

**Background and Fisherman** - Generated with Gemini Nano Banana Pro. I iterated on prompts until the composition felt right. The river needed to be wide enough for gameplay. The city needed to be visible but not dominant. The fisherman needed to sit in a corner without blocking the play area. Probably 10-15 generations before I had something that aligned with my vision.

**Fish, Net, and UI** - Built with Claude. Pixel art sprites defined as TypeScript arrays. Each fish is a grid of color indices mapped to a palette. This made iteration fast. Change a number, see the pixel change. No external sprite editor needed.

**Sound Effect** - The catch sound in version 1.0.0 is a cut down version of [this water sound from freesound.org](https://freesound.org/people/nilbul/sounds/404829/) by nilbul. I trimmed it, adjusted the levels, and ran it through the Web Audio API for low-latency playback on mobile.

## What I Learned

### Mobile Audio is Annoying

The HTMLAudioElement approach has 100-300ms latency on phones. Unacceptable for game feel. Switching to Web Audio API with pre-decoded buffers got it down to under 20ms. But you have to initialize the AudioContext after a user interaction or mobile browsers block it.

### Bezier Curves for Natural Movement

The river is defined as a cubic bezier curve. Fish follow the path with a parameter t from 0 to 1. This makes them flow naturally. Width increases as t increases, creating perspective. Simple math, nice result.

### State Machines for UI

The game has five states: title, playing, paused, gameover, win. Each state has its own update and render logic. Transitions are explicit. This kept the code organized as I added more screens.

## The Stack

- TypeScript in strict mode
- Vite for builds
- Vitest for testing
- Canvas API for rendering
- Web Audio API for sound
- GitHub Actions for CI/CD
- GitHub Pages for hosting

No React this time. Pure TypeScript with classes. The game loop runs at 60fps using requestAnimationFrame. State is managed through class properties. It felt appropriate for a game project.

## Try It

[neonriver.kahdev.me](https://neonriver.kahdev.me)

Catch 200 lbs of fish. Avoid the eels. Find some peace.

Source is on [GitHub](https://github.com/khesse-757/neon-river).

![Fisherman sprite](/assets/images/fisherman.png)