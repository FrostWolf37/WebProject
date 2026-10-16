#PlayFair Sports Bet Website
#Daniel Beauchemin, Zachary Roy


##Reflection##
Our structural decisions that we made for our HTML was we used semantic HTML primarily without using a lot of divs. We put an alt for our image that we added for better accessibilty for visually impaired.  We have aria label main, and planning to add more aria labels later on. For the most part we started using flexbox for most of our CSS.  The specific problems we had for Flexbox/Grid was specifically in our header.  We wanted the links to our page to specifically stay under the brand name of our website.  We couldn't get it to accurately stay under the brandwithout making it a Grid for some reason. But once we made it a grid, we were able to center the logo and links easily.
When implementing the JavaScript, we wanted our cards to have different things appear in the meta text depending on whether or not they had a bet, and what team they bet on, originally we were going to simply replace the meta.textContent = ... with a few if statements, but when adding the eventListener to change the bet when clicked, it would require repetitive code, so we moved the meta.textContent portion into its own function and passed each card to it when needed. We also ran into an issue with implementing the category selection, as we were originally trying to put the OR statement outside of the .filter, when we should have had the OR inside the .filter. 

