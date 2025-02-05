import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Fruits from "./Components/Fruits";
import AllProduct from "./Components/AllProduct";
import DryFruits from "./Components/DryFruits";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/product"  element={<Product/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path="/fruits" element={<Fruits/>}></Route>
        <Route path="/dryfruits" element={<DryFruits/>}></Route>
        <Route path="/allproduct" element={<AllProduct/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </Router>
  )
};
export default App;