import AboutHeader from "./AboutHeader";
import HowToUse from "./HowToUse";
import SupportLegend from "./SupportLegend";
import Coverage from "./Coverage";
import Disclaimer from "./Disclaimer";

export default function About() {
  return (
    <section className="panel active" id="view-about">
      <div className="wrap">
        <AboutHeader />
        <div className="about">
          <HowToUse />
          <SupportLegend />
          <Coverage />
          <Disclaimer />
        </div>
      </div>
    </section>
  );
}
