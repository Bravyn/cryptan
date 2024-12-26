import logo from './logo.jpeg';
//import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import './components/NavBar.jsx'
import Intro from './components/Intro.jsx'
import NavBar from './components/NavBar.jsx';
import Services from './components/Services.jsx'
import SignUp from './components/LoginForm.jsx'
//import axios from 'axios'

const App = (() => {
  return (
    <div>
      <NavBar />
      <Intro />
       <SignUp/>
    </div>


  )
});

export default App;
