import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'



import LandingPage from '../components/LandingPage'
import ActiveGroup from '../components/ActiveGroup'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'

class App extends React.Component{

  render() {
  return (


    <Router>
      <Nav/>
      <div className="content">
        <Dashboard/>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/group" component={ActiveGroup}/>
        <Route exact path="/sign-up" component={SignUp}/>
         <Route exact path="/login" component={Login}/>
      </div>
      <Footer/>
    </Router>

  )
}}


export default App
