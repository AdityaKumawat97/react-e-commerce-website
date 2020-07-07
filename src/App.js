import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'
import signInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, ()=> {
            console.log(this.state.currentUser)
          })
        })
      }
      else{
        this.setState({ currentUser: null })
      }
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
