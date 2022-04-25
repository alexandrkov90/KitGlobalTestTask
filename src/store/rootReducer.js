import {combineReducers} from "redux";
import conversationReducer from "./reducers/conversationReducer";

export default combineReducers({
    conversationState: conversationReducer,
})