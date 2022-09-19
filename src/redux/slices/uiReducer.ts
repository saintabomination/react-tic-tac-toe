import { createSlice } from '@reduxjs/toolkit';

interface InitialStateDefaultObject {
  currentPlayer: 0 | 1;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  currentPlayer: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {},
});

export default uiSlice.reducer;
