import './App.css';
import Cities from './Components/Cities';
import Earth from './Components/Earth';
import Home from './Components/Home';
import News from './Components/News';

function App() {
  return (
    <div className="App">
        <Home/>
        <Cities/>
        <Earth/>
        <News/>
    </div>
  );
}

export default App;
