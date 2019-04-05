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