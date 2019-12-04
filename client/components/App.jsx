import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import LandingPage from '../components/LandingPage'
import ActiveGroup from '../components/ActiveGroup'



class App extends React.Component{

  render() {
  return (
    <Router>
      <div className="content">
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/group" component={ActiveGroup}/>
      </div>
    </Router>
  )
}}

export default App
