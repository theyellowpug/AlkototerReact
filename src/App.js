import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/products' element={<ProductsPage/>} />
        <Route exact path='/productDetails/:productId' element={<ProductDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
