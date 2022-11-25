import './css/main.css';
import './css/slider.css'
import './css/App.css';
import './css/popularMovies.css'
import './css/circleProgressBar.css'
import './css/suggestionOfDay.css'
import './css/footer.css'
import './css/notFind.css'
import './css/signUp.css'
import Main from './components/main';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NotFind from './components/notFind';
import SignUp from './components/signUp'; 
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  
  return (
    <Router>

    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route exact path='/' element={<Main></Main>}></Route>
        <Route exact path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFind></NotFind>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
