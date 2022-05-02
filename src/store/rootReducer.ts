import {combineReducers} from "redux";
import conversationReducer from "./reducers/conversation/conversationSlice";
import currencyListReducer from "./reducers/currencyList/currencyListSlice";

export const rootReducer = combineReducers({
    conversationState: conversationReducer,
    currencyState: currencyListReducer
})