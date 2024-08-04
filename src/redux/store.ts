import { configureStore } from "@reduxjs/toolkit";
import calculationReducer from './reducer';

export const store = configureStore({
    reducer: {
        calculationReducer
    }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;