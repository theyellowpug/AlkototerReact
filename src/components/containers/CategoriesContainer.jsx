import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, FreeMode } from 'swiper';
import styled from 'styled-components';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../Swiper.css'


export default function CategoriesContainer({title,height,width,cards}) {

    return(
        <MainContainer size={height} width={width}>
            <TitleContainer size={height}>
                <Title size={height}>{title}</Title>
            </TitleContainer>
            <SliderContainer size={height}>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Lazy, FreeMode]}
                spaceBetween={0}
                slidesPerView={7}
                pagination={{ clickable: true }}
                freeMode={true}
                loop={true}
                lazy={true}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 2
                    },
                    "@0.60": {
                      slidesPerView: 3,
                    },
                    "@1.00": {
                      slidesPerView: 4
                    },
                    "@1.25": {
                      slidesPerView: 6
                    },
                    "@1.50": {
                        slidesPerView: 7
                      }
                  }}
                >
                    {cards}
                </Swiper>
            </SliderContainer>
        </MainContainer>            
    )
}  

const MainContainer = styled.div`
    width: ${props => props.width}%;
    height: ${props => props.size}vh;
    display: flex; 
    flex-direction: column;
    background-color: #FFFFFF;
    margin: ${props => props.size/8}vh;
    border-radius: ${props => props.size/10}vh;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.25);
    justify-content: start;
`

const TitleContainer = styled.div`
    width: 100%;
    height: ${props => props.size/8}vh;
    justify-content: center;
    display: flex;
    margin-bottom: ${props => props.size/16}vh;
    margin-top: ${props => props.size/16}vh;
`

const Title = styled.p`
    font-size: ${props => props.size/10}vh;
    color: #5B7B7A;
    align-self: center;
`

const SliderContainer = styled.div`
    width: 100%;
    height: ${props => props.size*3/4}vh;
    display: flex;
    flex-direction: row;
`