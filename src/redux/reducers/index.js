import { combineReducers } from 'redux';
import {PostsReducer} from './posts';

export default combineReducers({
    posts:PostsReducer
});