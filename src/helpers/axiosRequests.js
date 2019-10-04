import axios from 'axios';

export function apiCall(method, url, data){
    return axios({
        method,
        url: `http://localhost:3030/api/v1/${url}`,
        data
    });
}