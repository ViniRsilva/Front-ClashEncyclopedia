import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/ui/Navbar";

export function DefaultLayout() {
  return (
    <div className="p-4">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
