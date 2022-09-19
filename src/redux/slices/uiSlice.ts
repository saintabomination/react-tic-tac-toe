import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type {
  PlayerValue,
  TileValue,
} from '../../typings/gameTypes';

interface InitialStateDefaultObject {
  currentPlayer: PlayerValue;
  boardState: TileValue[][];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  currentPlayer: Math.round(Math.random()) as PlayerValue,
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
    updateTile: (state, action: PayloadAction<[TileValue, TileValue]>) => {
      if (state.boardState[action.payload[0]][action.payload[1]] === 2) {
        state.boardState[action.payload[0]][action.payload[1]] = state.currentPlayer;
        state.currentPlayer === 0
          ? state.currentPlayer = 1
          : state.currentPlayer = 0;
      }
    },
  },
});

export const { updateTile } = uiSlice.actions;
export default uiSlice.reducer;
