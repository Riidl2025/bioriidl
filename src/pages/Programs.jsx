import { Link } from "react-router-dom";

import startupSchoolImg from "../assets/images/startupschool.png";

import svuLogo from "../assets/images/svuLogo.svg";
import somaiyaTrustLogo from "../assets/images/somaiyaTrust.png";
import dstLogo from "../assets/images/dst-logo.jpg";
import biracLogo from "../assets/images/biraclogo.png";
import dbtLogo from "../assets/images/dbt-logo.png";
import fablabLogo from "../assets/images/fablab.png";

import partnerArchive from "../assets/images/partner-archive.png";
import partnerCebs from "../assets/images/partner-cebs.png";
import partnerYwater from "../assets/images/partner-ywater.jpg";
import partnerChile from "../assets/images/partner-chile.jpg";

const FEATURE = {
  title: "Startup School India",
  subtitle: "Community-led learning, peer cohorts & mentoring",
  text: "A national initiative bringing founders together for practical sessions, mentorship, and community-driven growth. Ideal for early-stage teams seeking peer feedback and investor-ready preparation.",
  image: startupSchoolImg,
  cta: { label: "Learn more", href: "#startup-school" },
};

const PROGRAMS = [
  {
    id: "bootcamp",
    title: "Startup Bootcamp Program",
    tagline: "Intensive hands-on sprint for early-stage teams",
    body: "Rapid prototyping, customer validation, and demo-day preparation — hands-on support across product, biz-dev and lab-readiness.",
    href: "#",
  },
  {
    id: "bep",
    title: "Bio Entrepreneurship Program (BEP)",
    tagline: "Cohort-based program for bio founders",
    body: "Curriculum blending regulation, lab practices, fundraising readiness and go-to-market guidance for bio startups.",
    href: "/programs/bep",
    highlight: true,
  },
  {
    id: "bio-academy",
    title: "Bio Academy",
    tagline: "Practical courses & instrument training",
    body: "Short modular courses on lab methods, safety, and bioinformatics designed for founders and researchers.",
    href: "/programs/bio-academy",
  },
  {
    id: "bio-informatics",
    title: "Bio Informatics",
    tagline: "Computational biology & data tools",
    body: "Workshops and practical training on bioinformatics workflows, data analysis, and building web tools for biological data. (Website placeholder)",
    href: "/programs/bio-informatic",
  },
  {
    id: "startup-school",
    title: "Startup School India",
    tagline: "Community-led learning & mentoring",
    body: "Session series and peer cohorts connecting founders with mentors and practical sessions.",
    href: "#startup-school",
    image: startupSchoolImg,
  },
];

const COLLABORATORS = [
  { name: "SVU", logo: svuLogo, href: "https://somaiya.edu.in/" },
  {
    name: "Somaiya Trust",
    logo: somaiyaTrustLogo,
    href: "https://somaiya.edu.in/",
  },
  { name: "Dept. of Sci & Tech", logo: dstLogo, href: "https://dst.gov.in/" },
  { name: "BIRAC", logo: biracLogo, href: "https://birac.nic.in/" },
  { name: "Dept. of Biotech", logo: dbtLogo, href: "https://dbtindia.gov.in/" },
  { name: "FAB LAB", logo: fablabLogo, href: "https://www.fablab.io/" },
];

const PARTNERS = [
  {
    name: "Archive MU",
    logo: partnerArchive,
    href: "https://archive.mu.ac.in/",
  },
  { name: "CEBS", logo: partnerCebs, href: "https://www.cbs.ac.in/" },
  { name: "Ywater", logo: partnerYwater, href: "https://www.ywater.org/" },
  {
    name: "Start-Up Chile",
    logo: partnerChile,
    href: "https://www.startupchile.org/",
  },
];

