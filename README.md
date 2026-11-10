# Personal Archive

## Development

Install dependencies with `npm install`, then start the local Vite server with `npm run dev`.

## Spotify albums

Edit [`src/data/albums.json`](src/data/albums.json) to set the Spotify album URI for `record-top` and/or `record-bottom`. `npm run build` automatically looks up the album title, cover image URL and embed URL using Spotify oEmbed, then builds the static site. The artwork is loaded directly from Spotify and is not downloaded or altered. If Spotify is temporarily unreachable, the script reuses matching cached metadata; adding a new URI requires network access for its first lookup.

Run `npm run sync:albums` to refresh generated metadata while developing. The build runs this command automatically.

Click an album cover in the room to load its embedded Spotify album player in the information panel. The player is only loaded after an album is selected.

See [Deployment](docs/deployment.md) for serving the static build through Caddy and the [Visual Style Guide](docs/styleguide.md) for interface conventions.
