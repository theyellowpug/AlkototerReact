import { SwiperSlide } from "swiper/react"
import MainCategoryCard from "../components/cards/MainCategoryCard"
import ProductCard from "../components/cards/ProductCard"
import PlaceholderImg from '../assets/categoryImages/logo.svg'


const categoryCardWrapper = (listOfCards) => {
    listOfCards.map((card,index)=>
    <SwiperSlide>
        <MainCategoryCard className={"CategoryCard"+index} cardTitle={card.title} cardImg={card.img} />
    </SwiperSlide>)
}

const productCardWrapper = (size,listOfCards) => {
    return listOfCards.map(product=>
        <SwiperSlide>
            <ProductCard key={product.id} cardId={product.id} cardSize={size} cardTitle={product.name} cardImg={PlaceholderImg} cardPrice={product.price}/>
        </SwiperSlide>
    )
}

export {
    categoryCardWrapper,
    productCardWrapper
}