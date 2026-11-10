import { useState } from 'react'
import booksSvg from './assets/room-items/books.svg?raw'
import bootsSvg from './assets/room-items/boots.svg?raw'
import briefcaseSvg from './assets/room-items/briefcase.svg?raw'
import frogSvg from './assets/room-items/frog.svg?raw'
import guitarSvg from './assets/room-items/guitar.svg?raw'
import headsetSvg from './assets/room-items/headset.svg?raw'
import phoneSvg from './assets/room-items/phone.svg?raw'
import recordBottomSvg from './assets/room-items/record-bottom.svg?raw'
import recordTopSvg from './assets/room-items/record-top.svg?raw'
import ropeSvg from './assets/room-items/rope.svg?raw'
import vinylPlayerSvg from './assets/room-items/vinyl-player.svg?raw'
import roomImage from './assets/room.png'
import './App.css'

const sections = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'experience', number: '02', label: 'Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'interests', number: '04', label: 'Interests' },
  { id: 'contact', number: '05', label: 'Contact' },
] as const

type SectionId = (typeof sections)[number]['id']
type ContentItem = { title: string; text: string; tags?: string[] }
type PanelContent = { eyebrow: string; title: string; intro: string; items?: ContentItem[]; tags?: string[] }

const sectionContent: Record<SectionId, PanelContent> = {
  about: {
    eyebrow: 'A small introduction',
    title: 'A personal archive, still taking shape.',
    intro: 'I’m a computing graduate interested in building useful things, understanding how they work, and making room for creative pursuits along the way. This is a place for my work, projects and the things I enjoy outside of them.',
    items: [
      { title: 'Engineering', text: 'From machine learning and software to small experiments with hardware.' },
      { title: 'Curiosity', text: 'Hiking, climbing, music, books and ideas that tend to become side projects.' },
    ],
  },
  experience: {
    eyebrow: 'Selected experience',
    title: 'Building search for scientific work.',
    intro: 'I was part of the founding team at Searten, working on a scientific search platform and its central semantic and keyword search engine.',
    items: [
      { title: 'Searten', text: 'Contributed to search systems, machine learning and product development. Work included fine-tuning SciBERT models on a custom dataset.', tags: ['Python', 'PyTorch', 'SQL', 'React', 'AWS'] },
      { title: 'Research', text: 'My undergraduate thesis explored real-time diminished reality: removing selected objects from a mixed-reality view.' },
    ],
  },
  projects: {
    eyebrow: 'Selected projects',
    title: 'Experiments, research and things made for fun.',
    intro: 'A few projects that bring together software, engineering and creative curiosity.',
    items: [
      { title: 'Real-Time Diminished Reality System', text: 'A mixed-reality system combining object segmentation and video inpainting. Thesis work using a Meta Quest 3, ZED2i and YOLOv11m-seg.', tags: ['Python', 'PyTorch', 'CUDA', 'TensorRT'] },
      { title: 'Personal phone', text: 'Exploring a more minimalist phone through custom hardware and software.' },
      { title: 'Spotivinyl & ColourQuest', text: 'Personal software projects connecting music, physical media and playful interaction.' },
    ],
  },
  interests: {
    eyebrow: 'Outside the workbench',
    title: 'A few other things I make time for.',
    intro: 'Explore the room to find stories about the places, music and ideas I return to.',
    items: [
      { title: 'Outdoors', text: 'Long walks and hikes, including Te Araroa, the Western Arthurs, Kungsleden and Slættanes.' },
      { title: 'Music', text: 'Guitar, percussion, listening to records and making space for creative projects.' },
      { title: 'Other curiosities', text: 'Climbing, reading science fiction and bringing people together through Creative Club.' },
    ],
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Have a project or an idea to talk about?',
    intro: 'Contact details and profile links will be added here. This section is ready for email, GitHub, LinkedIn and a CV download.',
  },
}

