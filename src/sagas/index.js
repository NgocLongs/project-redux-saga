import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskTypes from './../constants/tasks';
import { getTasksList } from './../apis/tasks';
import { STATUS_CODE } from './../constants/index';
import { fetchListTasksFailed, fetListTasksSuccess, searchTaskSuccess } from './../actions/tasks';
import { showLoading, hideLoading } from './../actions/ui';

function* watchFetchListTasksAction() {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const res = yield call(getTasksList)
    const { status, data } = res;
    if(status === STATUS_CODE.SUCCESS) {
        yield put(fetListTasksSuccess(data));
    } else {
        yield put(fetchListTasksFailed(data))
    }
    yield delay(1000);
    yield put(hideLoading());
}

function* watchCreateTaskAction() {

}

function* searchTaskSaga({ payload }) {
    yield delay(1000);
    const { keyword } = payload;
    const list = yield select(state => state.tasks.listTask);
    const result = list.filter(task => 
        task.title.trim().toLowerCase().includes(
            keyword.trim().toLowerCase()
        )
    );
    yield put(searchTaskSuccess(result));
}

function* rootSaga() {
    yield fork(watchFetchListTasksAction);
    yield fork(watchCreateTaskAction);
    yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga)
}

export default rootSaga;