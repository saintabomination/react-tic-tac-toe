import { useSelector } from 'react-redux';

import Board from './components/Board';

import './style/reset.scss';
import './style/game.scss';

import type { RootState } from './redux/store';

const App = (): JSX.Element => {
  const { currentPlayer } = useSelector((state: RootState) => state.ui);

  return (
    <div className="main-wrap">
      <p>Current Player: {currentPlayer === 0 ? 'O' : 'X'}</p>
      <Board />
    </div>
  );
}

export default App;
