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
        <CategoriesContainer title={"Kategóiák"} height={40} width={85} cards={createCategoryCardsFromMap}/>
    )
} 
