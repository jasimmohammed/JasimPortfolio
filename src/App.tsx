import type { CSSProperties } from "react"
import portrait from "../assets/jasim.png"
import agencyPass from "../assets/agencypass.jpg"
import businessAdmin from "../assets/business-admin.jpg"
import subWorker from "../assets/sub-worker.png"
import { useSiteMotion } from "./hooks/useSiteMotion"

const delay = (value: string): CSSProperties => ({ "--d": value }) as CSSProperties

const stats = [
  { count: 1, label: "Years experience", note: "Six months at CCL Academy, then a year at Wayamba Star." },
  { count: 10, label: "Projects completed", note: "Ten pieces shipped, including tools for day-to-day work." },
  { count: 10, label: "Happy clients", note: "Ten clients who came back because the work held up." },
]

const works = [
  {
    index: "01",
    title: "AgencyPass",
    copy: "Passenger details for the employment desk. Each person sits in one list, with a ref, a name, and a company.",
    image: agencyPass,
    alt: "AgencyPass passenger list on a laptop next to an Employment desk card",
  },
  {
    index: "02",
    title: "Business Admin",
    copy: "A management system for the agency. Staff, attendance, salaries, customers, commissions, and cheques live on one dashboard.",
    image: businessAdmin,
    alt: "Business Admin dashboard with employees, salaries, and cheque reminders",
    flip: true,
  },
  {
    index: "03",
    title: "Sub Worker",
    copy: "A mobile app for sub-worker commission. It tracks clients, departed and not departed totals, advances, balances, and upcoming payments.",
    image: subWorker,
    alt: "Sub Worker Commission dashboard on desktop and phones",
  },
]

const skills = [
  ["Figma", 1.15],
  ["UI / UX", 0.92],
  ["Web design", 1],
  ["HTML / CSS", 0.78],
  ["JavaScript", 0.86],
  ["Webflow", 0.7],
  ["Photoshop", 0.74],
  ["Framer", 0.68],
  ["Adobe XD", 0.72],
  ["GSAP", 0.9],
  ["Typography", 0.8],
  ["Motion", 0.76],
  ["SEO", 0.64],
  ["Responsive", 0.84],
] as const

const process = [
  ["01", "Discover", "Understanding goals, audience, and project requirements."],
  ["02", "Define", "Planning, structuring, and creating the right concept."],
  ["03", "Design", "Crafting visual design with a focus on user experience."],
  ["04", "Develop", "Building fast, responsive, and functional websites."],
  ["05", "Deliver", "Testing, optimizing, and perfecting."],
]

const quote = ["Good design", "is not just how", "it looks, but how", "it works."]

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.8 4.7 18.8 5 18.8 5c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.4 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H10z" />
    </svg>
  )
}

