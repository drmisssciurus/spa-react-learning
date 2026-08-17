import "./App.css";
import Spells from "./pages/Spells";
import { useState } from "react";
import type { AppPage, WizardInfo } from "./types/types";
import AppLayout from "./components/AppLayout";
import Wizards from "./pages/Wizards";
import Favorite from "./pages/Favorite";

function App() {
  const [page, setPage] = useState<AppPage>("characters");
  const [favorites, setFavorites] = useState<WizardInfo[]>([]);

  const handleToggleFavorite = (wizard: WizardInfo) => {
    setFavorites((prev) => {
      const exists = prev.some((w) => w.id === wizard.id);
      if (exists) {
        return prev.filter((w) => w.id !== wizard.id);
      }
      return [...prev, wizard];
    });
  };

  return (
    <>
      <AppLayout activepage={page} onPageChange={setPage} favorites={favorites}>
        {page === "characters" && (
          <Wizards
            favorites={favorites}
            onToggle={handleToggleFavorite}
          />
        )}
        {page === "spells" && <Spells />}
        {page === "favorites" && (
          <Favorite
            favorites={favorites}
            onToggle={handleToggleFavorite}
          />
        )}
       
      </AppLayout>
    </>
  );
}

export default App;
