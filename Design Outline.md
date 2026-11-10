# Personal Website — Design and Functional Brief

## 1. Project Overview

Create a personal website that acts as an interactive portfolio and personal archive. The website should communicate both my professional technical experience and my broader personal interests, hobbies and projects.

The central visual concept is a **hand-drawn, layered shadow box (light box)** depicting a personal workspace. The scene is viewed straight on, like looking into a miniature room through a display frame. Objects within the scene represent different aspects of my life and act as interactive navigation elements.

The overall aesthetic should be understated, thoughtful and slightly nostalgic. It should feel like a carefully illustrated personal space rather than a conventional corporate portfolio.

The website should balance two objectives:
- Clearly communicate my technical abilities, professional experience and engineering projects.
- Give visitors an impression of my personality, interests, creative pursuits and current projects.

The experience should be visually distinctive but technically lightweight, responsive and straightforward to maintain.

## 2. Overall Page Layout

The desktop layout consists of three primary vertical sections, with a small site identity/header at the top left.

### A. Site Identity

Positioned at the top left of the page:

**CF.**

PERSONAL ARCHIVE

Use restrained typography, generous spacing and simple formatting. This should act as the website's identity rather than a large decorative header.

### B. Navigation Column

A narrow vertical navigation column on the far left of the page.

Use a simple numbered editorial style:

- 01 / About
- 02 / Experience
- 03 / Projects
- 04 / Interests
- 05 / Contact

The navigation should be permanently visible on desktop.

Selecting a navigation item changes the active section of the website and the information displayed in the adjacent content panel. Where appropriate, the light box can also visually highlight objects associated with the selected section.

### C. Information Panel

Positioned between the navigation and the light box.

This is the primary text content area. It initially displays a short personal introduction and welcome message.

The content panel is also the primary destination for object interactions within the light box. Hovering over an interactive object updates this panel with a description and relevant information about that object.

The panel should accommodate:
- Section headings and descriptive text.
- Project summaries and technical information.
- Photographs and small image galleries.
- Technology and skills tags.
- External links, GitHub repositories, papers and profiles.
- Audio playback where relevant.

Content should be appropriately concise. Professional projects should communicate technical contribution, implementation details and outcomes, while personal interests should use a more conversational tone.

### D. Main Light Box

Occupies the majority of the available page width on the right.

The illustration depicts a desk in front of a large window, with a cabinet/shelving unit to the side. The scene is viewed directly from the front, rather than from an isometric perspective.

The light box should have a visible rectangular frame and a sense of physical depth created through several overlapping visual layers.

The light box is the central visual feature of the website and serves as an interactive representation of my personal space.

## 3. Light Box — Visual Composition

The illustration should use approximately four distinct visual layers:

1. **Foreground:** Objects positioned on the floor or in front of the desk, including the hiking boots, guitar and briefcase.
2. **Desk and desktop objects:** The desk itself, with the dumb phone, soldering iron and other small technical equipment.
3. **Interior background:** The wall, cabinet, shelving, vinyl collection and objects displayed within the cabinet.
4. **Exterior background:** The window and the landscape visible through it.

The light box frame should sit visually in front of these layers.

Use subtle shadows, fine outlines and restrained shading to communicate depth without relying on actual 3D rendering.

The illustration should feel tactile and slightly imperfect, like an architectural sketch or carefully constructed miniature. Avoid overly cartoonish styling, excessive detail or unnecessary visual clutter.

### Objects within the light box

The following objects should be included and positioned naturally within the scene.

**1. Hiking boots — Favourite hikes**

Positioned on the floor beside one of the desk legs.

Interactive content:
- Te Araroa (South Island, New Zealand).
- Western Arthurs, Tasmania.
- Kungsleden, Swedish Lapland.
- Slættanes, Faroe Islands.

Display a brief description of these experiences, supported by a small collection of personal photographs. A map showing the locations would also be a useful addition.

**2. Guitar — Music and creative pursuits**

Standing next to the desk.

Interactive content:
- Approximately six years of guitar playing.
- Bachelor of Advanced Computing, with a Music minor.
- C-Mus percussion experience.
- Personal musical interests and creative projects.

Include an optional play button for an original musical composition. This should play a supplied audio file using a native web audio control or lightweight HTML audio element.

Include a link to the Creative Club project/page, which will explain its concept, creative philosophy, previous gatherings and upcoming events.

**3. Vinyl player and collection — Spotivinyl**

