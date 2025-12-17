import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

export function NavLink({ to, label, icon }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 py-1 px-3 rounded-lg hover:bg-muted/10 ${
        isActive ? "bg-primary/10 text-primary hover:bg-primary/20" : ""
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
