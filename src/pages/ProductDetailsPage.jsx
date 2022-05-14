import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getProductById } from '../apis/ProductApi';
import { useParams } from "react-router-dom";
import ProductDetailsCard from '../components/cards/ProductDetailsCard';

export default function ProductDetailsPage(props) {

    const {productId}= useParams()

    useEffect(()=>{
        getProductById(productId).then(response=>console.log(response.data))
    },[])
    
    return(
        <PageContainer>
            <p>{productId}</p>
            <ProductDetailsCard/>
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