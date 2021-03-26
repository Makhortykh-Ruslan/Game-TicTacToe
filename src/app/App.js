import '../App.css';
import Game from "../components/Game/GameApp";
import GameContext from "../Context/Context";


function App() {
  return (
    <div className="App">
        <GameContext>
            <Game />
        </GameContext>
    </div>
  );
}

export default App;
