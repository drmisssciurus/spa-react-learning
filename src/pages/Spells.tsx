import { spells } from "../data/data";
import SpellCard from "./forms/SpellCard";
import "./Spells.css"




function Spells() {
  return (
    <>
      <h1 className="spells-title">Spells</h1>
      <div className="spells-container">
        {spells.map((spell) => (
                    <SpellCard key={spell.name}
                                  name={spell.name}
                                  description={spell.description}
                                  />
                ))}
      </div>
    </>
  );
}

export default Spells;
