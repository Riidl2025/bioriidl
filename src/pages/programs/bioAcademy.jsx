import { Link } from "react-router-dom";

export default function BioAcademy() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <Link
            to="/programs"
            className="inline-flex items-center text-sm font-medium text-emerald-700 hover:underline mb-4"
          >
            ← Back to Programs
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Bio Academy
          </h1>

          <p className="mt-3 text-slate-600 text-lg">
            September 2018 – February 2019
          </p>

          <p className="mt-2 text-slate-500 text-sm">
            Riidl, Bhaskaracharya Building, Somaiya Vidyavihar, Mumbai
          </p>

          <button
            disabled
            className="inline-flex mt-6 rounded-full px-6 py-3 text-sm font-semibold bg-slate-200 text-slate-500 border border-slate-300 cursor-not-allowed"
          >
            Registration Closed
          </button>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            What is Bio Academy?
          </h2>

          <p className="text-slate-600">
            Bio Academy is an interdisciplinary learning program designed to
            cover a wide range of interests — from entry-level exposure for
            researchers, investors, and job seekers to entrepreneurial guidance
            for potential founders.
          </p>

          <p className="text-slate-600">
            The program introduces participants to the technical and conceptual
            foundations of synthetic biology, while also addressing its real-
            world applications, industry relevance, and future implications.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Duration
          </h2>
          <p className="text-3xl font-bold text-emerald-700">6 months</p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Bio Academy?
          </h2>

          <p className="text-slate-600">
            While many bio-related courses focus only on outcomes, Bio Academy
            emphasizes the journey behind technological innovation. Participants
            learn not just what technologies exist, but how they evolved, the
            challenges faced by researchers, and the effort required to make
            these technologies accessible.
          </p>

          <p className="text-slate-600">
            What differentiates Bio Academy is that lectures are delivered by
            researchers who directly contributed to developing these
            technologies. This gives participants rare insight into real-world
            research, failures, breakthroughs, and practical constraints.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Fees Structure
          </h2>

          <div className="rounded-xl bg-white border border-emerald-100 p-6 space-y-3 shadow-sm">
            <p className="text-slate-600">
              <strong className="text-slate-800">Without scholarship:</strong>{" "}
              USD 5,000
            </p>

            <p className="text-slate-600">
              <strong className="text-slate-800">External students:</strong>{" "}
              Scholarships may be provided based on need and Statement of
              Purpose (SOP).
            </p>

            <p className="text-slate-600">
              <strong className="text-slate-800">Somaiya students:</strong> 30%
              fee concession.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Course Structure
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Principles and Practices + Hardware (Neil, Megan, David)",
              "Bio Design (George)",
              "Next Generation Synthesis (Joe J)",
              "Bio Production (Patrick, Ginkgo)",
              "Biomolecule Sensors (Vatsan)",
              "Cell-free Production (Kate)",
              "Gut Microbiome (David)",
              "Bio Fab (Fio)",
              "Imaging (Nanostructures)",
              "Synthetic Development Biology (Nina)",
              "Gene Drives (Kevin Esvelt)",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-emerald-600 hover:bg-emerald-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
