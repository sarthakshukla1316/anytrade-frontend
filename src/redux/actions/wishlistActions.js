import axios from 'axios';
import * as ActionTypes from '../constants/wishlistConstant';


export const addToWishlist = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/product/${id}`);
        dispatch({ type: ActionTypes.ADD_TO_WISHLIST, payload: data});
    } catch(error) {
        console.log('Error while calling add to cart api');
    }
}


export const removeFromWishlist = (id) => async (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_FROM_WISHLIST, payload: id});
}