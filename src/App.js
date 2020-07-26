import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'
import signInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
class App extends Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
