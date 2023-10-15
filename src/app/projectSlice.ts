import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



type projectState = {
    value: string[]
};

const initialState: projectState = {
    value: ["Website", "Mobile App", "Conference"]
};

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        selectProject: (state, action: PayloadAction<string>) => {
            state.value = [...state.value, action.payload]
        },
    },
});


export const { selectProject } = projectSlice.actions
export default projectSlice.reducer