The vinyl player should be positioned within the cabinet, potentially with vinyl records and album covers displayed nearby.

Interactive content:
- Introduce Spotivinyl, a personal software project.
- Link to its GitHub repository.
- Explain the connection between physical vinyl listening and software/music integration.

The album covers should display a small selection of recently enjoyed albums.

Ideally, album selection should be configurable through a simple data file containing Spotify album URIs or URLs. Artwork should be displayed using available metadata or a manually supplied image. Avoid introducing a complex Spotify API integration in the initial version.

The album collection can be treated as one interactive object rather than making every record a separate navigation element.

**4. Climbing rope — Climbing**

Displayed hanging or coiled on the wall.

Interactive content:
- Brief introduction to my climbing experience and interests.
- Link to my TheCrag profile.

**5. Frog figurine — ColourQuest**

A small frog model positioned within the cabinet, acting as a subtle visual detail.

Interactive content:
- Brief introduction to ColourQuest.
- Link to the GitHub repository.

This should feel like a small discovery rather than a major visual feature.

**6. Dumb phone and electronics — Personal hardware project**

Positioned on the desk alongside a soldering iron and other small electronic components.

Interactive content:
- Explain the concept and motivation behind building a minimalist personal phone.
- Describe the hardware architecture and components.
- Explain the software implementation and associated programming languages.
- Highlight engineering challenges and skills developed.
- Link to the GitHub repository.
- Include progress photographs or technical diagrams where useful.

**7. VR headset — Diminished Reality thesis**

Displayed on a shelf within the cabinet.

This represents my undergraduate thesis project, titled *Real-Time Diminished Reality System*.

Interactive content:
- Explain the purpose of the project: real-time removal of selected objects from a mixed-reality environment.
- Provide a short technical overview of the system architecture.
- Highlight the Meta Quest 3, ZED2i, YOLOv11m-seg and the video inpainting pipeline.
- Include relevant technologies such as Python, PyTorch, CUDA and TensorRT.
- Present key performance results, including over 20 FPS at 720p and an 84% reduction in inference time.
- Link to the published arXiv paper and GitHub repositories.

Include a small GIF or animation demonstrating the object removal process, ideally showing a few representative frames. This should be optional and only loaded when relevant to avoid unnecessarily increasing initial page load.

**8. Books and vinyl cabinet — Reading and music collection**

The books and vinyl collection can be treated as one grouped interactive area within the cabinet, with individual books optionally selectable.

The reading content should introduce a selection of recently enjoyed books:

- *Stoner* — John Williams.
- *Hyperion* — Dan Simmons.
- *Dune* — Frank Herbert.
- *1984* — George Orwell.
- *There Is No Antimemetics Division* — qntm.
- *The Witcher* — Andrzej Sapkowski.

Display book titles and authors, optionally with a brief personal comment about each book.

**9. Business briefcase — Searten**

Positioned against one of the desk legs, on the floor.

This represents my founding-team experience at Searten.

Interactive content:
- Introduce Searten and its scientific search platform.
- Describe my contribution to the development of its central semantic and keyword search engine.
- Highlight machine learning work, including fine-tuning SciBERT models on a custom dataset.
- Include relevant technologies: Python, PyTorch, SQL, React and AWS services.
- Explain the product, my responsibilities and relevant outcomes.
- Link to the company website or other appropriate supporting material.

This interaction should communicate professional experience rather than simply describing another personal hobby.

## 4. Interaction and Behaviour

The light box should function as an interactive illustration rather than a static decorative image.

### Hover behaviour

Each interactive object should have a defined hover area.

When the pointer moves over an object:
- Visually highlight the object using a subtle colour, outline or slight movement.
- Update the information panel with its associated content.
- Clearly indicate that the object is interactive.

The information panel should update without changing the overall page layout or causing disruptive transitions.

### Click behaviour

Clicking an object should select it and ideally make its associated content persistent rather than dependent on continued hovering.

For more substantial content, clicking can expand the information panel or open a dedicated detail view.

This is particularly useful for:
- Professional and personal engineering projects.
- The thesis demonstration.
- Hiking photographs and maps.
- Creative Club information.
- Detailed external project links.

External links should remain conventional and clearly identifiable.

### Default state

When no object is selected, display the general About introduction.

The initial page should provide a short overview of who I am, what I do and what I am interested in.

The visitor should immediately understand that the objects within the illustration are interactive.

### Navigation behaviour

Selecting one of the main navigation headings should change the information panel to the relevant section.

