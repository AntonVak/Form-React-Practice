import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    authForm: {
        firstName: "",
        lastName: "",
        email: "",
        files:[],
       
    },  
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateAuthForm: (state, action) => {
            // Обновляем поля authForm на основе данных из action.payload
            state.authForm = { ...state.authForm, ...action.payload };
          },
    }
})
export const { updateAuthForm } = authSlice.actions;
export const authReducer = authSlice.reducer;

