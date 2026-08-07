import { wizards } from "../data/data";
import WizardCard from "./forms/WizardCard";
import "./Wizards.css";



function Characters() {
  
  return (
    <div>
      <h1 className="wizards-title">Wizards & Witches</h1>
      <div className="wizard-container">
                        {wizards.map((wizard) => (
                    <WizardCard key={wizard.name}
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

export default Characters;
