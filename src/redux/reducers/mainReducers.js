import {combineReducers} from 'redux'
import shoesReducer from '../../../src/redux/reducers/shoesReducer'
import  userReducer from '../../../src/redux/reducers/userReducer'

const mainReducer=combineReducers({
    shoesReducer,
    userReducer
})
export default mainReducer