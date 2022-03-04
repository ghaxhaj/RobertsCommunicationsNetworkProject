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
//this.state.user holds the data of the user being viewed with the UserProfile component


setUserProps = (props) => {
  this.setState({
    user: props
  })
}

//This is a callback function passed to the DashboardPage component that waits for the user to click on a profile to view before updating


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

//I ran a simple Router -> Switch -> Route to get my paths to hit the correct components.
//I passed the value of user to DashboardPage for the "Recently Viewed User" button
//I Passed the value of user to UserProfile so it knows which user to populate the HTML values with