import * as TaskApi from './../apis/tasks';
import * as TaskConstants from './../constants/tasks';

export const fetchListTasks = () => {
    return {
        type : TaskConstants.FETCH_TASK
    }
}

export const fetListTasksSuccess = (data) => {
    return {
        type : TaskConstants.FETCH_TASK_SUCCESS,
        payload : {
            data
        }
    }
}

export const fetchListTasksFailed = (error) => {
    return {
        type : TaskConstants.FETCH_TASK_FAILED,
        payload : {
            error
        }
    }
}

export const fetchListTasksRequest = () => {
    return (dispatch) => {
        dispatch(fetchListTasks());
        TaskApi.getTasksList().then(res => {
            const { data } = res;
            dispatch(fetListTasksSuccess(data));
        }).catch(error => {
            dispatch(fetchListTasksFailed(error));
        })
    }
}

export const searchTask = (keyword) => {
    return {
        type : TaskConstants.SEARCH_TASK,
        payload : {
            keyword 
        }
    }
}

export const searchTaskSuccess = (datas) => {
    return {
        type : TaskConstants.SEARCH_TASK_SUCCESS,
        payload : {
            datas 
        }
    }
}