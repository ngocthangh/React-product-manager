import * as Types from '../constants/ActionTypes';

const initialState = [];

const products = (state=initialState, action) => {
    switch(action.type) {
        case Types.LIST_PRODUCTS:
            console.log(action);
            let { products } = action;
            return products;
        default: return [...state];
    }
}

export default products;