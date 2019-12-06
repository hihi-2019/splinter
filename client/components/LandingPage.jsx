import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
  constructor(props) {
    super(props) 
    this.state={}    
  }
  render() {
      return (
        <>
            <h1>Sick of not getting paid back?</h1>
            <h3>Signup for Splinter to keep track of who spent what</h3>
            <Link to="/register"><button type="button" className="btn btn-lg custom-button">Register</button></Link>
            <Link to="/login"><button type="button" className="btn btn-lg custom-button">Login</button></Link>
        </>
      )
  }
}

export default LandingPage