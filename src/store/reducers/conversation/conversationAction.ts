import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const getConvertURL = (base:string, to:string) => {
    return `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_NOT_SECRET_EXCHANGE_API_KEY}/pair/${base}/${to}`
}

export const fetchConversation = createAsyncThunk(
    'conversation/fetchAll',
    async ({base, to} : {base:string, to:string}, thunkAPI)=>{
        const responseURL = getConvertURL(base, to)
        try {
            const response = await axios.get(responseURL)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)