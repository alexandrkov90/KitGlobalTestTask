import {
    CURRENCY_LIST_START,
    CURRENCY_LIST_SUCCESS,
    CURRENCY_LIST_ERROR,
    CURRENCY_LIST_RESULT
} from "./actionTypes";


function getCurrencyListURL(base) {
    return `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_NOT_SECRET_EXCHANGE_API_KEY}/latest/${base}`
}

export function fetchCurrencyList(base) {
    const responseURL = getCurrencyListURL(base)

    return async dispatch => {
        dispatch(fetchCurrencyListStart())

        try {
            const response = await fetch(responseURL, {
                method: "GET",
                'Content-Type': 'application/json; charset=utf-8',
            })
            const req = await response.json()
            dispatch(fetchCurrencyListResult(req.conversion_rates))

        } catch (error) {
            dispatch(fetchCurrencyListError(error))
        }
        dispatch(fetchCurrencyListSuccess())
    }
}

export function fetchCurrencyListResult(data) {
    return {
        type: CURRENCY_LIST_RESULT,
        data
    }
}

export function fetchCurrencyListStart() {
    return {
        type: CURRENCY_LIST_START
    }
}

export function fetchCurrencyListSuccess() {
    return {
        type: CURRENCY_LIST_SUCCESS
    }
}

export function fetchCurrencyListError(error) {
    return {
        type: CURRENCY_LIST_ERROR,
        error
    }
}