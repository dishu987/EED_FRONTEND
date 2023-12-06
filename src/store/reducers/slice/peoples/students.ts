import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { StudentListInterface } from "../../../../interface/peoples/students";


const initialState: StudentListInterface = {
    data: [],
    isLoading: false,
    isSuccessful: false,
    isExpired: false,
    error: {},
};

export const StudentSlice = createSlice({
    name: "Student",
    initialState,
    reducers: {
        getStudentRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getStudentSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;
            state.isExpired = false;
        },
        getStudentFailedAction: (state: any) => {
            state.isSuccessful = false;
            state.isLoading = false;
            state.isExpired = false;
            state.data = initialState.data;
        },
    },
});

export const {
    getStudentRequestAction,
    getStudentSuccessAction,
    getStudentFailedAction,
} = StudentSlice.actions;

export default StudentSlice;
