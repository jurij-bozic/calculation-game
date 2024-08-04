import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "./store";

export type PerformedCalculation = {
    firstNumToSum: number,
    secondNumToSum: number,
    enteredSum: number,
    isCorrectSum: boolean
}

const initialState: Array<PerformedCalculation> = [];

export const calculationSlice = createSlice({
  name: 'performedCalculation',
  initialState,
  reducers: {
    addCalculation: (state, action: PayloadAction<PerformedCalculation>) => {
    //   state = [...state, action.payload];
    state.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCalculation } = calculationSlice.actions;

export const calculationSelector = (state: RootState) => state.calculationReducer;

export default calculationSlice.reducer