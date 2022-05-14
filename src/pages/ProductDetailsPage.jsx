import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProductById, getProductsByClientId } from '../apis/ProductApi';
import { useParams } from "react-router-dom";
import ProductDetailsCard from '../components/cards/ProductDetailsCard';
import CardContainer from '../components/containers/CardContainer';
import { productCardWrapper } from '../utils/ContainerUtils';

export default function ProductDetailsPage(props) {

    const {productId}= useParams()

    const [product, setProduct] = useState()
    const [additionalProductsOfOwner, setAdditionalProductsOfOwner] = useState()
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        getProductById(productId)
            .then(response=>{
                setProduct(response.data)
                getProductsByClientId(response.data.ownerId)
                    .then(response2 => {
                        setAdditionalProductsOfOwner(productCardWrapper(20,response2.data))
                        setIsLoaded(true)
                    })
            })
    },[])

    
    return(
            !isLoaded ? 
            (<h1>Loading</h1>) 
            : 
            (<>
                <ProductDetailsCard/>
                <CardContainer title={"Eladó termékei"} height={32} width={90} cards={additionalProductsOfOwner} slidesPerView={2}/>
            </>)
               
    )
}