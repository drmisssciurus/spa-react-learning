import { useEffect, useState } from "react";
import WizardCard from "./forms/WizardCard";
import "./Wizards.css";
import type { WizardInfo } from "../types/types";
import { getWizardsInfo } from "../api/hpApi";

function Wizards() {
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
    <div>
      <h1 className="wizards-title">Wizards & Witches</h1>
      <div className="wizard-container">
        {wizards.map((wizard) => (
          <WizardCard
            key={wizard.id}
            species={wizard.species}
            eyeColour={wizard.eyeColour}
            name={wizard.name}
            house={wizard.house}
            ancestry={wizard.ancestry}
            patronus={wizard.patronus}
            image={wizard.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Wizards;
