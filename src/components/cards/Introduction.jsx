import React from 'react';
import styled from 'styled-components';

export default function Introduction() {
  return (
    <Container>
        <h3 style={Bright}>Üdvözlünk az alkotótér világában!</h3>
        <p style={Elegant}>"üdvözlünk az alkotóteren?", "üdvözlünk az alkotótéren?"" nem tudom egyik sem okés, de ez a "világában" meg hát na... na jó majd átírjuk addig is kell placeholder.</p>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #5c5c5c13;
    box-shadow: 0px 0px 3px 3px #5c5c5c13;
`;

const Bright = {
    color: '#2889b9'
}


const Elegant = {
    color: '#EA8C55'
}