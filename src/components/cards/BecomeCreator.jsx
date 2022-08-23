import React from 'react';
import styled from 'styled-components';
import CreatoryImg from '../../assets/LogoImg.png';

export default function BecomeCreator() {
  return (
    <Container>
        <ImgContainer>
            <img src={CreatoryImg}/>
        </ImgContainer>
        <H2>Légy te is alkotó!</H2>
        <Button>Regisztráció</Button>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 40px;
    width: 600px;
    height: 200px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

const ImgContainer = styled.div`
    border-radius: 87.5px;
    max-height: 120px;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: -60px;
`;

const H2 = styled.h2`
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
`;

const Button = styled.div`
    width: 230px;
    height: 50px;
    background: #FEF9F8;
    border: 2px solid #EA8C55;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-weight: 500;
    font-size: 22px;
    color: #EA8C55;
    &:hover{
        background-color: #EA8C55;
        color: white;
        cursor: pointer;
    }
`;