---
layout: post
title: "Building Pressure Log"
date: 2026-08-12
tags: [typescript, visualization, projects]
---

My girlfriend tracks weather and barometric pressure and connects them to her headaches and how she feels. She uses a RuuviTag sensor and its app, but the app never showed what she actually wanted: the rate of change. How fast is the pressure moving, not just where it is. She asked if an app could be made for that.

So I busted out some old rise over run from grade school and built a small TypeScript web app in the same style as my other projects. The goal was to get something working quickly. She exports a CSV from the Ruuvi app, drops it in, and gets a pressure chart, rate of change over 1h to 24h windows with plain tendency labels, a scrubber to look back at any moment, and notes she can pin to the timeline about how she felt.

Static site, GitHub Pages, one runtime dependency for the chart, everything else hand rolled with tests. The app just shows the data. She does the connecting.

## Try It

[pressure.kahdev.me](https://pressure.kahdev.me)

Source is on [GitHub](https://github.com/khesse-757/pressure-log).
