import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/Nav'
import Counter from './components/Counter';
import Apipull from './components/ApiPull';

function App() {
  return (
    
      <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>
          <Nav/>
        </Router>

        <Counter/>

        
      </header>
    </div>
   
    
  );
}

export default App;
