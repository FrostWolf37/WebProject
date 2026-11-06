import { Link, Route, Routes } from "react-router";
import GameList from "./pages/GameList.jsx";
import GameDetail from "./pages/GameDetail.jsx";

export default function App() {
  return (
    <>
      <header>
	<p className="brand">
    	{" "}
    	<img src="../images/logo.png" alt="PlayFair logo" />
  	</p>
  	<nav className="nav">
    	<ul>
      	<li>
        <a href="#myBets" title="View your bets">
          My Bets
        </a>
      	</li>
      	<li>
        <a href="live_sports.html" title="View live sports">
          Live Sports
        </a>
      	</li>
      	<li>
        <a href="#rewards" title="View your available rewards">
          Rewards
        </a>
      	</li>
      	<li>
        <a href="#about" title="View our about section">
          About Us
        </a>
      	</li>
    	</ul>
  	</nav>
        <h1><Link to="/">Games List</Link></h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetail />} />
        </Routes>
      </main>
	<footer className="footer">
  {" "}
  {/* This needs to be at the bottom of the page */}
  PlayFair© Contact Us: Email that we never check; social media we don't reply
  to
  <br />
  Our Partners:
</footer>
    </>
  );
}
