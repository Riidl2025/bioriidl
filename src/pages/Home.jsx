const stats = [
  {
    title: "17+ Total Startups",
    image: "src/assets/images/stat1.png",
  },
  {
    title: "$1 Million+ Funding Raised",
    image: "src/assets/images/stat2.png",
  },
  {
    title: "50+ Full Time Jobs Created",
    image: "src/assets/images/stat3.png",
  },
  {
    title: "10 Currently incubated",
    image: "src/assets/images/stat4.png",
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-12 md:py-16 bg-slate-50">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="md:w-1/2 animate-fade-slide-up">
            <p className="text-4xl md:text-6xl font-semibold uppercase trackinf-[0.2em] text-emerald-700 mb-3">
              Bio Incubator
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold text-slate-800 mb-4">
              Nurturing the next generation of{" "}
              <span className="text-blue-800">bio startups</span>.
            </h1>
            <p className="text-slate-600 mb-6 max-w-xl">
              From idea to impact, we support founders working on biology,
              health and deep-tech ventures with space, mentorship and
              community.
            </p>
            <a
              href="https://airtable.com/apppcc53BEKn1w6Rs/shr3cZLFhHRJk2DIP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 active:bg-emerald-900 transition-colors"
            >
              Apply for Incubation
            </a>
          </div>

          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src="src/assets/images/hero.jpg" alt="Bio Incubator" />
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-10 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 text-center">
          Startup Statistics
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {stats.map((item, index) => (
            <div
              key={item.title}
              className="items-center text-center flex flex-col animate-fade-slide-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-44 h-44 overflow-hidden shadow-md rounded-sm bg-slate-50 border border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold mt-4 text-slate-800 max-w-40">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
