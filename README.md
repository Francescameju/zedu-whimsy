# Zedu, but whimsical

A playful redesign prototype of the [zedu.chat](https://zedu.chat) homepage hero, made for HNG15 Task 2 (whimsical design).

**What moves**
- Every letter of the headline drops in and bounces, then "Learning" gets a hand-drawn squiggle and the rating stars pop in one by one. Hover a letter to make it hop; "play the bounce again" replays it.
- Chat bubbles drift up behind the hero and a paper plane flies across: Zedu is about conversation.
- Stats count up, the app preview floats and plays a short chat, and "Try for free" throws graduation-cap confetti.
- A sparkle trail follows the mouse (mouse users only).

**Works everywhere:** plain HTML, CSS and JavaScript, no frameworks or Three.js. The intro waits until the tab is visible, the layout adapts to phones, and all motion turns off for people who set "reduce motion" on their device.

Built by Franchesca Meju (Team Cybertron).

## Pages
- **Home** (`index.html`): bouncing headline letters, squiggle, popping stars, floating chat bubbles.
- **About** (`about.html`): "noise to calm". Scattered group-chat messages tidy themselves into three channels, which is Zedu's "structure drives clarity" idea shown in motion. The vision statement lights up word by word as you scroll.
- **Download** (`download.html`): a phone peeks out of a school backpack, the store buttons land like stickers, one paper plane carries the "10,000+ students" banner, and each feature icon does one small thing when it scrolls into view.

Phone-first: every effect plays on scroll or tap (no hover needed), only one or two things move at a time, and constant motion is turned off on small screens.
