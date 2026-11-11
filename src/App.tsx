import { useEffect, useRef, useState } from 'react'
import booksSvg from './assets/room-items/books.svg?raw'
import bootsSvg from './assets/room-items/boots.svg?raw'
import briefcaseSvg from './assets/room-items/briefcase.svg?raw'
import frogSvg from './assets/room-items/frog.svg?raw'
import guitarSvg from './assets/room-items/guitar.svg?raw'
import headsetSvg from './assets/room-items/headset.svg?raw'
import recordBottomSvg from './assets/room-items/record-bottom.svg?raw'
import recordTopSvg from './assets/room-items/record-top.svg?raw'
import ropeSvg from './assets/room-items/Rope.svg?raw'
import solderingIronSvg from './assets/room-items/soldering-iron.svg?raw'
import speakerSvg from './assets/room-items/speaker.svg?raw'
import vinylPlayerSvg from './assets/room-items/vinyl-player.svg?raw'
import roomImage from './assets/room.png'
import climbHang from './assets/photos/climbing-hang.jpg'
import climbJoe from './assets/photos/climbing-joe.png'
import climbSpire from './assets/photos/climbing-spire.jpg'
import hikeArthurs from './assets/photos/hike-arthurs.jpg'
import hikeFaroe1 from './assets/photos/hike-faroe1.jpg'
import hikeFaroe2 from './assets/photos/hike-faroe2.jpg'
import hikeKungsleden from './assets/photos/hike-kungsleden.jpg'
import hikeNz from './assets/photos/hike-nz.jpg'
import frogRender from './assets/photos/frog-render.png'
import frogPhoto from './assets/photos/frog.png'
import speakerRender from './assets/photos/speaker-render.jpeg'
import speakerSketch from './assets/photos/speaker-sketch.png'
import spotivinyl from './assets/photos/spotivinyl.jpg'
import thesisDemo from './assets/photos/thesis-demo.gif'
import thesisProcess from './assets/photos/thesis-process.png'
import faroeAudio from './assets/faroe.mp3'
import resume from './assets/resume.pdf'
import portrait from './assets/photos/me.jpg'
import albumMetadata from './data/albums.generated.json'
import './App.css'

const sections = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'experience', number: '02', label: 'Relevant Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'interests', number: '04', label: 'Interests' },
  { id: 'contact', number: '05', label: 'Contact' },
] as const

type SectionId = (typeof sections)[number]['id']
type LinkItem = { label: string; href: string }
type ImageItem = { src: string; alt: string }
type ContentItem = { title: string; subtitle?: string; text?: string; date?: string; bullets?: string[]; tags?: string[]; links?: LinkItem[]; image?: ImageItem; images?: ImageItem[]; audio?: { src: string; label: string } }
type PanelContent = { eyebrow: string; title: string; intro?: string; items?: ContentItem[]; tags?: string[]; links?: LinkItem[]; images?: ImageItem[]; books?: { title: string; author: string; description: string }[]; abstract?: string }
type AlbumMetadata = { slot: 'record-top' | 'record-bottom'; uri: string; albumUrl: string; embedUrl: string; title: string; coverUrl: string }

const albums = albumMetadata as AlbumMetadata[]
const media = {
  climbHang,
  climbJoe,
  climbSpire,
  hikeArthurs,
  hikeFaroe1,
  hikeFaroe2,
  hikeKungsleden,
  hikeNz,
  frogRender,
  frog: frogPhoto,
  speakerRender,
  speakerSketch,
  spotivinyl,
  thesisDemo,
  thesisProcess,
  faroeAudio,
  resume,
  portrait,
}

const seartenBullets = [
  'Designed and deployed a hybrid scientific search platform combining semantic AI models with keyword-based retrieval, helping researchers discover scientific instruments, techniques and literature.',
  'Built and trained custom PyTorch models, developed Python and SQL backend services alongside a React frontend, and deployed infrastructure using AWS SageMaker, EC2, S3 and RDS.',
  'Integrated stakeholder datasets covering 350 instruments and 41 articles across 22 techniques; two organisations committed to platform trials.',
]

