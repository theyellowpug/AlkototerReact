import React from 'react';
import styled from 'styled-components';
import MainCategoryCard from '../components/cards/MainCategoryCard';
import IntroductionPanel from '../components/cards/IntroductionPanel';
import CategoriesContainer from '../components/containers/CategoriesContainer';
import PopularProductContainer from '../components/containers/PopularProductContainer';
import { categoriesMap } from '../utils/MainCategoires'
import { SwiperSlide } from 'swiper/react';
import BecomeCreator from '../components/cards/BecomeCreator';

export default function LandingPage() {

    const createCategoryCardsFromMap = 
        categoriesMap.map((category,index)=>
            <SwiperSlide>
                <MainCategoryCard className={"MainCategoryCard"+index} cardTitle={category.title} cardImg={category.img} />
            </SwiperSlide>)
    return(
        <React.Fragment>
            <Spacer/>
            <IntroductionPanel/>
            <PopularProductContainer/>
            <BecomeCreator/>
            <CategoriesContainer title={"Kategóiák"} height={40} width={85} cards={createCategoryCardsFromMap}/>
        </React.Fragment>
    )
} 

const Spacer = styled.div`
    height: 4vh;
`;