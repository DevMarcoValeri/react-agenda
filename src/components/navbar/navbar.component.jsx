import React from 'react';
import { Link } from 'react-router-dom';

// Import scss file
import './navbar.styles.scss';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
        </ul>
    </nav>
)

export default Navbar;