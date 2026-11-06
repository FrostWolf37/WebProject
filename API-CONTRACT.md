# Play Fair Sports Bet API contract

Base path: `/api`. Request and response bodies are JSON. Every error has the same shape:

```json
{ "error": { "code": "NOT_FOUND", "message": "No bet with id 99" } }
```

A validation error also lists what failed:

```json
{ "error": { "code": "VALIDATION_FAILED", "message": "The bet submission is not valid",
             "details": ["bet must be a positive whole number"] } }
```

## The resource: a game

| Field | Type | Rules |
|---|---|---|
| `id` | integer | assigned by the server |
| `category` | string | required, not blank(eg. `NFL`) |
| `awayTeam` | string | required, not blank |
| `homeTeam` | string | required, not blank (eg "Buffalo Bills") |
| `awayScore` | integer | required, greater than or equal to 0 |
| `homeScore` | integer | required, greater than or equal to 0 |
| `status` | string | one of `scheduled` , `in_progress` , `final`|

## Endpoints

| Method and path | Request body | Success | Errors |
|---|---|---|---|
| `GET /api/games` | none | `200` and an array of bets | none |
| `GET /api/games/:id` | none | `200` and the bet | `404 NOT_FOUND` |
| `POST /api/games` | `{ sport, awayTeam, homeTeam, awayScore, homeScore, status }` | `201` and the created bet, with its `id`and `status: "pending"` | `400 VALIDATION_FAILED`, `400 BAD_JSON` |
| `PUT /api/games/:id` | `{ sport, awayTeam, homeTeam, awayScore, homeScore, status }` | `200` and the updated bet | `400 VALIDATION_FAILED`, `400 BAD_JSON`, `404 NOT_FOUND` |
| `DELETE /api/games/:id` | none | `204` and no body | `404 NOT_FOUND` |

Two rules for the error cases:

- On `PUT`, the body is checked first: an invalid body returns `400 VALIDATION_FAILED` even when no game has that id.
- An id has to be written as a positive whole number, e.g., `3`. Any other id, e.g., `abc`, `3.0`, or `03`, returns `404 NOT_FOUND`, since no game has that id.

Any other path under `/api` returns `404 NOT_FOUND`. An unexpected server error returns `500 SERVER_ERROR` with a generic message; details are logged on the server only.
