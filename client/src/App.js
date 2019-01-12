import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/SignUpLogin/Login'
import axios from 'axios'
class App extends Component {

  state = {
    signedIn: false
  }

  signIn = async (email, password) => {
    const payload = {
      email,
      password
    }
    try {
      const res = await axios.post('/auth/sign_in', payload)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  render() {

    const HomeWrapper = (props) => {
      return <Home {...props} />
    }

    const LoginWrapper = (props) => {
      return <Login {...props} signIn={this.signIn} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/login' render={LoginWrapper} />
              <Route exact path='/' render={HomeWrapper} />
            </Switch>
            {this.state.signedIn ? <Redirect to='/' /> : <Redirect to='/login' />}
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
