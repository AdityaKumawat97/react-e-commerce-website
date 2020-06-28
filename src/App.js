import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'
import signInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return <div className='App'>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={signInAndSignUpPage} />
      </Switch>
    </div>;
  }
}

export default App;
