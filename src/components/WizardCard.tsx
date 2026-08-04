import "./WizardCard.css"

function WizardCard () {
    return (
        <div className="wizard-card">
            <h2 className="wizard-title">Harry Potter</h2>
            <p className="wizard-description">House: Gryffindor</p>
            <p className="wizard-description">Blood status: half-blood</p>
            <p className="wizard-description">Patronus: stag</p>
            <img className="wizard-image" src="https://ik.imagekit.io/hpapi/harry.jpg" alt="Harry Potter" />
        </div>
    )
};

export default WizardCard;