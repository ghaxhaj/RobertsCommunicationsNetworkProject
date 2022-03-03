import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import NavBar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import DashboardPage from './Components/DashboardPage'
import UserProfile from './Components/UserProfile'

class App extends React.Component {

state = {
  user: null
}


setUserProps = (props) => {
  this.setState({
    user: props
  })
}


render(){
  
  return (

 <Router>

    <NavBar />
  
    <Switch>
      <Route exact path="/"><LandingPage /></Route>
      <Route path="/dashboard"><DashboardPage {...this.state.user} passedFunction={this.setUserProps}/></Route>
      <Route path="/user/:id"><UserProfile {...this.state.user}/></Route>
    </Switch>

  </Router>
  )}
}

export default App;

//Testing to check that pushing changes to the master branch works correctly