The light box should remain visible and act as a consistent visual anchor. Objects relevant to the selected section can be highlighted.

### Mobile behaviour

Hover must not be required for functionality.

On mobile:
- The light box should scale proportionally or adapt to a mobile-specific composition.
- Objects should remain selectable through tapping.
- Tapping an object should update the information panel.
- The navigation should adapt to the smaller viewport.
- Information panels must remain readable without horizontal scrolling.

The mobile experience should prioritise usability over maintaining the exact desktop composition.

## 5. Professional and Personal Content Structure

The main navigation should provide conventional access to the following sections.

**About**
- Short personal introduction.
- Technical and creative interests.
- Current location, where appropriate.
- Links to GitHub, LinkedIn, email and CV.

**Experience**
- Searten founding-team experience.
- Other relevant professional or research experience.
- Technical responsibilities, technologies and outcomes.

**Projects**
- Diminished Reality thesis.
- Dumb phone.
- Spotivinyl.
- ColourQuest.
- Speaker design and other current engineering projects.

**Interests**
- Hiking and travel.
- Climbing.
- Music and percussion.
- Books and reading.
- Creative Club and other creative pursuits.

**Contact**
- Email.
- GitHub.
- LinkedIn.
- CV download.

The light box should provide an alternative, more exploratory way to access much of this information. The navigation exists to ensure that visitors can still find everything conventionally.

## 6. Visual Design and Aesthetic

The overall visual style should be restrained and editorial.

Suggested characteristics:
- Warm off-white or cream background.
- Charcoal or muted grey typography.
- Subtle earthy accents, such as timber brown and muted sage.
- Fine pencil or ink-style outlines.
- Soft shadows and layered visual depth.
- Generous whitespace.
- A combination of understated serif and clean sans-serif typography.

The scene should feel like a personal architectural illustration, with enough detail to reward exploration without becoming visually overwhelming.

Avoid:
- Excessive animations.
- Bright or saturated colours.
- Generic corporate portfolio styling.
- Overly elaborate 3D effects.
- Large amounts of unnecessary text.
- Making every physical detail interactive.

## 7. Technical and Implementation Considerations

The website should be lightweight and relatively simple to develop and maintain.

The preferred initial approach is a conventional web application using HTML, CSS and JavaScript, or React if componentisation is beneficial.

The light box should ideally be implemented as an SVG illustration, with individual objects represented as separate identifiable SVG groups.

Use CSS for:
- Hover effects.
- Subtle transitions.
- Layering and shadows.
- Responsive scaling.

Use JavaScript or React for:
- Object selection and interaction state.
- Information panel content.
- Navigation.
- Expanded project views.
- Audio playback.

Avoid WebGL, Three.js or a real-time 3D environment. The visual depth should be simulated through layered 2D artwork.

### Content and asset separation

Keep the illustration separate from the content and interaction logic.

Ideally:
- SVG files or components define the visual objects and their positions.
- A separate content/data structure defines each object's title, description, images, technologies and links.
- A central interaction mechanism maps SVG object identifiers to their associated content.
- A small configuration file manages frequently updated content such as current projects and album selections.

This should allow content to be updated without editing the underlying illustration.

### Performance and accessibility

- Optimise SVG assets and images.
- Lazy-load nonessential photographs and demonstrations.
- Avoid loading large media assets on initial page load.
- Provide keyboard-accessible object selection.
- Give interactive objects accessible labels.
- Ensure adequate contrast and readable typography.
- Provide alternatives to hover interactions.
- Respect reduced-motion preferences.

## 8. Initial Development Scope

The initial implementation should prioritise the following:

1. Establish the desktop layout, navigation and information panel.
2. Create the static four-layer light box illustration, including all specified objects.
3. Implement object hover and selection behaviour.
4. Populate the default About state and representative object descriptions.
5. Implement the main navigation sections.
6. Add responsive mobile behaviour.
7. Add project-specific media, photographs, external links and optional audio.

The architecture should make it straightforward to add, remove or update objects and content in the future.

## 9. Overall Design Objective

The finished website should feel like looking into a small, carefully illustrated representation of my world.

The desk and surrounding objects provide the visual narrative. The information panel supplies context. The navigation provides conventional access to professional information.

The result should be a memorable personal website that communicates technical capability without feeling like a conventional developer portfolio, and personal interests without feeling like an unrelated collection of hobbies.

The emphasis should be on simplicity, visual coherence, curiosity and thoughtful execution.