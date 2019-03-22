import React, { Component } from 'react';
import './App.css';

import Event from './components/Events'
import EventContainer from './components/EventContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Upcoming Events</h1>
          <EventContainer />
        </header>
        
      </div>
    );
  }
}

export default App;
