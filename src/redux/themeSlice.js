import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('themeStorage')?JSON.parse(localStorage.getItem('themeStorage')):'Magenta';

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        changeTheme: (state,action)=>{

            state = action.payload;
            localStorage.setItem('themeStorage',JSON.stringify(state));

            return state;

        }
    }

})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;