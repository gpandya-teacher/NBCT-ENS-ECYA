# NBCT Quiz App

Full-stack quiz app built with React, Node.js, and Tailwind using the NBCT multiple-choice and written-response datasets.

## Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Data sources:
  - `backend/data/nbct_question_bank_405_v2_cleaned.json`
  - `backend/data/nbct_component1_dataset.jsonl`

## Features

- Home screen with `Study Mode`, `Exam Mode`, and `Written Prompt Practice`
- One-question-at-a-time MCQ flow with four answer choices
- Randomized questions for each MCQ session
- Timer countdown, score tracking, and review pages
- Exam-style written prompt workspace with prompt panel, response area, timer, word count, and autosave
- Written feedback screen with the prompt, user response, ideal answer, rubric breakdown, keyword matches, and a simple score estimate
- Server-side scoring based on the dataset's `correct_answer` field for MCQs and `scoring_rules` plus keyword presence for written prompts

## Getting started

1. Install Node.js 20+.
2. From the project root, run:
=======
# NBCT-ENS-ECYA
AI-based NBPTS certification prep app with practice prompts, scoring, and daily free + paid access model.
# AI-Powered NBPTS Certification App

An AI-powered study platform designed to help teachers prepare for National Board Certification (NBPTS), specifically ENS-ECYA.

---

## Overview

This application provides structured exam preparation through AI-generated practice prompts, scoring guidance, and rubric-aligned feedback. It is designed to simulate real NBPTS written response tasks and improve answer quality through repetition and evaluation.

---

## Problem

There is a lack of high-quality, structured preparation tools for NBPTS certification. Most candidates struggle with:
- Understanding how to structure written responses  
- Practicing with realistic prompts  
- Evaluating their own answers against scoring criteria  

---

## Solution

This platform solves these problems by providing:
- AI-generated exam-style prompts  
- Ideal response frameworks and sentence starters  
- Scoring guidance aligned with NBPTS standards  
- Immediate feedback for improvement  

---

## Features

- AI-generated practice prompts (60+ questions)
- Structured written response training
- Scoring system with rubric alignment
- Daily free usage model (1 session/day)
- Subscription model ($1/day for unlimited access)
- Simple, focused UI for fast practice

---

## How AI Was Used

AI was central to this project:

- Generated structured exam prompts aligned to certification standards  
- Created model answers and scoring frameworks  
- Assisted in designing evaluation logic for responses  
- Accelerated development through iterative prompt engineering  

The system was refined to ensure outputs are consistent, structured, and educationally valid.

---

## Tech Stack

(Add your stack here — example below)

- Frontend: React / Next.js  
- Backend: Node.js / Firebase / Supabase  
- Database: JSON / Firestore  
- AI: OpenAI API (GPT-based models)

---

## Access Model

- Free: 1 session per day  
- Paid: $1/day for unlimited access  

This allows users to try the platform while supporting continued development.

---

## How to Run Locally
>>>>>>> 9cd44a91ad12d5ecfc5fa7ecfcb554f428683e40

```bash
npm install
npm run dev
<<<<<<< HEAD
```

Frontend runs on `http://localhost:5173` and the API runs on `http://localhost:3001`.

## Notes

- The backend filters the source file to valid multiple-choice records with populated `option_a` through `option_d` values and a non-empty `correct_answer`.
- Study Mode currently starts 20 MCQs by default and Exam Mode starts 30. You can change that in `frontend/src/App.jsx`.
- Written Prompt Practice uses a 30-minute timer by default and selects one random prompt per session from the JSONL dataset.
=======
>>>>>>> 9cd44a91ad12d5ecfc5fa7ecfcb554f428683e40
