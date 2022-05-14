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
        <>
            <p>{productId}</p>
            <ProductDetailsCard/>
        </>
    )
}