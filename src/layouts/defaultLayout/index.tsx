import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/ui/Navbar";

export function DefaultLayout() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
