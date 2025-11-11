import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      state.products.push(action.payload)
    },
  },
})

export const {
  getOrder
} = orderSlice.selectors;

export const {
  addProduct
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
