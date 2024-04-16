import React, { Component } from 'react';
import TVC_EventForm1 from './components/TVC_EventForm1';
import TVC_EventForm2 from './components/TVC_EventForm2';
import TVC_EventForm3 from './components/TVC_EventForm3';
import TVC_EventForm4 from './components/TVC_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <TVC_EventForm1 />
          <TVC_EventForm2 />
          <TVC_EventForm3 />
          <TVC_EventForm4 name="dao thi thuy linh" />
      </div>
    );
  }
}

export default App;