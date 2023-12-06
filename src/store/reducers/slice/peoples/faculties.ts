import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FacultyListInterface } from "../../../../interface/peoples/faculty";

const initialState: FacultyListInterface = {
    data: [],
    isLoading: false,
    isSuccessful: false,
    isExpired: false,
    error: {},
};

export const FacultySlice = createSlice({
    name: "Faculty",
    initialState,
    reducers: {
        getFacultyRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getFacultySuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.result = {};
            state.isSuccessful = true;
            state.isExpired = false;
        },
        getFacultyFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false;
            state.isLoading = false;
            state.result = action.payload;
            state.isExpired = false;
            state.data = initialState.data;
        },
    },
});

export const {
    getFacultyRequestAction,
    getFacultySuccessAction,
    getFacultyFailedAction,
} = FacultySlice.actions;

export default FacultySlice;
