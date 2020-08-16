import { combineReducers } from 'redux';
import tasks from './tasks';
import uiReducers from './ui';
import modalReducer from './modal';
import { reducer as formReducer } from 'redux-form'

const myReducers = combineReducers({
    tasks,
    ui : uiReducers,
    modal : modalReducer,
    form : formReducer
});
export default myReducers;