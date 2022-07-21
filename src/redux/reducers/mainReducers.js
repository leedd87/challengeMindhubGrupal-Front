import {combineReducers} from 'redux'
import shoesReducer from '../../../src/redux/reducers/shoesReducer';
import shopReducer from '../reducers/shopReducers';

const mainReducer=combineReducers({
    shoesReducer,
    shopReducer
})
export default mainReducer