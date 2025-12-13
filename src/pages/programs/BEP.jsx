import { Link } from "react-router-dom";

import bepEligibility from "../../assets/images/bepEligibility.png";
import bepDuration from "../../assets/images/bepDuration.png";
import bepFees from "../../assets/images/bepFees.png";

import bepWeek1 from "../../assets/images/bepWeek1.png";
import bepWeek2 from "../../assets/images/bepWeek2.png";
import bepWeek3_6 from "../../assets/images/bepWeek3_6.png";
import bepWeek7 from "../../assets/images/bepWeek7.png";
import bepWeek8 from "../../assets/images/bepWeek8.png";
import bepWeek9 from "../../assets/images/bepWeek9.png";

export default function BEP() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-10 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up space-y-3">
          <Link
            to="/programs"
            className="inline-flex items-center text-sm font-medium text-emerald-700 hover:underline mb-4"
          >
            ← Back to Programs
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Bio Entrepreneurship Program
          </h1>
          <p className="mt-3 text-slate-600 text-lg">
            A journey from ideation to entrepreneurship
            <br />
            <span className="text-sm text-slate-500">
              September – November 2023
            </span>
          </p>

          <a
            href="https://airtable.com/appmMdy8jDFih6Bl8/shr79oBkLwe5UzmYu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md"
          >
            Register Now
          </a>
        </div>
      </section>
      <section className="w-full px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto space-y-5 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Program Description
          </h2>

          <p className="text-slate-600">
            Bioriidl, India&apos;s first DIY Biolab, is organizing the 7th
            edition of the Bio-Entrepreneurship Program (BEP), a nine-week
            program focused on product development and go-to-market strategies.
          </p>

          <p className="text-slate-600">
            The program runs from the beginning of September to November 2023
            and exposes teams to mentors from technology, business, and design
            domains. Participants learn market research and business plan
            development.
          </p>

          <p className="text-slate-600">
            Teams work on their ideas from ideation to prototype development and
            market research. The program concludes with a pitching session where
            teams present their prototypes to investors. The winners will be
            selected based on their performance and the milestones they have
            achieved.
          </p>

          <p className="text-slate-600">
            Participants gain access to state-of-the-art infrastructure
            including molecular biology, cell culture, fermentation, analytical,
            and common instrument laboratories. Teams also benefit from access
            to Somaiya Vidyavihar and Somaiya Ayurvihar's medical hospital,
            physiotherapy college, ayurvedic institute, agriculture institute,
            and other departments. This access may be beneficial to teams
            working on global health, agritech, or biotechnology-related issues.
          </p>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 animate-fade-slide-up">
          {[
            {
              title: "Eligibility Criteria",
              text: "Ideation / Early-stage startups",
              img: bepEligibility,
            },
            {
              title: "Duration",
              text: "9 weeks (September last week – November last week)",
              img: bepDuration,
            },
            {
              title: "Registration Fees",
              text: "INR 1500 per team (Maximum 4 members)",
              img: bepFees,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-32 h-32 object-cover rounded-md mb-4 transition-transform duration-200 group-hover:scale-105"
              />
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-10 animate-fade-slide-up">
            Detailed Structure of the Program
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek1}
                alt="Week 1"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 1</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Discover and Define
              </p>
              <p className="text-sm text-slate-600 mt-3">
                First selection based on idea clarity, design approach, and
                technical feasibility. Results announced on Saturday.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek2}
                alt="Week 2"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 2</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Prototype Initiation
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Selected teams are paired with mentors and define their Unique
                Value Proposition (UVP).
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek3_6}
                alt="Weeks 3 to 6"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Weeks 3–6</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Product & Prototype Development
              </p>

              <ul className="mt-3 text-xs text-slate-600 text-left space-y-2">
                <li>Week 3: Prototype development and mentor evaluation</li>
                <li>Week 4: Product development with industry feedback</li>
                <li>Week 5: Product refinement and business workshops</li>
                <li>Week 6: Validation and second selection</li>
              </ul>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek7}
                alt="Week 7"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 7</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Testing & Modification
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Prototype and product testing with modifications and
                customer-based partnerships.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek8}
                alt="Week 8"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 8</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Market Research
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Data collection, market research, and business plan guidance by
                experts.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-slate-50 p-6 text-center animate-fade-slide-up transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <img
                src={bepWeek9}
                alt="Week 9"
                className="mx-auto w-36 h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-slate-900">Week 9</h3>
              <p className="text-sm font-medium text-emerald-700 mt-1">
                Final Pitch & Presentation
              </p>
              <p className="text-sm text-slate-600 mt-3">
                Final business plan, mock pitches, investor presentations, and
                winner announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-slide-up">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Benefits for Participants
            </h3>

            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                <li>Certificate of participation</li>
                <li>Cultivating business acumen</li>
                <li>Design thinking for prototype development</li>
                <li>Opportunity to win cash prize</li>
                <li>
                  Collaborate with peers and industry experts using a range of
                  networking skills
                </li>
                <li>
                  Discover science communication with impact to diverse
                  audiences
                </li>
                <li>
                  Gain project management skills in the context of business
                  planning
                </li>
                <li>Facilitate testing and validation of your product</li>
                <li>
                  Support for ethical approval for clinical trials and IP
                  support
                </li>
                <li>
                  Learn about ethical, legal, and health and safety aspects
                </li>
                <li>Streams to access Government Grants</li>
                <li>Understand how funding is sourced and managed</li>
                <li>
                  Opportunity to pitch in front of eminent angel investors and
                  VCs
                </li>
                <li>
                  Access to an astute mentors’ panel from Healthcare, Medtech,
                  Business, Finance, Regulatory Affairs, Agriculture, and beyond
                </li>
                <li>
                  Offline workshops on business plan development at your
                  organization
                </li>
                <li>
                  Special mention of your community or organization on our
                  websites
                </li>
                <li>
                  Access to collaborate with a global network of partners and
                  organizations
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Benefits for Collaborators
            </h3>

            <div className="rounded-xl bg-white border border-slate-200 p-6 max-w-3xl">
              <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                <li>
                  Offline workshops on business plan development at your
                  organization
                </li>
                <li>
                  Special mention of your community or organization on our
                  websites
                </li>
                <li>
                  Access to collaborate with a global network of partners and
                  organizations
                </li>
                <li>Fundraising opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-14 bg-white">
        <div className="max-w-5xl mx-auto text-center animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            Collaborate with Us
          </h2>
          <p className="text-slate-600 mt-3">
            To collaborate with us, please fill in the form below.
          </p>
          <a
            href="#"
            className="inline-flex mt-5 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Collaborate Now
          </a>
          <div className="mt-8 text-sm text-slate-600 space-y-2">
            <p>
              <strong>Queries:</strong> Apekshakumari Patel | +91 99672 19428 |
              apekshakumari@somaiya.edu
            </p>
            <p>
              <strong>Partnerships:</strong> Bhavna Pandya | +91 98215 54344
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
