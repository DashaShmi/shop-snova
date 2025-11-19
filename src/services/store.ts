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
export default store;







interface Animal {
  name: string;
}


function animalFactory(text: string): Animal {
  const animal: Animal = { name: `животное:${text}` };
  return animal
}

const dog1: Animal = { name: "животное:собака" };
const cat1: Animal = { name: "животное:кот" };

const dog2: Animal = animalFactory("собака");
const cat2: Animal = animalFactory("кот");