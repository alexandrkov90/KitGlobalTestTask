import {createSlice} from "@reduxjs/toolkit";
import {fetchCurrencyList} from "./currencyAction";

interface conversationState {
    loading: boolean,
    data: {},
    error: string | null
}

const initialState:conversationState = {
    loading: false,
    data: {},
    error: null
}

export const conversationListSlice = createSlice({
    name:"currency",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchCurrencyList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = ''
            state.data = action.payload.conversion_rates;
        },
        [fetchCurrencyList.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchCurrencyList.rejected.type]: (state,  action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default conversationListSlice.reducer