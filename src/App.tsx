import { useState } from "react";

const DATA = {
  name: "Rayat Bin Nasir",
  role: "CSE Undergrad",
  university: "Islamic University of Technology",
  email: "rayat1206@gmail.com",
  github: "Yakiyo",
  about: `I'm a computer science and engineering student passionate about building things that matter. I enjoy working across the stack — from systems-level code to interactive interfaces — and I'm always looking for problems worth solving.`,
  projects: [
    {
      name: "deno_hooks",
      repo: "deno_hooks",
      description:
        "A Husky-inspired, easy-to-use git hooks manager for Deno. Manage and share git hooks across your team without shell scripts.",
      tags: ["TypeScript", "Deno"],
      stars: 31,
      year: "2023",
    },
    {
      name: "dsm",
      repo: "dsm",
      description:
        "Version manager for the Dart SDK. Install, switch, and manage multiple Dart SDK versions with a simple CLI.",
      tags: ["Rust"],
      stars: 10,
      year: "2023",
    },
    {
      name: "welpy",
      repo: "welpy",
      description:
        "Generates dynamic welcome images with user avatars in Carl-bot's welcome messages. Runs as a Python service.",
      tags: ["Python"],
      stars: 4,
      year: "2023",
    },
    {
      name: "tilde",
      repo: "tilde",
      description:
        "A fast and easy-to-use terminal client for tldr — community-maintained simplified man pages for common commands.",
      tags: ["Go"],
      stars: 3,
      year: "2024",
    },
    {
      name: "gon",
      repo: "gon",
      description:
        "Fast and simple version manager for the Go compiler, written in Go. Install and switch between Go versions from the CLI.",
      tags: ["Go"],
      stars: 2,
      year: "2024",
    },
  ],
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-[var(--border)] bg-[var(--background)]">
      <span className="hidden sm:block font-mono text-sm text-[var(--muted-foreground)] tracking-tight">
        {DATA.github}
      </span>
      <div className="flex items-center gap-7 sm:gap-7 gap-4 ml-auto sm:ml-0">
        {["About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150"
          >
            {item}
          </a>
        ))}
        <a
          href={`https://github.com/${DATA.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-4 py-1.5 bg-[var(--foreground)] text-[var(--primary-foreground)] hover:bg-[var(--accent)] transition-colors duration-150"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-8 pb-16 pt-32 border-b border-[var(--border)]">
      <div className="max-w-5xl">
        <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-6">
          {DATA.role} · {DATA.university}
        </p>
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight text-[var(--foreground)] mb-10">
          {DATA.name.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <p className="max-w-md text-base text-[var(--muted-foreground)] leading-relaxed">
            {DATA.about}
          </p>
          <div className="flex gap-4 shrink-0">
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--foreground)] text-[var(--primary-foreground)] text-sm font-semibold hover:bg-[var(--accent)] transition-colors duration-150"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[var(--border)] text-sm font-semibold hover:border-[var(--foreground)] transition-colors duration-150"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-8 border-b border-[var(--border)]">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <p className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest uppercase">
            01 / About
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-xl font-medium leading-relaxed text-[var(--foreground)]">
            I build things on the internet — and sometimes below it.
          </p>
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
            Currently pursuing my undergraduate degree in Computer Science and
            Engineering. I love playing video games, watching TV shows and movies and writing code.
          </p>
          <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
            My interests span systems programming, web development, and more recently, game development.
            I wish to tinker into different fields before deciding what field i want to pursue in depth.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-4">
            {[
              { label: "Focus", value: "Game Dev" },
              { label: "Status", value: "Busy playing games" },
              { label: "Location", value: "Dhaka, Bangladesh" },
              { label: "Available", value: "Open to opportunities" },
            ].map(({ label, value }) => (
              <div key={label} className="border-t border-[var(--border)] pt-3">
                <p className="font-mono text-xs text-[var(--muted-foreground)] mb-1">
                  {label}
                </p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-8 border-b border-[var(--border)]">
      <div className="max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-12">
          <div>
            <p className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest uppercase">
              02 / Projects
            </p>
          </div>
          <div>
            <p className="text-xl font-medium leading-relaxed">
              A selection of things I've built.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {DATA.projects.map((project, i) => (
            <a
              key={project.name}
              href={`https://github.com/${DATA.github}/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 py-8 transition-colors duration-150"
            >
              <div className="sm:w-16 shrink-0">
                <span className="font-mono text-xs text-[var(--muted-foreground)]">
                  {project.year}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3
                    className={`text-lg font-semibold transition-colors duration-150 ${
                      hovered === i
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    ↗
                  </span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="font-mono text-[11px] text-[var(--muted-foreground)] ml-1">
                    ★ {project.stars}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-8">
          <a
            href={`https://github.com/${DATA.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-150"
          >
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <p className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest uppercase">
            03 / Contact
          </p>
        </div>
        <div className="space-y-8">
          <p className="text-xl font-medium leading-relaxed">
            I'm always open to interesting conversations, project collaborations,
            or internship opportunities.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${DATA.email}`}
              className="flex items-center gap-4 group"
            >
              <span className="font-mono text-xs text-[var(--muted-foreground)] w-16 shrink-0">
                Email
              </span>
              <span className="text-base font-medium group-hover:text-[var(--accent)] transition-colors duration-150">
                {DATA.email}
              </span>
            </a>
            <a
              href={`https://github.com/${DATA.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="font-mono text-xs text-[var(--muted-foreground)] w-16 shrink-0">
                GitHub
              </span>
              <span className="text-base font-medium group-hover:text-[var(--accent)] transition-colors duration-150">
                github.com/{DATA.github}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-8 py-6 flex items-center justify-between">
      <span className="font-mono text-xs text-[var(--muted-foreground)]">
        {DATA.name}
      </span>
      <span className="font-mono text-xs text-[var(--muted-foreground)]">
        {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
