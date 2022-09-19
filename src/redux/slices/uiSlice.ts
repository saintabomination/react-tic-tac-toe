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
  reducers: {
    switchCurrentPlayer: state => {
      state.currentPlayer === 0
        ? state.currentPlayer = 1
        : state.currentPlayer = 0;
    },
  },
});

export const { switchCurrentPlayer } = uiSlice.actions;
export default uiSlice.reducer;
