const games = [
	{id: 1, team1: "Patriots", team2: "Bills", bet: 1000, hasBet: true, teamBet: "team1", isOpen: true, category: "NFL"},
	{id: 2, team1: "Patriots", team2: "Steelers", bet: 0, hasBet: false, teamBet: "none", isOpen: false, category: "NFL"},
	{id: 3, team1: "Lakers", team2: "Celtics", bet: 0, hasBet: false, teamBet: "none", isOpen: false, category: "NBA"},
	{id: 1, team1: "Dolphins", team2: "Bills", bet: 100, hasBet: true, teamBet: "team2", isOpen: true, category: "NFL"},
	{id: 2, team1: "Knicks", team2: "Bulls", bet: 50, hasBet: true, teamBet: "team2", isOpen: true, category: "NBA"},
	{id: 3, team1: "Bruins", team2: "Devils", bet: 0, hasBet: false, teamBet: "none", isOpen: true, category: "NHL"},
];
//{id: 1, team1: "", team2: "", bet: 0, hasBet: false, teamBet: "team1", isOpen: true, category: "NFL"},

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const form = document.querySelector(".controls");

function visibleGames() {
	const query = searchInput.value.trim().toLowerCase(); //get the search, in lowercase
	const category = categorySelect.value;

	const show = games.filter(r => category === "All" || (category === "Open" && r.isOpen) || (category === "Settled" && !r.isOpen)).filter(r => r.team1.toLowerCase().includes(query) || r.team2.toLowerCase().includes(query)) //needs to put the || inside the filter, otherwise it never even looks
	return show;
}

function metaText(r) { //need to use this to make the meta text easier to render, especially for the eventListener
  if (r.hasBet && r.teamBet == "team1") {
    return `Current Bet: ${r.team1}, $${r.bet} \n\n ${r.team1} · ${r.team2}`;
  } else if (r.hasBet && r.teamBet == "team2") {
    return `Current Bet: ${r.team2}, $${r.bet} \n\n ${r.team1} · ${r.team2}`;
  }
  return `\n\n${r.team1} · ${r.team2}`;
}

function render(data) {
  list.innerHTML = "";
  
  count.textContent = data.length === 0
    ? "No games match. Try another search or category."
    : `${data.length} game(s)`;

  data.forEach(r => {
    const li = document.createElement("li");
    li.className = "card";

    const game = document.createElement("game");
    const title = document.createElement("h3");
    title.textContent = `${r.team1} V.S. ${r.team2}`;
    const meta = document.createElement("p");
	meta.textContent = metaText(r);
    

    game.append(title, meta);/*attach the title to the game*/
    li.appendChild(game); /*put the game inside li*/
    list.appendChild(li); /*put li inside list*/
	
	li.addEventListener("click", () => {
		r.hasBet = true;
		r.bet += 10;
		if (r.teamBet == "none") {
			r.teamBet = "team1";
		}
		meta.textContent = metaText(r);
	});
  });
}

searchInput.addEventListener("input", () => render(visibleGames())); /*every time there is an input, reload the games*/
categorySelect.addEventListener("change", () => render(visibleGames()));
form.addEventListener("submit", event => event.preventDefault());   // Enter shouldn't reload the page

render(visibleGames()); /*make sure theres something visible when the site loads*/
