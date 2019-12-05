import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'
import { getGroupsByUser } from '../actions/groups'
// import {apiGetGroupsByUser} from '../api/groups'
import { getGroupMembers } from '../actions/groups'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.dispatch(getGroupsByUser(this.props.auth.user.user_id))
    }
    
    this.props.groups.map(group => {
      return this.props.dispatch(getGroupMembers(group.group_id))
    })
  }

  componentDidUpdate() {
    
  }

  render() {
    return (

      <Router>
        <Nav />
        <div className="content">
          {this.props.auth.isAuthenticated && <Route path='/' component={Dashboard} />}
          {!this.props.auth.isAuthenticated && <Route exact path="/" component={LandingPage} />}
          {!this.props.auth.isAuthenticated && <Route exact path='/login' component={Login} />}
          {!this.props.auth.isAuthenticated && <Route path='/signup' component={SignUp} />}
        </div>
        <Footer />
      </Router>

    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    auth: reduxState.auth,
    groups: reduxState.groups
  }
}


export default connect(mapStateToProps)(App)
