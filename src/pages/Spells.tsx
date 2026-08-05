import SpellsCard from "./forms/SpellsCard";

function Spells() {
  return (
    <>
      <h1 className="spells-title">Spells</h1>
      <div className="spells-container">
        <SpellsCard />
        <SpellsCard />
        <SpellsCard />
        <SpellsCard />
      </div>
    </>
  );
}

export default Spells;