function CurvedDivider() {
  return (
    <div className="w-full overflow-hidden -mt-6">
      <svg viewBox="0 0 1440 64" className="w-full h-8 md:h-12">
        <path
          fill="#f8fafb"
          d="M0,32 C360,80 1080,-16 1440,32 L1440 64 L0 64 Z"
        />
      </svg>
    </div>
  );
}

export default function Programs() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-10 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto relative">
          <svg
            className="absolute -top-6 right-0 opacity-10 pointer-events-none"
            width="420"
            height="200"
            viewBox="0 0 420 200"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#e8faf0" />
                <stop offset="1" stopColor="#eef6ff" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="40" r="40" fill="url(#g1)" />
            <circle cx="160" cy="90" r="28" fill="#f1fbf8" />
            <circle cx="320" cy="30" r="50" fill="#f0fbff" />
          </svg>

          <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-6 items-center animate-fade-slide-up">
            <div className="md:flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Programs
              </p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Programs that turn lab ideas into scalable ventures
              </h1>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Cohorts, bootcamps and hands-on academy courses — technical,
                regulatory and market training designed for science-first
                founders. We focus on lab-readiness, safety, and real-world
                deployment.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#programs-list"
                  className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 transition"
                >
                  Explore programs
                </a>
              </div>
            </div>

            <div className="w-full md:w-96 rounded-xl overflow-hidden border border-slate-100 bg-white shadow-sm">
              <div className="w-full bg-white">
                <img
                  src={FEATURE.image}
                  alt={FEATURE.title}
                  className="w-full h-auto object-contain block"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Featured
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mt-1">
                  {FEATURE.title}
                </h3>
                <p className="text-sm text-slate-600 mt-3">{FEATURE.text}</p>

                <div className="mt-4">
                  <a
                    href={FEATURE.cta.href}
                    className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                  >
                    {FEATURE.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider />

      <section id="programs-list" className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Our Programs
            </h2>
            <p className="text-sm text-slate-500">
              Select a program to learn more
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p) => (
              <article
                key={p.id}
                className={`group relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transform transition-all duration-200 min-h-[260px] p-5`}
                role="article"
                aria-labelledby={`prog-${p.id}`}
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-linear-to-b from-emerald-500 to-emerald-300" />

                <div className="flex-1 pl-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      id={`prog-${p.id}`}
                      className="text-lg font-semibold text-slate-900"
                    >
                      {p.title}
                    </h3>
                    {p.highlight && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href="https://www.facebook.com/BioRiiDL/videos/1020398341455767/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition"
                        >
                          Watch video
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 5v14l11-7z"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-emerald-700 font-medium mt-2">
                    {p.tagline}
                  </p>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {p.body}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between pl-4">
                  <Link
                    to="/programs/bep"
                    className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                  >
                    Visit page
                  </Link>

                  <div className="text-xs text-slate-400">Details →</div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                  <div className="absolute right-4 top-4 text-emerald-50/40">
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      aria-hidden
                    >
                      <circle cx="6" cy="6" r="6" fill="#ecfdf5" />
                      <circle cx="24" cy="10" r="4" fill="#ecfdf5" />
                      <circle cx="42" cy="6" r="3" fill="#ecfdf5" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full -mt-6">
        <svg viewBox="0 0 1440 64" className="w-full h-8 md:h-12">
          <path
            fill="#f8fafb"
            d="M0,32 C360,80 1080,-16 1440,32 L1440 64 L0 64 Z"
          ></path>
        </svg>
      </div>

      <section className="w-full px-6 py-14 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
            Our collaborators
          </h2>

          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {COLLABORATORS.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition"
                aria-label={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-12 w-auto object-contain filter grayscale-60 opacity-80 hover:filter-none hover:opacity-100 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider />

      <section className="w-full px-6 py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
            Our partners
          </h2>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-white border border-slate-100 hover:shadow-md transition"
                aria-label={p.name}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-12 object-contain filter grayscale-60 opacity-85 hover:filter-none hover:opacity-100 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
