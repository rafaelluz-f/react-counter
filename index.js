import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import './style.css';

class App extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