const thesisBullets = [
  'Modified and optimised PyTorch computer-vision models for real-time object removal; developed a curriculum-based training regime and curated diverse training datasets.',
  'Achieved over 20 FPS at 720p, reducing inference time by 84% against the original model.',
  'Trained models on cloud GPU infrastructure and integrated them into a Meta Quest 3 mixed-reality system, linking on-device detection and user selection with server-side GPU-accelerated inpainting and privacy-preserving point-cloud generation.',
]

const thesisAbstract = 'Diminished reality (DR) refers to the digital removal of real-world objects by compositing background content in their place. This thesis presents a real-time, inpainting-based DR system for privacy control in shared-space mixed-reality meetings. A primary headset user can selectively remove personal or sensitive items from their environment so those objects are no longer visible to other participants. Removal uses semantic segmentation and precise object selection, followed by real-time inpainting from a secondary observer’s viewpoint using a mobile ZED 2i depth camera. The system is portable and robust, requiring neither a fixed secondary viewpoint nor prior 3D scanning. It uses YOLOv11 for object detection and a modified Decoupled Spatial-Temporal Transformer (DSTT) for video inpainting. At 720p, the pipeline sustains more than 20 fps.'

const colourQuestModes = [
  'Colour Hunt — Search for specific colours in nature. Scan real-world objects and receive a score based on how closely their colours match.',
  'Colour Palette (Wi-Fi required) — Capture colours from the environment to build a palette. Once it is complete, the frog recommends a creative scene to draw using the colours you found.',
]
const colourQuestComponents = ['LED ring', 'ESP32', 'Speaker', 'Reed switch', 'Colour sensor', 'USB-C charging']

