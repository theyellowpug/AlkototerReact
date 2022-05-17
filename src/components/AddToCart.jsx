import React from 'react'
import styled from 'styled-components';

export default function AddToCart() {
  return (
    <Container>
        <SmallButton>-</SmallButton>
        <SmallNum>1</SmallNum>
        <SmallButton>+</SmallButton>
        <LargeButton>Kosárba</LargeButton>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: baseline;
`;
const SmallButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin: 2px;
    font-weight: 800;
    color: #EA8C55;
    background: #FEF9F8;
    border: 1.2px solid #EA8C55;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;

    &:hover{
        cursor: pointer;
    }
`;
const SmallNum = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin: 2px;
    font-weight: 400;
    color: black;
    background: #FEF9F8;
    border: 1.2px solid #EA8C55;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;

    &:hover{
        cursor: default;
    }
`;
const LargeButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    width: 100px;
    height: 25px;
    font-weight: 600;
    color: #EA8C55;
    background: #FEF9F8;
    border: 1.2px solid #EA8C55;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;

    &:hover{
        cursor: pointer;
    }
`;
