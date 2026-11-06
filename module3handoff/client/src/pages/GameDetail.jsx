import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { deleteGame, getGame } from "../api.js";

export default function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [game, setGame] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setStatus("loading");
    getGame(id)
      .then(data => { if (!ignore) { setGame(data); setStatus("success"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, [id]);                                   // run again if the id in the URL changes

  async function handleDelete() {
    try {
      await deleteGame(id);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "loading") return <p role="status">Loading…</p>;
  if (status === "error") return <p role="alert">{error} <Link to="/">Back to the list</Link></p>;

  return (
    <article>
      <h2>{game.team1} vs {game.team2}</h2>
      <p>{game.category}</p>
      <p><button onClick={handleDelete}>Delete</button></p>
    </article>
  );
}
