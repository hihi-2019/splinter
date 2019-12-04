import React from 'react'
import { registerUserRequest } from '../actions/signUp'
import { loginError } from '../actions/login'
import { connect } from 'react-redux'


class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    }
  }
  

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  submit = (e) => {
    e.preventDefault()
    e.target.reset()
    if (this.state.confirm_password != this.state.password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUserRequest(this.state))
  }
  
  render() {
    const { auth } = this.props
    return (
      <div className="registerContainer">
        <div className="col-6 col-md-4">
          <form className="login-register-form" onSubmit={this.submit}>
            <h1 className='registerTitle'>Register</h1>
            {auth.errorMessage && <><h1><span className="badge badge-danger badge-lg">{auth.errorMessage}</span></h1><br></br></>}
            <div className="row justify-content-start">
              <div className='col-6 reg-text'>
                <label htmlFor="first_name">First Name:
              </label>
              </div>
              <div className='col-6 reg'>
                <input required className="form-control" placeholder="First Name" type="text" name="first_name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="row justify-content-start">
              <div className='col-6 reg-text'>
                <label htmlFor="lastName">Last Name:
              </label>
              </div>
              <div className='col-6 reg'>
                <input required className="form-control" placeholder="Last Name" type="text" name="last_name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="row justify-content-start">
              <div className='col-6 reg-text'>
                <label htmlFor="lastName">Email:
              </label>
              </div>
              <div className='col-6 reg'>
                <input required className="form-control" placeholder="Email" type="text" name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="row justify-content-start">
              <div className='col-6 reg-text'>
                <label htmlFor="password">Password
            </label>
              </div>
              <div className='col-6 reg'>
                <input required className="form-control" placeholder="Password" type="password" name="password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="row justify-content-start">
              <div className='col-6 reg-text'>
                <label htmlFor="confirm_password">Confirm Password
              </label>
              </div>
              <div className='col-6 reg'>
                <input required className="form-control" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="registerButton">

              <input className="btn btn-primary" value="Register" type="submit" />
            </div>
          </form>
        </div>
      </div >
    )
  }
}



const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(SignUp)

