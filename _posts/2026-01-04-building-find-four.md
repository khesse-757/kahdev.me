---
layout: post
title: "Building Find Four"
date: 2026-01-04
tags: [react, typescript, webrtc, multiplayer, gamedev]
---

First post of 2026. I built a Connect Four game to learn peer-to-peer multiplayer and continue refining the development practices I picked up building Sudoku Terminal. This might be the most fun I've had programming. Some friends were talking about building a side scroller kind of game like Teenage Mutant Ninja Turtles for SNES, that 1980s pixel art beat 'em up. Maybe scan in our faces and each player has their own special skill. I'm starting small with this...

## Why Connect Four

Simple rules, interesting AI problem, and straightforward to add multiplayer. The game state is just a 7x6 grid. Moves are deterministic. Perfect for experimenting with WebRTC without complex game synchronization issues.

## The Hacker vs Defender Theme

The terminal aesthetic from my other projects carries over here. One player is the hacker dropping amber pieces, the other is the defender in cyan. It fits the site and gave me something more interesting than red vs yellow.

## What I Actually Learned

### WebRTC is Finicky

PeerJS makes WebRTC manageable, but the connection negotiation still has edge cases. ICE failures on localhost, STUN servers that work sometimes, connection refs that disappear when components remount. I ended up storing the peer connection in Zustand instead of React refs to keep it stable across the component tree.

### How the Peer-to-Peer Connection Works

The multiplayer uses PeerJS, which wraps WebRTC and provides a signaling server. Here is the flow:

1. Host clicks "Create Game" and registers with the PeerJS server using a 6 character room code as their ID
2. Guest clicks "Join Game", enters the room code, and asks the PeerJS server to connect them to that ID
3. PeerJS brokers the initial handshake, then the two browsers connect directly
4. Once connected, moves are sent as simple JSON messages: `{ type: 'move', column: 3 }`
5. Each client validates and applies incoming moves to their local game state

No game server required. The PeerJS signaling server only handles the introduction. After that, data flows browser to browser. The tradeoff is that both players need to be online simultaneously, and connections can be fragile if someone is behind strict NAT or firewalls.

### AI With Minimax

The computer opponent uses minimax with alpha-beta pruning. Three difficulty levels control the search depth: easy looks 2 moves ahead, medium does 4, hard goes to 6. The evaluation function scores potential winning lines and favors center columns. Nothing fancy, but it plays a reasonable game.

### Testing Pays Off

I wrote tests for all the game logic before building the UI. Caught several bugs in win detection and AI move selection that would have been painful to debug through the interface. The CI pipeline runs lint, typecheck, and tests on every push. Feels slower upfront, but saves time overall.

### State Management

Zustand again. One store for game state, another for connection state. Keeps the logic separated and makes it easy to share state between components without prop drilling. The online multiplayer adds complexity since you need to track whose turn it is locally and sync moves over the network.

### Building With Claude Code

I built this entire project using Claude Code in my terminal. Instead of copy-pasting between a chat window and my editor, I described what I wanted and Claude Code wrote the files directly. Sooo much better.

The workflow split between planning and execution. I described features and architecture in the Claude web app, then worked through decisions like state management and file structure. Once there was a plan, I copied the prompt to Claude Code in my terminal and watched it write the files. When builds failed or tests broke, I brought the errors back to the web conversation to debug, then sent the fix to the cli. Using the web and the cli at the same time made things pretty easy.

Some things that worked well:

- **Scaffolding**: Setting up TypeScript config, Vite, Tailwind, ESLint, Vitest, GitHub Actions. Configuration files are tedious. Describing what I wanted was faster than looking up the right options.
- **Test-first logic**: I described the game rules and edge cases. Claude Code wrote the tests and implementation together. The AI logic and win detection were solid on the first pass.
- **Debugging**: Pasting stack traces and console output, then asking "why is this failing" got useful answers. The PeerJS connection issues took several rounds but we traced it to refs not persisting across component remounts.

Some things that needed more guidance:

- **Visual design**: I had to be specific about the aesthetic. Describing exact colors, fonts, and layout worked better. Had to post snapshots quite often.
- **Architecture decisions**: Early on I laid out the file structure and module boundaries. Claude Code followed the plan. I had to write and iterate on it.

Overall it felt like pair programming with someone who types faster than me and knows every API. I still made the design decisions, but the implementation was collaborative. 

I feel like I'm starting to sound like an ad for this thing. Plain english coding is just fun. I feel the confidence to try literally anything. 

## The Stack

Same as Sudoku with a few additions:

- React 19, TypeScript strict mode
- Vite for builds
- Zustand for state
- Tailwind for styling
- PeerJS for WebRTC multiplayer
- Vitest for testing
- GitHub Actions for CI/CD

## Try It

[findfour.kahdev.me](https://findfour.kahdev.me)

Challenge the AI or grab a friend and test the online mode. The source is on [GitHub](https://github.com/khesse-757/find-four).