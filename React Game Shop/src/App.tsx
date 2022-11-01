import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import Ships from "./pages/Ships";
import ShipsAbout from "./Components/ShipsAbout";
import Shop from "./pages/Shop";
import OrderShips from "./pages/OrderShips";
import Cart from "./pages/Cart";
import Races from "./pages/Races";
import AboutGame from "./Components/AboutGame";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/ships" element={<Ships />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/orderships" element={<OrderShips />} />
       <Route path="/about/:id" element={<ShipsAbout />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/races" element={<Races />} />
       <Route path="/aboutgame" element={<AboutGame />} />
    </Routes>
  );
}

export default App;
