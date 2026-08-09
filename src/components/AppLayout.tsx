import type { ReactNode } from "react";
import type { AppPage } from "../types/types";
import "./AppLayout.css";

type AppLayoutProps = {
  activepage: AppPage;
  onPageChange: (page: AppPage) => void;
  children: ReactNode;
};

const navItems: Array<{ page: AppPage; label: string }> = [
  { page: "characters", label: "Characters" },
  { page: "spells", label: "Spells" },
];

function AppLayout({ activepage, onPageChange, children }: AppLayoutProps) {
  
  return (
    <div>
      <header>
        <div>
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
      </header>
      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
