import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = resolve(projectRoot, 'src/data/albums.json')
const generatedPath = resolve(projectRoot, 'src/data/albums.generated.json')
const allowedSlots = new Set(['record-top', 'record-bottom'])

function getAlbumUrl(uri, slot) {
  const spotifyUri = /^spotify:album:([A-Za-z0-9]+)$/.exec(uri.trim())
  if (spotifyUri) return `https://open.spotify.com/album/${spotifyUri[1]}`

  let parsedUrl
  try {
    parsedUrl = new URL(uri)
  } catch {
    throw new Error(`Invalid Spotify album URI for ${slot}: ${uri}`)
  }

  const pathMatch = /^\/album\/([A-Za-z0-9]+)\/?$/.exec(parsedUrl.pathname)
  if (parsedUrl.hostname !== 'open.spotify.com' || !pathMatch) {
    throw new Error(`Expected a Spotify album URI or open.spotify.com album URL for ${slot}.`)
  }

  return `https://open.spotify.com/album/${pathMatch[1]}`
}

const entries = JSON.parse(await readFile(sourcePath, 'utf8'))
if (!Array.isArray(entries)) throw new Error('src/data/albums.json must contain an array.')

const seenSlots = new Set()
const albumMetadata = []
let cachedMetadata = []
try {
  cachedMetadata = JSON.parse(await readFile(generatedPath, 'utf8'))
} catch {
  // A fresh build can generate metadata when the network is available.
}

for (const entry of entries) {
  if (!allowedSlots.has(entry.slot)) {
    throw new Error(`Unknown album slot "${entry.slot}". Use record-top or record-bottom.`)
  }
  if (seenSlots.has(entry.slot)) throw new Error(`Duplicate album slot "${entry.slot}".`)
  seenSlots.add(entry.slot)
  if (!entry.uri?.trim()) continue

  const albumUrl = getAlbumUrl(entry.uri, entry.slot)
  const oEmbedUrl = new URL('https://open.spotify.com/oembed')
  oEmbedUrl.searchParams.set('url', albumUrl)

  let response
  try {
    response = await fetch(oEmbedUrl)
  } catch (error) {
    const cachedAlbum = cachedMetadata.find((album) => album.slot === entry.slot && album.uri === entry.uri.trim())
    if (!cachedAlbum) throw new Error(`Could not reach Spotify to look up ${entry.slot}, and no matching cached metadata exists.`, { cause: error })
    console.warn(`Spotify is unreachable; reusing cached metadata for ${entry.slot}.`)
    albumMetadata.push(cachedAlbum)
    continue
  }
  if (!response.ok) {
    throw new Error(`Spotify oEmbed lookup failed for ${entry.slot} (${response.status}).`)
  }

  const metadata = await response.json()
  if (!metadata.title || !metadata.thumbnail_url) {
    throw new Error(`Spotify returned incomplete album metadata for ${entry.slot}.`)
  }

  const albumId = new URL(albumUrl).pathname.split('/').filter(Boolean).at(-1)
  albumMetadata.push({
    slot: entry.slot,
    uri: entry.uri.trim(),
    albumUrl,
    embedUrl: `https://open.spotify.com/embed/album/${albumId}?utm_source=generator`,
    title: metadata.title,
    coverUrl: metadata.thumbnail_url,
    coverWidth: metadata.thumbnail_width,
    coverHeight: metadata.thumbnail_height,
  })
}

await mkdir(dirname(generatedPath), { recursive: true })
await writeFile(generatedPath, `${JSON.stringify(albumMetadata, null, 2)}\n`)
console.log(`Updated Spotify metadata for ${albumMetadata.length} album${albumMetadata.length === 1 ? '' : 's'}.`)
