import { createSlice } from "@reduxjs/toolkit";

export interface OrderState {
  products: string[];
}

export const initialOrderState: OrderState = {
  products: ["fika", "pika"]
};

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialOrderState,
  selectors: {
    getOrder: (state) => state.products
  },
  reducers: {},
})

export const {
  getOrder
} = orderSlice.selectors;