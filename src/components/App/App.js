import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import DummyInput from '../DummyInput/DummyInput';
import AccessoriesList from '../../containers/Accessories_list';
import ActiveAccessory from '../../containers/Active_accessories';
import ItemsGrid from '../../containers/Items_grid/Items_grid';
import AppHeader from '../AppHeader/AppHeader';
import SideBar from '../SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <SideBar />
        {/* <DummyInput />
        <AccessoriesList />
        <ActiveAccessory /> */}
      </div>
    );
  }
}

export default App;
