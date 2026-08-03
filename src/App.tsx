import WizardCard from "./components/WizardCard"
import "./App.css"

function App() {
  
  return (
    <>
      <h1 className="archive-title">Ministry of Magic Archives</h1>
      <p className="archive-description">Stores records on all wizards and witches</p>
      
      <div className="wizard-container">
      
       <WizardCard/>
       <WizardCard/>
       <WizardCard/>
       <WizardCard/>
     
      </div>
    </>
  )
}

export default App
