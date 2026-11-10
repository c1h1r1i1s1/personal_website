# Deployment

## Hosting model

Build the React/Vite project into static files and let the home server's existing Caddy instance serve those files. Node.js and npm are development/build tools; they are not required on the server. There is no app process to keep running and no reverse proxy to an application port.

Use a dedicated Caddy-readable directory such as `/srv/www/personal-website`. Caddy's documentation notes that a system service may not be able to traverse a home directory, and suggests `/srv` or `/var/www/html` for static files. See the [Caddy file server documentation](https://caddyserver.com/docs/caddyfile/directives/file_server).

## Build and publish

1. On a development machine, install Node.js LTS and npm, then install project dependencies with `npm install`.
2. Build the site with `npm run build`. Vite writes the production site to `dist/` by default.
3. Copy the **contents** of `dist/` to the configured server site root, for example `/srv/www/personal-website/`. Preserve directory structure and remove obsolete files from the destination when publishing a new build.
4. Confirm Caddy can read/traverse the directory and its files. Reload Caddy only if its configuration changed; replacing static assets does not require restarting the server.
5. Open the public hostname and check the landing page, representative scene interactions, links and media.

The copy mechanism is intentionally unspecified so it can match the home server's existing SSH, rsync, container-volume or deployment workflow. The deployment target is the static build output only, not source files, `.git`, dependencies or development configuration.

## Caddyfile example

Add a site block to the existing Caddy configuration and replace the example hostname with the actual domain or address:

```caddyfile
example.com {
	root * /srv/www/personal-website
	encode zstd gzip
	file_server
}
```

Caddy's `file_server` serves the static root and its index file. A single-page UI with section and object state does not use URL routes, so this configuration does not need a fallback rewrite. See the [Caddy static-files quick start](https://caddyserver.com/docs/quick-starts/static-files) for the basic `root` and `file_server` pattern.

If Caddy already handles the hostname, HTTPS, compression or shared site settings, merge only the relevant root and file-server directives into that existing configuration. Do not replace unrelated server configuration with the example block.

## Operational notes

- Serve only the generated build directory. Do not expose the project root or development server.
- Keep the Caddy site root readable by the Caddy service account, including execute/traverse permission on parent directories.
- All browser-delivered content is public. Do not publish credentials, private contact details or unredacted metadata unintentionally.
- A rollback can be performed by restoring the previous static build to the site root.
- If the app later adopts real URL routes, API endpoints or server-side rendering, revisit this static-only Caddy setup before implementing that change.
