import React from 'react';
import styled from 'styled-components';
import PLACEHOLDER from '../../assets/LogoImg.png';
import AddToCart from '../AddToCart';
import AddToFavs from '../AddToFavs';

export default function ProductDetailsCard() {
  return (
    <Container>
      <LeftSection>
          <Images>
            <AllProductImage>
              <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
              <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
              <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
            </AllProductImage>
            <LargeImage src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></LargeImage>
          </Images>
      </LeftSection>
      <RightSection>
        <Info>
          <h1 style={noMarg}> Termék neve</h1>
          <h6 style={noMarg}>Category</h6>
          <h3 style={noBottomMarg}>1 000Ft /db</h3>
          <p>Termék leírásos leírással leírt leírásos leírással 
            leírt leírásos leírással leírt leírásos leírással leírt leírása!
          </p>
          <AddToCart/>
          <AddToFavs/>
        </Info>
      </RightSection>
    </Container>
  )
}

const Container = styled.div`
    margin: 10px;
    display: flex;
    width: 90vw;
    background-color: black;
    background: #FFFFFF;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    min-height: 50vh;

    @media (min-width: 1800px ){
        flex-wrap: nowrap;
    }
    @media (max-width: 1800px) {
        flex-wrap: wrap;
        padding: 50px;
        min-width: 50vw;
    }
`;

const LeftSection = styled.div`
  width: 35vw;
  @media (max-width: 1800px) {
      width: 80%;
    }
`;
const RightSection = styled.div`
  width: 65vw;
`;

const Images = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    height: 100%;
    align-items: center;
    
    @media (max-width: 1800px) {
      justify-content: flex-start;
    }
`;
const Info = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  align-content: space-around;
  justify-content: center;

  @media (min-width: 1800px ){
      margin-left: 4vw;
    }
    @media (max-width: 1800px) {
      margin-left: 1vw;
      margin-top: 2vh;
    }
`;


const AllProductImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-right: 1vw;
  @media (max-width: 1800px) {
      width: 30vw;
    }
`;

const SmallImg = styled.img`
  width: 10vh;
  margin: 2.5vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  border-radius: 30px;
  @media (orientation: portrait) {
      width: 20vw;
    }
`;

const LargeImage = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  border-radius: 30px;
  height: 35vh;
  width: auto;
  @media (orientation: portrait) {
      width: 60vw;
      height: 60vw;
    }
`;

const noBottomMarg = {
  marginBottom: "0px"
}
const noMarg = {
  margin: "0px"
}