import type { WizardInfo } from "../types/types";
import WizardCard from "./forms/WizardCard";

type FavoriteProps = {
  favorites: WizardInfo[];
  onToggle: (wizard: WizardInfo) => void;
};

function Favorite({ favorites, onToggle }: FavoriteProps) {
  return (
    <div>
      <h1 className="wizards-title">My favorite Wizards</h1>
      <div className="wizard-container">
        {favorites.map((favorite) => {
          const isWizardSaved = favorites.some((w) => w.id === favorite.id);
          return (
            <div key={favorite.id}>
              <WizardCard
                wizard={favorite}
                onToggle={() => onToggle(favorite)}
                isFavorite={isWizardSaved}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;
