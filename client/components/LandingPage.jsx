import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="landingPage titleText animated fadeIn">
          <img src="money.png"></img>
          <h1 >Sick of not getting paid back?</h1>
          <h3>Sign up for Splinter to keep track of who spent what.</h3>
          <div className="">
            <Link to="/signup"><button type="button" className="landingButtons btn btn-lg custom-button">Sign Up</button></Link>
            <Link to="/login"><button type="button" className="landingButtons btn btn-lg custom-button">Log In</button></Link>
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage