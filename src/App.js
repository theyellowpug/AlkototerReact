import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"/>
        <Route exact path="/products"/>
      </Routes>
    </Router>
  );
}

export default App;
