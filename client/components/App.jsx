import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import LandingPage from '../components/LandingPage'
import Nav from '../components/Nav'
import Footer from '../components/Footer'




class App extends React.Component{

  render() {
  return (
    <Router>
      <Nav/>
      <div className="content">
        <Route exact path="/" component={LandingPage}/>
      </div>
      <Footer/>
    </Router>
  )
}}

export default App
