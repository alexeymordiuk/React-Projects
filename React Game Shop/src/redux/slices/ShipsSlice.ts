import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchShips = createAsyncThunk<Ships[], Record<string, string>>(
    "ships/fetchShipsStatus",
    async (params) => {
      const { currentPage, category } = params;
      const { data } = await axios.get<Ships[]>(
        `https://634ed3d7f34e1ed8269753e9.mockapi.io/items?page=${currentPage}&limit=6${category}`
      );
      return data;
    }
  );

  export type SearchShipsParams = {
    currentPage: string;
    category: string;
  }

  type Ships = {
    id: string,
    img: string,
    title: string,
    classes: string,
    Img: string,
    slots: string,
    price: number,
    text: string
  }

  export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
  }

  interface ShipsSliceState {
    items: Ships[];
    status: Status;
  }

  const initialState: ShipsSliceState = {
    items: [],
    status: Status.LOADING,
  };

  export const shipsSlice = createSlice({
    name: "ships",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Ships[]>) {
        state.items = action.payload;
      },
    },
    extraReducers : (builder) => {
      builder.addCase(fetchShips.pending,(state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
      builder.addCase(fetchShips.fulfilled,(state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      });
      builder.addCase(fetchShips.rejected,(state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    }
  });

export const selectShipsData = (state: RootState) => state.ships;

export const { setItems } = shipsSlice.actions;

export default shipsSlice.reducer;
