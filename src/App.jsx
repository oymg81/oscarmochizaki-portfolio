export default function OscarMochizakiPortfolio() {
  const projects = [
    {
      title: "BodaGift",
      desc: "An event gifting platform with elegant event pages, personalized links, and a refined user experience for modern couples.",
      stack: "React • Supabase • UI/UX",
      href: "#",
    },
    {
      title: "MyPobox",
      desc: "A logistics and PO Box workflow platform connecting registration, shipments, payments, and automated notifications.",
      stack: "WordPress • PHP • APIs • Stripe",
      href: "#",
    },
    {
      title: "Job Tracker",
      desc: "A full-stack CRUD platform to manage companies, jobs, contacts, and applications with dashboard analytics.",
      stack: "Flask • MySQL • Chart.js",
      href: "https://github.com/oymg81/job-tracker-app",
    },
  ];

  const skills = [
    "Java",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "Flask",
    "Supabase",
    "Git/GitHub",
  ];

  return (
    <div className="min-h-screen bg-[#070D1A] text-white overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#0047AB]/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#3D7BFF]/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1E5EFF]/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-10">
        <div className="text-2xl font-bold tracking-tight">Oscar Mochizaki</div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-[#0F1B35] px-4 py-2 text-sm text-white shadow-lg shadow-[#0047AB]/20 transition hover:bg-[#132348]"
        >
          Let’s Talk
        </a>
      </header>

      <main className="relative z-10 mx-auto grid max-w-[1600px] w-full gap-8 px-6 pb-16 pt-4 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl 
lg:sticky lg:top-6 lg:self-start">
          <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#143168] to-[#091225] p-5 shadow-2xl shadow-[#0047AB]/20">
            <div className="mb-2 text-sm text-slate-300">Software Engineer</div>
            <h2 className="text-2xl font-bold">Oscar Mochizaki</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Building clean, scalable software experiences with strong backend
              logic and modern frontend design.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <a
              href="#overview"
              className="block rounded-full bg-[#4B84FF] px-4 py-3 font-medium text-white"
            >
              Overview
            </a>
            <a
              href="#about"
              className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Contact
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 bg-[#0D1529] p-4">
              <div className="text-2xl font-bold">3+</div>
              <div className="mt-1 text-xs text-slate-400">Core projects</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0D1529] p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="mt-1 text-xs text-slate-400">Design + logic</div>
            </div>
          </div>
        </aside>

        <section className="space-y-8">
          <section
            id="overview"
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#091225] via-[#0A1630] to-[#0E1530] px-8 py-12 shadow-2xl shadow-black/20"
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-[#4B84FF]/30 bg-[#4B84FF]/10 px-4 py-1 text-sm text-[#A9C4FF]">
              Hi, I’m Oscar Mochizaki
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Full-Stack <span className="text-[#7FAAFF]">Software Engineer</span>
              <br />
              Building Real-World{" "}
              <span className="text-[#4B84FF]">Applications</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I build modern web applications, internal tools, and scalable
              software systems with a strong focus on clean architecture,
              usability, and real-world value.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#4B84FF] px-6 py-3 font-medium text-white shadow-lg shadow-[#0047AB]/30 transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                About Me
              </a>
            </div>
          </section>

          {/* ABOUT + HIGHLIGHTS */}
<section
  id="about"
  className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] items-stretch"
>
  <div className="min-h-[290px] h-full rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">
      About Me
    </div>

    <h2 className="text-3xl font-bold">
      Software Engineer building scalable digital products
    </h2>

    <p className="mt-5 leading-8 text-slate-300">
      I’m Oscar Mochizaki, a Software Engineer focused on building
      practical digital products that combine polished frontend
      experiences, strong backend logic, and clean system design.
    </p>

    <p className="mt-4 leading-8 text-slate-300">
      My work includes full-stack applications, dashboards, logistics
      workflows, portfolio-grade websites, and scalable integrations
      for real business use cases.
    </p>
  </div>

  <div className="min-h-[290px] h-full rounded-[28px] border border-white/10 bg-[#0D1529] p-8 flex flex-col justify-center">
    <div className="mb-6 text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">
      Highlights
    </div>

    <div className="space-y-5">
      {[
        { label: "Frontend Design", value: 90 },
        { label: "Backend Logic", value: 88 },
        { label: "Problem Solving", value: 92 },
      ].map((item) => (
        <div key={item.label}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-300">{item.label}</span>
            <span className="text-slate-400">{item.value}%</span>
          </div>

          <div className="h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-[#4B84FF]"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PROJECTS + TECH STACK */}
<div className="grid gap-8 xl:grid-cols-[2fr_1fr] items-stretch">
  <section
    id="projects"
    className="min-h-[380px] h-full rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
  >
    <div className="text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">
      Projects
    </div>

    <h2 className="mt-2 text-3xl font-bold">Selected Work</h2>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 items-stretch">
      {[
        {
          title: "BodaGift",
          desc: "An event gifting platform with elegant event pages, personalized links, and a refined user experience for modern couples.",
          tech: "React • Supabase • UI/UX",
        },
        {
          title: "MyPobox",
          desc: "A logistics and PO Box workflow platform connecting registration, shipments, payments, and automated notifications.",
          tech: "WordPress • PHP • APIs • Stripe",
        },
        {
          title: "Job Tracker",
          desc: "A full-stack CRUD platform to manage companies, jobs, contacts, and applications with dashboard analytics.",
          tech: "Flask • MySQL • Chart.js",
        },
      ].map((project) => (
        <div
          key={project.title}
          className="h-full rounded-[24px] border border-white/10 bg-[#0D1529] p-6 transition hover:-translate-y-1 hover:border-[#4B84FF]/40"
        >
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            {project.desc}
          </p>

          <div className="mt-4 text-sm text-[#8CB2FF]">
            {project.tech}
          </div>
        </div>
      ))}
    </div>
  </section>

  <section
    id="skills"
    className="min-h-[380px] h-full rounded-[28px] border border-white/10 bg-[#0D1529] p-8 flex flex-col"
  >
    <div className="text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">
      Tech Stack
    </div>

    <h2 className="mt-2 text-3xl font-bold">Technical Stack</h2>
    <p className="mt-6 text-sm leading-7 text-slate-300">
  I work across frontend, backend, databases, and developer tools to build clean and scalable software systems.
</p>
    <div className="mt-6 flex flex-wrap gap-3 content-start">
      {[
        "Java",
        "Python",
        "React",
        "Node.js",
        "SQL",
        "Flask",
        "Supabase",
        "Git/GitHub",
      ].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-[#0F1A34] px-4 py-2 text-sm text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </section>
</div>


          <footer
            id="contact"
            className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#0B1428] to-[#11224A] p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">
                  Contact
                </div>
                <h2 className="text-3xl font-bold">Let’s build something real</h2>
              </div>

              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href="mailto:oymg81@gmail.com"
                  className="rounded-full bg-[#4B84FF] px-6 py-3 font-medium text-white shadow-lg shadow-[#0047AB]/30 transition hover:scale-[1.02]"
                >
                  Email
                </a>
                <a
                  href="https://github.com/oymg81"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/oscar-mochizaki20"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}