import { useEffect, useState } from "react";
import WizardCard from "./forms/WizardCard";
import "./Wizards.css";
import type { WizardInfo } from "../types/types";
import { getWizardsInfo } from "../api/hpApi";

type WizardsProps = {
  favoriteWizards: WizardInfo[];
  onToggle: (wizard: WizardInfo) => void;
};

function Wizards({ favoriteWizards, onToggle }: WizardsProps) {
  const [wizards, setWizards] = useState<WizardInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadWizards = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWizardsInfo();
      setWizards(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadWizards();
  }, []);

  if (isLoading) return <div className="loading">Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="main-container">
      <div className="main-wizards">
        <h1 className="wizards-title">Wizards & Witches</h1>
        <div className="wizard-container">
          {wizards.map((wizard) => {
            const isWizardSaved = favoriteWizards.some(
              (w) => w.id === wizard.id,
            );
            return (
              <WizardCard
                key={wizard.id}
                wizard={wizard}
                onToggle={() => onToggle(wizard)}
                isFavorite={isWizardSaved}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wizards;
