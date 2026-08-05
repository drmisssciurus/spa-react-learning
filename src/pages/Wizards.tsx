import WizardCard from "./forms/WizardCard";
import "./Wizards.css";

function Characters() {
  return (
    <div>
      <h1 className="wizards-title">Wizards & Witches</h1>
      <div className="wizard-container">
        <WizardCard />
        <WizardCard />
        <WizardCard />
      </div>
    </div>
  );
}

export default Characters;
