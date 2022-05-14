import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/cards/ProductCard';
import PlaceholderImg from '../assets/categoryImages/logo.svg'
import { getProductsByProductType } from '../apis/ProductApi';

export default function ProductsPage() {
    
    const [allProducts, setAllProducts] = useState();
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getProductsByProductType("ITEM", 0, 10)
            .then(response=>{
                console.log(response.data)
                setAllProducts(response.data)
            }).then(response2=>{
                setIsLoaded(true)})
    },[])

    return(
            <CardContainer>
            {
                isLoaded ?
                    allProducts.map(product=><ProductCard key={product.id} cardId={product.id} cardSize={25} cardTitle={product.name} cardImg={PlaceholderImg} cardPrice={product.price}/>)
                :
                <h1>Loading placeholder</h1> //todo: Loading icon

            }
            </CardContainer>
    )
} 

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #FEF9F8;
`
