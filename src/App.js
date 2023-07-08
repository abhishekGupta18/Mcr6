import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { CuisinePage } from "./Pages/CuisinePage";
import { RestaurantPage } from "./Pages/RestaurantPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:cuisineId" element={<CuisinePage />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
      </Routes>
    </div>
  );
}

export default App;
// https://wonderful-babka-545bad.netlify.app/
