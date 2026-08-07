import "./WizardCard.css";

type WizardCardProps = {
  name: string,
  house: string,
  ancestry: string,
  patronus: string,
  image:string
}

function WizardCard({name, house, ancestry, patronus, image}: WizardCardProps) {
  return (
    <div className="wizard-card">
      <h2 className="wizard-title">{name}</h2>
      <p className="wizard-description">House: {house}</p>
      <p className="wizard-description">Blood status: {ancestry}</p>
      <p className="wizard-description">Patronus: {patronus}</p>
      <img
        className="wizard-image"
        src={image}
        alt="Harry Potter"
      />
    </div>
  );
}

export default WizardCard;
