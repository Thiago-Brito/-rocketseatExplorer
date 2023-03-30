import { Routes, Route } from "react-router-dom";

import { Sigin } from "../pages/sigin";
import { Sigup } from "../pages/sigup";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sigin />} />
      <Route path="/register" element={<Sigup />} />
    </Routes>
  );
}
