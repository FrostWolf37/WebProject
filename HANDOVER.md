# HANDOVER.md

## 1. What this app does
Who it is for, and its primary resource (e.g., recipes, tasks, events).
This app is for entertainment, it is meant to model a sports betting website where you place bets on sports teams. It takes sports games with two opposing teams in a specific league and allows you to increase, decrease, or remove your bet for each individual game.

## 2. How to run it
Node v22.23.4; module3handoff/client needs npm install
module3handoff/server run npm start, localhost:3001; module3handoff/client run npm run dev, localhost:5173
Last tested from a fresh clone on 11/12/2026, by Zachary Roy.

## 3. Current state
The site is functional, everything loads from a clean clone. The CSS is not implemented into the index page. The styles.css in the main/root folder contains all the CSS, which was functional before switching to the vite/express server, it just needs the CSS implementation.
In regards to CRUD operations, everything is implemented besides the Create portion. You can read by clicking on the title of each card, update by increasing/decreasing bets, delete by reading then clicking delete. But we did not have enough time to implement the create functionality.
The logo image currently does not appear, although the alt text does. Image found in images/ folder
Currently we have these variables:
| Field | Type | Rules |
|---|---|---|
| `id` | integer | assigned by the server |
| `category` | string | required, not blank(eg. `NFL`) |
| `awayTeam` | string | required, not blank |
| `homeTeam` | string | required, not blank (eg "Buffalo Bills") |
| `awayScore` | integer | required, greater than or equal to 0 |
| `homeScore` | integer | required, greater than or equal to 0 |
| `status` | string | one of `scheduled` , `in_progress` , `final`|

## 4. Important decisions
We had a difficult time trying to implement our header to be exactly how we wanted it. We originally wanted our header links to sit centered directly underneath our logo. But when we tried using Flexbox, the links kept shifting around and wouldn't stay centered right under the brand image. After trying to force it with flex-properties, we switched .site-header over to CSS Grid instead. By using display:grid with justify-content:center and align-items:center, Grid now forced the logo and links into a single centered column
Originally we had a second webpage called live-sports.html, which before switching to vite/express was going to be a second page where we listed every game. But unfortunately that would be very difficult to implement and we decided to cut out live-sports and merge it with our index, so it would be one single combined page.

## 5. Known problems and unfinished work
The site is functional, everything loads from a clean clone. The CSS is not implemented into the index page. The styles.css in the main/root folder contains all the CSS, which was functional before switching to the vite/express server, it just needs the CSS implementation.
In regards to CRUD operations, everything is implemented besides the Create portion. You can read by clicking on the title of each card, update by increasing/decreasing bets, delete by reading then clicking delete. But we did not have enough time to implement the create functionality.

## 6. Handover checks (receiving pod)
Version received: commit ______
The four checks: did each pass as received? After the handoff fixes?

## 7. Where things live
The data is kept in memory currently, API-CONTRACT.md can be found in the root GitHub folder, and the main front-end components are found at root/module3handoff/client and back-end route files are found in root/module3handoff/server.

## 8. Suggested first steps for Milestone 3 (authors)
Implement CSS, implement Create functionality of CRUD, implement logo image in site-header.

## 9. Takeover Notes (receiving pod): one sentence for each
- Do we understand what the app does and how the code is organized?
- Can we run it from a fresh clone?
- Do we know what is complete and what isn't?
- Do we know the important decisions and the known problems?
- Do we know what we would do first for Milestone 3?
