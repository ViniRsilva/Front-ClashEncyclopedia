import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/ui/Navbar";

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
