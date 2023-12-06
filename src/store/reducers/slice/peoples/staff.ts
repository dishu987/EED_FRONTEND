import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    isLoading: false,
    isSuccessful: false,
    error: {},
};

export const StaffSlice = createSlice({
    name: "Staff",
    initialState,
    reducers: {
        getStaffRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getStaffSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;

        },
        getStaffFailedAction: (state: any) => {
            state.isSuccessful = false;
            state.isLoading = false;
            state.data = initialState.data;
        },
    },
});

export const {
    getStaffRequestAction,
    getStaffSuccessAction,
    getStaffFailedAction,
} = StaffSlice.actions;

export default StaffSlice;