const roomObjects: { id: string; label: string; svg: string; content: PanelContent }[] = [
  { id: 'boots', label: 'Hiking boots', svg: bootsSvg, content: { eyebrow: 'Interests / Outdoors', title: 'Favourite hikes', intro: 'A few trails and landscapes that have stayed with me.', items: [{ title: 'Te Araroa', text: 'South Island, New Zealand.' }, { title: 'Western Arthurs', text: 'Tasmania.' }, { title: 'Kungsleden', text: 'Swedish Lapland.' }, { title: 'Slættanes', text: 'Faroe Islands.' }] } },
  { id: 'guitar', label: 'Guitar', svg: guitarSvg, content: { eyebrow: 'Interests / Music', title: 'Music and creative pursuits', intro: 'I have played guitar for around six years, completed a Music minor alongside my Bachelor of Advanced Computing, and have experience with C-Mus percussion.', items: [{ title: 'Creative Club', text: 'A place for creative ideas, previous gatherings and upcoming events.' }, { title: 'Making music', text: 'This space can also host an original composition and other musical projects.' }] } },
  { id: 'briefcase', label: 'Briefcase', svg: briefcaseSvg, content: { eyebrow: 'Experience / Searten', title: 'Scientific search at Searten', intro: 'I was part of the founding team at Searten, helping build a scientific search platform.', items: [{ title: 'My contribution', text: 'I worked on its central semantic and keyword search engine, including fine-tuning SciBERT models on a custom dataset.' }], tags: ['Python', 'PyTorch', 'SQL', 'React', 'AWS'] } },
  { id: 'frog', label: 'Frog figurine', svg: frogSvg, content: { eyebrow: 'Projects / ColourQuest', title: 'ColourQuest', intro: 'A small frog marks ColourQuest, a personal project exploring playful interaction.' } },
  { id: 'headset', label: 'VR headset', svg: headsetSvg, content: { eyebrow: 'Projects / Undergraduate thesis', title: 'Real-Time Diminished Reality System', intro: 'A system for removing selected objects from a mixed-reality environment in real time.', items: [{ title: 'System', text: 'The project combines a Meta Quest 3, ZED2i, YOLOv11m-seg and a video inpainting pipeline.' }, { title: 'Performance', text: 'The system achieved over 20 FPS at 720p and reduced inference time by 84%.' }], tags: ['Python', 'PyTorch', 'CUDA', 'TensorRT'] } },
  { id: 'phone', label: 'Phone and electronics', svg: phoneSvg, content: { eyebrow: 'Projects / Hardware', title: 'A minimalist personal phone', intro: 'A personal hardware project exploring a simpler phone and a more intentional relationship with everyday technology.', items: [{ title: 'Project notes', text: 'The project story will cover the concept, hardware architecture, components, software, engineering challenges and progress.' }] } },
  { id: 'rope', label: 'Climbing rope', svg: ropeSvg, content: { eyebrow: 'Interests / Climbing', title: 'Climbing', intro: 'A short introduction to my climbing experience and interests, with a link to my TheCrag profile to follow.' } },
  { id: 'books', label: 'Books', svg: booksSvg, content: { eyebrow: 'Interests / Reading', title: 'Books on the shelf', intro: 'A selection of books I have enjoyed.', items: [{ title: 'Recent reads', text: 'Stoner, Hyperion, Dune, 1984, There Is No Antimemetics Division and The Witcher.' }] } },
  { id: 'record-top', label: 'Vinyl collection', svg: recordTopSvg, content: { eyebrow: 'Projects / Spotivinyl', title: 'Spotivinyl', intro: 'A personal software project exploring the connection between physical vinyl listening and digital music.', items: [{ title: 'The collection', text: 'Album selection and artwork can be maintained locally without a live Spotify API integration.' }] } },
  { id: 'record-bottom', label: 'Vinyl collection', svg: recordBottomSvg, content: { eyebrow: 'Projects / Spotivinyl', title: 'Spotivinyl', intro: 'A personal software project exploring the connection between physical vinyl listening and digital music.', items: [{ title: 'The collection', text: 'Album selection and artwork can be maintained locally without a live Spotify API integration.' }] } },
  { id: 'vinyl-player', label: 'Vinyl player', svg: vinylPlayerSvg, content: { eyebrow: 'Projects / Spotivinyl', title: 'Spotivinyl', intro: 'A personal software project exploring the connection between physical vinyl listening and digital music.', items: [{ title: 'The project', text: 'This project brings together a physical record collection and software-assisted music discovery.' }] } },
]

function getObjectPath(svg: string) {
  return svg.match(/<path\b[^>]*\bd="([^"]+)"/s)?.[1] ?? ''
}

function RoomImage({ selectedId, onSelect }: { selectedId: string | null; onSelect: (objectId: string) => void }) {
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
        {roomObjects.map((object) => {
          const path = getObjectPath(object.svg)
          const active = selectedId === object.id
          return (
            <g className={`room-hotspot ${active ? 'is-selected' : ''}`} key={object.id}>
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
      </svg>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const [selectedObject, setSelectedObject] = useState<string | null>(null)
  const objectContent = roomObjects.find((object) => object.id === selectedObject)?.content
  const content = objectContent ?? sectionContent[activeSection]

  function selectSection(sectionId: SectionId) {
    setActiveSection(sectionId)
    setSelectedObject(null)
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
                <button className={`nav-link ${activeSection === section.id && !selectedObject ? 'is-active' : ''}`} type="button" aria-current={activeSection === section.id && !selectedObject ? 'page' : undefined} onClick={() => selectSection(section.id)}>
                  <span className="nav-number">{section.number}</span><span>{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="nav-footer">Choose a section<br />or select an object.</p>
        </nav>

        <section className="content-panel" aria-live="polite" aria-atomic="true">
          <div className="content-inner" key={selectedObject ?? activeSection}>
            <p className="eyebrow"><span className="eyebrow-rule" />{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="intro">{content.intro}</p>
            {content.items && <div className="content-items">{content.items.map((item) => (
              <article className="content-item" key={item.title}>
                <h2>{item.title}</h2><p>{item.text}</p>
                {item.tags && <ul className="tag-list" aria-label="Technologies">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
              </article>
            ))}</div>}
            {content.tags && <ul className="tag-list panel-tags" aria-label="Technologies">{content.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
            {!selectedObject && activeSection === 'about' && <p className="panel-hint">Click an outlined object in the room to learn more.</p>}
          </div>
        </section>

        <section className="scene-placeholder" aria-label="Interactive room">
          <div className="scene-mat"><RoomImage selectedId={selectedObject} onSelect={setSelectedObject} /></div>
        </section>
      </div>
      <footer className="site-footer"><span>CF. Personal Archive</span><span>Made slowly, with curiosity.</span></footer>
    </main>
  )
}

export default App
