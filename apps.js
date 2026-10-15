const games = [
	{id: 1, team1: "Patriots", team2: "Bills", bet: 0, hasBet: false, isOpen: true, category: "NFL"},
	{id: 2, team1: "Patriots", team2: "Steelers", bet: 0, hasBet: false, isOpen: false, category: "NFL"},
	{id: 3, team1: "Lakers", team2: "Celtics", bet: 0, hasBet: false, isOpen: false, category: "NBA"},
];
//{id: 1, team1: "", team2: "", bet: 0, hasBet: false, isOpen: true, category: "NFL"},

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const form = document.querySelector(".controls");

function visibleGames() {
	const query = searchInput.value.trim().toLowerCase(); //get the search, in lowercase
	const category = categorySelect.value;

	return (games.filter(r => category === "All" || r.category === category).filter(r => r.team1.toLowerCase().includes(query)));
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
    title.textContent = r.team1;
    const meta = document.createElement("p");
    meta.textContent = `${r.team1} · ${r.team2}`; /*only include the category+date published as the description*/

    game.append(title, meta);/*attach the title to the game*/
    li.appendChild(game); /*put the game inside li*/
    list.appendChild(li); /*put li inside list*/
  });
}

searchInput.addEventListener("input", () => render(visibleGames())); /*every time there is an input, reload the games*/
categorySelect.addEventListener("change", () => render(visibleGames()));
form.addEventListener("submit", event => event.preventDefault());   // Enter shouldn't reload the page

render(visibleGames()); /*make sure theres something visible when the site loads*/
