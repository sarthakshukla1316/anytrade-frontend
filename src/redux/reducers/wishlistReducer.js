import * as ActionTypes from '../constants/wishlistConstant';


export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch( action.type ) {
        case ActionTypes.ADD_TO_WISHLIST:
            const item = action.payload;

            const exist = state.wishlistItems.find(product => product.id === item.id);

            if(exist) return;

            return {...state, wishlistItems: [...state.wishlistItems, item]};

        case ActionTypes.REMOVE_FROM_WISHLIST:
            return { ...state, wishlistItems: state.wishlistItems.filter(product => product.id !== action.payload) };

        default: 
            return state;
    }
}