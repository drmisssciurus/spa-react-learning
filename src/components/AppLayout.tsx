import type { ReactNode } from "react";
import type { AppPage, SpellInfo, WizardInfo } from "../types/types";
import SumFavorite from "../pages/forms/SumFavorite";
import "./AppLayout.css";

type AppLayoutProps = {
  favoriteWizards: WizardInfo[];
  favoriteSpells: SpellInfo[];
  activepage: AppPage;
  onPageChange: (page: AppPage) => void;
  children: ReactNode;
};

const navItems: Array<{ page: AppPage; label: string }> = [
  { page: "characters", label: "Characters" },
  { page: "spells", label: "Spells" },
];

function AppLayout({
  activepage,
  onPageChange,
  favoriteWizards,
  favoriteSpells,
  children,
}: AppLayoutProps) {
  return (
    <div>
      <header className="main-header">
        <div className="main-header-box">
          <h1 className="archive-title">Ministry of Magic Archives</h1>
          <p className="archive-description">
            Stores records on all wizards and witches
          </p>
        </div>
        <nav className="navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={activepage === item.page ? "active" : ""}
              onClick={() => onPageChange(item.page)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="sum-box">
          <SumFavorite
            favoriteWizards={favoriteWizards}
            onPageChange={() => onPageChange("favoriteWizards")}
            onPageSpellChange={() => onPageChange("favoriteSpells")}
            favoriteSpells={favoriteSpells}
          />
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
