import "./App.css";
import Spells from "./pages/Spells";
import { useEffect, useState } from "react";
import { type AppPage, type WizardInfo, type SpellInfo } from "./types/types";
import AppLayout from "./components/AppLayout";
import Wizards from "./pages/Wizards";
import FavoriteWizards from "./pages/FavoriteWizards";
import {
  FAVORITE_WiZARDS_STORAGE_KEY,
  FAVORITE_SPELLS_STORAGE_KEY,
} from "./storage/favoriteStorage";
import FavoriteSpells from "./pages/FavoriteSpells";

function App() {
  const [page, setPage] = useState<AppPage>("characters");
  const [favoriteWizards, setFavoriteWizards] = useState<WizardInfo[]>(() => {
    const stored = localStorage.getItem(FAVORITE_WiZARDS_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as WizardInfo[];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [favoriteSpells, setFavoriteSpells] = useState<SpellInfo[]>(() => {
    const stored = localStorage.getItem(FAVORITE_SPELLS_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as SpellInfo[];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      FAVORITE_WiZARDS_STORAGE_KEY,
      JSON.stringify(favoriteWizards),
    );
  }, [favoriteWizards]);

  useEffect(() => {
    localStorage.setItem(
      FAVORITE_SPELLS_STORAGE_KEY,
      JSON.stringify(favoriteSpells),
    );
  }, [favoriteSpells]);

  const handleToggleWizards = (wizard: WizardInfo) => {
    setFavoriteWizards((prev) => {
      const exists = prev.some((w) => w.id === wizard.id);
      if (exists) {
        return prev.filter((w) => w.id !== wizard.id);
      }
      return [...prev, wizard];
    });
  };

  const handleToggleSpells = (spell: SpellInfo) => {
    setFavoriteSpells((prev) => {
      const exists = prev.some((s) => s.id === spell.id);
      if (exists) {
        return prev.filter((s) => s.id !== spell.id);
      }
      return [...prev, spell];
    });
  };

  return (
    <>
      <AppLayout
        activepage={page}
        onPageChange={setPage}
        favoriteWizards={favoriteWizards}
        favoriteSpells={favoriteSpells}
      >
        {page === "characters" && (
          <Wizards
            favoriteWizards={favoriteWizards}
            onToggle={handleToggleWizards}
          />
        )}
        {page === "spells" && (
          <Spells
            favoriteSpells={favoriteSpells}
            onToggle={handleToggleSpells}
          />
        )}
        {page === "favoriteWizards" && (
          <FavoriteWizards
            favoriteWizards={favoriteWizards}
            onToggle={handleToggleWizards}
          />
        )}
        {page === "favoriteSpells" && (
          <FavoriteSpells
            favoriteSpells={favoriteSpells}
            onToggle={handleToggleSpells}
          />
        )}
      </AppLayout>
    </>
  );
}

export default App;
