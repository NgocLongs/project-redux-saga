import axiosService from './../commons/axiosService';
import { API_URL } from './../constants/index';

const url = 'tasks';

export const  getTasksList = () => {
    return axiosService.get(`${API_URL}/${url}`);
};