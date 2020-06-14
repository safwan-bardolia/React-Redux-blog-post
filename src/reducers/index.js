import {combineReducers} from 'redux';
import fetchPostReducer from './fetchPostReducer';
import fetchUserReducer from './fetchUserReducer';

export default combineReducers ({
    // posts holds all the data that fetchPostReducer returns ()  (i.e state.posts)
    posts: fetchPostReducer,
    userHeader: fetchUserReducer
})