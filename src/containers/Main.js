import React, {useEffect, useMemo, useState} from "react";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const projectMedia = {
  smartQueue: {
    live: "https://smart-queue-five.vercel.app",
    github: "https://github.com/Madhu-9391/SmartQueue",
    video: "",
    techStack: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "React",
    "JPA",
    "Hibernate",
    "MySQL",
    "REST API",
    "WebSocket",
    "Razorpay",
    "Python",
    "Machine Learning",
    "Docker"
  ],
    images: ["/smartqueue/cover.png",
    "/smartqueue/dashboard.png",
    "/smartqueue/queue.png",
    "/smartqueue/patient.png",
    "/smartqueue/doctor.png",
    "/smartqueue/payment.png",
    "/smartqueue/admin.png"],
  },
  employeeManagement: {
    live: "https://ems-system-ivory-iota.vercel.app/",
    github: "https://github.com/Madhu-9391/ems-System",
    video: "",
    techStack: [
  "Java",
  "Spring Boot",
  "React",
  "MySQL",
  "REST API","Spring Security",
"JWT",
"JPA / Hibernate",
"Bootstrap",
"Axios"
],
    images: [
    "/ems/cover.png",
    "/ems/employees.png",
    "/ems/departments.png",
    ],
  },
  jobOS: {
    live: "",
    github: "",
    video: "",
    images: [],
  },
  // skillSwap: {
  //   live: "",
  //   github: "",
  //   video: "",
  //   images: [],
  // },
  aiEcommerce: {
    live: "",
    github: "",
    video: "",
    images: [],
  },
  // foodDelivery: {
  //   live: "",
  //   github: "https://github.com/Madhu-9391/Swiggy-clone",
  //   video: "",
  //   images: [require("../assets/images/Swiggy.png")],
  // },
  aiChatbot: {
    live: "",
    github: "https://github.com/Madhu-9391/Chat-bot",
    video: "",
    images: [require("../assets/images/Chatbot.png")],
  },
  yolo: {
    live: "",
    github: "",
    video: "",
    images: [],
  },
};

const projects = [
  {
    featured: true,
    eyebrow: "FLAGSHIP PROJECT",
    name: "SmartQueue",
    type: "AI-powered queue & appointment platform",
    description:
      "A full-stack healthcare/service queue platform with role-based workflows, real-time updates, payment-gated appointments, AI wait-time prediction, and production-oriented deployment architecture.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "WebSocket", "Razorpay", "Python ML", "Docker"],
    highlights: [
      "Real-time queue updates",
      "Payment-gated appointments",
      "AI wait-time prediction",
      "Admin / Doctor / Patient workflows",
    ],
    color: "cyan",
    key: "smartQueue",
    cta: "Explore system",
  },
  {
    eyebrow: "ENTERPRISE SYSTEM",
    name: "Employee Management System",
    type: "Workforce & organizational management platform",
    description:
      "An enterprise-style workforce application focused on employee records, organizational workflows, structured data management, and a centralized operational interface.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
    highlights: ["Employee workflows", "Structured data management", "Enterprise-style UI"],
    color: "blue",
    key: "employeeManagement",
    cta: "View project",
  },
  {
    eyebrow: "RECENT BUILD",
    name: "JobOS",
    type: "AI-assisted job search operating system",
    description:
      "A productivity platform designed to centralize job discovery, applications, tracking, follow-ups, and AI-assisted workflows into one system.",
    stack: ["React", "JavaScript", "AI", "APIs", "Automation"],
    highlights: ["Application tracking", "Workflow automation", "AI-assisted productivity"],
    color: "violet",
    key: "jobOS",
    cta: "View project",
  },
  // {
  //   eyebrow: "SOCIAL / PRODUCT PLATFORM",
  //   name: "Skill Swap Platform",
  //   type: "Peer-to-peer skill exchange product",
  //   description:
  //     "A platform concept focused on helping people discover skills, connect with peers, and turn mutual learning into a structured product experience.",
  //   stack: ["React", "JavaScript", "Web App", "Product UX"],
  //   highlights: ["Skill discovery", "Profile-based matching", "Community workflow"],
  //   color: "pink",
  //   key: "skillSwap",
  //   cta: "View project",
  // },
  {
    eyebrow: "AI / COMMERCE",
    name: "AI E-commerce Platform",
    type: "AI-first fashion commerce experience",
    description:
      "An evolving commerce product concept focused on AI-assisted discovery, personalization, conversion optimization, pricing intelligence, and merchandising.",
    stack: ["React", "AI", "E-commerce", "Personalization", "Analytics"],
    highlights: ["AI discovery", "Personalization concepts", "Conversion-focused UX"],
    color: "orange",
    key: "aiEcommerce",
    cta: "View concept",
  },
  // {
  //   eyebrow: "FULL-STACK PROJECT",
  //   name: "Food Delivery Platform",
  //   type: "Swiggy-inspired ordering experience",
  //   description:
  //     "A full-stack food ordering application covering restaurant discovery, menus, cart flows, order management, authentication, and responsive customer UX.",
  //   stack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
  //   highlights: ["Restaurant discovery", "Cart & orders", "JWT authentication"],
  //   color: "orange",
  //   key: "foodDelivery",
  //   cta: "View project",
  // },
  {
    eyebrow: "AI / API PROJECT",
    name: "Gemini AI Chatbot",
    type: "Context-aware conversational interface",
    description:
      "A responsive AI chat experience integrating Gemini for conversational responses with a clean React interface and real-time interaction flow.",
    stack: ["React", "Gemini API", "JavaScript"],
    highlights: ["Conversational UI", "API integration", "Responsive chat experience"],
    color: "blue",
    key: "aiChatbot",
    cta: "View project",
  },
  {
    eyebrow: "COMPUTER VISION",
    name: "YOLOv8 Object Detection",
    type: "Real-time computer vision experiment",
    description:
      "An object detection project built around YOLOv8, exploring real-time visual analytics and how computer vision can be integrated into application workflows.",
    stack: ["Python", "YOLOv8", "Computer Vision"],
    highlights: ["Object detection", "Real-time inference", "Analytics-ready pipeline"],
    color: "green",
    key: "yolo",
    cta: "View project",
  },
];

