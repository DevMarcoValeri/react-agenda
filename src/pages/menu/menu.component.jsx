import React from 'react';
import { Link } from 'react-router-dom';

// Import scss file
import './menu.styles.scss';

class Menu extends React.Component {

    render() {
        return (
            <>
                <header className="menu-header">
                    <h1>Menu</h1>
                </header>
                <main className="menu-main">
                    <button><Link to="/agenda">Agenda</Link></button>
                </main>
            </>
        )
    }
}

export default Menu;