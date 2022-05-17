import React from 'react';
import styled from 'styled-components';
import PLACEHOLDER from '../../assets/LogoImg.png';
import AddToCart from '../AddToCart';
import AddToFavs from '../AddToFavs';

export default function ProductDetailsCard() {
  return (
    <Container>
        <Images>
          <AllProductImage>
            <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
            <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
            <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
          </AllProductImage>
          <LargeImage src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></LargeImage>
        </Images>
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
    </Container>
  )
}

const Container = styled.div`
    margin: 10px;
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    background-color: black;
    background: #FFFFFF;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    height: 50vh;

    @media (orientation: portrait){
        width: 90%;
        flex-wrap: wrap;
    }
`;

const Images = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 90%;
    width: 45%;
    justify-content: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-around;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin-left: 4vw;
`;


const AllProductImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-right: 1vw;
`;

const SmallImg = styled.img`
  width: 10vh;
  margin: 2.5vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
border-radius: 30px;
`;

const LargeImage = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  border-radius: 30px;
`;

const noBottomMarg = {
  marginBottom: "0px"
}
const noMarg = {
  margin: "0px"
}