import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import '../../ReactSlick.css'


export default function CategoriesContainer({cards}) {
    const responsiveSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        lazyLoad: true
  }
    return(
        <MainContainer>
            <TitleContainer>
                <Title>Kategóriák</Title>
            </TitleContainer>
            {cards ?
                <SliderContainer>
                    <Slider {...responsiveSettings}>           
                        {cards}
                    </Slider>
                </SliderContainer>
                :
                <p>Loading</p> 
            }
      </MainContainer>
    )
}  

const MainContainer = styled.div`
    width: 85%;
    height: 40vh;
    display: flex; 
    flex-direction: column;
    background-color: #FFFFFF;
    margin: 5vh;
    border-radius: 4vh;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.25);
    justify-content: start;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 5vh;
    justify-content: center;
    display: flex;
    margin-bottom: 3vh;
    margin-top: 3vh;
`

const Title = styled.p`
    font-size: 4vh;
    color: #5B7B7A;
    align-self: center;
`

const SliderContainer = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
`
