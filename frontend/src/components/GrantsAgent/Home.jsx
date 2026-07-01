import { useState } from "react";
import "./playbook.css";
import HeroSection from "./heroSection/HeroSection";
import TabNavigation from "./TabNavigation";
import FindScheme from "./findScheme";
import PsuRegulators from "./psuRegulators";
import StatePortals from "./statePortals";
import Glossary from "./glossary";
import About from "./about";

export default function GrantsAgentApp() {
  const [activeTab, setActiveTab] = useState("schemes");

  const switchTab = (name) => {
    setActiveTab(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grants-agent">
      <HeroSection />
      <TabNavigation activeTab={activeTab} onTabChange={switchTab} />

      {activeTab === "schemes" && <FindScheme />}
      {activeTab === "psu" && <PsuRegulators />}
      {activeTab === "states" && <StatePortals />}
      {activeTab === "glossary" && <Glossary />}
      {activeTab === "about" && <About />}
    </div>
  );
}
