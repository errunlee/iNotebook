import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Textform from './components/Textform';
function App() {
  return (
    <>
  <Nav/>
  <Intro description='Hello, Welcome to Text Utils App. Enjoy.'/>
  <div className="container">
  <Textform/>
  </div>
    </>
  );
}

export default App;
