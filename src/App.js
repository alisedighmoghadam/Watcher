import './css/main.css';
import './css/slider.css'
import './css/App.css';
import './css/popularMovies.css'
import './css/circleProgressBar.css'
import './css/suggestionOfDay.css'
import Main from './components/main';
import Navbar from './components/navbar';
function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
