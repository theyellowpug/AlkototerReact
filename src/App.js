import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";

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
