import type { TileValue } from '../typings/gameTypes';

export const convertTileValueToCharacter = (value: TileValue) => {
  switch (value) {
    case 0:
      return 'O';

    case 1:
      return 'X';

    default:
      return '';
  }
}
