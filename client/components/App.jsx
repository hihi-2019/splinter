import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import LandingPage from '../components/LandingPage'
import ActiveGroup from '../components/ActiveGroup'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'
import { saveGroupsByUser } from '../actions/groups'
import { getGroupsByUser } from '../api/groups'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
   
    if(this.props.auth.isAuthenticated){
      getGroupsByUser(this.props.auth.user.user_id)
      .then((data) => {
          this.props.dispatch(saveGroupsByUser(data))
      })
    
    }
  }

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

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}


export default connect(mapStateToProps)(App)
