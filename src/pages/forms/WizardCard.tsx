import type { WizardInfo } from "../../types/types";
import "./WizardCard.css";

type WizardCardProps = {
  wizard: WizardInfo;
  onToggle: () => void;
  isFavorite: boolean;
};

function WizardCard({ wizard, onToggle, isFavorite }: WizardCardProps) {
  return (
    <div className="wizard-card">
      <h2 className="wizard-title">{wizard.name}</h2>

      <p className="wizard-description">Species: {wizard.species}</p>
      <p className="wizard-description">
        Eye colour: {wizard.eyeColour || "Unknown"}
      </p>
      <p className="wizard-description">House: {wizard.house || "Unknown"}</p>
      <p className="wizard-description">
        Blood status: {wizard.ancestry || "Unknown"}
      </p>
      <p className="wizard-description">
        Patronus: {wizard.patronus || "Unknown"}
      </p>

      {wizard.image ? (
        <img className="wizard-image" src={wizard.image} alt={wizard.name} />
      ) : (
        <img className="wizard-image" src="unknown.png" alt="unknown" />
      )}
      <button onClick={onToggle} type="button" className="saved">
        {isFavorite ? "❤️" : "❤"}
      </button>
    </div>
  );
}

export default WizardCard;
