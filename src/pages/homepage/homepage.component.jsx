import React from 'react';
import { Link } from 'react-router-dom';

// Import scss file
import './homepage.styles.scss';

class HomePage extends React.Component {

    render() {
        return (
            <>
                <header className="home-header">
                    <h1>React Agenda</h1>
                    <h2>2021</h2>
                </header>
                <main className="home-main">
                    <button>
                        <Link to="/menu">Menu</Link>
                    </button>
                </main>
            </>
        )
    }
}

export default HomePage;