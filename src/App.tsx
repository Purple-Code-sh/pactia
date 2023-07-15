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
          index
          element={
            <div className=" max-w-full min-w-[936px] font-sans font-light ">
              <Home></Home>
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div className=" max-w-full min-w-[936px] font-sans font-light ">
              <Home></Home>
            </div>
          }
        />
        <Route path="/other" element={<Other></Other>} />
      </Routes>
    </BrowserRouter>
  );

  // some app names in nahuatl: zozo, iztic, pixoa, granadia, pactia, paloa, neuh
}
