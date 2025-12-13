---
layout: post
title: "Matrix Rain Visualizer"
date: 2025-12-13
tags: [python, pyscript, visualization]
---

This site has a green terminal theme, and I already had a rain drop effect on the main page for the ASCII art and my initials. But I wanted something more Matrixy. Like the digital rain from Neo's apartment scene. So I built it with PyScript to test out my Python template.

## The Concept

The rain effect is continuous falling characters. When you touch the screen or move your mouse, characters repel from your cursor or finger. I figured it was like seeing a glitch in the matrix.

There are speed controls and options for random speed variation.

## Why PyScript

PyScript is relatively new tech that lets you run Python directly in the browser without a backend server.

This was good for a visualization and for using my Python template. I could write the logic in Python, render to HTML5 canvas, and deploy it as a static site.

## Canvas Rendering

The visualization uses HTML5 canvas. Canvas gives you a drawing surface where you can programmatically place pixels, shapes, and text. For the Matrix rain effect, I'm drawing characters at specific coordinates and updating their positions on each frame.

The fade trail effect, where the characters leave trails as they fall, comes from not completely clearing the canvas between frames. Instead of wiping it clean, I draw a semi-transparent black rectangle over everything. Old characters fade out gradually while new ones stay bright.

## Challenges

**Mobile Touch Tracking**

Touch events weren't working initially. Turns out I needed to add `touch-action: none` to the CSS. Without this, I was running into weird scroolling or nothing happening. This took a few rounds with Claude to figure out.

**Pause and Reset**

The reset button wouldn't work while the animation was paused. The issue was in how the pause state was being checked. When paused, the animation loop stopped, so the reset couldn't trigger a redraw. Fixed it by making reset work independently of the pause state.

**GitHub Pages Styling**

After deploying, the documentation styling broke. GitHub Pages uses Jekyll by default, and Jekyll ignores files and folders that start with underscores. This includes CSS directories from many frameworks.

The fix is a `.nojekyll` file in the root. It tells GitHub to serve files as-is without Jekyll processing.

**Character Speed**

Getting the speed values right took iteration. What felt slow on desktop was still too fast on mobile. The touch interaction is slightly different, and the visual perception changes on smaller screens. It's still a bit fast on mobile compared to desktop, but it's close enough.

**Visual Problem**

When resetting, characters would sometimes get cut off at the top of the screen. This was a timing issue. The clear and redraw weren't synchronized. Fixed it by the clearing the canvas before reinitializing the character positions.

## Testing and Deployment

I tested locally first using Python's built-in HTTP server and Docker. Once it worked locally, I pushed to GitHub Pages.

The iteration cycle for mobile was anoying. I had to deploy, test on my phone, make changes, and redeploy. Still figuring out a better workflow for mobile testing without constant deployments. Perhaps a local tunnel or better mobile device emulation.

## Documentation

The docs live at `/docs/` alongside the main site. In Jekyll, you can serve multiple sections from the same repo. The root serves the main page, and `/docs/` serves the documentation. Just a matter of proper folder structure and configuration.

## LLMs

I talked about this in the Python template blog too. LLMs are pretty amazing. I had an idea and quickly brought it to life. Prototyping with these tools is so easy.

The feedback loop is fast too. You can explore ideas that would feel too tedious to implement from scratch.

## Try It Yourself

The live demo is at [https://rain.kahdev.me](https://rain.kahdev.me) and the code is at [https://github.com/khesse-757/matrix-rain](https://github.com/khesse-757/matrix-rain). Documentation is at [https://rain.kahdev.me/docs/](https://rain.kahdev.me/docs/).

Move your mouse or touch the screen and watch the characters scatter. Adjust the speed, enable random variation, and see what feels right. It's a simple effect, but it turned out better than I expected. It's definitely better on desktop than on mobile.