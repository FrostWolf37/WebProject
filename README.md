#PlayFair Sports Bet Website
**Authors:** Daniel Beauchemin, Zachary Roy

### Application Summary
This is a sports betting website that had 2 pages, 'index.html' and 'liveSports.html', 'index.html' is the homepage, it has the most current/popular bets where you can increase your bets by interacting with the cards. There is a search function that searches for team names, and category function to sort by open and setlled(completed) games/bets. 'liveSports.html' is where you can view all the possible betting options, which are loaded in with an API that displays different sports leagues, teams, live games and future games. 
Our header is a flexbox within a grid so the list and logo are aligned vertically while the list contents remain in a row.
'index.html': ==HOW DO THE CARDS WORK==. 
'liveSports.html': ==HOW DOES IT WORK==.

### Reflection 10-16-26
### Semantic Structure & Accessibility Decisions
Our structural decisions prioritized more strict HTML5 semantics over common `<div>` containers to help with landmark boundaries and better document clarity. Structural areas are defined through `<header>`,`<nav>`,`<main>`,`<section>`, and `<footer>`.  For visually impaired users reliant on screen readers, the branding graphic uses explicit `alt` text, while the primary content area is isolated with the 'aria-label="main"'. Our search counter (`#count`) which will automatically broadcast updated match counts to screen readers when the DOM updates during user input, which shifts the focus away from input controls for visually impaired. We are also planning on implementing more aria-labels later on.

### Layout Decisions: Flexbox vs CSS Grid
We decided to split up our layout tools based on what each does best: Flexbox for our one-direction rows, and CSS Grid for multi-column areas.
For the controls sections(the search bar and category dropdown), Flexbox was the best choice. We wrapped it in `.controls` and added `flex-wrap:wrap`.  That way, on wider desktop screens, the search input and dropdown will sit next to each other on the same line.  However, on smaller mobile screens, the dropdown will drop to the second row instead of squishing together or breaking up.
The navigation header, on the other hand, gave us a real headache with Flexbox. We originally wanted our header links to sit centered directly underneath our logo. But when we tried using Flexbox, the links kept shifting around and wouldn't stay centered right under the brand image. After trying to force it with flex-properties, we switched `.site-header` over to CSS Grid instead. By using `display:grid` with `justify-content:center` and `align-items:center`, Grid now forced the logo and links into a single centered column.
Finally, for the games container('.cards') we chose CSS Grid because it handles cards in two dimensions much better than Flexbox. We set up media queries so mobile phones get 1 column, tablets get 2 columns, and desktop screens get 3 columns. This keeps all cards uniform.

### DOM Challenges

### API Contract


### Known Bugs/Issues

When implementing the JavaScript, we wanted our cards to have different things appear in the meta text depending on whether or not they had a bet, and what team they bet on, originally we were going to simply replace the `meta.textContent = ...` with a few if statements, but when adding the eventListener to change the bet when clicked, it would require repetitive code, so we moved the meta.textContent portion into its own function and passed each card to it when needed. We also ran into an issue with implementing the category selection, as we were originally trying to put the OR statement outside of the `.filter`, when we should have had the OR inside the `.filter`. 

