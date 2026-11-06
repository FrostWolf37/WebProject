#PlayFair Sports Betting Website - Hand-off Package

---

## Application Summary

###Overview

Playfair is a sports betting website modeled after sports websites like Draftkings, Fanduel. The idea is for the user the view active games, searching team names, filtering between open and completed bets, and using cards to adjust bet amounts.


We originally had 2 pages, `index.html` and `liveSports.html`, `index.html` is the homepage, it has the most current/popular bets where you can increase your bets by interacting with the cards. There is a search function that searches for team names, and category function to sort by open and setlled(completed) games/bets. Our header is a flexbox within a grid so the list and logo are aligned vertically while the list contents remain in a row. We converted the bulk of our `index.html` into a .jsx so that our front end can run. We lost functionality with the .css and some functionality with Javascript, which was rewritten to have better functionality, rendering the old JS basically useless. We originally did not know that we would be creating just a single web page with a lot of functionality, so we had originally designed `live-sports.html` to be a place to show updated games to get on, and the `index.html` to be the home page which just had your actual bets and some live games. But ultimately that was scrapped so we can focus on one `index.js` with more functionality. So the plan going forward for us was to simply merge the live-sports.html into our index.js.  With that we mean to just show the updated scores, bet odds, final/in progress/scheduled games, and let users increase or decrease their bets before a game starts, and track the progress of the games and bets.

We decided to leave all of the old files before converting them to the server because we thought it would be helpful to see our steps and may help in tracking down bugs.
