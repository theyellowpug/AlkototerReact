import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

export default function ProductCard({cardSize,cardId,cardTitle,cardPrice,cardImg}) {

    const navigate = useNavigate();

    const forwardToDetailsPage = (event) =>{
        event.preventDefault();
        navigate("/productDetails/"+cardId)
    }
    
    return(
    <CardContainer onClick={forwardToDetailsPage}>
        <CardImgContainer className="mainCardItem">
            <CardImg src={cardImg} />
        </CardImgContainer>
        <CardTextContainer>
            <CardTitle className="mainCardItem">{cardTitle}</CardTitle>
            <CardPrice className="mainCardItem">{cardPrice} Ft</CardPrice>
        </CardTextContainer>
    </CardContainer>)
} 

const CardContainer = styled.div`
    height: 20vh;
    width: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vh;
    border-color: #5B7B7A;
    border: 1.2px solid;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.25);
    box-sizing: border-box;
    cursor: pointer;
    &:hover .mainCardItem{
        color: #EA8C55;
    }
`

const CardImgContainer = styled.div`
    width: 10vh;
    height: 15vh;
    display: flex;
    justify-content: center;
`
const CardImg = styled.img``
  

const CardTextContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CardTitle = styled.div`
    font-size: 2vh;
    color: #5B7B7A;
    justify-self: center;
    text-align: center;
`
const CardPrice = styled.div`
    font-size: 1.5vh;
    color: #5B7B7A;
    justify-self: center;
    text-align: center;
    padding-bottom: 1vh; 
`
