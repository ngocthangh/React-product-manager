import { combineReducers } from 'redux';
import products from './products';
import search from './search';
import sort from './sort';

export const appReducers = combineReducers({
    products,
    search,
    sort
});