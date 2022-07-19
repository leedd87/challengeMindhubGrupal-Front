import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import mainReducer from "../src/redux/reducers/mainReducers";

const store = configureStore({
    reducer: mainReducer,
    middleware: [thunk],
});
export default store;