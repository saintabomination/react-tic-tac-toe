import { useDispatch } from 'react-redux';

import { switchCurrentPlayer } from '../redux/slices/uiSlice';
import { convertTileValueToCharacter } from '../functions/formattingFunctions';

import type { TileValue } from '../typings/gameTypes';

type Props = {
  value: TileValue;
};

const Tile = ({ value }: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      className="tile"
      onClick={() => dispatch(switchCurrentPlayer())}  
    >
      {convertTileValueToCharacter(value)}
    </div>
  );
}

export default Tile;
