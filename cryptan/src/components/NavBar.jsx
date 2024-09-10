
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const NavBar = (()=> {
    return(
        <nav className="navbar">
        <div className="logo">Kiimbo Tours</div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="LoginForm">Contact</a></li>
            
            
        </ul>
        <div class="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
    )
})

export default NavBar;