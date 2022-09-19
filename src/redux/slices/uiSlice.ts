import { createSlice } from '@reduxjs/toolkit';

import type {
  PlayerValue,
  TileValue,
} from '../../typings/gameTypes';

interface InitialStateDefaultObject {
  currentPlayer: PlayerValue;
  boardState: TileValue[][];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  currentPlayer: 0,
  boardState: [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
  ],
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
