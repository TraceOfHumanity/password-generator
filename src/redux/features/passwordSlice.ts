import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  password: "",
  passwordLength: 12,
  isIncludeUppercase: false,
  isIncludeNumbers: false,
  isIncludeSymbols: false,
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordLength: (state, action) => {
      state.passwordLength = action.payload;
    },
    setIsIncludeUppercase: (state, action) => {
      state.isIncludeUppercase = action.payload;
    },
    setIsIncludeNumbers: (state, action) => {
      state.isIncludeNumbers = action.payload;
    },
    setIsIncludeSymbols: (state, action) => {
      state.isIncludeSymbols = action.payload;
    },
  },
});

export const {
  setPassword,
  setPasswordLength,
  setIsIncludeUppercase,
  setIsIncludeNumbers,
  setIsIncludeSymbols,
} = passwordSlice.actions;

export default passwordSlice.reducer;
