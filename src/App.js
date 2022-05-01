import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";

//imports for slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path="/products"/>
      </Routes>
    </Router>
  );
}

export default App;
