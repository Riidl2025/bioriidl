export default function DIYBiolab() {
  return (
    <div className="w-full">
      <section className="w-full px-6 py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto animate-fade-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            DIY Biolab
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            An open community biology lab for students, inventors,
            entrepreneurs, and anyone who wants to experiment, share, learn, and
            build.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-4 animate-fade-slide-up">
          <h2 className="text-2xl font-semibold text-slate-900">
            About DIY Biolab
          </h2>

          <p className="text-slate-600 leading-relaxed">
            DIY Biolab at Bioriidl is a shared, open-access biological workspace
            designed to lower the entry barrier to hands-on experimentation. It
            enables individuals and teams to explore biology through real-world
            tools, community learning, and responsible innovation.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <Lab
            title="Molecular Biology Lab"
            items={[
              "Real Time PCR",
              "Biological Safety Cabinet Class II A2 with Thimble Ducting",
              "Microcentrifuge (Refrigerated)",
              "Water Bath",
              "Deep Freezer (-25°C)",
              "Refrigerator (2–8°C)",
              "Vortex Machine",
              "MiniFuge Centrifuge",
              "Electrophoresis Unit (Vertical and Horizontal)",
            ]}
          />

          <Lab
            title="Cell Culture Lab"
            items={[
              "Biological Safety Cabinet Class II A2 with Thimble Ducting",
              "CO₂ Incubator",
              "Flow Cytometer",
              "Liquid Nitrogen Container (Storage for ~3000 samples)",
              "Inverted Fluorescence Microscope",
              "Multifuge Centrifuge (Swing bucket and fixed angle rotors)",
            ]}
          />

          <Lab
            title="Fermentation Lab"
            items={[
              "Fermentor (Anaerobic) – 5 Litres",
              "Peristaltic Pump",
              "Autoclave – 100 Litres",
            ]}
          />

          <Lab
            title="Analytical Lab"
            items={["HPLC", "GC–MS", "UV Spectrophotometer"]}
          />

          <Lab
            title="Common Instrument Lab"
            items={[
              "Hot Air Oven",
              "Magnetic Stirrer",
              "Water Purification System",
              "Ice Flaking Machine",
              "Ultra Low Temperature Freezer (-86°C)",
              "Non-refrigerated Centrifuge",
              "Weighing Balance",
              "Incubator",
              "Shaker",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function Lab({ title, items }) {
  return (
    <div
      className="
        group relative rounded-2xl bg-white border border-slate-200
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        animate-fade-slide-up
      "
    >
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-emerald-500 to-emerald-300" />

      <div className="px-6 py-4 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 relative inline-block">
          {title}
          <span
            className="
              absolute left-0 -bottom-1 h-0.5 w-full
              bg-emerald-500 scale-x-0 origin-left
              transition-transform duration-300
              group-hover:scale-x-100
            "
          />
        </h3>
      </div>

      <ul className="divide-y divide-slate-100">
        {items.map((item) => (
          <li
            key={item}
            className="
              px-6 py-4 text-slate-700 text-sm
              flex items-start gap-3
              transition-colors duration-200
              hover:bg-emerald-50/60
            "
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
