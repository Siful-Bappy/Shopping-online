import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Invertory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import RequreAuth from "./components/RequreAuth/RequreAuth";
import Shipment from "./components/Shipment/Shipment";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequreAuth>
              <Inventory></Inventory>
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <RequreAuth>
              <About></About>
            </RequreAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/shipment"
          element={
            <RequreAuth>
              <Shipment></Shipment>
            </RequreAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
