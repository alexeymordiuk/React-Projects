import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Pizzas } from "../../types/pizzaFetchTypes";
import { fetchBurgers } from "./fetchBurgers";

  export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
  }

  interface PizzasSliceState {
    items: Pizzas[];
    status: Status;
  }

  const initialState: PizzasSliceState = {
    items: [],
    status: Status.LOADING,
  };

  export const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizzas[]>) {
        state.items = action.payload;
      },
    },
    extraReducers : (builder) => {
      builder.addCase(fetchBurgers.pending,(state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
      builder.addCase(fetchBurgers.fulfilled,(state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      });
      builder.addCase(fetchBurgers.rejected,(state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    }
  });

export const selectBurgerData = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
