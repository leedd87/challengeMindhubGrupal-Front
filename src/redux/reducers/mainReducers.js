import { combineReducers } from 'redux'
import shoesReducer from './shoesReducer';
// import shopReducers from './shopReducers';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    shoesReducer,
    // shopReducers,
    userReducer
})

export default mainReducer