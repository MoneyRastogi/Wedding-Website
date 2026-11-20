# Divya & Aastha Wedding Invitation

A responsive React + Vite digital wedding invitation built for Divya and Aastha's wedding celebration in Dausa, Rajasthan.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- Framer Motion
- Lucide React
- Custom CSS artwork and SVG decorations

## Features

- Animated wedding envelope and wax-seal opening experience
- Wedding countdown in Indian Standard Time
- Couple, family and love-story sections
- Nine interactive wedding-event invitation cards
- Full-screen event lightboxes
- Responsive mobile navigation
- Call, share, Google Maps and music controls
- Browser-blocked autoplay handled through a user-triggered opening interaction

## Requirements

- Node.js 18 or newer
- npm

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
```

The optimized static site is written to `dist/`.

To inspect the production build locally:

```bash
npm run preview
```

## Editing Wedding Information

Keep the editable wedding content in:

```text
src/data/weddingData.js
```

Update this file for:

- Couple names and monogram
- Wedding date and countdown
- Venue and Google Maps link
- Phone and hospitality numbers
- Family and story details
- Event names, dates, timings and venues

Phone numbers and external links should be checked before publishing.

## Project Structure

```text
src/
  components/       Reusable React sections and UI components
  data/             Centralized wedding content
  main.jsx          Application entry point
  styles.css        Global invitation styling
public/
  ambient-wedding.wav  Background wedding audio
```

## Background Audio

The audio file is served from `public/ambient-wedding.wav`. It begins only after the visitor opens the invitation because modern browsers do not allow media autoplay before user interaction.

The floating sound button in the main invitation toggles mute and unmute.

## Deployment

Upload the contents of `dist/` to a static host or cPanel `public_html` directory. Ensure the hosting server serves `index.html` for the Vite application root.
