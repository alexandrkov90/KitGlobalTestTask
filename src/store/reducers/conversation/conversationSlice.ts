import {createSlice} from "@reduxjs/toolkit";
import {fetchConversation} from "./conversationAction";

interface conversationState {
    loading: boolean,
    data:number,
    error: string | null
}

const initialState:conversationState = {
    loading: false,
    data: 0,
    error: null
}

export const conversationSlice = createSlice({
    name:"conversation",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchConversation.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = ''
            state.data = action.payload.conversion_rate;
        },
        [fetchConversation.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchConversation.rejected.type]: (state,  action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default conversationSlice.reducer