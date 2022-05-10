import React from 'react';
import styled from 'styled-components';

export default function MainCategoryCard({cardTitle,cardImg}) {
    return(
    <CardContainer>
        <CardTitleContainer>
            <CardTitle className="mainCardItem">{cardTitle}</CardTitle>
        </CardTitleContainer>
        <CardImgContainer className="mainCardItem">
            <CardImg src={cardImg} />
        </CardImgContainer>
    </CardContainer>)
} 

const CardContainer = styled.div`
    width: 26vh;
    height: 23vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vh;
    cursor: pointer;
    &:hover .mainCardItem{
        color: #EA8C55;
    }
`

const CardTitleContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
`

const CardTitle = styled.div`
    font-size: 2.5vh;
    color: #5B7B7A;
    justify-self: center;
    padding-bottom: 10vh;      
`

const CardImgContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    border-color: #5B7B7A;
    border: 1.2px solid;
    border-radius: 50%;
    box-sizing: border-box;
    justify-content: center;
`

const CardImg = styled.img`
    
`