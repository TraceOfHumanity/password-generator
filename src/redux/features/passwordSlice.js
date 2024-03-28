import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
  passwordLength: 12,
  includeUppercase: false,
  includeNumbers: false,
  includeSymbols: false,
  avoidDuplicates: false,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
    },
    setPasswordLength(state, action) {
      state.passwordLength = action.payload;
    },
    setIncludeUppercase(state, action) {
      state.includeUppercase = action.payload;
    },
    setIncludeNumbers(state, action) {
      state.includeNumbers = action.payload;
    },
    setIncludeSymbols(state, action) {
      state.includeSymbols = action.payload;
    },
    setAvoidDuplicates(state, action) {
      state.avoidDuplicates = action.payload;
    },
  },
});

export const {
  setPassword,
  setPasswordLength,
  setIncludeUppercase,
  setIncludeNumbers,
  setIncludeSymbols,
  setAvoidDuplicates,
} = passwordSlice.actions;

export default passwordSlice.reducer;
