import { createSlice } from "@reduxjs/toolkit";

export const tickSlice = createSlice({
    name: "tick",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = tickSlice.actions;

export const selectTick = state => state.tick.value;

export default tickSlice.reducer;