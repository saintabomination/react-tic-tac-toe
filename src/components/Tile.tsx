import { useDispatch } from 'react-redux';

import { updateTile } from '../redux/slices/uiSlice';
import { convertTileValueToCharacter } from '../functions/formattingFunctions';

import type { TileValue } from '../typings/gameTypes';

type Props = {
  position: [TileValue, TileValue];
  value: TileValue;
};

const Tile = ({ position, value }: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      className="tile"
      onClick={() => dispatch(updateTile(position))}  
    >
      {convertTileValueToCharacter(value)}
    </div>
  );
}

export default Tile;
