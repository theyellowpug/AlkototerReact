import React from 'react';
import styled from 'styled-components';
import MainCategoryCard from '../components/cards/MainCategoryCard';
import LatestNewsCard from '../components/cards/LatestNewsCard';
import Introduction from '../components/cards/Introduction';
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
        <React.Fragment>
            <LatestNewsCard height={40} width={85}></LatestNewsCard>
            <Introduction></Introduction>
            <CategoriesContainer title={"Kategóiák"} height={40} width={85} cards={createCategoryCardsFromMap}/>
        </React.Fragment>
    )
} 