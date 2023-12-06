import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    isSuccessful: false,
    error: {},
};

export const ResearchProjectSlice = createSlice({
    name: "ResearchProject",
    initialState,
    reducers: {
        getResearchProjectRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getResearchProjectSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;
        },
        getResearchProjectFailedAction: (state: any) => {
            state.isSuccessful = false;
            state.isLoading = false;
            state.data = initialState.data;
        },
    },
});

export const {
    getResearchProjectRequestAction,
    getResearchProjectSuccessAction,
    getResearchProjectFailedAction,
} = ResearchProjectSlice.actions;

export default ResearchProjectSlice;
