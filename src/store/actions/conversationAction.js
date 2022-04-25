import {CONVERSATION_START, CONVERSATION_SUCCESS, CONVERSATION_ERROR, CONVERSATION_RESULT} from "./actionTypes";


function getConvertURL(base, to){
    return `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_NOT_SECRET_EXCHANGE_API_KEY}/pair/${base}/${to}`
}

export function fetchConversation(base, to) {
    const responseURL = getConvertURL(base,to)
    return async dispatch => {
        dispatch(fetchConversationStart())

        try {
            const response = await fetch(responseURL,{
                method:"GET"
            })
            const req = await response.json()
            dispatch(fetchConversationResult(req))

        } catch (error){
            dispatch(fetchConversationError(error))
        }
        dispatch(fetchConversationSuccess())
    }
}

export function fetchConversationResult(data) {
    return {
        type: CONVERSATION_RESULT,
        data
    }
}

export function fetchConversationStart() {
    return {
        type: CONVERSATION_START
    }
}

export function fetchConversationSuccess() {
    return {
        type: CONVERSATION_SUCCESS
    }
}

export function fetchConversationError(error) {
    return {
        type: CONVERSATION_ERROR,
        error
    }
}