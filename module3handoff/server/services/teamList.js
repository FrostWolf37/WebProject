const LEAGUES = ["NFL", "NBA", "NHL"];
const GAMES = [
	{id: 1, team1: "Patriots", team2: "Bills", bet: 1000, hasBet: true, teamBet: "team1", isOpen: true, category: "NFL"},
	{id: 2, team1: "Patriots", team2: "Steelers", bet: 0, hasBet: false, teamBet: "none", isOpen: false, category: "NFL"},
	{id: 3, team1: "Lakers", team2: "Celtics", bet: 0, hasBet: false, teamBet: "none", isOpen: false, category: "NBA"},
	{id: 4, team1: "Dolphins", team2: "Bills", bet: 100, hasBet: true, teamBet: "team2", isOpen: true, category: "NFL"},
	{id: 5, team1: "Knicks", team2: "Bulls", bet: 50, hasBet: true, teamBet: "team2", isOpen: true, category: "NBA"},
	{id: 6, team1: "Bruins", team2: "Devils", bet: 0, hasBet: false, teamBet: "none", isOpen: true, category: "NHL"},
];

let games = [];
let nextId = 1;

export function reset() {
  games = GAMES.map(r => ({ ...r }));
  nextId = GAMES.length + 1;
}
reset();

export function list() {
  return games;
}

export function get(id) {
  return games.find(r => r.id === id) ?? null;
}

// Returns a list of problems; an empty list means the recipe is valid
export function validate(body) {
  const problems = [];
  if (typeof body?.team1 !== "string" || body.team1.trim() === "") {
    problems.push("Team 1 is required");
  }
  if (typeof body?.team2 !== "string" || body.team2.trim() === "") {
    problems.push("Team 2 is required");
  }
  if (!LEAGUES.includes(body?.category)) {
    problems.push(`League must be one of: ${LEAGUES.join(", ")}`);
  }
  if (body?.hasBet && body?.bet <= 0) { //body?.bet
    problems.push("A bet must be included");
  }
  return problems;
}

export function create({team1, team2, category}) {
  const games = { id: nextId++, team1: team1.trim(), team2: team2.trim(), category};
  games.push(game);
  return game;
}

export function update(id, {team1, team2, category}) {
  const game = get(id);
  if (!game) return null;
  Object.assign(game, {team1: team1.trim(), team2: team2.trim(), category});
  return game;
}

export function remove(id) {
  const before = games.length;
  games = games.filter(r => r.id !== id);
  return games.length < before;
}
