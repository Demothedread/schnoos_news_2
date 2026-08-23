# Schnoos News

A modular skeleton for an analog-feeling family newspaper web app.

## Current skeleton

- **Ink-on-paper UI shell** with newspaper-style layout and typography.
- **Weekly webform intake** for family submissions (contributor, child names, notes, publish date).
- **CMS queue module** that stores scheduled stories.
- **AI article generation module** (scaffold) that drafts publishable stories from form notes.
- **Start Press Run control** that publishes due stories to the front page.
- **Email-ready submission templates** for:
  - News to Report (simple language)
  - Grown-Up Profile (20 questions)
  - Recipe of the Month (ingredients + steps)
  - My One Big Idea
  - My Sibling Says (20 questions)
- **Coming Up This Month** planner space for birthdays, holidays, and major family events.
- **Local persistence** with `localStorage` to keep queue/published content between refreshes.

## Module layout

- `src/modules/cms`: intake normalization + queue scheduling
- `src/modules/ai`: AI draft generation scaffold
- `src/modules/publish`: publish workflow
- `src/modules/ui`: rendering + event wiring
- `src/modules/state`: app state and persistence
- `src/modules/utils`: shared date helpers

## Run locally

Serve the repo as static files (example):

```bash
cd /path/to/project
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
