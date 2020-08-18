import axiosService from './../commons/axiosService';
import { API_URL } from './../constants/index';
import qs from 'query-string';

const url = 'tasks';

export const  getTasksList = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_URL}/${url}${queryParams}`);
};

export const addTask = (data) => {
    return axiosService.post(`${API_URL}/${url}`, data);
}