import './css/bootstrap.css'
import Header from './components/Header'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import DashboardAdim from './DashboardAdmin'
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Config from './utils/Config'

class App extends React.Component  {
  constructor(props) {
    super(props);

    // initially assuming that user is logged out
		let user = {
			isLoggedIn: false
		}

    // if user is logged in, his details can be found from local storage
		try {
			let userJsonString = localStorage.getItem(Config.localStorageKey);
			if (userJsonString) {
				user = JSON.parse(userJsonString);
			}
		} catch (exception) {
      console.log(JSON.stringify(exception))
    }

    // updating the state
		this.state = {
			user: user
		};

		this.authenticate = this.authenticate.bind(this);
	}

    // this function is called on login/logout
	authenticate(user) {
		this.setState({
			user: user
		});
		// updating user's details
		localStorage.setItem(Config.localStorageKey, JSON.stringify(user));
	}
  isAdmin(){
    console.log(this.state.user)
    for(var i = 0; i < this.state.user.usersGroup.length; i++){
      if(this.state.user.usersGroup[i] === 'admin')
        return true
    }
    return false
  }
  render(){
    return (
      <Router>
        <Header title={process.env.REACT_APP_NAME} user={this.state.user.usersLoggedIn ? this.state.user : undefined}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={() => <Login authenticate={this.authenticate} />}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" render={() => (
			    	this.state.user.usersLoggedIn ? 
			    	        (<Dashboard authenticate={this.authenticate} user={this.state.user} />) : 
			    	        (<Redirect to="/login" />)
          )}/>
          <Route path="/dashboard-admin" render={() => (
			    	this.state.user.usersLoggedIn && this.isAdmin() ? 
			    	        (<Dashboard authenticate={this.authenticate} user={this.state.user} />) : 
			    	        (<Redirect to="/dashboard" />)
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
