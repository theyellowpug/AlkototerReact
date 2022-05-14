import React from 'react';
import styled from 'styled-components';
import PLACEHOLDER from '../../assets/LogoImg.png';

export default function ProductDetailsCard() {
  return (
    <CardContainer>
        <AllProductImage>
           <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
           <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
           <SmallImg src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></SmallImg>
        </AllProductImage>
        <LargeImage src={"https://m.media-amazon.com/images/I/81nh7yEGiHL._SL1500_.jpg"}></LargeImage>
        <Info>
          <h1> Termék neve</h1>
          <h6>Category</h6>
          <h3>1 000Ft /db</h3>
          <p>Termék leírásos leírással leírt leírásos leírással 
            leírt leírásos leírással leírt leírásos leírással leírt leírása!</p>
        </Info>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    background-color: black;
    background: #FFFFFF;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    @media (orientation: portrait){
        width: 90%;
        flex-wrap: wrap;
    }
`;

const AllProductImage = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallImg = styled.img`
  width: 10vh;
  margin: 2.5vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
border-radius: 30px;
`;

const LargeImage = styled.img`
  width: 20%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  border-radius: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  height: 100%;
  margin-left: 4vw;
`;
