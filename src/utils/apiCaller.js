import axios from 'axios';
import { Config } from '../constants/Config';

let callApi = (endpoint, method='GET', data=null) => {
    return axios({
        url: `${Config.ROOT_URL}/${endpoint}`,
        method,
        data
    }).catch(err => {
        console.log(err);
    })
}

export default callApi;