import logo from './logo.svg';
import './App.css';
import SeraphLogin from './Components/Seraph-Login/SeraphLogin';
import HomePage from './Components/HomePage/homepage'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <SeraphLogin/>
    </div>
  );
}

export default App;
