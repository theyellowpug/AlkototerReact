import React from 'react';
import styled from 'styled-components';

export default function LatestNewsCard({height,width}) {
  return (
    <MainContainer>
        <Block1>
            <h4>Legfrissebb bejegyzés:</h4>
        </Block1>
        <span>
            <h5>Bejegyzés címe!</h5>
            <P>Integer lacinia ex quis fermentum rutrum. Cras a eleifend sem. Nunc viverra vel elit eu gravida.
                Nullam at efficitur risus. Sed sed fermentum ante. Nulla facilisi. Etiam mattis tortor vitae blandit mollis.
                Aliquam nec laoreet dolor. Fusce eu semper ex. Quisque congue est eu sem sollicitudin, id accumsan elit dignissim.
                Nullam ornare diam et finibus tempus. Cras a bibendum eros, eget maximus ligula. Nunc ut ultrices nisl.
                Suspendisse feugiat ligula et elit dapibus pellentesque.
            </P>
        </span>
    </MainContainer>
  )
}

const Block1 = styled.span`
    width: 45%;
`

const MainContainer = styled.div`
margin: 30px;
padding: 20px;
margin-top: 4vh;
width: 70%;
height: 17vh;
border-radius: 40px;
box-sizing: border-box;
box-shadow: 0px 3px 3px rgba(0, 0, 0.05, 0.30);
display: flex;
overflow: hidden;
`
const P = styled.p`
    margin-top: -10px;
`;
