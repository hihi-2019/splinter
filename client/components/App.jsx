import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import LandingPage from '../components/LandingPage'




class App extends React.Component{

  render() {
  return (
    <Router>
      <div className="content">
        <Route exact path="/" component={LandingPage}/>
      </div>
    </Router>
  )
}}

export default App
