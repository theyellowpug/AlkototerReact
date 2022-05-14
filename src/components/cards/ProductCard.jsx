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
    <CardContainer cardSize={cardSize} onClick={forwardToDetailsPage}>
        <CardImgContainer cardSize={cardSize} className="mainCardItem">
            <CardImg src={cardImg} />
        </CardImgContainer>
        <CardTextContainer cardSize={cardSize}>
            <CardTitle cardSize={cardSize} className="mainCardItem">{cardTitle}</CardTitle>
            <CardPrice cardSize={cardSize} className="mainCardItem">{cardPrice} Ft</CardPrice>
        </CardTextContainer>
    </CardContainer>)
} 

const CardContainer = styled.div`
    height: ${props => props.cardSize}vh;
    width: ${props => props.cardSize/1.3}vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${props => props.cardSize/13}vh;
    border-color: #5B7B7A;
    border: 1.2px solid;
    border-radius: ${props => props.cardSize/6.5}vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.25);
    box-sizing: border-box;
    cursor: pointer;
    &:hover .mainCardItem{
        color: #EA8C55;
    }
`

const CardImgContainer = styled.div`
    width: 100%;
    height: ${props => props.cardSize/1.4}vh;
    display: flex;
    justify-content: center;
    margin-bottom: ${props => props.cardSize/26}vh;
`
const CardImg = styled.img`
    size :100%;
    border-top-left-radius: ${props => props.cardSize/6.5}vh;
    border-top-right-radius: ${props => props.cardSize/6.5}vh;
    box-sizing: border-box;
`  

const CardTextContainer = styled.div`
    width: 100%;
    height: ${props => props.cardSize/5.2}vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CardTitle = styled.div`
    font-size: ${props => props.cardSize/13}vh;
    color: #5B7B7A;
    justify-self: center;
    text-align: center;
`
const CardPrice = styled.div`
    font-size: ${props => props.cardSize/17}vh;
    color: #5B7B7A;
    justify-self: center;
    text-align: center;
    padding-bottom: ${props => props.cardSize/26}vh; 
`
