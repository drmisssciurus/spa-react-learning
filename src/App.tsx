import "./App.css";
import Spells from "./pages/Spells";
import { useState } from "react";
import type { AppPage } from "./types/types";
import AppLayout from "./components/AppLayout";
import Wizards from "./pages/Wizards";

function App() {
  const [page, setPage] = useState<AppPage>("characters");
  
 
  return (
    <AppLayout activepage={page} onPageChange={setPage}>
      {page === "characters" && <Wizards />}
      {page === "spells" && <Spells />}
    </AppLayout>
        
  );
}

export default App;