const sectionContent: Record<SectionId, PanelContent> = {
  about: {
    eyebrow: 'A small introduction',
    title: 'A personal archive.',
    intro: 'I’m an aspiring Solutions Architect and University of Sydney graduate, having completed a Bachelor of Advanced Computing as a Dalyell Scholar with a Distinction average. Hands-on experience working across AWS infrastructure, developing bespoke machine learning models for real-world applications, and designing robust, efficient systems that solve complex and unique problems. \n\n I\'m Passionate about exploring the cutting edge of technology, tackling novel challenges, and turning ideas into practical solutions.',
  },
  experience: {
    eyebrow: 'Career and research',
    title: 'Relevant Experience',
    intro: 'Selected professional, research and infrastructure experience.',
    items: [
      { title: 'Founding Team Member', subtitle: 'Searten', date: 'July 2023 – August 2025', links: [{ label: 'searten.com', href: 'https://www.searten.com/' }], bullets: seartenBullets, tags: ['PyTorch', 'Python', 'AWS SageMaker', 'Model fine-tuning', 'Dataset curation', 'Vector search', 'Data modelling', 'React', 'SQL', 'EC2', 'S3', 'RDS', 'Lambda', 'Networking'] },
      { title: 'Real-Time Diminished Reality', subtitle: 'Research Thesis', date: 'July 2024 – June 2025', links: [{ label: 'arXiv:2509.10466', href: 'https://arxiv.org/abs/2509.10466' }], bullets: thesisBullets, tags: ['PyTorch', 'TensorFlow', 'Python', 'C++', 'C#', 'AWS SageMaker', 'Unity', 'Model optimisation', 'Custom model training', 'Dataset curation', 'Inpainting', 'Object detection'] },
      { title: 'Infrastructure Automation Project', subtitle: 'Ansible & Linux', date: 'February 2026', bullets: ['Developed an Ansible playbook to automate Linux server provisioning, configuration management and repeatable service deployment.', 'Automated system configuration, access controls, networking, persistent storage and containerised applications with Ansible modules, variables, loops and task-level verification.', 'Deployed self-hosted services using Docker Compose, systemd, Samba and Caddy, integrating Cloudflare DNS and automated HTTPS.'], tags: ['Docker', 'Linux', 'Ansible', 'TypeScript', 'Cloudflare', 'Networking'] },
    ],
  },
  projects: {
    eyebrow: 'Selected work',
    title: 'Projects',
    intro: 'A selection of things I have designed, built and explored.',
    items: [
      { title: 'ColourQuest', text: 'How can technology help children connect with and engage with the aesthetic beauty of nature in a playful, creative way? Colour Quest is an interactive outdoor game designed to encourage colour exploration and creativity. Housed in a friendly frog-shaped handheld device, it promotes play, learning and artistic expression.', bullets: [...colourQuestModes, `Components: ${colourQuestComponents.join(', ')}.`], links: [{ label: 'GitHub repository', href: 'https://github.com/c1h1r1i1s1/Colour-Quest' }, { label: 'Project video', href: 'https://www.youtube.com/watch?v=G09I_hlHdmE' }], tags: ['C++', 'HTML', 'CSS', 'CAD modelling', 'Sensor integration', 'System architecture', 'Embedded programming'] },
      { title: 'Custom dumb phone', text: 'A custom phone with an e-ink display and purpose-built operating system applications. Designed for calling, texting, music, maps, photos, calendar, mail and notes — nothing more.', bullets: ['Custom circuitry integrating a camera, modem and Raspberry Pi Zero 2 W.', 'Includes voltage regulation and charging circuitry.'], tags: ['Python', 'Shell', 'AT commands'] },      
      { title: 'Custom speaker', text: 'A custom three-way stereo speaker build for high-quality listening, using SB Acoustics drivers, custom circuitry and a purpose-designed enclosure.', tags: ['Crossover design', 'CAD modelling', 'Acoustic modelling', 'Woodwork'] },
      { title: 'SpotiVinyl', text: 'SpotiVinyl uses Spotify URIs embedded in NFC tags to link a mini album card to its digital album. Select an album and the Spotify API can begin playback on a device of your choice: a way to combine the benefits of streaming with the tangible, collectible nature of vinyl.', links: [{ label: 'GitHub repository', href: 'https://github.com/c1h1r1i1s1/SpotiVinyl' }], tags: ['Raspberry Pi', 'Python', 'Spotify API'] },
    ],
  },
  interests: {
    eyebrow: 'Outside the workbench',
    title: 'Interests',
    intro: 'Explore the room to find stories about the places, music and ideas I return to.',
    items: [
      { title: 'Outdoors', text: "Where it all makes sense. If it's climbing out in the mountains or thru-hiking across a country, I'm there." },
      { title: 'Creative outlets', text: 'Guitar, percussion, records and reading. I also bring people together through Creative Club: a space to share projects with friends and celebrate these creative ventures.' },
    ],
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Contact',
    links: [
      { label: 'hello@thewoody.one', href: 'mailto:hello@thewoody.one' },
      { label: 'GitHub', href: 'https://github.com/c1h1r1i1s1' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christianfane/' },
      { label: 'Resume (PDF)', href: media.resume },
    ],
  },
}

const roomObjects: { id: string; label: string; svg: string; content: PanelContent }[] = [
  { id: 'boots', label: 'Hiking boots', svg: bootsSvg, content: { eyebrow: 'Interests / Outdoors', title: 'Favourite hikes', intro: 'A few landscapes that have stayed with me.', items: [{ title: 'Western Arthurs, Tasmania', text: 'The best Tassie has to offer. Stunning and rugged alpine ridgelines, perfect tarns, punishing elevation and unpredictable weather. It has it all.', image: { src: media.hikeArthurs, alt: 'Western Arthurs mountain scenery in Tasmania' } }, { title: 'Slættanes, Faroe Islands', text: 'The village at the end of the world. A fantastic challenging day hike around the island of Vágar. Nothing but centuries-old cairns to guide your way, a smattering of sheep, and some killer coastal cliff lines towards the end.', images: [{ src: media.hikeFaroe1, alt: 'Hiking scenery near Slættanes in the Faroe Islands' }, { src: media.hikeFaroe2, alt: 'Coastal cliffs near Slættanes in the Faroe Islands' }] }, { title: 'Kungsleden, Swedish Lapland', text: 'Powerful, expansive, vibrant and absolutely full of mosquitoes. A wonderful, relaxed and friendly venture through Lapland.', image: { src: media.hikeKungsleden, alt: 'Landscape along Kungsleden in Swedish Lapland' } }, { title: 'Te Araroa, New Zealand', text: 'Oh boy where to start! The best adventure of my life. Varied, rugged, stoic and intensely beautiful scenery. Truly the perfect two-month tour of the South Island. Full of grassy valleys, scree slopes, winding rivers, alpine lakes, peaceful towns and wonderful people.', image: { src: media.hikeNz, alt: 'Hiking scenery on New Zealand’s South Island' } }] } },
  { id: 'guitar', label: 'Guitar', svg: guitarSvg, content: { eyebrow: 'Interests / Music', title: 'Making music', intro: 'Around six years of guitar, a minor in Music, and C-Mus percussion experience.', items: [{ title: 'A recent brief composition', text: 'A short piece recorded for this archive.', audio: { src: media.faroeAudio, label: 'Play a recent brief composition' } }, { title: 'Creative Club', text: 'Creative Club is a chance to celebrate our creative ventures with friends. I believe there is value in sharing what we make: creative work takes on meaning when it is witnessed, and a little encouragement can help us finish projects and give them the polish they deserve. Most of all, it is a great way to see how our friends express themselves creatively and learn a bit more about who we all are.' }] } },
  { id: 'briefcase', label: 'Briefcase', svg: briefcaseSvg, content: { eyebrow: 'Experience / Searten', title: 'Founding Team Member', intro: 'July 2023 – August 2025', items: [{ title: 'Searten', text: 'Designed and deployed a hybrid scientific search platform combining semantic AI models with keyword-based retrieval, improving how researchers discover scientific instruments, techniques and literature.', bullets: seartenBullets, tags: ['PyTorch', 'Python', 'AWS SageMaker', 'React', 'SQL', 'EC2', 'S3', 'RDS'] }], links: [{ label: 'Visit Searten', href: 'https://www.searten.com/' }] } },
  { id: 'frog', label: 'Frog figurine', svg: frogSvg, content: { eyebrow: 'Projects / ColourQuest', title: 'ColourQuest', intro: 'How can technology help children connect with the aesthetic beauty of nature in a playful and creative way? Colour Quest is an interactive outdoor game for colour exploration, learning and artistic expression, housed in a friendly frog-shaped handheld device.', items: [{ title: 'Game modes', bullets: colourQuestModes }, { title: 'Components', bullets: colourQuestComponents }], links: [{ label: 'GitHub repository', href: 'https://github.com/c1h1r1i1s1/Colour-Quest' }, { label: 'Project video', href: 'https://www.youtube.com/watch?v=G09I_hlHdmE' }], tags: ['C++', 'HTML', 'CSS', 'CAD modelling', 'Sensor integration', 'System architecture', 'Embedded programming'], images: [{ src: media.frogRender, alt: 'ColourQuest frog device render' }, { src: media.frog, alt: 'ColourQuest frog device' }] } },
  { id: 'headset', label: 'VR headset', svg: headsetSvg, content: { eyebrow: 'Experience / Research thesis', title: 'Real-Time Diminished Reality', intro: 'July 2024 – June 2025', items: [{ title: 'Research and implementation', bullets: thesisBullets, tags: ['PyTorch', 'TensorFlow', 'Python', 'C++', 'C#', 'AWS SageMaker', 'Unity', 'Model optimisation', 'Custom model training', 'Dataset curation', 'Inpainting', 'Object detection'] }], abstract: thesisAbstract, links: [{ label: 'arXiv paper', href: 'https://arxiv.org/abs/2509.10466' }, { label: 'GitHub repository', href: 'https://github.com/c1h1r1i1s1/Real-Time-Inpainting' }, { label: 'Thesis video', href: 'https://www.youtube.com/watch?v=udBxj35GEKI&t=553s' }], images: [{ src: media.thesisDemo, alt: 'Animated demonstration of diminished reality object removal' }, { src: media.thesisProcess, alt: 'Diagram of the real-time diminished reality process' }] } },
  { id: 'soldering-iron', label: 'Soldering iron', svg: solderingIronSvg, content: { eyebrow: 'Projects / Hardware', title: 'Custom dumb phone', intro: 'A custom phone with an e-ink display and a purpose-built operating system containing applications designed for the device.', items: [{ title: 'Designed for', text: 'Calling, texting, music, maps, photos, calendar, mail and notes. Nothing more.' }, { title: 'Hardware', text: 'Custom circuitry integrating a camera, modem, Raspberry Pi Zero 2 W, voltage regulation and charging circuitry.' }] } },
  { id: 'speaker', label: 'Custom-built speaker', svg: speakerSvg, content: { eyebrow: 'Projects / Design and fabrication', title: 'Custom speaker', intro: 'A custom three-way stereo speaker build for high-quality listening, designed and built by me using SB Acoustics drivers, custom circuitry and a purpose-designed enclosure.', images: [{ src: media.speakerSketch, alt: 'Sketch of the custom speaker design' }, { src: media.speakerRender, alt: 'Rendered custom speaker design' }] } },
  { id: 'rope', label: 'Climbing rope', svg: ropeSvg, content: { eyebrow: 'Interests / Climbing', title: 'Climbing', intro: 'A few moments from climbing trips and time on the wall.', links: [{ label: 'TheCrag profile', href: 'https://www.thecrag.com/climber/cfane' }, { label: 'Instagram', href: 'https://www.instagram.com/snort.chalk/' }], images: [{ src: media.climbHang, alt: 'Climbing on an overhanging wall' }, { src: media.climbJoe, alt: 'Climbing outdoors with a friend' }, { src: media.climbSpire, alt: 'Climbing beside a rock spire' }] } },
  { id: 'books', label: 'Books', svg: booksSvg, content: { eyebrow: 'Interests / Reading', title: 'Books on the shelf', intro: 'A selection of books I have enjoyed recently.', books: [{ title: 'Stoner', author: 'John Williams', description: 'A surprisingly beautiful novel about grit, integrity, resilience, and most importantly, love and purpose. An exploration of life’s suffering and the brief moments of clarity we find along the way.' }, { title: 'Hyperion', author: 'Dan Simmons', description: 'An unbelievably powerful space opera weaving together a mixture of tales and styles, digging into philosophy, art, culture, beauty and meaning. Simmons builds an utterly unique and complex world that is staggering in its scale and detail. A serious adventure that unravels an incredible mystery.' }, { title: 'Dune', author: 'Frank Herbert', description: 'An exciting dive into deep, profound and brilliant lore. Incredibly immersive internal monologues take you into the mind of a man with incredible abilities; borne from many millennia of careful genetic sculpting through powerful bloodlines. We witness him shoulder the burden of his role in intergalactic history, and manage the cruel reality of prescience' }, { title: 'There Is No Antimemetics Division', author: 'qntm', description: 'A superb execution of an incredibly potent and creative concept. Borne out of the SCP archives, this short story explores all of the terrifying consequences of this fantastic idea. As more and more is uncovered, the less you wish you knew.' }, { title: 'The Witcher', author: 'Andrzej Sapkowski', description: 'If you loved the games, read these books. Fantastic combat descriptions, great characters, and a strong narrative with dark and gritty undertones balanced out by a surprisingly lighthearted comedic edge. Lots of fun.' }] } },
  { id: 'vinyl-player', label: 'Vinyl player', svg: vinylPlayerSvg, content: { eyebrow: 'Projects / SpotiVinyl', title: 'SpotiVinyl', intro: 'SpotiVinyl uses Spotify URIs embedded in NFC tags to link a mini album card to its digital album. Select an album and the Spotify API is called to begin playback on the device of your choice: combining modern streaming with the tangible, collectible nature of vinyl.', links: [{ label: 'GitHub repository', href: 'https://github.com/c1h1r1i1s1/SpotiVinyl' }], tags: ['Raspberry Pi', 'Python', 'Spotify API'], images: [{ src: media.spotivinyl, alt: 'SpotiVinyl mini album card and NFC project' }] } },
]

const relatedObjects: Record<SectionId, string[]> = {
  about: [],
  experience: ['briefcase', 'headset'],
  projects: ['soldering-iron', 'speaker', 'vinyl-player', 'frog'],
  interests: ['boots', 'guitar', 'rope', 'books'],
  contact: [],
}

const albumSlots = [
  { slot: 'record-top', svg: recordTopSvg },
  { slot: 'record-bottom', svg: recordBottomSvg },
] as const

function getObjectPath(svg: string) {
  return svg.match(/<path\b[^>]*\bd="([^"]+)"/s)?.[1] ?? ''
}

