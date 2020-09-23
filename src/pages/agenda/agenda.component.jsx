import React from 'react';

// Import components
import Navbar from '../../components/navbar/navbar.component';
import Day from '../../components/day/day.component';
import NoteEditor from '../../components/editor/editor.component';

// Import scss file
import './agenda.styles.scss';

class Agenda extends React.Component {

    render() {
        return (
            <div id="agenda-grid-container">
                <Navbar />
                <Day />
                <NoteEditor />
            </div>
        )
    }
}

export default Agenda;