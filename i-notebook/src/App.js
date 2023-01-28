import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Notestate from './context/Notestate';
import Login from './components/login/Login';
function App() {
  return (
    <>
      <Notestate>
        <Router>
        <Navbar />
          <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
