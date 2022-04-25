import {combineReducers} from "redux";
import conversationReducer from "./reducers/conversationReducer";
import currencyListReducer from "./reducers/currencyListReducer";

export default combineReducers({
    conversationState: conversationReducer,
    currencyState: currencyListReducer
})