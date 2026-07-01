import DATA from "../data/playbookData.json";
import GlossaryHeader from "./GlossaryHeader";
import GlossaryList from "./GlossaryList";

export default function Glossary() {
  return (
    <section className="panel active" id="view-glossary">
      <div className="wrap">
        <GlossaryHeader />
        <GlossaryList items={DATA.glossary} />
      </div>
    </section>
  );
}
