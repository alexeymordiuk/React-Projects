import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizzas } from "../../types/pizzaFetchTypes";

export const fetchBurgers = createAsyncThunk<Pizzas[], Record<string, string>>(
    "pizzas/fetchShipsStatus",
    async () => {
      const { data } = await axios.get<Pizzas[]>(
       'https://63630b2e66f75177ea3c41dc.mockapi.io/burgers'
      );
      return data;
    }
  );