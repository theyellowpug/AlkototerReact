import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, FreeMode } from 'swiper';
import styled from 'styled-components';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function CategoriesContainer({cards}) {

    return(
        <MainContainer>
            <TitleContainer>
                <Title>Kategóriák</Title>
            </TitleContainer>
            <SliderContainer>
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
                    "@1.50": {
                      slidesPerView: 6
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
    height: 30vh;
    display: flex;
    flex-direction: row;
`
