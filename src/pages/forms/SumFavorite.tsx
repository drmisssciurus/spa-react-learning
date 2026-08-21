import { Link } from "react-router-dom";
import type { SpellInfo, WizardInfo } from "../../types/types";
import "./Cards.css";

type SumFavoriteProps = {
  favoriteWizards: WizardInfo[];
  favoriteSpells: SpellInfo[];
};

function SumFavorite({ favoriteWizards, favoriteSpells }: SumFavoriteProps) {
  return (
    <div className="sum-favorite">
      <Link to={"/favorite-wizards"} className="button">
        🤍 Favorite wizards: {favoriteWizards.length}
      </Link>
      <Link to={"/favorite-spells"} className="button">
        🤍 Favorite spells: {favoriteSpells.length}
      </Link>
    </div>
  );
}

export default SumFavorite;