function getFrameGeometry(svg: string) {
  const path = getObjectPath(svg)
  const tokens = path.match(/[a-zA-Z]|[-+]?(?:\d*\.)?\d+(?:e[-+]?\d+)?/g) ?? []
  const points: { x: number; y: number }[] = []
  let command = ''
  let x = 0
  let y = 0
  let firstMove = false
  let index = 0

  while (index < tokens.length) {
    if (/^[a-zA-Z]$/.test(tokens[index])) {
      command = tokens[index]
      index += 1
      if (command.toLowerCase() === 'z') break
      firstMove = command.toLowerCase() === 'm'
      continue
    }

    const relative = command === command.toLowerCase()
    if (command.toLowerCase() === 'm' || command.toLowerCase() === 'l') {
      const nextX = Number(tokens[index])
      const nextY = Number(tokens[index + 1])
      if (!Number.isFinite(nextX) || !Number.isFinite(nextY)) return null
      x = relative ? x + nextX : nextX
      y = relative ? y + nextY : nextY
      points.push({ x, y })
      index += 2
      if (firstMove) {
        command = relative ? 'l' : 'L'
        firstMove = false
      }
      continue
    }

    if (command.toLowerCase() === 'h') {
      const nextX = Number(tokens[index])
      if (!Number.isFinite(nextX)) return null
      x = relative ? x + nextX : nextX
      points.push({ x, y })
      index += 1
      continue
    }

    if (command.toLowerCase() === 'v') {
      const nextY = Number(tokens[index])
      if (!Number.isFinite(nextY)) return null
      y = relative ? y + nextY : nextY
      points.push({ x, y })
      index += 1
      continue
    }

    return null
  }

  if (points.length < 4) return null

  const xs = points.map(({ x }) => x)
  const ys = points.map(({ y }) => y)
  const left = Math.min(...xs)
  const right = Math.max(...xs)
  const top = Math.min(...ys)
  const bottom = Math.max(...ys)
  const size = Math.min(right - left, bottom - top) * .95
  const centerX = (left + right) / 2
  const centerY = (top + bottom) / 2
  const imageX = centerX - size / 2
  const imageY = centerY - size / 2
  const framePath = `M ${points.map(({ x, y }) => `${x} ${y}`).join(' L ')} Z`

  return {
    imageX,
    imageY,
    imageSize: size,
    framePath,
    farEdges: `M ${points[0].x} ${points[0].y} L ${points[3].x} ${points[3].y} M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`,
    nearEdges: `M ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} M ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y}`,
  }
}

