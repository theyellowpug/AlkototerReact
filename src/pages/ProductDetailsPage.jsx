import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProductById } from '../apis/ProductApi';
import { useParams } from "react-router-dom";
import ProductDetailsCard from '../components/cards/ProductDetailsCard';

export default function ProductDetailsPage(props) {

    const {productId}= useParams()

    const [product, setProduct] = useState()

    useEffect(()=>{
        getProductById(productId)
            .then(response=>setProduct(response.data))
    },[])
    
    return(
        <>
            <p>{productId}</p>
            <ProductDetailsCard/>
        </>
    )
}