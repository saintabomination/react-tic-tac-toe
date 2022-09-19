import Board from './components/Board';

import './style/reset.scss';
import './style/game.scss';

const App = (): JSX.Element =>
  (
    <div className="main-wrap">
      <Board />
    </div>
  );

export default App;
