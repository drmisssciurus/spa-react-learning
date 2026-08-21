import "./App.css";
import Spells from "./pages/Spells";
import { useEffect, useState } from "react";
import { type WizardInfo, type SpellInfo } from "./types/types";
import AppLayout from "./components/AppLayout";
import Wizards from "./pages/Wizards";
import FavoriteWizards from "./pages/FavoriteWizards";
import {
  FAVORITE_WiZARDS_STORAGE_KEY,
  FAVORITE_SPELLS_STORAGE_KEY,
} from "./storage/favoriteStorage";
import FavoriteSpells from "./pages/FavoriteSpells";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
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
      <Routes>
        <Route element={<AppLayout favoriteWizards={favoriteWizards} favoriteSpells={favoriteSpells}/>}>
          <Route index element={<Wizards favoriteWizards={favoriteWizards} onToggle={handleToggleWizards}/>} />
          <Route
            path="wizards"
            element={
              <Wizards
                favoriteWizards={favoriteWizards}
                onToggle={handleToggleWizards}
              />
            }
          />
          <Route
            path="spells"
            element={
              <Spells
                favoriteSpells={favoriteSpells}
                onToggle={handleToggleSpells}
              />
            }
          />
          <Route
            path="favorite-wizards"
            element={
              <FavoriteWizards
                favoriteWizards={favoriteWizards}
                onToggle={handleToggleWizards}
              />
            }
          />
          <Route
            path="favorite-spells"
            element={
              <FavoriteSpells
                favoriteSpells={favoriteSpells}
                onToggle={handleToggleSpells}
              />
            }
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
