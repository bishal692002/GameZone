# 🎮 GameZone Portal – Cloud-Hosted Gaming Hub

A simple full-stack Node.js gaming portal (Express + static frontend) with a provided `Dockerfile` so you can run it locally or in any container platform.

## What I'll cover here

- How to run the app locally (already available via `npm start`)
- How to build and run the included Docker image (new)
- Quick verification and troubleshooting commands

## Quick facts (from the repo)

- Default port: 3000 (controlled by `PORT` env var)
- Start command: `npm start` (runs `node server.js`)
- Health endpoint: `/api/health` (used by the Dockerfile healthcheck)

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Run with Docker

The repository includes a `Dockerfile` that sets `NODE_ENV=production` and `PORT=3000` by default and exposes port `3000`.

Build the image:

```bash
docker build -t gamezone:latest .
```

Run the container (basic):

```bash
docker run -d --name gamezone -p 3000:3000 gamezone:latest
```

If you want to pass environment variables (for example API keys or a different port):

```bash
docker run -d --name gamezone -p 3000:3000 \
	-e NODE_ENV=production \
	-e PORT=3000 \
	-e STEAM_API_KEY=your_steam_key \
	-e RAWG_API_KEY=your_rawg_key \
	gamezone:latest
```

Notes:
- The `Dockerfile` contains a HEALTHCHECK that hits `http://127.0.0.1:${PORT}/api/health`.
- The app listens on `0.0.0.0:${PORT}` so binding `-p 3000:3000` exposes it to your host.

## Docker Compose (optional)

Create a `docker-compose.yml` with the following minimal service to run the app:

```yaml
version: '3.8'
services:
	gamezone:
		image: gamezone:latest
		build: .
		ports:
			- '3000:3000'
		environment:
			- NODE_ENV=production
			- PORT=3000
			- STEAM_API_KEY=${STEAM_API_KEY}
			- RAWG_API_KEY=${RAWG_API_KEY}

```

Then start:

```bash
docker compose up --build -d
```

## Verify the running container

- Check container status and logs:

```bash
docker ps -f name=gamezone
docker logs -f gamezone
```

- Quick health check (host):

```bash
curl -s http://localhost:3000/api/health | jq .
```

- Or open in a browser: http://localhost:3000

## Troubleshooting

- If port 3000 is in use, change the host port mapping (e.g. `-p 4000:3000`) or set `PORT` inside the container.
- To view recent logs: `docker logs -f gamezone`.
- If the healthcheck fails, check `docker logs` for stack traces and ensure the container has the right `PORT` env var.

## Environment variables

- Optional variables used by the app:
	- `PORT` (default 3000)
	- `NODE_ENV` (development|production)
	- `STEAM_API_KEY` (optional)
	- `RAWG_API_KEY` (optional)

## Completion / Verification

I updated this README to include Docker build/run instructions, verification commands, and notes about the `Dockerfile` healthcheck and default port. The `Dockerfile`, `package.json`, and `server.js` in the repo already match these instructions (default PORT=3000 and start command `node server.js`).
