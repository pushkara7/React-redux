import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import reducer from './store/reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;
