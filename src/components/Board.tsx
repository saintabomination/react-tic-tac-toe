import { useSelector } from 'react-redux';

import Tile from './Tile';

import type { RootState } from '../redux/store';

const Board = (): JSX.Element => {
  const { boardState } = useSelector((state: RootState) => state.ui);
  console.log(boardState);

  return (
    <div className="board">
      {boardState.map(
        row => row.map(
          (tile, index) => <Tile key={index} value={tile} />
        )
      )}
    </div>
  );
}

export default Board;
