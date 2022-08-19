import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import CartPage from "./pages/CartPage";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarsPage></CarsPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
