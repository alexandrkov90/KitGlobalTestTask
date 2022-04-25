import {
    CONVERSATION_START,
    CONVERSATION_SUCCESS,
    CONVERSATION_ERROR,
    CONVERSATION_RESULT
} from "../actions/actionTypes";

const conversationState = {
    loading: false,
    data: null,
    error: null
}

export default function conversationReducer(state = conversationState, action) {
    switch (action.type) {
        case CONVERSATION_START :
            return {
                ...state,
                loading: true
            }
        case CONVERSATION_SUCCESS :
            return {
                ...state,
                loading: false
            }

        case CONVERSATION_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CONVERSATION_RESULT:
            return {
                ...state,
                data: action.data
            }
        default :
            return state
    }
}