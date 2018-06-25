import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import DummyInput from '../DummyInput/DummyInput';
import AccessoriesList from '../../containers/Accessories_list';

class App extends Component {
  render() {
    return (
      <div>
        <DummyInput />
        <AccessoriesList />
      </div>
    );
  }
}

export default App;
