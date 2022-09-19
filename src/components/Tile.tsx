import { useDispatch } from 'react-redux';

import { switchCurrentPlayer } from '../redux/slices/uiSlice';

const Tile = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      className="tile"
      onClick={() => dispatch(switchCurrentPlayer())}  
    />
  );
}

export default Tile;
