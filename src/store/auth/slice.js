import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    name: "",
    email: "",
    password: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})

export const authReducer = authSlice.reducer;

