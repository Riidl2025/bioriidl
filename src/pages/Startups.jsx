import statStartups from "../assets/images/stat1.png";
import statFunding from "../assets/images/stat2.png";
import statJobs from "../assets/images/stat3.png";
import statIncubated from "../assets/images/stat4.png";

import domainFood from "../assets/images/foodDomain.png";
import domainBiotech from "../assets/images/biotechDomain.png";
import domainHealthcare from "../assets/images/healthcareDomain.png";
import domainAgriculture from "../assets/images/agricultureDomain.png";

import healthEatosLogo from "../assets/images/startupHealtheatos.jpg";
import agroBeadsLogo from "../assets/images/startupAgrobeads.jpg";
import dogMyLoveLogo from "../assets/images/startupDogsmylove.png";
import indraLogo from "../assets/images/startupIndra.jpg";
import ibandLogo from "../assets/images/startupIband.png";
import questDentalLogo from "../assets/images/startupQuestDental.jpg";

export default function Startups() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Startups at Bioriidl
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            Bioriidl aims to nucleate and nurture technology and knowledge-based
            enterprises leveraging biotechnology across biopharma, agrobiotech,
            industrial biotech, and clean technology.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDyK6JpLvsbvayZmvvzLOZBvZmVnqxtCmG_RD3FrpKCDFwrQ/viewform?c=0&w=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md"
          >
            Apply for Incubation
          </a>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-slide-up">
          {[
            { img: statStartups, value: "17+", label: "Total Startups" },
            { img: statFunding, value: "$1 Million+", label: "Funding Raised" },
            { img: statJobs, value: "50+", label: "Full Time Jobs Created" },
            { img: statIncubated, value: "10", label: "Currently Incubated" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200"
            >
              <img
                src={item.img}
                alt={item.label}
                className="mx-auto w-24 h-24 object-contain mb-4 transition-transform duration-200 group-hover:scale-105"
              />
              <p className="text-2xl font-bold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            We accept startups in the domain of
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Food", img: domainFood },
              { name: "Biotech", img: domainBiotech },
              { name: "Healthcare", img: domainHealthcare },
              { name: "Agriculture", img: domainAgriculture },
            ].map((d) => (
              <div
                key={d.name}
                className="group rounded-xl bg-white border border-slate-200 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="mx-auto w-24 h-24 object-contain mb-4 transition-transform duration-200 group-hover:scale-105"
                />
                <p className="font-medium text-slate-800">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10">
            Startups Incubated at Bioriidl
          </h2>

          <div className="space-y-8">
            <StartupCard
              logo={healthEatosLogo}
              name="Health-Eatos"
              description="Health-Eatos is a company making nachos from beans that are high on nutrition and protein. Starting off as a final year project from KJ Somaiya College of Science and Commerce, this company provides a healthy, fibre-rich version of Nachos at highly affordable prices."
              links={[{ label: "Facebook", href: "FACEBOOK_LINK" }]}
            />

            <StartupCard
              logo={agroBeadsLogo}
              name="AgroBeads"
              description="Agrobeads was the final year project of KJSSC students which accelerates the growth of any plant and increases the productivity with only one product. Agrobeads work on enhancing the quality of roots, shoots, fruits and also the leaf span. It has no side effects on the soil as well as the plant. It is easy to use. One has to just put a few of the beads near the roots. This has been tried with plants at lab scale and for home gardening which provides good results. Agrobeads are a great solution for solving the problem of lands which are contaminated with inorganic phosphates."
              links={[{ label: "Website", href: "https://www.agrobeads.com/" }]}
            />

            <StartupCard
              logo={dogMyLoveLogo}
              name="Dog My Love"
              description="Dog My Love is a dog care products and accessories shop located in California It was .started by students of S K Somaiya Vinaymandir Junior College during their college days and today it sells a number of products ranging from collars, leashes, dog food and toys, to doghouses, beds, brushes and bowls."
              links={[{ label: "Website", href: "http://dogmylove.in/" }]}
            />

            <StartupCard
              logo={indraLogo}
              name="Indra"
              description="Indra is an incubated startup at Bioriidl working on innovative technology-driven solutions."
            />

            <StartupCard
              logo={ibandLogo}
              name="i-Band"
              description="i-Band is a Bioriidl-incubated startup focused on developing impactful healthcare technology solutions."
            />

            <StartupCard
              logo={questDentalLogo}
              name="Quest Dental"
              description="Quest Dental is an incubated startup addressing challenges in dental healthcare through innovative solutions."
            />

            <StartupCard
              name="UFarm"
              description="UFarm is an incubated startup at Bioriidl working in the agriculture domain."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StartupCard({ logo, name, description, links = [] }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:shadow-md hover:border-slate-500">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-40 flex items-center justify-center">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="max-h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          ) : (
            <div className="h-24 w-24 rounded-md bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
              No logo
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            {description}
          </p>

          {links.length > 0 && (
            <div className="mt-3 flex gap-4 text-sm">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline"
                >
                  {l.label}→
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
