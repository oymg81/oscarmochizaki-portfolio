import { useState, useEffect } from 'react';
import Yo1 from './assets/Yo1.png';
import { translations } from './translations';
import { supabase } from "./supabaseClient";

export default function OscarMochizakiPortfolio() {
  const [lang, setLang] = useState('en');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showBubble, setShowBubble] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isChatOpen) setShowBubble(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isChatOpen) setShowBubble(false);
  }, [isChatOpen]);

  useEffect(() => {
    const fetchLikes = async () => {
      const { count, error } = await supabase
        .from("portfolio_likes")
        .select("*", { count: "exact", head: true });

      if (!error) {
        setLikes(count || 0);
      } else {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();

    const alreadyLiked = localStorage.getItem("portfolio_liked");

    if (alreadyLiked) {
      setLiked(true);
    }
  }, []);

  const handleLike = async () => {
    if (liked) return;

    const { error } = await supabase
      .from("portfolio_likes")
      .insert({});

    if (!error) {
      setLikes((prev) => prev + 1);
      setLiked(true);
      localStorage.setItem("portfolio_liked", "true");
    } else {
      console.error("Error adding like:", error);
    }
  };

  const t = translations[lang];
  const closeModal = () => setModalContent(null);
  const whatsappLink = "https://wa.me/message/BOB3EMBT3RKRO1";

  return (
    <div className="min-h-screen bg-[#070D1A] text-white overflow-x-hidden relative font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#0047AB]/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#3D7BFF]/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#1E5EFF]/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-10">
        <div className="text-2xl font-bold tracking-tight">Oscar Mochizaki</div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">{t.nav.about}</a>
          <a href="#public-projects" className="transition hover:text-white">{t.nav.projects}</a>
          <a href="#solutions" className="transition hover:text-white">{t.nav.solutions}</a>
          <a href="#contact" className="transition hover:text-white">{t.nav.contact}</a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10 ml-4">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs transition ${lang === 'en' ? 'bg-[#4B84FF] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              EN 🇺🇸
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full text-xs transition ${lang === 'es' ? 'bg-[#4B84FF] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              ES 🇪🇸
            </button>
          </div>
        </nav>

        {/* Mobile Language Switcher (Visible only on small screens) */}
        <div className="flex md:hidden items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
          <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-full text-[10px] ${lang === 'en' ? 'bg-[#4B84FF] text-white font-bold' : 'text-slate-400'}`}>EN</button>
          <button onClick={() => setLang('es')} className={`px-2 py-1 rounded-full text-[10px] ${lang === 'es' ? 'bg-[#4B84FF] text-white font-bold' : 'text-slate-400'}`}>ES</button>
        </div>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden md:inline-block rounded-full border border-white/10 bg-[#0F1B35] px-4 py-2 text-sm text-white shadow-lg shadow-[#0047AB]/20 transition hover:bg-[#132348] ml-4">
          {t.nav.talk}
        </a>
      </header>

      {/* Main Layout */}
      <main className="relative z-10 mx-auto grid max-w-[1600px] w-full gap-8 px-6 pb-16 pt-4 lg:grid-cols-[280px_1fr] lg:px-10">

        {/* Sidebar */}
        <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:sticky lg:top-6 lg:self-start">
          <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#143168] to-[#091225] p-5 shadow-2xl shadow-[#0047AB]/20 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-[3px] border-[#4B84FF] shadow-lg shadow-[#0047AB]/40 overflow-hidden bg-[#0A1630]">
              <img src={Yo1} alt="Oscar Mochizaki" className="w-full h-full object-cover object-top" />
            </div>
            <div className="mb-2 text-xs font-semibold text-[#8CB2FF]">{t.sidebar.title}</div>
            <h2 className="text-xl font-bold">{t.sidebar.name}</h2>
            <p className="mt-3 text-xs leading-5 text-slate-300">
              {t.sidebar.desc}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <a href="#overview" className="block rounded-full bg-[#4B84FF] px-4 py-3 font-medium text-white transition hover:bg-[#3A6CE6]">{t.sidebar.overview}</a>
            <a href="#public-projects" className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">{t.sidebar.publicProjects}</a>
            <a href="#solutions" className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">{t.nav.solutions}</a>
            <a href="#projects" className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">{t.nav.projects}</a>
            <a href="#about" className="block rounded-full px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">{t.sidebar.aboutMe}</a>
          </div>
        </aside>

        {/* Content */}
        <section className="space-y-6">

          {/* 1. Hero Section */}
          <section id="overview" className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#091225] via-[#0A1630] to-[#0E1530] px-8 py-8 shadow-2xl shadow-black/20 flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#4B84FF]/30 bg-[#4B84FF]/10 px-4 py-1 text-sm text-[#A9C4FF]">
                {t.hero.tag}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl text-white">
                {t.hero.title1}<span className="text-[#7FAAFF]">{t.hero.title2}</span>
                <br />
                {t.hero.title3}<span className="text-[#4B84FF]">{t.hero.title4}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {t.hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#solutions" className="rounded-full bg-[#4B84FF] px-6 py-3 font-medium text-white shadow-lg shadow-[#0047AB]/30 transition hover:scale-[1.02] hover:bg-[#3A6CE6]">
                  {t.hero.viewSolutions}
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                  {t.hero.workWithMe}
                </a>
                <button
                  onClick={handleLike}
                  disabled={liked}
                  className={`rounded-full px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2 ${liked
                    ? "bg-pink-500/20 text-pink-300 border border-pink-400/30 cursor-not-allowed"
                    : "bg-white/5 text-white border border-white/15 hover:bg-pink-500/20 hover:border-pink-400/40 hover:scale-105"
                    }`}
                >
                  ❤️ {liked ? "Liked" : "Like"} · {likes}
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-[28px] border-[2px] border-[#4B84FF]/30 shadow-2xl shadow-[#0047AB]/40 overflow-hidden bg-[#0A1630] backdrop-blur-md">
              <img src={Yo1} alt="Oscar Mochizaki" className="w-full h-full object-cover object-top hover:scale-105 transition duration-500" />
            </div>
          </section>

          {/* 2. Public Engineering Projects */}
          <section id="public-projects" className="rounded-[28px] border border-white/10 bg-[#0D1529] p-8 lg:p-10 flex flex-col">
            <div className="text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">{t.publicProjects.tag}</div>
            <h2 className="mt-2 text-3xl font-bold">{t.publicProjects.title}</h2>
            <p className="mt-2 text-slate-300">{t.publicProjects.desc}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-start">
              {[
                {
                  title: "Logisti-K",
                  desc: t.publicProjects.logistikDesc,
                  tech: "Next.js • TailwindCSS • Framer Motion • next-intl • Vercel",
                  github: "https://github.com/oymg81/cargoflow-platform",
                  demo: "https://youtu.be/nJ9KgZaZEW0"
                },
                {
                  title: "ServeFlow",
                  desc: t.publicProjects.serveflowDesc,
                  tech: "PostgreSQL • Express • React • Node.js • JWT",
                  github: "https://github.com/oymg81/serveflow",
                  demo: "https://youtu.be/Bvz3lIjeNAc"
                },
                {
                  title: "Clean & Care PRO",
                  desc: t.publicProjects.cleanCareDesc,
                  tech: "React • Vite • TailwindCSS • Framer Motion",
                  github: "https://github.com/oymg81/karina-cleaning-website",
                  demo: "https://youtu.be/4sdDUihZbvM"
                }
              ].map((proj) => (
                <div key={proj.title} className="rounded-[24px] border border-white/10 bg-[#0F1A34] p-6 transition hover:-translate-y-1 hover:border-[#4B84FF]/40 flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold">{proj.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{proj.desc}</p>
                    <div className="mt-4 text-xs font-semibold text-[#8CB2FF]">{proj.tech}</div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center rounded-full bg-[#4B84FF] py-2 text-sm text-white transition hover:bg-[#3A6CE6]"
                      >
                        Watch Demo
                      </a>
                    )}

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center rounded-full border border-[#4B84FF]/30 bg-[#4B84FF]/10 py-2 text-sm text-[#A9C4FF] transition hover:bg-[#4B84FF]/20"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Solutions I Build */}
          <section id="solutions" className="rounded-[28px] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">{t.solutions.tag}</div>
            <h2 className="mt-2 text-3xl font-bold">{t.solutions.title}</h2>
            <p className="mt-2 text-slate-300 mb-8">{t.solutions.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: t.solutions.restaurant, icon: "🍽️" },
                { title: t.solutions.booking, icon: "📅" },
                { title: t.solutions.church, icon: "⛪" },
                { title: t.solutions.dashboard, icon: "📊" },
                { title: t.solutions.ecommerce, icon: "🛒" },
                { title: t.solutions.automation, icon: "⚙️" },
                { title: t.solutions.custom, icon: "💻" }
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#0D1529] border border-white/5 transition hover:border-[#4B84FF]/30 hover:-translate-y-1 hover:bg-[#131d38]">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Projects & Business Solutions */}
          <section id="projects" className="rounded-[28px] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">{t.projects.tag}</div>
            <h2 className="mt-2 text-3xl font-bold">{t.projects.title}</h2>
            <p className="mt-2 text-slate-300">{t.projects.desc}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 items-start">
              {/* BodaGift */}
              <div className="rounded-[24px] border border-white/10 bg-[#0D1529] p-7 transition hover:-translate-y-1 hover:border-[#4B84FF]/40 flex flex-col">
                <div>
                  <div className="text-xs uppercase font-semibold text-[#8CB2FF] mb-2">{t.projects.productConcept}</div>
                  <h3 className="text-xl font-bold">BodaGift</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {t.projects.bodaGiftDesc}
                  </p>
                  <div className="mt-4 text-sm text-[#8CB2FF]">React • Supabase • UI/UX • {t.projects.productConcept}</div>
                </div>
                <button
                  onClick={() => setModalContent({ title: 'BodaGift', desc: t.projects.bodaModalDesc, type: t.projects.productConcept })}
                  className="mt-6 w-full rounded-full border border-white/10 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  {t.projects.viewConcept}
                </button>
              </div>

              {/* MyPobox */}
              <div className="rounded-[24px] border border-white/10 bg-[#0D1529] p-7 transition hover:-translate-y-1 hover:border-[#4B84FF]/40 flex flex-col">
                <div>
                  <div className="text-xs uppercase font-semibold text-[#4B84FF] mb-2">{t.projects.privateSystem}</div>
                  <h3 className="text-xl font-bold">MyPobox</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {t.projects.mypoboxDesc}
                  </p>
                  <div className="mt-4 text-sm text-[#8CB2FF]">WordPress • PHP • APIs • Stripe • Business System</div>
                </div>
                <button
                  onClick={() => setModalContent({ title: 'MyPobox', desc: t.projects.mypoboxModalDesc, type: t.projects.privateSystem })}
                  className="mt-6 w-full rounded-full border border-white/10 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  {t.projects.viewSystem}
                </button>
              </div>
            </div>
          </section>

          {/* 5. CodingSoft Funnel */}
          <section className="rounded-[32px] border border-[#4B84FF]/20 bg-gradient-to-r from-[#0D1830] to-[#142A5E] py-8 px-6 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#4B84FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#7FAAFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <h2 className="text-3xl md:text-4xl font-bold relative z-10 text-white mb-4">{t.codingsoft.title}</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6 relative z-10 leading-relaxed">
              {t.codingsoft.desc1}<span className="font-semibold text-white">{t.codingsoft.desc2}</span>{t.codingsoft.desc3}
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a href="https://codingsoft.tech" target="_blank" rel="noreferrer" className="rounded-full bg-white text-[#0B1428] px-8 py-3 font-bold shadow-lg transition hover:scale-[1.05]">
                {t.codingsoft.explore}
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] text-white px-8 py-3 font-bold shadow-lg shadow-[#25D366]/20 transition hover:scale-[1.05] hover:bg-[#20b858]">
                {t.codingsoft.chat}
              </a>
            </div>
          </section>

          {/* 6. About Me / Founder Section */}
          <section id="about" className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-start">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl">
              <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">{t.about.tag}</div>
              <h2 className="text-3xl font-bold">{t.about.title}</h2>
              <p className="mt-5 leading-8 text-slate-300">{t.about.desc1}</p>
              <p className="mt-4 leading-8 text-slate-300">{t.about.desc2}</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0D1529] p-8 lg:p-10 flex flex-col relative overflow-hidden">
              <div className="mb-6 text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">{t.about.coreTag}</div>

              <div className="flex flex-col gap-4 relative z-10 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-[#4B84FF] mt-0.5">✦</span>
                  <div>
                    <strong className="text-white block mb-1">{t.about.sysArch}</strong>
                    {t.about.sysArchDesc}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4B84FF] mt-0.5">✦</span>
                  <div>
                    <strong className="text-white block mb-1">{t.about.busAuto}</strong>
                    {t.about.busAutoDesc}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#4B84FF] mt-0.5">✦</span>
                  <div>
                    <strong className="text-white block mb-1">{t.about.prodUX}</strong>
                    {t.about.prodUXDesc}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none bg-gradient-to-tl from-[#4B84FF] to-transparent rounded-tl-full blur-xl"></div>
            </div>
          </section>

          {/* 7. Contact */}
          <footer id="contact" className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#0B1428] to-[#11224A] p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 text-sm uppercase tracking-[0.2em] text-[#8CB2FF]">{t.contact.tag}</div>
                <h2 className="text-3xl font-bold">{t.contact.title}</h2>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="mailto:oymg81@gmail.com" className="rounded-full bg-[#4B84FF] px-6 py-3 font-medium text-white shadow-lg shadow-[#0047AB]/30 transition hover:scale-[1.02] hover:bg-[#3A6CE6]">{t.contact.email}</a>
                <a href="https://github.com/oymg81" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">{t.contact.github}</a>
                <a href="https://www.linkedin.com/in/oscar-mochizaki20" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">{t.contact.linkedin}</a>
              </div>
            </div>
          </footer>

        </section>
      </main>

      {/* Modals */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0D1529] p-8 shadow-2xl relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">&times;</button>
            <div className="text-xs uppercase font-semibold text-[#8CB2FF] mb-2">{modalContent.type}</div>
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">{modalContent.desc}</p>
            <div className="h-40 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 italic text-sm mb-6">
              [ Case Study / Visual Mockup Area ]
            </div>
            <button onClick={closeModal} className="w-full rounded-full bg-[#4B84FF] py-3 text-white font-medium hover:bg-[#3A6CE6] transition">{t.projects.close}</button>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">

        {/* Welcome Bubble */}
        {showBubble && !isChatOpen && (
          <div className="relative mb-2 mr-2 w-64 rounded-2xl border border-[#4B84FF]/30 bg-[#0D1529]/95 backdrop-blur-xl p-4 shadow-2xl shadow-[#0047AB]/20 animate-fade-in-up">
            <button onClick={() => setShowBubble(false)} className="absolute top-2 right-2 text-slate-400 hover:text-white">&times;</button>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full border border-[#4B84FF] overflow-hidden bg-[#0A1630] shrink-0 mt-0.5">
                <img src={Yo1} alt="Oscar" className="w-full h-full object-cover object-top" />
              </div>
              <p className="text-sm text-slate-200 leading-relaxed pr-2">
                {t.bubble.msg}
              </p>
            </div>
          </div>
        )}

        {/* Chatbot Interface */}
        {isChatOpen && (
          <div className="w-[320px] rounded-2xl border border-white/10 bg-[#0D1529]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col mb-2 transform transition-all duration-300 ease-out origin-bottom-right">
            <div className="bg-gradient-to-r from-[#143168] to-[#0A1630] p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#4B84FF] overflow-hidden bg-[#0A1630]">
                  <img src={Yo1} alt="Avatar" className="w-full h-full object-cover object-top" />
                </div>
                <div className="font-semibold text-sm">{t.chat.aiName}</div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-slate-300 hover:text-white">&times;</button>
            </div>

            <div className="p-4 max-h-[400px] overflow-y-auto flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-[#4B84FF] overflow-hidden bg-[#0A1630] shrink-0 mt-1">
                  <img src={Yo1} alt="Avatar" className="w-full h-full object-cover object-top" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-200 leading-relaxed relative flex-1">
                  <p>{t.chat.greet}</p>
                  <p className="mt-2 whitespace-pre-wrap">{t.chat.desc1}<strong>{t.chat.desc2}</strong>{t.chat.desc3}</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-200 font-medium self-end mr-8 ml-11">
                {t.chat.ask}
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {[
                  t.chat.opt1,
                  t.chat.opt2,
                  t.chat.opt3,
                  t.chat.opt4,
                  t.chat.opt5
                ].map((opt) => (
                  <a key={opt} href={whatsappLink} target="_blank" rel="noreferrer" className="bg-[#4B84FF]/10 border border-[#4B84FF]/30 rounded-xl p-2 text-xs text-[#A9C4FF] hover:bg-[#4B84FF]/20 transition text-left cursor-pointer block">
                    {opt}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 shadow-lg animate-pulse">
            {t.chat.cta}
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition cursor-pointer text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
          </a>
        </div>

        {/* Chatbot Toggle Button */}
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-14 h-14 bg-[#4B84FF] rounded-full flex items-center justify-center shadow-lg shadow-[#0047AB]/40 hover:scale-110 transition text-white backdrop-blur-md border border-white/20">
          {isChatOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          )}
        </button>

      </div>
    </div>
  );
}