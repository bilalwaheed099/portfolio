import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;
