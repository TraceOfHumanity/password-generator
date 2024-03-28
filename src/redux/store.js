import { configureStore } from '@reduxjs/toolkit';

import passwordSlice from './features/passwordSlice';

export const store = configureStore({
  reducer: {
    password: passwordSlice,
  },
});
