import "./SpellCard.css"

type SpellCardProps = {
    name: string,
    description: string
}


function SpellCard({name, description}: SpellCardProps) {
  return (
    <div className="spell-card">
      <h3 className="spell-name">{name}</h3>
      <p className="spell-description">{description}</p>
    </div>
  );
}

export default SpellCard;
