import React from 'react';
import styled from 'styled-components';

export default function Introduction() {
  return (
    <Container>
      <ImgContainer>
        <IMG src={"https://cdn.britannica.com/33/162533-131-28A4DB23/Stack-newspapers-background.jpg"}/>
      </ImgContainer>   
      <TextContainer>
        <h3>Új bejegyzés</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </TextContainer> 
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 26vh;
    display: flex;
    align-items: center;
    background: #eeeeee;
    box-shadow: 0px 0px 20px #eeeeee
    display: flex;
`;

const ImgContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 70%;
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
`;

const IMG = styled.img`
  max-height: 70%;
  max-width: 70%;
`;