import React, { Component } from 'react';
import './App.css';

import EventContainer from './components/EventContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <top className="Top">
          <div className="Top1">Upcoming Events</div>
        </top>
        <body>
          <EventContainer />
        </body>
        <bot>
          
        </bot>
      </div>
    );
  }
}

export default App;
