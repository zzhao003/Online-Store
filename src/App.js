import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Homescreen";
import ProductdescScreen from "./screens/ProductdescScreen";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homescreen />}></Route>

        <Route path="/product/:id" element={<ProductdescScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
