#PlayFair Sports Bet Website
**Authors:** Daniel Beauchemin, Zachary Roy

To run the back end
cd module3handoff/server
npm start

To run the front end
cd module3handoff/client
npm run dev

### Reflection 10-16-26
### Semantic Structure & Accessibility Decisions
Our structural decisions prioritized more strict HTML5 semantics over common `<div>` containers to help with landmark boundaries and better document clarity. Structural areas are defined through `<header>`,`<nav>`,`<main>`,`<section>`, and `<footer>`.  For visually impaired users reliant on screen readers, the branding graphic uses explicit `alt` text, while the primary content area is isolated with the `aria-label="main"`. Our search counter (`#count`) which will automatically broadcast updated match counts to screen readers when the DOM updates during user input, which shifts the focus away from input controls for visually impaired. We are also planning on implementing more aria-labels later on.

### Layout Decisions: Flexbox vs CSS Grid
We decided to split up our layout tools based on what each does best: Flexbox for our one-direction rows, and CSS Grid for multi-column areas.
For the controls sections(the search bar and category dropdown), Flexbox was the best choice. We wrapped it in `.controls` and added `flex-wrap:wrap`.  That way, on wider desktop screens, the search input and dropdown will sit next to each other on the same line.  However, on smaller mobile screens, the dropdown will drop to the second row instead of squishing together or breaking up.
The navigation header, on the other hand, gave us a real headache with Flexbox. We originally wanted our header links to sit centered directly underneath our logo. But when we tried using Flexbox, the links kept shifting around and wouldn't stay centered right under the brand image. After trying to force it with flex-properties, we switched `.site-header` over to CSS Grid instead. By using `display:grid` with `justify-content:center` and `align-items:center`, Grid now forced the logo and links into a single centered column.
Finally, for the games container('.cards') we chose CSS Grid because it handles cards in two dimensions much better than Flexbox. We set up media queries so mobile phones get 1 column, tablets get 2 columns, and desktop screens get 3 columns. This keeps all cards uniform.

### Known Bugs/Issues
The CSS doesn't show on the index page, we tried to get this working but it wouldn't load the CSS or image for the logo.


When implementing the JavaScript, we wanted our cards to have different things appear in the meta text depending on whether or not they had a bet, and what team they bet on, originally we were going to simply replace the `meta.textContent = ...` with a few if statements, but when adding the eventListener to change the bet when clicked, it would require repetitive code, so we moved the meta.textContent portion into its own function and passed each card to it when needed. We also ran into an issue with implementing the category selection, as we were originally trying to put the OR statement outside of the `.filter`, when we should have had the OR inside the `.filter`. 

### Request-Response Analysis
For the request-response cycle we used a simple GET https://localhost:5173/api/games after deleting our first entry. In our request-headers we can see a `Connection: keep-alive` to keep the connection open if we send multiple pieces of data. Our response is a 200 OK which means that the request has succeeded and we can see from our payload that we receive the correct data: a .json containing all of our original dictionary, minus a removed entry, in this case is entry id=1. If we had altered the data before deleting the entry(increasing/decreasing bet), that updated data would show in this payload, confirming that our data is up-to-date. Because this is the GET request, we don't see the state change directly, but looking at the before and after, we have removed entry id=1 from our dictionary containing all of our games, so the state of the whole site has changed.
