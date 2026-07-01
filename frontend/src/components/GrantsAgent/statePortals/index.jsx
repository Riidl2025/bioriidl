import { useMemo, useState } from "react";
import DATA from "../data/playbookData.json";
import StateHeader from "./StateHeader";
import StateSearchBar from "./StateSearchBar";
import StateGrid from "./StateGrid";

export default function StatePortals() {
  const [stateSearch, setStateSearch] = useState("");

  const filteredStates = useMemo(() => {
    const q = stateSearch.toLowerCase().trim();
    return DATA.states.filter((s) => !q || s.name.toLowerCase().includes(q));
  }, [stateSearch]);

  return (
    <section className="panel active" id="view-states">
      <div className="wrap">
        <StateHeader />
        <StateSearchBar
          value={stateSearch}
          onChange={(e) => setStateSearch(e.target.value)}
        />
        <StateGrid states={filteredStates} />
      </div>
    </section>
  );
}
