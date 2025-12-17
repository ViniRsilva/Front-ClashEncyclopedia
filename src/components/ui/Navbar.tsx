import { useTheme } from "@/hooks/useTheme";
import {
  Building,
  Building2,
  GitCompare,
  Home,
  Layers,
  LayoutGrid,
  Moon,
  Sun,
} from "lucide-react";
import { NavLink } from "./NavLink";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-background dark:bg-dark-background flex items-center justify-between p-4 w-full top-0 z-10 absolute">
      <div className="flex gap-2 items-center justify-center">
        <div className="bg-gradient-hero p-2 rounded-md ">
          <Layers className="h-4 w-4 " />
        </div>
        <h1 className=" font-bold text-lg">Clash Encyclopedia</h1>
      </div>

      <div className="flex gap-1 ">
        <NavLink to="/" label="Home" icon={<Home className="w-4 h-4" />} />
        <NavLink
          to="/cards"
          label="Cards"
          icon={<Layers className="w-4 h-4 " />}
        />

        <NavLink
          to="/buildings"
          label="Buildings"
          icon={<Building2 className="w-4 h-4" />}
        />
        <NavLink
          to="/decks"
          label="Decks"
          icon={<LayoutGrid className="w-4 h-4" />}
        />
        <NavLink
          to="/compare"
          label="Compare"
          icon={<GitCompare className="w-4 h-4" />}
        />
      </div>

      <button
        className="hover:bg-yellow-500 p-2 rounded-xl transition-colors"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Sun className="w-5 h-5 " />
        ) : (
          <Moon className="w-5 h-5 " />
        )}
      </button>
    </nav>
  );
}
