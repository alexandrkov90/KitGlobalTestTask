import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

function getCurrencyListURL(base:string) {
    return `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_NOT_SECRET_EXCHANGE_API_KEY}/latest/${base}`
}

export const fetchCurrencyList = createAsyncThunk(
    'currency/fetchAll',
    async (base:string, thunkAPI)=>{
        const responseURL = getCurrencyListURL(base)
        try {
            const response = await axios.get(responseURL)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)