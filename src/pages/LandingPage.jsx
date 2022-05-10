import React from 'react';
import styled from 'styled-components';
import MainCategoryCard from '../components/cards/MainCategoryCard';
import CategoriesContainer from '../components/containers/CategoriesContainer';
import { categoriesMap } from '../utils/MainCategoires'
import { SwiperSlide } from 'swiper/react';

export default function LandingPage() {

    const createCategoryCardsFromMap = 
        categoriesMap.map((category,index)=>
            <SwiperSlide>
                <MainCategoryCard className={"MainCategoryCard"+index} cardTitle={category.title} cardImg={category.img} />
            </SwiperSlide>)
    return(
        <PageContainer>
            <CategoriesContainer cards={createCategoryCardsFromMap}/>
        </PageContainer>
    )
} 

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FEF9F8;
    align-items: center;
`