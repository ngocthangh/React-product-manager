import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';
import { Config } from '../constants/Config';

export const actListProducts = () => {
    return dispatch => {
        callApi(Config.Endpoint.ListProduct).then(res => {
            if(res && res.status && res.status === 200) {
                let products = res.data;
                dispatch({
                    type: Types.LIST_PRODUCTS,
                    products
                });
            }else{
                dispatch({
                    type: Types.LIST_PRODUCTS,
                    products: []
                });
            }
        });
    }
}

export const actAddProduct = (product) => {
    return dispatch => {
        callApi(Config.Endpoint.ListProduct, 'POST', product).then(res => {
            if(res && res.status && res.status === 201) {
                let resProduct = res.data;
                dispatch({
                    type: Types.ADD_PRODUCT,
                    product: resProduct
                })
            } else {
                alert('Fail to add product!');
            }
        })
    }
}

export const actUpdateProduct = (product) => {
    return dispatch => {
        callApi(`${Config.Endpoint.ListProduct}/${product.id}`, 'PUT', product).then(res => {
            if(res && res.status && res.status === 200) {
                let resProduct = res.data;
                dispatch({
                    type: Types.UPDATE_PRODUCT,
                    product: resProduct
                })
            } else {
                alert('Fail to update product!');
            }
        })
    }
}

export const actDeleteProduct = (id) => {
    return dispatch => {
        callApi(`${Config.Endpoint.ListProduct}/${id}`, 'DELETE').then(res => {
            if(res && res.status && res.status === 200) {
                dispatch({
                    type: Types.DELETE_PRODUCT,
                    id
                })
            } else {
                alert('Fail to delete product!');
            }
        })
    }
}