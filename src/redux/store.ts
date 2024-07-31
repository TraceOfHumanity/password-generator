import {configureStore} from "@reduxjs/toolkit";

import passwordSlice from "./slices/passwordSlice";

export const store = configureStore({
  reducer: {
    password: passwordSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
