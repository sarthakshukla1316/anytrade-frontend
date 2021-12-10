import axios from 'axios';
import * as action from '../constants/productConstant';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data});


    } catch(error) {
        dispatch({ type: action.GET_PRODUCT_FAIL, payload: error.response});
    }
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.response});
    }
}


export const getProductByCategory = (category) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/category/${category}`);
        dispatch({ type: action.GET_PRODUCT_CATEGORY_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: action.GET_PRODUCT_CATEGORY_FAIL, payload: error.response});
    }
}