const capabilities = [
  ["Backend engineering", "Java, Spring Boot, REST APIs, authentication, validation, business logic"],
  ["Frontend engineering", "React, responsive UI, stateful workflows, dashboards and interaction design"],
  ["Data & persistence", "MySQL, MongoDB, relational modeling, CRUD workflows and data integrity"],
  ["AI / ML integration", "Python, YOLOv8, Gemini APIs, prediction workflows and AI-assisted products"],
  ["Production mindset", "Docker, deployment configuration, environment variables, security and error handling"],
  ["Product thinking", "I focus on solving the workflow, not just making the screen look good"],
];

const stats = [
  ["01", "Flagship system", "SmartQueue"],
  ["02", "Full-stack focus", "Java + React"],
  ["03", "AI layer", "ML + AI APIs"],
  ["04", "Product builds", "8+ projects"],
];

function Icon({name}) {
  const common = {width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round"};
  const paths = {
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2 0 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 3.8 5 5 0 0 0 18.9 1S17.6.6 15 2.4a13.4 13.4 0 0 0-6 0C6.4.6 5.1 1 5.1 1a5 5 0 0 0-.1 2.8A5.4 5.4 0 0 0 3.5 7.5c0 5.4 3.3 7 6.5 7a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-3 .9-3-1.5-4.2-1.8"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/><path d="M8 9v12"/><path d="M8 14a6 6 0 0 1 6-6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>,
    play: <><path d="m9 6 9 6-9 6z"/></>,
    close: <><path d="M6 6l12 12M18 6 6 18"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l-1.41 1.41M17.66 6.34l1.41-1.41"/></>,
    moon: <path d="M21 12.7A8.5 8.5 0 1 1 11.3 3a6.7 6.7 0 0 0 9.7 9.7Z"/>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const Section = ({eyebrow, title, intro, children, id}) => (
  <section className="section" id={id}>
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
    {children}
  </section>
);

function getVideoEmbed(url) {
  if (!url) return "";
  const youtube = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`;
  return url;
}

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const media = projectMedia[project.key] || {};
  const embed = getVideoEmbed(media.video);
  const isDirectVideo =
    !!media.video && /\.(mp4|webm|ogg)(\?.*)?$/i.test(media.video);

  const images = media.images || [];
  const firstImage = images[0];

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} details`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <Icon name="close" />
        </button>

        {/* MAIN MEDIA */}
        <div className={`modal-visual tone-${project.color}`}>
          {embed && !isDirectVideo ? (
            <iframe
              title={`${project.name} demo`}
              src={embed}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isDirectVideo ? (
            <video
              src={media.video}
              controls
              playsInline
              preload="metadata"
            />
          ) : firstImage ? (
            <img
              src={firstImage}
              alt={`${project.name} preview`}
            />
          ) : (
            <div className="placeholder-media">
              <div className="placeholder-window">
                <span />
                <span />
                <span />
                <div className="placeholder-bars">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <strong>Demo media goes here</strong>
              <small>Add video/screenshots in projectMedia.</small>
            </div>
          )}
        </div>

        {/* PROJECT INFORMATION */}
        <div className="modal-content">
          <span className="eyebrow">{project.eyebrow}</span>

          <h2>{project.name}</h2>

          <p className="project-type">
            {project.type}
          </p>

          <p>{project.description}</p>

          <div className="tag-list">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="modal-highlights">
            {project.highlights.map((item) => (
              <div key={item}>
                ✓ <span>{item}</span>
              </div>
            ))}
          </div>

          {/* SCREENSHOT GALLERY */}
          {images.length > 1 && (
            <div className="project-gallery">
              <div className="gallery-heading">
                <span>PROJECT SCREENS</span>
                <small>{images.length} screenshots</small>
              </div>

              <div className="gallery-grid">
                {images.map((image, index) => (
                  <a
                    key={image}
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-item"
                  >
                    <img
                      src={image}
                      alt={`${project.name} screenshot ${index + 1}`}
                      loading="lazy"
                    />

                    <span className="gallery-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            {media.live ? (
              <a
                className="primary-button"
                href={media.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <Icon name="external" />
              </a>
            ) : (
              <span className="disabled-action">
                Add live demo URL
              </span>
            )}

            {media.github ? (
              <a
                className="secondary-button"
                href={media.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <Icon name="github" />
              </a>
            ) : (
              <span className="disabled-action">
                Add GitHub URL
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({project, index, onOpen}) => {
  const media = projectMedia[project.key] || {};
  const preview = media.images && media.images[0];

  return (
    <article
      className={`project-card ${
        project.featured ? "project-featured" : ""
      } tone-${project.color}`}
      style={{"--delay": `${index * 70}ms`}}
    >
      <div className="project-topline">
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="eyebrow">
          {project.eyebrow}
        </span>
      </div>

      {/* FEATURED PROJECT */}
      {project.featured ? (
        <div className="project-visual featured-project-visual">

          {preview ? (
            <>
              <div className="visual-glow" />

              <div className="featured-image-frame">
                <img
                  src={preview}
                  alt={`${project.name} preview`}
                  loading="eager"
                />
              </div>

              <div className="floating-project-chip">
                AI wait-time prediction
              </div>

              <div className="floating-project-chip chip-two">
                Payment gated
              </div>
            </>
          ) : (
            <div className="project-art" aria-hidden="true">
              <div className="art-window">
                <span />
                <span />
                <span />
                <div />
                <div />
                <div />
              </div>
            </div>
          )}

        </div>
      ) : preview ? (
        /* NORMAL PROJECT WITH IMAGE */
        <div className="project-media">
          <img
            src={preview}
            alt={`${project.name} preview`}
            loading="lazy"
          />
        </div>
      ) : (
        /* NORMAL PROJECT WITHOUT IMAGE */
        <div className="project-art" aria-hidden="true">
          <div className="art-window">
            <span />
            <span />
            <span />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}

      <div className="project-body">

        <div className="project-meta-line">
          <span>{project.type}</span>

          {(media.video || preview) && (
            <span className="media-available">
              <Icon name="play" />
              Demo media
            </span>
          )}
        </div>

        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="tag-list">
          {project.stack.map(item => (
            <span key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="highlight-list">
          {project.highlights.map(item => (
            <span key={item}>
              ✓ {item}
            </span>
          ))}
        </div>

        <div className="project-actions">

          <button
            className="text-button"
            onClick={() => onOpen(project)}
          >
            {project.cta}
            <Icon name="arrow" />
          </button>

          {media.live && (
            <a
              href={media.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
              <Icon name="external" />
            </a>
          )}

        </div>
      </div>
    </article>
  );
};

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const ids = ["home", "work", "skills", "about", "contact"];
    const onScroll = () => {
      const point = window.scrollY + 180;
      let current = "home";
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= point) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = useMemo(() => [
    ["home", "Home"],
    ["work", "Work"],
    ["skills", "Capabilities"],
    ["about", "About"],
    ["contact", "Contact"],
  ], []);

  const categories = ["All", "Java", "AI / ML", "React", "Product"];
  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(project => {
      if (filter === "Java") return project.stack.includes("Java") || project.stack.includes("Spring Boot");
      if (filter === "AI / ML") return project.stack.some(item => item.includes("AI") || item.includes("ML") || item === "YOLOv8" || item === "Gemini API" || item === "Python");
      if (filter === "React") return project.stack.includes("React");
      return project.eyebrow.includes("PRODUCT") || project.name.includes("Skill") || project.name.includes("E-commerce") || project.name.includes("JobOS");
    });
  }, [filter]);

  const go = id => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className={isDark ? "site dark-mode" : "site"}>
      <StyleProvider value={{isDark, changeTheme: () => setIsDark(!isDark)}}>
        <header className="nav-shell">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand-mark">M</span>
            <span>Madhuvenu<span className="dot">.</span></span>
          </button>
          <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
            {nav.map(([id, label]) => <button className={active === id ? "active" : ""} key={id} onClick={() => go(id)}>{label}</button>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setIsDark(!isDark)} aria-label="Toggle theme"><Icon name={isDark ? "sun" : "moon"} /></button>
            <a className="nav-cta" href="mailto:puppalamadhuvenu9391@gmail.com">Let's talk <Icon name="arrow" /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <div className="status-pill"><span className="status-dot" /> Open to software engineering opportunities</div>
              <p className="hero-kicker">JAVA FULL STACK DEVELOPER · AI / ML</p>
              <h1>I build <em>real products</em>, not just project demos.</h1>
              <p className="hero-lead">Java + Spring Boot + React developer building production-minded systems with real workflows, payments, real-time updates, AI/ML integration and modern product UX.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => go("work")}>Explore my work <Icon name="arrow" /></button>
                <a className="secondary-button" href="./resume.pdf" target="_blank" rel="noreferrer">View resume <Icon name="external" /></a>
              </div>
              <div className="hero-links">
                <a href="https://github.com/Madhu_0301" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
                <a href="https://www.linkedin.com/in/madhuvenu-vits/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
                <a href="mailto:puppalamadhuvenu9391@gmail.com"><Icon name="mail" /> Email</a>
              </div>
            </div>
            <div className="hero-orbit" aria-hidden="true">
              <div className="orbital orbital-a" /><div className="orbital orbital-b" /><div className="orbital orbital-c" />
              <div className="hero-core"><span>BUILD</span><strong>+</strong><span>SHIP</span></div>
              <div className="floating-chip chip-a">Spring Boot</div>
              <div className="floating-chip chip-b">React</div>
              <div className="floating-chip chip-c">AI / ML</div>
              <div className="floating-chip chip-d">MySQL</div>
            </div>
          </section>

          <section className="signal-strip" aria-label="Core profile signals">
            {stats.map(([n, k, v]) => <div key={n}><span>{n}</span><small>{k}</small><strong>{v}</strong></div>)}
          </section>

          <Section id="work" eyebrow="SELECTED WORK" title="Proof beats promises." intro="I want an interviewer to open these projects, watch the product working, and then ask me why I built them this way.">
            <div className="project-filter" role="tablist" aria-label="Filter projects">
              {categories.map(item => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
            </div>
            <div className="projects-grid">{filteredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} onOpen={setSelectedProject} />)}</div>
          </Section>

          <Section id="skills" eyebrow="ENGINEERING CAPABILITIES" title="Breadth is useful. Ownership is better." intro="My projects deliberately combine backend engineering, frontend product work, AI, real-time systems, payments and deployment concerns.">
            <div className="capability-grid">{capabilities.map(([title, text], i) => <article key={title} className="capability-card"><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="tech-cloud">{['Java', 'Spring Boot', 'React', 'JavaScript', 'TypeScript', 'MySQL', 'MongoDB', 'REST APIs', 'JWT', 'WebSocket', 'Python', 'YOLOv8', 'Gemini API', 'Docker', 'Git', 'GitHub', 'Tailwind CSS'].map(t => <span key={t}>{t}</span>)}</div>
          </Section>

          <Section id="about" eyebrow="ABOUT" title="A fresher with a production mindset." intro="I am completing my Computer Science degree and using my projects to deliberately move beyond tutorial-level development. I want to become the engineer who can take a real workflow from idea to a working product.">
            <div className="about-grid">
              <div className="about-panel"><div className="about-year">2022 — 2026</div><h3>PBR Visvodaya Institute of Technology and Science</h3><p>Bachelor of Science in Computer Science</p></div>
              <div className="about-panel"><div className="about-year">FOCUS</div><h3>Java Full Stack + AI/ML</h3><p>Backend engineering, frontend product development, data, APIs and intelligent application features.</p></div>
              <div className="about-panel wide"><div className="quote-mark">“</div><p className="quote">Don't judge me by how many tutorials I completed. Judge me by whether I can explain the system I built, why I designed it that way, what broke, and how I fixed it.</p></div>
            </div>
          </Section>

          <section className="contact-section" id="contact">
            <div><span className="eyebrow">CONTACT</span><h2>Have a role that needs someone who builds?</h2><p>I am looking for software engineering opportunities where I can contribute quickly, learn from strong engineers and keep shipping real products.</p></div>
            <a className="contact-button" href="mailto:puppalamadhuvenu9391@gmail.com">Email me <Icon name="arrow" /></a>
          </section>
        </main>

        <footer className="site-footer"><span>© {new Date().getFullYear()} Puppala Madhuvenu</span><span>Java Full Stack · React · AI/ML · Production-minded engineering.</span></footer>

        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </StyleProvider>
    </div>
  );
};

export default Main;
