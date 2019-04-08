import * as Types from '../constants/ActionTypes';

const initialState = {by: '', value: ''};

const sort = (state=initialState, action) => {
    switch(action.type) {
        case Types.SORT_PRODUCTS:
            console.log(action);
            return {by: action.by, value: action.value};
        default: return {...state};
    }
}

export default sort;