import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { orderSlice } from './slices/OrderSlice';
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const rootReducer = combineSlices(orderSlice);
export const store = configureStore({
  reducer: rootReducer,
  devTools: true // process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;