function RoomImage({ selectedId, selectedAlbumSlot, highlightedObjects, activeSection, onSelect, onSelectAlbum }: {
  selectedId: string | null
  selectedAlbumSlot: AlbumMetadata['slot'] | null
  highlightedObjects: string[]
  activeSection: SectionId
  onSelect: (objectId: string) => void
  onSelectAlbum: (slot: AlbumMetadata['slot']) => void
}) {
  return (
    <div className="room-canvas">
      <img className="room-photograph" src={roomImage} alt="Illustrated personal room with a desk, guitar, bookcase, records and personal objects" />
      <svg className="room-hotspots" viewBox="0 0 1254 1254" role="group" aria-label="Explore objects in the room">
        <defs>
          <filter id="outline-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="outline-glow-strong" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {albumSlots.map((slot) => {
          const album = albums.find((item) => item.slot === slot.slot)
          const geometry = getFrameGeometry(slot.svg)
          if (!album || !geometry) return null
          const clipId = `album-cover-${slot.slot}`
          return (
            <g key={slot.slot} aria-hidden="true">
              <clipPath id={clipId}><rect x={geometry.imageX} y={geometry.imageY} width={geometry.imageSize} height={geometry.imageSize} rx="1.5" /></clipPath>
              <path d={geometry.framePath} transform="translate(2 2.5)" fill="#292B28" opacity=".22" />
              <path d={geometry.framePath} fill="#D8D1C3" stroke="#292B28" strokeWidth="1.2" />
              <image href={album.coverUrl} x={geometry.imageX} y={geometry.imageY} width={geometry.imageSize} height={geometry.imageSize} preserveAspectRatio="xMidYMid meet" clipPath={`url(#${clipId})`} />
              <path d={geometry.farEdges} fill="none" stroke="#F3F0E8" strokeWidth="1.5" opacity=".9" />
              <path d={geometry.nearEdges} fill="none" stroke="#77796F" strokeWidth="1.2" opacity=".8" />
            </g>
          )
        })}
        {roomObjects.map((object) => {
          const path = getObjectPath(object.svg)
          const active = selectedId === object.id
          const related = highlightedObjects.includes(object.id) && !selectedId
          return (
            <g className={`room-hotspot ${active ? 'is-selected' : ''} ${related ? 'is-related' : ''}`} key={object.id}>
              <path className="hotspot-tint" d={path} aria-hidden="true" />
              <path className="hotspot-outline" d={path} pathLength="1000" aria-hidden="true" />
              <path className="hotspot-trace" d={path} pathLength="1000" aria-hidden="true" />
              <path
                className="hotspot-hit-area"
                d={path}
                role="button"
                tabIndex={0}
                aria-label={`Show details about ${object.label}`}
                onClick={() => onSelect(object.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    onSelect(object.id)
                  }
                }}
              />
            </g>
          )
        })}
        {albumSlots.map((slot) => {
          const album = albums.find((item) => item.slot === slot.slot)
          if (!album) return null
          const path = getObjectPath(slot.svg)
          const active = selectedAlbumSlot === slot.slot
          const related = activeSection === 'projects' && !selectedAlbumSlot
          return (
            <g className={`room-hotspot ${active ? 'is-selected' : ''} ${related ? 'is-related' : ''}`} key={slot.slot}>
              <path className="hotspot-outline" d={path} pathLength="1000" aria-hidden="true" />
              <path className="hotspot-trace" d={path} pathLength="1000" aria-hidden="true" />
              <path
                className="hotspot-hit-area"
                d={path}
                role="button"
                tabIndex={0}
                aria-label={`Listen to ${album.title} on Spotify`}
                onClick={() => onSelectAlbum(slot.slot)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    onSelectAlbum(slot.slot)
                  }
                }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const [selectedObject, setSelectedObject] = useState<string | null>(null)
  const [selectedAlbumSlot, setSelectedAlbumSlot] = useState<AlbumMetadata['slot'] | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const objectContent = roomObjects.find((object) => object.id === selectedObject)?.content
  const selectedAlbum = albums.find((album) => album.slot === selectedAlbumSlot)
  const content = selectedAlbum
    ? { eyebrow: 'Listening / Spotify', title: selectedAlbum.title, intro: 'Something I\'ve been enjoying recently.' }
    : objectContent ?? sectionContent[activeSection]

  useEffect(() => {
    if (selectedObject !== 'guitar' || !audioRef.current) return
    audioRef.current.volume = 0.18
    void audioRef.current.play().catch(() => undefined)
  }, [selectedObject])

  function selectSection(sectionId: SectionId) {
    setActiveSection(sectionId)
    setSelectedObject(null)
    setSelectedAlbumSlot(null)
  }

  function selectObject(objectId: string) {
    setSelectedObject(objectId)
    setSelectedAlbumSlot(null)
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="wordmark" type="button" onClick={() => selectSection('about')} aria-label="CF. Personal Archive home">
          <span className="wordmark-mark">CF.</span>
          <span className="wordmark-label">Personal Archive</span>
        </button>
        <span className="header-note">A collection of work &amp; other things</span>
      </header>

      <div className="page-layout">
        <nav className="section-nav" aria-label="Main sections">
          <p className="nav-caption">Index</p>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button className={`nav-link ${activeSection === section.id && !selectedObject && !selectedAlbum ? 'is-active' : ''}`} type="button" aria-current={activeSection === section.id && !selectedObject && !selectedAlbum ? 'page' : undefined} onClick={() => selectSection(section.id)}>
                  <span className="nav-number">{section.number}</span><span>{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="content-panel" aria-live="polite" aria-atomic="true">
          <div className="content-inner" key={selectedAlbumSlot ?? selectedObject ?? activeSection}>
            <p className="eyebrow"><span className="eyebrow-rule" />{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="intro">{content.intro}</p>
            {selectedAlbum && <div className="album-player">
              <iframe title={`Spotify player for ${selectedAlbum.title}`} src={selectedAlbum.embedUrl} width="100%" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
              <a href={selectedAlbum.albumUrl} target="_blank" rel="noreferrer">Open album on Spotify ↗</a>
            </div>}
            {content.abstract && <details className="abstract-details"><summary>Read the thesis abstract</summary><p>{content.abstract}</p></details>}
            {content.items && <div className="content-items">{content.items.map((item) => (
              <article className="content-item" key={item.title}>
                <div className="item-heading"><h2 className={item.subtitle ? 'has-subtitle' : ''}>{item.subtitle ? <><strong className="item-title">{item.title}</strong><span className="item-subtitle">{item.subtitle}</span></> : item.title}</h2>{item.date && <span className="item-date">{item.date}</span>}</div>
                {item.text && <p>{item.text}</p>}
                {item.image && <figure className="item-image"><img src={item.image.src} alt={item.image.alt} loading="lazy" /></figure>}
                {item.images?.map((image) => <figure className="item-image" key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}
                {item.links?.map((link) => <a className={`inline-link ${item.title === 'Founding Team Member' ? 'is-italic' : ''}`} href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}
                {item.bullets && <ul className="detail-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                {item.audio && <audio ref={item.audio.src === media.faroeAudio ? audioRef : undefined} className="audio-player" controls preload="none" src={item.audio.src}>{item.audio.label}</audio>}
                {item.tags && <ul className="tag-list" aria-label="Associated skills">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
              </article>
            ))}</div>}
            {content.books && <ul className="book-list">{content.books.map((book) => <li key={book.title}><strong>{book.title}</strong> — {book.author}. {book.description}</li>)}</ul>}
            {content.links && <div className="content-links">{content.links.map((link) => <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div>}
            {content.tags && <ul className="tag-list panel-tags" aria-label="Associated skills">{content.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
            {content.images && <div className="media-gallery">{content.images.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}</div>}
            {!selectedObject && !selectedAlbum && activeSection === 'about' && <p className="panel-hint">Click an outlined object in the room to learn more.</p>}
            {!selectedObject && !selectedAlbum && activeSection === 'about' && <figure className="about-portrait"><img src={media.portrait} alt="Portrait of Christian" loading="lazy" /></figure>}
          </div>
        </section>

        <section className="scene-placeholder" aria-label="Interactive room">
          <div className="scene-mat"><RoomImage selectedId={selectedObject} selectedAlbumSlot={selectedAlbumSlot} highlightedObjects={relatedObjects[activeSection]} activeSection={activeSection} onSelect={selectObject} onSelectAlbum={(slot) => { setSelectedObject(null); setSelectedAlbumSlot(slot) }} /></div>
        </section>
      </div>
      <footer className="site-footer"><span>CF. Personal Archive</span></footer>
    </main>
  )
}

export default App
