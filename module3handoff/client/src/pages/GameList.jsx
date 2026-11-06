import { useEffect, useState } from "react";
import { Link } from "react-router";
import { listGames } from "../api.js";

export default function GameList() {
  const [status, setStatus] = useState("loading");
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    listGames()
      .then((data) => {
        if (!ignore) {
          setGames(data);
          setStatus("success");
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message);
          setStatus("error");
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  function changeBet(id, amount) {
  setGames((prev) =>
    prev.map((game) => {
      if (game.id !== id) return game;

      const newBet = game.bet + amount;

      if (newBet <= 0) {
        return { ...game, bet: 0, hasBet: false };
      }
      return {
        ...game,
        bet: newBet,
        hasBet: true,
        teamBet: game.teamBet ?? "team1", // default side if none was chosen yet
      };
    })
  );
}

  if (status === "loading") return <p role="status">Loading games…</p>;
  if (status === "error") return <p role="alert">Could not load games. {error}</p>;
  if (games.length === 0) return <p>No games yet.</p>;

  return (
    <section>
      <h2>Featured Games</h2>
      <ul>
        {games.map((r) => (
          <li key={r.id}>
            <Link to={`/games/${r.id}`}>
              {r.team1} vs {r.team2}
            </Link>{" "}
            · {r.category}
            {r.hasBet ? (<p>Bet: ${r.bet} on {r.teamBet === "team1" ? r.team1 : r.team2}</p>) : (<p>No bet placed</p>)}
          <button onClick={() => changeBet(r.id, 10)}>Increase bet</button>

          {r.hasBet && r.bet >= 10 && (<button onClick={() => changeBet(r.id, -10)}>Decrease bet</button>)}
	<br />
<br />
<br />
	</li>
        ))}
      </ul>
    </section>
  );
}