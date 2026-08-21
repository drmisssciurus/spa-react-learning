import type { SpellInfo, WizardInfo } from "../types/types";
import SumFavorite from "../pages/forms/SumFavorite";
import "./AppLayout.css";
import { NavLink, Outlet } from "react-router-dom";

type AppLayoutProps = {
  favoriteWizards: WizardInfo[];
  favoriteSpells: SpellInfo[];
};

const navItems = [
  { label: "Wizards", to: "/wizards" },
  { label: "Spells", to: "/spells" },
];

function AppLayout({ favoriteWizards, favoriteSpells }: AppLayoutProps) {
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
            <NavLink
              className={({ isActive }) =>
                isActive ? "button active" : "button "
              }
              key={item.to}
              to={item.to}
            >
              {" "}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <SumFavorite
          favoriteWizards={favoriteWizards}
          favoriteSpells={favoriteSpells}
        />
        
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
