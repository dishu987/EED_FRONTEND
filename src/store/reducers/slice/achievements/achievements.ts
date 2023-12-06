import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    isLoading: false,
    isSuccessful: false,
    error: {},
};

export const AchievementsSlice = createSlice({
    name: "Achievements",
    initialState,
    reducers: {
        getAchievementsRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAchievementsSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;

        },
        getAchievementsFailedAction: (state: any) => {
            state.isSuccessful = false;
            state.isLoading = false;
            state.data = initialState.data;
        },
    },
});

export const {
    getAchievementsRequestAction,
    getAchievementsSuccessAction,
    getAchievementsFailedAction,
} = AchievementsSlice.actions;

export default AchievementsSlice;
