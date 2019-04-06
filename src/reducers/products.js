import * as Types from '../constants/ActionTypes';

const initialState = [];

const products = (state=initialState, action) => {
    let { products, id, product } = action;
    let index = 0;
    switch(action.type) {
        case Types.LIST_PRODUCTS:
            return products;
        case Types.ADD_PRODUCT:
            return [product, ...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            if(index >= 0){
                state[index] = product;
            }
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            if(index >= 0){
                state.splice(index, 1);
            }
            return [...state];
        default: return [...state];
    }
}

function findIndex(arr, id) {
    for(let i in arr) {
        if(arr[i].id === id) {
            return i;
        }
    }
    return -1;
}

export default products;