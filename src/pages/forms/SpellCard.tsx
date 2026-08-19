import type { SpellInfo } from "../../types/types";
import "./SpellCard.css";

type SpellCardProps = {
  spell: SpellInfo;
  onToggle: () => void;
  isFavorite: boolean;
};

function SpellCard({ spell, onToggle, isFavorite }: SpellCardProps) {
  return (
    <div className="spell-card">
      <h3 className="spell-name">{spell.name}</h3>
      <p className="spell-description">{spell.description}</p>
      <button onClick={onToggle} type="button" className="saved-spell">
        {isFavorite ? "❤️" : "❤"}
      </button>
    </div>
  );
}

export default SpellCard;
