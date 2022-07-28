import React from 'react';
import styled from 'styled-components';
import ProductCard from '../cards/ProductCard';

export default function PopularProductContainer() {

    //TODO: Swiper
    const testImgURL = "https://www.vkf-renzel.com/out/pictures/generated/product/1/650_650_75/r4607341-01/cotton-bag-cape-town-including-print-46.0734.1-1.jpg";

  return (
    <Wrapper>
        <Header>Népszerű termékek</Header>
        <Container>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
            <ProductCard cardId={1} cardTitle={"Title"} cardPrice={4000} cardImg={testImgURL}/>
        </Container>
    </Wrapper>
  )
}

const Container = styled.div`
    width: 70vw;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    margin: 20px;
    @media(orientation: portrait){
     overflow: hidden;   
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    margin-top: 5px;
    padding: 15px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    border-radius: 40px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0.05, 0.30);
`;