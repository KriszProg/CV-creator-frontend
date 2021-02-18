import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';

function NavBar() {
    return (
        <header className='navbar-header'>
            <ul className='navbar-list'>
                <li className='navbar-list-item'>
                    <Link className='navbar-link' to='/'>HOME</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link className='navbar-link' to='/add'>CREATE CV</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link className='navbar-link' to='/about'>ABOUT</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;
