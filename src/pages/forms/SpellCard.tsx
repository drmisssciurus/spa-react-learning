import type { SpellInfo } from "../../types/types";
import "./SpellCard.css"

type SpellCardProps = {
    spell: SpellInfo
}


function SpellCard({spell}: SpellCardProps) {
  return (
    <div className="spell-card">
      <h3 className="spell-name">{spell.name}</h3>
      <p className="spell-description">{spell.description}</p>
    </div>
  );
}

export default SpellCard;
