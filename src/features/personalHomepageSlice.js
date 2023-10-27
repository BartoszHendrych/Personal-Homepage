import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        respositories: null,
        status: "initial",
    },
    reducers: {
        fetchRespositories: () => ({
            status: "loading",
            respositories: null,
        }),
        fetchRespositoriesSuccess: ( {payload: respositories}) =>({
            status: "success",
            respositories,
        }),
        fetchRespositoriesError: () =>({
            status: "error",
            respositories: null,        
        }),
    },
});

export const {
    fetchRespositories,
    fetchRespositoriesSuccess,
    fetchRespositoriesError,
} = personalHomepageSlice.actions;

const selectPerosnalHomepageState = state => state.personalHomepage;

export const selectRespositories = state => selectPerosnalHomepageState(state).respositories;
export const selectRespositoriesStatus = state => selectPerosnalHomepageState(state).status;

export default personalHomepageSlice.reducer;