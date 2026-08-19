import type { AppPage, SpellInfo, WizardInfo } from "../../types/types";

type SumFavoriteProps = {
  favoriteWizards: WizardInfo[];
  onPageChange: (page: AppPage) => void;
  onPageSpellChange: (page: AppPage) => void;
  favoriteSpells: SpellInfo[];
};

function SumFavorite({
  favoriteWizards,
  onPageChange,
  onPageSpellChange,
  favoriteSpells,
}: SumFavoriteProps) {
  return (
    <>
      <span className="sum-favorite">
        <button onClick={() => onPageChange("favoriteWizards")}>
          <span>🤍 Favorite wizards: </span>
          <span>{favoriteWizards.length}</span>
        </button>
      </span>
      <span className="sum-favorite">
        <button onClick={() => onPageSpellChange("favoriteSpells")}>
          <span>🤍 Favorite spells: </span>
          <span>{favoriteSpells.length}</span>
        </button>
      </span>
    </>
  );
}

export default SumFavorite;
