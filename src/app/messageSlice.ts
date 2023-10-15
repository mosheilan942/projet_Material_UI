import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



type messageState = {
    value: string
};

const initialState: messageState = {
    value:"Please select a project"
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        selectMessage: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
});


export const { selectMessage } = messageSlice.actions
export default messageSlice.reducer