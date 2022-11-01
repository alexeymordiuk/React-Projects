import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterSlice {
    currentPage: number,
    categoryId: number;
}

const initialState: FilterSlice = {
   currentPage: 1,
   categoryId: 0,
  };

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
         setCurrentPage(state, action: PayloadAction<number>) {
             state.currentPage = action.payload;
        },
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
           },
        setFilters(state, action: PayloadAction<FilterSlice>) {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
           } 
    }
}) 

export const selectFilter = (state: RootState) => state.filter;

export const { setCurrentPage, setFilters, setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
