import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    isLoading: false,
    isSuccessful: false,
    error: {},
};

export const DemographicSlice = createSlice({
    name: "Demographic",
    initialState,
    reducers: {
        getDemographicRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getDemographicSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;

        },
        getDemographicFailedAction: (state: any) => {
            state.isSuccessful = false;
            state.isLoading = false;
            state.data = initialState.data;
        },
    },
});

export const {
    getDemographicRequestAction,
    getDemographicSuccessAction,
    getDemographicFailedAction,
} = DemographicSlice.actions;

export default DemographicSlice;
