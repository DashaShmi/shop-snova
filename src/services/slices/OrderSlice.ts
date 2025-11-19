import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ALL_PRODUCTS, type IProduct } from "../../pages/data/ALL_PRODUCTS";

export interface OrderState {
  products: IProduct[];
}

export const initialOrderState: OrderState = {
  products: [
    ...ALL_PRODUCTS.slice(0, 5)
  ]
};

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialOrderState,
  selectors: {
    getOrder: (state) => state.products
  },

  reducers: {

    addProduct: (state, action: PayloadAction<IProduct>) => {
      // debugger
      state.products.push(action.payload)
    },

    deleteProduct: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.products.findIndex((x) => x.id === action.payload.id);
      state.products.splice(index, 1);

    }
  },
})

export const {
  getOrder
} = orderSlice.selectors;

export const {
  addProduct,
  deleteProduct,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
