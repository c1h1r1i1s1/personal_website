import { useState } from 'react'
import './App.css'

const sections = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'experience', number: '02', label: 'Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'interests', number: '04', label: 'Interests' },
  { id: 'contact', number: '05', label: 'Contact' },
] as const

type SectionId = (typeof sections)[number]['id']

const sectionContent: Record<SectionId, { eyebrow: string; title: string; intro: string; items?: { title: string; text: string; tags?: string[] }[] }> = {
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
    intro: 'The archive will eventually connect these interests to objects in the illustrated workspace.',
    items: [
      { title: 'Outdoors', text: 'Long walks and hikes, including Te Araroa, the Western Arthurs, Kungsleden and Slættanes.' },
      { title: 'Music', text: 'Guitar, percussion, listening to records and making space for creative projects.' },
      { title: 'Other curiosities', text: 'Climbing, reading science fiction and bringing people together through Creative Club.' },
    ],
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Have a project or an idea to talk about?',
    intro: 'Contact details and profile links will be added here. For now, this section is ready to become the home for email, GitHub, LinkedIn and a CV download.',
  },
}

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const content = sectionContent[activeSection]

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#about" onClick={() => setActiveSection('about')} aria-label="CF. Personal Archive home">
          <span className="wordmark-mark">CF.</span>
          <span className="wordmark-label">Personal Archive</span>
        </a>
        <span className="header-note">A collection of work &amp; other things</span>
      </header>

      <div className="page-layout">
        <nav className="section-nav" aria-label="Main sections">
          <p className="nav-caption">Index</p>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`nav-link ${activeSection === section.id ? 'is-active' : ''}`}
                  type="button"
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  onClick={() => setActiveSection(section.id)}
                >
                  <span className="nav-number">{section.number}</span>
                  <span>{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="nav-footer">Explore by section<br />or wander around.</p>
        </nav>

        <section className="content-panel" aria-live="polite" aria-atomic="true">
          <div className="content-inner" key={activeSection}>
            <p className="eyebrow"><span className="eyebrow-rule" />{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="intro">{content.intro}</p>
            {content.items && (
              <div className="content-items">
                {content.items.map((item) => (
                  <article className="content-item" key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    {item.tags && <ul className="tag-list" aria-label="Technologies">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                  </article>
                ))}
              </div>
            )}
            {activeSection === 'about' && <p className="panel-hint">The objects in the illustration will offer another way to explore.</p>}
          </div>
        </section>

        <section className="scene-placeholder" aria-label="Illustrated workspace, artwork coming soon">
          <div className="scene-mat">
            <div className="scene-inner">
              <span className="scene-index">A STUDY IN PROGRESS</span>
              <div className="scene-message">
                <span className="scene-mark" aria-hidden="true">✳</span>
                <p>The room is being drawn.</p>
                <span>Your illustrated workspace will live here.</span>
              </div>
              <span className="scene-caption">PERSONAL ARCHIVE&nbsp; / &nbsp;EST. 2025</span>
            </div>
          </div>
        </section>
      </div>
      <footer className="site-footer"><span>CF. Personal Archive</span><span>Made slowly, with curiosity.</span></footer>
    </main>
  )
}

export default App
