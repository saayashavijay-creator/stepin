# STEPIN

A dance-learning platform for beginner and intermediate dancers with separate student and instructor experiences in one app.

## Overview

STEPIN is a mobile-first single-page application designed to support structured, confidence-first dance learning. It provides role-specific onboarding and tailored interfaces within a single app:
- **Student Experience:** Onboarding, personalized home dashboard, style/course exploration, structured lesson view, guided practice recording flow, personal progress tracking, and instructor feedback review.
- **Instructor Experience:** Onboarding, cohort overview, filterable student directory, individual student skill/goal profiles, practice submission review with per-student feedback drafts and quick cues, and task assignment.

## Tech Stack

- **Frontend Framework:** React 19 (`react`, `react-dom`)
- **Language:** TypeScript 5.7
- **Build Tool & Dev Server:** Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Styling:** Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`) and custom CSS (`src/index.css`)
- **Formatting:** `oxfmt`
- **Package Manager:** `pnpm`

## Local Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v22 recommended)
- [pnpm](https://pnpm.io/) (v10+)

### Installation & Running Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the local development server:
   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm run build
   ```

4. Preview the production build locally:
   ```bash
   pnpm run preview
   ```

## Current Prototype Limitations

This repository contains the graduation design prototype submission version of STEPIN:
- **In-Memory Prototype Data:** Student profiles, courses, lessons, submissions, and progress metrics use curated prototype data in client state (`src/App.tsx`). There is no backend database or persistent server storage connected yet; changes reset on page reload (role selection is stored in `sessionStorage`).
- **Simulated Media & Camera:** Video playback controls, practice camera recording, and clip upload states are interactive UI simulations rather than live media streams or real video file uploads.
- **Course Progression:** Lessons 01 and 02 in the student course flow are unlocked for interactive walkthroughs, while Lessons 03 and 04 display locked states to demonstrate sequential course progression.
- **Secondary Controls:** Certain secondary controls (such as student search text filtering, notification bells, message buttons, and profile settings links) are visual UI placeholders for future iterations.
