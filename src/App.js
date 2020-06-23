import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'

class App extends Component {
  render() {
    return <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>;
  }
}

export default App;
