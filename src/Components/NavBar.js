import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/NavBar.css';

function NavBar(){
    return (
        <nav className="navbar">
            <h1>Overload.io</h1>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/workouts'>Workouts</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;