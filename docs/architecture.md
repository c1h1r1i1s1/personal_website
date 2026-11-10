# System Architecture

## Goals

The site is a lightweight, responsive portfolio and personal archive. It should feel like a carefully illustrated workspace while remaining easy to navigate as a conventional portfolio. The visual and content direction is defined in the [Design Outline](../Design%20Outline.md).

The initial implementation is a static client-side website. It requires no runtime backend, database, CMS, user accounts or remote content service.

## Recommended stack

- **React** for reusable page, panel, navigation and illustration components.
- **TypeScript** for component props, content definitions and interaction identifiers.
- **Vite** for local development and production builds.
- **HTML and CSS** for semantic structure, layout, responsive behavior, illustration emphasis and transitions.
- **SVG** for the light-box scene and its independently selectable objects.
- Native browser media elements, such as `<audio controls>`, for optional sound.

Avoid WebGL, Three.js and a server-rendered application for the initial site. The scene uses layered 2D artwork; React owns only the interface and interaction state.

## Page composition

The main page presents the `CF. / PERSONAL ARCHIVE` identity, five conventional sections, an information panel and the light box. On wide screens, the numbered navigation sits to the left of the panel and illustration. On small screens, the layout reflows, navigation adapts to the viewport, and the artwork remains tappable without horizontal page scrolling.

The five sections are About, Experience, Projects, Interests and Contact. Selecting a section changes the panel content and may emphasize related scene objects. The general About introduction is the initial state.

Suggested component boundaries:

- `SiteShell`: page layout and site identity.
- `SectionNavigation`: the five section controls and active section state.
- `ContentPanel`: section or object content, links, image galleries and optional audio.
- `LightboxScene`: the responsive SVG scene and object interaction callbacks.
- `ObjectContent`: typed local content keyed by stable object IDs.

These are architectural boundaries, not a required exact file layout.

## State and interaction

Keep the active navigation section and selected/previewed object in client-side UI state. Pointer hover may preview an object in the content panel; click or keyboard activation selects it persistently. Leaving an object may clear a temporary preview, but must not discard an explicit selection. Section navigation returns the panel to that section and can indicate related objects in the scene.

Each interactive SVG object needs a stable ID that maps to content. Use semantic, keyboard-operable controls for object hit areas (for example, focusable SVG groups with an accessible name and button role, or HTML controls positioned over the SVG). Provide a visible focus treatment and ensure the same content is reachable by touch. Do not make decorative scene details interactive without a corresponding content destination.

External links should be conventional links with understandable labels. Contact details are links or downloads; no contact form or server endpoint is part of the initial scope.

## Light-box illustration

Build the scene as SVG with four visual depth layers: exterior landscape/window, interior wall and cabinet, desk and desktop objects, and foreground objects. Place the frame in front of the scene. Use SVG groups with stable object IDs for interactive elements; keep the artwork itself separate from content data and interaction logic.

The interactive object set from the Design Outline is:

| Object ID (suggested) | Content destination |
| --- | --- |
| `hiking-boots` | Favourite hikes, photographs and optional map |
| `guitar` | Music, percussion, composition and Creative Club |
| `vinyl-player` | Spotivinyl and selected albums |
| `climbing-rope` | Climbing and TheCrag profile |
| `frog` | ColourQuest |
| `dumb-phone` | Personal hardware project and technical documentation |
| `vr-headset` | Diminished Reality thesis, results, demo and links |
| `books-vinyl-cabinet` | Reading and music collection |
| `briefcase` | Searten professional experience |

The grouped cabinet area can link to reading and music content, while the vinyl player separately introduces Spotivinyl. Individual books need not be separate interactive targets in the initial version.

Keep the scene at a consistent viewBox so it can scale proportionally on desktop and mobile. If a single composition becomes hard to use on narrow screens, a mobile-specific SVG composition may reuse the same IDs and content mapping.

## Content and assets

Store site content in local TypeScript or JSON data modules, separated by purpose where useful (sections, object entries, album list). Keep the data shape simple: title, concise description, optional section/category, media references, technology tags and labeled links. Stable IDs connect data to SVG objects. Do not embed content prose in SVG artwork.

Store media in the project and reference it by local path. Use optimized SVG, responsive/compressed photographs and appropriately sized audio. Load nonessential galleries and the thesis demonstration only when their content is selected or opened. Album URIs are maintained in `src/data/albums.json`; the build-time oEmbed script resolves the title, hosted cover URL and player URL into generated metadata. Do not download or transform Spotify artwork. Load the Spotify iframe only after a cover is selected.

Published client-side content is public. Do not add secrets, private data or credentials to source modules or public assets.

## Accessibility, responsiveness and performance

- Use semantic landmarks and headings, clear focus indicators, descriptive accessible names and sufficient contrast.
- Support keyboard selection and touch activation; hover is optional enhancement only.
- Reflow navigation, panel and scene for narrow screens and avoid horizontal scrolling.
- Respect `prefers-reduced-motion`; keep animations subtle and nonessential.
- Avoid loading full-resolution galleries or demonstration media on initial page load.
- Optimize illustrations and images and provide useful alternative text or captions.
- Ensure panel updates do not cause disruptive layout shifts; announce meaningful dynamic content changes to assistive technology when appropriate.

## Request and runtime flow

The browser downloads static HTML, CSS, JavaScript, SVG and media from Caddy. React renders the page, reads bundled local content, and updates the panel as users select navigation or scene objects. There are no application API requests or server-side data operations in the initial architecture.

The single-page experience uses in-page UI state rather than route-based navigation, so the Caddy setup does not require a client-side route fallback.
