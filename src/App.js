import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom';

// Import pages
import HomePage from './pages/homepage/homepage.component';
import Menu from './pages/menu/menu.component';
import Agenda from './pages/agenda/agenda.component';

// Import css file
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/agenda" component={Agenda} />
        </Switch>
      </Router>
    )
  }
}

export default App;
