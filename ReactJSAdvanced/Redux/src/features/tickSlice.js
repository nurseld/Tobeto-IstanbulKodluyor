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
        },
        incrementByAmount: (state, action) => {
            console.log("state", state);
            console.log("action", action);

            state.value += action.payload.val;
        }

    }
});

export const { increment, decrement, incrementByAmount } = tickSlice.actions;

export const selectTick = state => state.tick.value;

export default tickSlice.reducer;