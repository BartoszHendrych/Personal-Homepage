import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: false,
    },
    reducers: {
        toggleTheme: state => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    },
});

export const {
    toggleTheme
} = themeSlice.actions;

const selectThemeSlice = state => state.theme;

export const selectIsDarkTheme = state => selectThemeSlice(state).isDarkTheme;

export default themeSlice.reducer;