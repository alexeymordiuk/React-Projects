import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ItemsCart = {
    id: string;
    img: string;
    title: string;
    classes: string;
    Img: string;
    slots: string;
    price: number;
    text: string;
    count: number;
}

interface CartSliceState {
    totalPrice: number;
    items: ItemsCart[];
  }


const initialState: CartSliceState = {
    items: [],
    totalPrice: 0,
  };

  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<ItemsCart>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id);
    
          if (findItem) {
            findItem.count++;
          } else {
            state.items.push({
              ...action.payload,
              count: 1,
            });
          }
          state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
              }, 0)
        },
        minusItems(state, action: PayloadAction<string>) {
          const findItem = state.items.find(obj => obj.id === action.payload);
    
          if (findItem) {
            findItem.count--;
          }
        },
        removeItems(state, action: PayloadAction<string>) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
          state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum;
          }, 0)
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
          },
      },
    });

export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)

export const selectCart = (state: RootState) => state.cart;    

export const { addItems, removeItems, minusItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;