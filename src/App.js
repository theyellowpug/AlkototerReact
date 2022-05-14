import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import styled from 'styled-components';
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <PageContainer>
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/products' element={<ProductsPage/>} />
          <Route exact path='/productDetails/:productId' element={<ProductDetailsPage/>} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FEF9F8;
    align-items: center;
`

export default App;
