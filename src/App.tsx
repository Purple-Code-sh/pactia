import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Home } from "./pages/Home";
import { Other } from "./pages/Other";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className=" max-w-full min-w-[936px] font-sans font-light ">
              <Other></Other>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );

  // some app names in nahuatl: zozo, iztic, pixoa, granadia, pactia, paloa, neuh
}
