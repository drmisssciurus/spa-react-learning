import type { AppPage, WizardInfo } from "../../types/types";
import "./SumFavorite.css";

type SumFavoriteProps = {
  favorites: WizardInfo[];
  onPageChange: (page: AppPage ) => void;
};

function SumFavorite({ favorites, onPageChange }: SumFavoriteProps) {
  return (
    <>
      <div className="sum-favorite">
        <button onClick={() => onPageChange("favorites")}>
          <span>🤍 Favorite wizards: </span>
          <span>{favorites.length}</span>
        </button>
      </div>
    </>
  );
}

export default SumFavorite;