export default function App() {
  useSiteMotion()

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <div className="prog" aria-hidden="true" />
      <div className="cur cur-dot" aria-hidden="true" />
      <div className="cur cur-ring" aria-hidden="true" />

      <header className="mast" id="top">
        <div className="top">
          <a className="brand" href="#top">Jasim</a>
          <nav className="nav" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#studio">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="pill" href="mailto:jasimmaxx@gmail.com">Start a project <span className="orb">↗</span></a>
        </div>

        <section className="hero" aria-label="Introduction">
          <div className="glow" aria-hidden="true" />
          <div className="stage">
            <p className="hi">Hi, I am</p>
            <h1 className="giant">
              <span>Mohamed</span> <span>Jasim</span>
            </h1>
            <figure className="portrait">
              <img src={portrait} alt="Mohamed Jasim" />
            </figure>
          </div>
          <div className="hero-foot">
            <div className="pitch">
              <p className="trust"><span className="star" aria-hidden="true">✦</span> Trusted by 10+ clients</p>
              <p className="pitch-title">Pages that look sharp and feel simple to use.</p>
              <div className="hero-actions">
                <a className="pill" href="mailto:jasimmaxx@gmail.com">Start a project <span className="orb">↗</span></a>
                <a className="btn-line" href="#work">View my work</a>
              </div>
            </div>
            <aside className="trust-card">
              <p>10+ clients came back because the work held up.</p>
              <p className="fine"><i className="live" aria-hidden="true" /> Available worldwide · Reply by email</p>
            </aside>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {Array.from({ length: 2 }, (_, copy) => (
              <p key={copy}>
                <span>1+ years experience</span>
                <span>10+ projects</span>
                <span>10+ happy clients</span>
                <span>Available worldwide</span>
              </p>
            ))}
          </div>
        </div>

        <div className="hero-about">
          <p className="eyebrow">About me</p>
          <div>
            <p>I design and build stylish, user-focused web experiences that combine creativity with strategy. Passionate about clean design, smooth interactions, and details that make a difference.</p>
            <div className="hero-actions">
              <a className="pill" href="mailto:jasimmaxx@gmail.com">Start a project <span className="orb">↗</span></a>
              <a className="btn-line" href="#work">View my work</a>
            </div>
          </div>
        </div>
      </header>

      <main>

        <section className="proof" aria-label="Proof">
          <span className="ghost" aria-hidden="true">Proof</span>
          <p className="eyebrow">Snapshot</p>
          <p className="lede">Web designer in Kurunegala, working with people anywhere. Six months at CCL Academy, then a year at Wayamba Star.</p>
          <ul className="stats">
            {stats.map((item, index) => (
              <li key={item.label} className="reveal" style={index ? delay(`${index * 0.08}s`) : undefined}>
                <strong data-count={item.count} data-suffix="+">0+</strong>
                <span>{item.label}</span>
                <p>{item.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="band" id="work">
          <span className="ghost" aria-hidden="true">Work</span>
          <div className="band-inner">
            <header className="sec-head">
              <p className="eyebrow">Selected work</p>
              <h2 className="reveal">Selected work</h2>
              <p className="note reveal" style={delay("0.06s")}>A passenger desk, a business admin system, and a commission app.</p>
            </header>
            {works.map((work, index) => (
              <article
                key={work.title}
                className={work.flip ? "feature feature-alt reveal" : "feature reveal"}
                style={index ? delay("0.08s") : undefined}
              >
                <div className="feature-copy">
                  <span className="idx">{work.index}</span>
                  <h3>{work.title}</h3>
                  <p>{work.copy}</p>
                  <a className="go" href="#contact">Email <i>→</i></a>
                </div>
                <figure className="feature-shot">
                  <img src={work.image} alt={work.alt} />
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className="band band-ink" id="experience">
          <span className="ghost" aria-hidden="true">Path</span>
          <div className="band-inner">
            <header className="sec-head">
              <p className="eyebrow">Experience</p>
              <h2 className="reveal">The path</h2>
              <p className="note reveal" style={delay("0.06s")}>Front-end and UI first, then systems and front-end on the job.</p>
            </header>
            <ol className="steps">
              <span className="tl-fill" aria-hidden="true" />
              <li className="step">
                <span className="node" aria-hidden="true" />
                <div>
                  <span className="when">Internship · 6 months</span>
                  <h3>CCL Academy</h3>
                  <p>Front-end and UI design across the six-month internship.</p>
                </div>
              </li>
              <li className="step step-now">
                <span className="node" aria-hidden="true" />
                <div>
                  <span className="when">Experience · 1 year</span>
                  <h3>Wayamba Star</h3>
                  <p>System administration and front-end development for a full year.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="studio" id="studio" aria-label="Skills and process">
          <span className="ghost" aria-hidden="true">Skills</span>
          <p className="eyebrow">Skills</p>
          <p className="skills-big reveal">
            {skills.map(([name, scale], index) => (
              <span key={name} style={{ "--s": scale, "--i": index } as CSSProperties}>{name}</span>
            ))}
          </p>
          <div className="studio-grid">
            <div className="process reveal" style={delay("0.08s")}>
              <p className="eyebrow">Work process</p>
              <ol className="flow">
                <span className="flow-fill" aria-hidden="true" />
                {process.map(([num, title, copy]) => (
                  <li key={num} className="flow-step">
                    <span className="num">{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="quote-panel reveal" style={delay("0.16s")}>
              <span className="qmark" aria-hidden="true">“</span>
              <blockquote>
                {quote.map((line, index) => (
                  <span key={line} style={{ "--i": index } as CSSProperties}>{line}</span>
                ))}
              </blockquote>
              <p className="sign">Jasim</p>
              <a className="together" href="#contact">Let's create something great together</a>
            </aside>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="threshold">A new site, a redesign, or a rough idea.</p>
          <div className="contact-inner">
            <p className="eyebrow">Contact</p>
            <h2 className="reveal">Say hello.<br /><span className="out">I'll answer.</span></h2>
            <p className="note reveal" style={delay("0.08s")}>Tell me the goal, the deadline, and how the page should feel. I reply by email, and I'm easy to find on GitHub and LinkedIn.</p>
            <div className="socials">
              <a className="social reveal" style={delay("0.1s")} href="mailto:jasimmaxx@gmail.com" aria-label="Email jasimmaxx@gmail.com">
                <span className="mark" aria-hidden="true"><MailIcon /></span>
              </a>
              <a className="social reveal" style={delay("0.18s")} href="https://github.com/jasimmohammed" target="_blank" rel="noreferrer" aria-label="GitHub jasimmohammed">
                <span className="mark" aria-hidden="true"><GitHubIcon /></span>
              </a>
              <a className="social reveal" style={delay("0.26s")} href="https://www.linkedin.com/in/mohamed-jasim-5971572b5" target="_blank" rel="noreferrer" aria-label="LinkedIn Mohamed Jasim">
                <span className="mark" aria-hidden="true"><LinkedInIcon /></span>
              </a>
            </div>
            <p className="contact-meta reveal" style={delay("0.32s")}>Kurunegala, Sri Lanka · Available worldwide</p>
          </div>
          <footer className="foot">
            <span>© 2026 Mohamed Jasim</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </>
  )
}
