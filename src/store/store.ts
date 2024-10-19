import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>; //type state
export type AppStore = ReturnType<typeof setupStore>; // type store
export type AppDispatch = AppStore['dispatch']; //мы не можем диспачить те экшены которые не опредилили