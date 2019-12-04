import React from 'react'
import {loginUser} from '../actions/login'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }


  updateDetails (e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    let { email, password } = this.state
    this.props.dispatch(loginUser({email, password}))
    .then(() => {

    })
  }

  render() {
    return (
      <div className="loginContainer">
      <div className="col-6 col-md-4">
      <form onSubmit={this.handleSubmit}>
        <h1 className='loginTitle'>Login</h1>
        <div className='form-inline'>
          <label htmlFor='email'>
            <input
              required
              className='form-control'
              placeholder='example@email.com'
              type='text'
              name='email'
              onChange={this.updateDetails}
            />
          </label>
        </div>
        <br></br>
        <div className='form-inline'>
          <label htmlFor='password'>
            <input
              required
              className='form-control'
              placeholder='Password'
              type='password'
              name='password'
              onChange={this.updateDetails}
            />
          </label>
          <div className="loginButton">
        <input className='btn btn-primary' value='Login' type='submit' />
        </div>
        </div>
    
      </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)