import { increment, decrement, incrementRandom } from './../actions/counterActions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { counter: 0 }

export const counterReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state) => {
        state.counter++;
    })
    .addCase(decrement, (state) => {
        state.counter--;
    })
    .addCase(incrementRandom, (state, action) => {
        state.counter += action.payload;
    })
});