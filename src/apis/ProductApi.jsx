import axios from "axios";
import {BASE_URL} from "./ApiConstants";

const URL_PREFIX="product/";

// GET
const getProductsByProductType = async (productType, numberOfPages, numberOfProducts) => {
    return await axios.get(BASE_URL + URL_PREFIX + "byProductType?productType="+productType+"&numberOfPages="+numberOfPages+"&numberOfProducts="+numberOfProducts);
}

const getProductById = async (clientId) => {
    return await axios.get(BASE_URL + URL_PREFIX + "?id=" + clientId);
}

const getProductsByClientId = async (clientId) => {
    return await axios.get(BASE_URL + URL_PREFIX + "allByClientId?clientId=" + clientId);
}

// POST
const postProduct = async (clientId, productData) => {
    let config = {
        headers: { productData }
    }
    return await axios.post(BASE_URL + URL_PREFIX + "?clientId=" + clientId, null, config);
}

export{
    getProductById,
    getProductsByProductType,
    getProductsByClientId,
    postProduct
}