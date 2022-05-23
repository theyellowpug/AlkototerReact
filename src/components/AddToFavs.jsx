import React from 'react'
import styled from 'styled-components';
import heartImg from '../assets/heartImg.png';
import { useState } from 'react';

export default function AddToFavs() {

    const [favorited, setFavorited] = useState(false);
    const [favoritedCounter, setFavoritedCounter] = useState(1);

    return (
    <Container>
        <LargeButton><span style={Grow}>Kedvenc</span><Heart src={heartImg}></Heart></LargeButton>
        <Num>{favoritedCounter}</Num>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: baseline;
`;

const Num = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin-left: 5px;
    font-weight: 600;
    color: #EA8C55;
    background: #FEF9F8;
    border: 1.2px solid #5B7B7A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;

    &:hover{
        cursor: default;
    }
`;
const LargeButton = styled.div`
    width: 140px;
    height: 25px;
    text-align: center;
    color: #5B7B7A;
    background: #FEF9F8;
    border: 1.2px solid #5B7B7A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;

const RemoveButton = styled.div`
    width: 140px;
    height: 25px;
    text-align: center;
    color: #7b605b;
    background: #fef8f8;
    border: 1.2px solid #5B7B7A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;

const Heart = styled.img`
    height: 70%;
    margin-right: 9px;
    flex-shrink: 4;
`;
const Grow = {
    flexGrow: "2.2"
}