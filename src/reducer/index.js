import {combineReducers} from 'redux';
import {addTextReducer} from '../reducer/addTextReducer';
export default combineReducers({
    todo_Text:addTextReducer
})