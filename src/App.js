import "./css/main.css";
import "./css/slider.css";
import "./css/App.css";
import "./css/popularMovies.css";
import "./css/circleProgressBar.css";
import "./css/suggestionOfDay.css";
import "./css/footer.css";
import "./css/notFind.css";
import "./css/signUp.css";
import "./css/signIn.css";
import "./css/userDashboard.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFind from "./components/notFind";
import SignUp from "./components/signUp";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/signIn";
import UserDashboard from "./components/userDashboard";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/dashboard"
            element={<UserDashboard></UserDashboard>}
          ></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/*" element={<NotFind></NotFind>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
