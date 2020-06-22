import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage.component'

const HatsPage = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  )
}
class App extends Component {
  render() {
    return <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>;
  }
}

export default App;
