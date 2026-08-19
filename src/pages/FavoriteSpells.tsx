import type { SpellInfo } from "../types/types";
import SpellCard from "./forms/SpellCard";

type FavoriteSpellsProps = {
  favoriteSpells: SpellInfo[];
  onToggle: (spell: SpellInfo) => void;
};

function FavoriteSpells({ favoriteSpells, onToggle }: FavoriteSpellsProps) {
  return (
    <div>
      <h1 className="wizards-title">My favorite Spells</h1>
      <div className="wizard-container">
        {favoriteSpells.map((favorite) => {
          const isSpellSaved = favoriteSpells.some((s) => s.id === favorite.id);
          return (
            <div key={favorite.id}>
              <SpellCard
                spell={favorite}
                onToggle={() => onToggle(favorite)}
                isFavorite={isSpellSaved}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavoriteSpells;
