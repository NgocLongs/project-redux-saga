import * as TaskActions from './../constants/tasks';
import { ToasError } from '../commons/toasHelper';

const initialState = {
    listTask: []
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case TaskActions.FETCH_TASK:
            return {
                ...state,
                listTask: []
            }
        case TaskActions.FETCH_TASK_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                listTask: data
            }
        case TaskActions.FETCH_TASK_FAILED:
            const { error } = action.payload;
            ToasError(error);
            return {
                ...state,
                listTask: []
            }
        case TaskActions.SEARCH_TASK_SUCCESS:
            const { datas } = action.payload;
            return {
                ...state,
                listTask: datas
            }
        case TaskActions.ADD_TASK : 
            return {
                ...state
            }
        case TaskActions.ADD_TASK_SUCCESS :
            const { task } = action.payload;
            return {
                ...state,
                listTask : [task].concat(state.listTask),
            }
        case TaskActions.ADD_TASK_FAILED :
            const errors = action.payload.error;
            ToasError(errors);
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default tasks;