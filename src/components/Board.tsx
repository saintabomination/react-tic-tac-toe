import { useSelector } from 'react-redux';

import Tile from './Tile';

import type { RootState } from '../redux/store';
import type { TileValue } from '../typings/gameTypes';

const Board = (): JSX.Element => {
  const { boardState } = useSelector((state: RootState) => state.ui);

  return (
    <div className="board">
      {boardState.map(
        (row, rowIndex) => row.map(
          (tile, columnIndex) => (
            <Tile
              key={columnIndex}
              position={[rowIndex as TileValue, columnIndex as TileValue]}
              value={tile}
            />
          )
        )
      )}
    </div>
  );
}

export default Board;
