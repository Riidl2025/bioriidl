import DATA from "../data/playbookData.json";
import PsuHeader from "./PsuHeader";
import PsuCardList from "./PsuCardList";

export default function PsuRegulators() {
  return (
    <section className="panel active" id="view-psu">
      <div className="wrap">
        <PsuHeader />
        <PsuCardList items={DATA.psu} />
      </div>
    </section>
  );
}
