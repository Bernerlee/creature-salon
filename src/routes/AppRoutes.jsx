import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Team from "../pages/Team";
import Book from "../pages/Book";
import Policies from "../pages/Policiies";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/book" element={<Book />} />
        <Route path="/policies" element={<Policies />} />
      </Route>
    </Routes>
  );
};
