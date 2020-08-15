import { combineReducers } from 'redux';
import tasks from './tasks';
import uiReducers from './ui';

const myReducers = combineReducers({
    tasks,
    ui : uiReducers
});
export default myReducers;