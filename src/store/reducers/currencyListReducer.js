import {CURRENCY_LIST_START, CURRENCY_LIST_SUCCESS, CURRENCY_LIST_ERROR, CURRENCY_LIST_RESULT} from "../actions/actionTypes";

const currencyListState = {
    loading: false,
    data: null,
    error: null
}

export default function currencyListReducer(state=currencyListState,action){
    switch (action.type){
        case CURRENCY_LIST_START :
            return {
                ...state,
                loading: true
            }
        case CURRENCY_LIST_SUCCESS :
            return {
                ...state,
                loading: false
            }

        case CURRENCY_LIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CURRENCY_LIST_RESULT:
            return {
                ...state,
                data: action.data
            }
        default : return state
    }
}