import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "BodaGift",
    description:
      "Event gifting platform with personalized links, modern UI, and scalable architecture for real users.",
    stack: ["React", "Supabase", "UI/UX"],
    href: "#",
  },
  {
    name: "MyPobox",
    description:
      "Logistics workflow platform integrating customer registration, shipments, payments, and automated notifications.",
    stack: ["WordPress", "PHP", "APIs", "Stripe"],
    href: "#",
  },
  {
    name: "Job Tracker",
    description:
      "Full-stack application to manage companies, jobs, contacts, and applications with dashboard insights.",
    stack: ["Flask", "MySQL", "Chart.js"],
    href: "https://github.com/oymg81/job-tracker-app",
  },
];

const techStack = [
  "Java",
  "Python",
  "React",
  "Node.js",
  "SQL",
  "Flask",
  "Supabase",
  "Git/GitHub",
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const sidebarItems = [
  { label: "Overview", href: "#top", active: true },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Pill({ children }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-[#0f214d] px-4 py-2 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-300/80">
      {children}
    </p>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(19,28,52,0.96),rgba(8,16,33,0.96))] shadow-[0_20px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span className="text-slate-400">{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/10">
        <div
          className="h-2.5 rounded-full bg-[linear-gradient(90deg,#4f83ff,#5b8cff)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#020817] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 82% 18%, rgba(41,98,255,0.14), transparent 22%), radial-gradient(circle at 70% 70%, rgba(59,130,246,0.12), transparent 24%), linear-gradient(180deg, #020817 0%, #030b1e 100%)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10">
        <header className="mb-6 flex items-center justify-between gap-4">
          <a href="#top" className="text-2xl font-semibold tracking-tight text-white">
            Oscar M.
          </a>

          <nav className="hidden items-center gap-10 text-lg text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-blue-400/20 bg-[linear-gradient(180deg,rgba(22,38,84,0.95),rgba(10,25,59,0.95))] px-6 py-3 text-lg text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:border-blue-300/40 hover:bg-[#173372]"
          >
            Let’s Talk
          </a>
        </header>

        <div className="grid gap-8 lg:grid-cols-[310px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <Card className="p-6">
              <Card className="mb-6 p-6">
                <p className="mb-4 text-xl text-slate-300">Software Engineer</p>
                <h2 className="mb-5 text-[2rem] font-semibold leading-tight">
                  Oscar Mochizaki
                </h2>
                <p className="text-lg leading-9 text-slate-300">
                  Building clean, scalable software experiences with strong backend
                  logic and modern frontend design.
                </p>
              </Card>

              <div className="space-y-3">
                {sidebarItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block rounded-full px-5 py-4 text-lg transition ${
                      item.active
                        ? "bg-[linear-gradient(90deg,#4e81f5,#5687ea)] text-white shadow-[0_14px_30px_rgba(77,129,245,0.25)]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <Card className="p-5 text-center">
                  <p className="text-4xl font-semibold">3+</p>
                  <p className="mt-2 text-sm text-slate-400">Featured projects</p>
                </Card>
                <Card className="p-5 text-center">
                  <p className="text-4xl font-semibold">100%</p>
                  <p className="mt-2 text-sm text-slate-400">Built with intent</p>
                </Card>
              </div>
            </Card>
          </aside>

          <main className="space-y-8">
            <Card className="overflow-hidden p-8 md:p-10 lg:p-12">
              <div className="mb-8 inline-flex rounded-full border border-blue-400/30 bg-[#0f214d] px-5 py-2 text-lg text-blue-100">
                Hi, I’m Oscar Mochizaki
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-[5.3rem]">
                Full-Stack <span className="text-[#77a2ff]">Software</span> Engineer
                <br className="hidden xl:block" /> Building Real-World{" "}
                <span className="text-[#4f83ff]">Applications</span>
              </h1>

              <p className="mt-8 max-w-4xl text-xl leading-10 text-slate-300 md:text-[1.75rem] md:leading-[3.2rem]">
                I design and build thoughtful digital products across web apps,
                internal tools, and scalable software systems. My focus is turning
                real ideas into structured, useful, and modern experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#4e81f5,#5687ea)] px-7 py-4 text-xl text-white shadow-[0_14px_30px_rgba(77,129,245,0.28)] transition hover:translate-y-[-1px]"
                >
                  View Projects
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-xl text-white transition hover:bg-white/10"
                >
                  About Me
                </a>
              </div>
            </Card>

            <div className="grid gap-8 xl:grid-cols-[1.45fr_0.85fr]">
              <section id="about">
                <Card className="h-full p-8 md:p-10">
                  <SectionLabel>About Me</SectionLabel>
                  <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                    Software Engineer focused on clean execution
                  </h2>
                  <div className="mt-8 space-y-6 text-lg leading-9 text-slate-300 md:text-[1.45rem] md:leading-[3rem]">
                    <p>
                      Software Engineer focused on building practical, scalable
                      applications. I develop full-stack systems that combine clean
                      frontend design with strong backend logic and real-world usability.
                    </p>
                    <p>
                      My work includes portfolio-grade products, CRUD platforms,
                      logistics flows, integrations, and modern UI systems designed to
                      feel clear, scalable, and meaningful.
                    </p>
                  </div>
                </Card>
              </section>

              <section>
                <Card className="h-full p-8 md:p-10">
                  <SectionLabel>Highlights</SectionLabel>
                  <div className="mt-10 space-y-8">
                    <ProgressBar label="Frontend Design" value={90} />
                    <ProgressBar label="Backend Logic" value={88} />
                    <ProgressBar label="Problem Solving" value={92} />
                  </div>
                </Card>
              </section>
            </div>

            <section id="projects">
              <Card className="p-8 md:p-10">
                <SectionLabel>Projects</SectionLabel>
                <h2 className="text-4xl font-semibold md:text-5xl">Selected Work</h2>

                <div className="mt-10 grid gap-6 xl:grid-cols-3">
                  {projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      className="group rounded-[1.8rem] border border-blue-300/10 bg-[linear-gradient(180deg,rgba(8,20,49,0.88),rgba(5,17,40,0.95))] p-7 transition hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_20px_50px_rgba(46,106,255,0.14)]"
                    >
                      <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                      <p className="mt-5 text-lg leading-9 text-slate-300">
                        {project.description}
                      </p>
                      <p className="mt-7 text-base text-[#8fb0ff]">
                        {project.stack.join(" • ")}
                      </p>
                    </a>
                  ))}
                </div>
              </Card>
            </section>

            <section id="skills">
              <Card className="p-8 md:p-10">
                <SectionLabel>Tech Stack</SectionLabel>
                <h2 className="text-4xl font-semibold md:text-5xl">Technical Stack</h2>
                <div className="mt-10 flex flex-wrap gap-4">
                  {techStack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Card>
            </section>

            <section id="contact">
              <Card className="bg-[linear-gradient(135deg,rgba(14,28,65,0.98),rgba(20,43,96,0.95))] p-8 md:p-10">
                <SectionLabel>Contact</SectionLabel>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                  Let’s build something real
                </h2>
                <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300 md:text-[1.35rem] md:leading-[2.8rem]">
                  Available for software engineering opportunities, collaborations,
                  and product-focused projects that need thoughtful engineering and
                  clean design.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
  href="mailto:oymg81@gmail.com"
  className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#4e81f5,#5687ea)] px-7 py-4 text-lg text-white shadow-[0_14px_30px_rgba(77,129,245,0.28)] transition hover:translate-y-[-1px]"
>
  Email Me
</a>
                 <a
  href="https://github.com/oymg81"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-lg text-white transition hover:bg-white/10"
>
  GitHub
</a>

                  <a
                    href="https://www.linkedin.com/in/oscar-mochizaki20"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-lg text-white transition hover:bg-white/10"
                  >
                   
                    LinkedIn
                  </a>
                </div>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}