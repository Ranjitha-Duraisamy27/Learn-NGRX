import { createReducer, on } from "@ngrx/store";
import { decrement, increament, reset } from "./counter.actions";

export const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increament, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);
