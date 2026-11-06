// Every call to the API goes through request(), so status checks and errors are handled in one place.
async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (res.status === 204) return null;                 // DELETE: success, with no body
  const body = await res.json().catch(() => null);     // null if the body isn't JSON
  if (!res.ok) {
    const message = body?.error?.message ?? `Request failed with status ${res.status}`;
    const details = body?.error?.details;               // e.g., which fields failed validation
    throw new Error(details ? `${message}: ${details.join("; ")}.` : message);
  }
  return body;
}

export const listGames = () => request("/games");
export const getGame = id => request(`/games/${id}`);
export const createGame = game => request("/games", { method: "POST", body: JSON.stringify(games) });
export const updateGame = (id, games) => request(`/games/${id}`, { method: "PUT", body: JSON.stringify(game) });
export const deleteGame = id => request(`/games/${id}`, { method: "DELETE" });
