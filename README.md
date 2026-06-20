# Devfolio — GitHub Portfolio Dashboard

A personal GitHub portfolio dashboard built with React. Enter any GitHub username to explore their public repositories, view language breakdowns, and browse recent activity — all in a clean dark/light interface.

**Live → [devfolio-gules.vercel.app](https://devfolio-gules.vercel.app)**

---

## Features

- Search any GitHub username and load their public profile
- Browse repositories with language tags and descriptions
- Visual language breakdown across all repos
- Recent activity feed
- Dark / light mode toggle
- Fully responsive — works on mobile and desktop

## Tech Stack

| Layer | Tech |
|---|---|
| UI | React 18, Tailwind CSS |
| Data | GitHub Public REST API |
| Build | Vite |
| Deploy | Vercel |

## Project Structure

```
src/
├── components/
│   ├── ProfileCard.jsx       # User avatar, bio, stats
│   ├── RepoList.jsx          # Repository grid/list
│   ├── LanguageBar.jsx       # Language breakdown chart
│   └── ActivityFeed.jsx      # Recent GitHub events
├── hooks/
│   └── useGithub.js          # API fetch + state logic
├── pages/
│   └── Home.jsx
└── App.jsx
```

## Getting Started

```bash
git clone https://github.com/kritikakapoor23/devfolio.git
cd devfolio
npm install
npm run dev
```

No API key required — uses the GitHub public REST API.

## Notes

GitHub's public API has a rate limit of 60 requests/hour for unauthenticated requests. For heavier usage, a personal access token can be added via a `.env` file.
