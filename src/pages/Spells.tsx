import { useEffect, useState } from "react";
import SpellCard from "./forms/SpellCard";
import "./Spells.css";
import type { SpellInfo } from "../types/types";
import { getSpellsInfo } from "../api/hpApi";

type SpellsProps = {
  favoriteSpells: SpellInfo[];
  onToggle: (spell: SpellInfo) => void;
};

function Spells({ favoriteSpells, onToggle }: SpellsProps) {
  const [spells, setSpells] = useState<SpellInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadSpells = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getSpellsInfo();
      setSpells(data);
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
    loadSpells();
  }, []);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error</div>;

  return (
    <>
      <h1 className="spells-title">Spells</h1>
      <div className="spells-container">
        {spells.map((spell) => {
          const isSpellSaved = favoriteSpells.some((s) => s.id === spell.id);
          return (
            <SpellCard
              key={spell.id}
              spell={spell}
              onToggle={() => onToggle(spell)}
              isFavorite={isSpellSaved}
            />
          );
        })}
      </div>
    </>
  );
}

export default Spells;
