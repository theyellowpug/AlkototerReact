import React from 'react';
import styled from 'styled-components';
import NewsPanel from '../cards/NewsPanel';

export default function IntroductionPanel({height,width}) {
  return (
    <MainContainer>
        <P>
            Üdvözlünk az alkotótéren!
        </P>
        <NewsPanel></NewsPanel>
    </MainContainer>
  )
}

const MainContainer = styled.div`
margin: 30px;
padding: 20px;
margin-top: 4vh;
width: 70%;
height: 40vh;
border-radius: 40px;
box-sizing: border-box;
box-shadow: 0px 1px 5px rgba(0, 0, 0.05, 0.30);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const P = styled.p`
    margin-top: 0vh;
    font-size: 30px;
`;
