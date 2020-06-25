import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'
import signInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={signInAndSignUpPage} />
      </Switch>
    </div>;
  }
}

export default App;
