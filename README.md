<!-- #gif# JavaScript,HTML,CSS,React,React Router -->

# Watcher

A streaming-service style movie browser built with React. Watcher pulls live movie data from the TMDB API and presents it in a Netflix-like interface with a hero carousel, top-rated lists and an auto-playing trailer of the day.

**[Live demo →](https://alisedighmoghadam.github.io/Watcher)**

> **Project status: not completed.** Development stopped after the front end. Browsing, the carousel and trailers work with live data; the sign-in, sign-up and dashboard screens are UI only, with no back end behind them.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?logo=github)

![Watcher demo](https://github.com/alisedighmoghadam/Watcher/blob/main/screenshots/1.gif?raw=true)

## Features

- **Now-playing carousel** – hero slider of current movies with arrow navigation and loading states.
- **Adaptive colours** – each slide samples the poster's dominant colour (`color.js`) and switches the text colour to keep it readable.
- **Top-rated movies** – cards with runtime and genre fetched per title.
- **Suggestion of the day** – a featured movie with its YouTube trailer auto-playing (muted, looped).
- **Account screens** – sign-in, sign-up and user-dashboard pages (UI only for now).
- **Routing** – `HashRouter` so deep links work on GitHub Pages, plus a custom 404 page.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18, React-Bootstrap, Bootstrap 5, custom CSS |
| Routing | React Router 6 |
| Data | Axios, [TMDB API](https://developer.themoviedb.org/), YouTube embeds |
| Extras | `color.js` (dominant colour), `react-spinners` |
| Hosting | GitHub Pages via `gh-pages` |

## Getting started

```bash
git clone https://github.com/alisedighmoghadam/Watcher.git
cd Watcher
npm install
npm start          # http://localhost:3000
```

Deploy to GitHub Pages:

```bash
npm run deploy     # builds and publishes the build/ folder
```

## Project structure

```
src/
├── components/    # Navbar, Slider, SliderCard, PopularMovies, SuggestionOfDay, SignIn, SignUp, UserDashboard…
├── css/           # Component styles
├── views/         # Images and icons
└── App.js         # Routes
```

## Roadmap

- [ ] Move the TMDB API key into an environment variable
- [ ] Back-end for authentication and subscriptions
- [ ] Search and personal watchlist

## Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.
