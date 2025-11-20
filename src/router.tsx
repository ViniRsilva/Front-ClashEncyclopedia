import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Cards } from "./pages/Cards";
import { Buildings } from "./pages/Buildings";
import { Compare } from "./pages/Compare";
import { Decks } from "./pages/Decks";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/decks" element={<Decks />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
