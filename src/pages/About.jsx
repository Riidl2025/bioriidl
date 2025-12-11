import {
  Briefcase,
  Wifi,
  Users,
  Presentation,
  Lock,
  Dumbbell,
  Coffee,
  Cog,
  FlaskConical,
} from "lucide-react";

const infraItems = [
  { icon: Briefcase, label: "Dedicated desk space / cabin" },
  { icon: Wifi, label: "High speed WiFi" },
  { icon: Users, label: "Meeting rooms" },
  { icon: Presentation, label: "Conference rooms" },
  { icon: Lock, label: "Lockers" },
  { icon: Dumbbell, label: "Sports" },
  { icon: Coffee, label: "Cafeteria" },
  { icon: Cog, label: "Digital fabrication facilities" },
  { icon: FlaskConical, label: "D.I.Y. Bio Lab" },
];

const communityTags = [
  "Peer learning",
  "Mentor network",
  "Industry connects",
  "Founder meetups",
  "Workshops & talks",
];

const About = () => {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="rounded-3xl border border-slate-200 bg-white/80 shadow-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="md:w-2/3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                About Bioriidl
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Bio incubation for research-led{" "}
                <span className="text-emerald-700">startups</span>.
              </h1>
              <p className="text-slate-600 mb-3">
                Bioriidl is a bio incubator supporting early-stage startups
                working at the intersection of biology, health, and deep tech.
                We provide founders with the space, tools, mentoring, and
                community required to transform research-driven concepts into
                scalable ventures.
              </p>
              <p className="text-slate-600">
                From access to labs and infrastructure to business support and
                peer-learning opportunities, we help startups accelerate
                innovation and move from prototype to real-world impact.
              </p>
            </div>

            <div className="md:w-1/3">
              <div className="h-full rounded-2xl border border-emerald-100 bg-linear-to-br from-slate-50 to-emerald-50/70 px-5 py-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900 mb-2">
                    What we enable
                  </h2>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li>• Lab and infrastructure access</li>
                    <li>• Startup-friendly workspace</li>
                    <li>• Guidance from experts</li>
                    <li>• Connection to the riidl ecosystem</li>
                  </ul>
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  24/7 access for incubated startups.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                Infrastructure
              </h2>
              <p className="text-slate-600">
                Riidl provides essential infrastructure accessible 24/7 to
                support your growth:
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infraItems.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white shadow-sm hover:shadow-md px-4 py-4 flex gap-3 items-start transition-all duration-200"
              >
                <div className="mt-0.5 rounded-xl border border-emerald-100 bg-emerald-50/70 p-2 group-hover:bg-emerald-100">
                  <item.icon className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                Community
              </h2>
              <p className="text-slate-600 mb-3">
                At Bioriidl, founders are part of a collaborative network of
                innovators, researchers, mentors, and industry partners. The
                environment encourages knowledge-sharing and co-creation,
                helping startups tackle both scientific and business challenges.
              </p>
              <p className="text-slate-600">
                You grow alongside teams solving meaningful problems, supported
                by riidl&apos;s broader startup ecosystem and a culture of
                openness, experimentation, and learning.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                What you become part of
              </p>
              <div className="flex flex-wrap gap-2">
                {communityTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 flex items-stretch">
              <div className="w-full bg-slate-100 flex items-center justify-center">
                <img
                  src="src/assets/images/darwin.png"
                  alt="Darwin"
                  className="max-h-56 w-auto object-contain"
                />
              </div>
            </div>

            <div className="md:w-2/3 px-6 py-6 md:px-8 md:py-7 flex flex-col justify-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Partner platform
              </p>
              <h3 className="text-xl font-semibold text-slate-900">Darwin</h3>
              <p className="text-sm text-slate-600">
                Darwin enhances visibility and provides discovery opportunities
                for startups, enabling wider access to resources, collaborators,
                and networks connected to the Bioriidl and riidl ecosystem.
              </p>
              <div className="mt-2">
                <a
                  href="https://darwin-placeholder-link.com" // replace with real URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-800 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                >
                  Visit Darwin website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
