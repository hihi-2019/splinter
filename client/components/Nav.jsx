import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light customNavStyles">
                    <Link to='/'><img className="navbar-brand " style={{ width: 80 + 'px', height: 100 + "%" }} src="./wood-cutting.png" alt="splinter-logo" /></Link>
                    <Link to='/'><h1 className="title is-1">Splinter</h1></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto" style={{ 'paddingRight': 50 + 'px' }}>
                            <li className="nav-item navListItems"><Link to='/about' className="nav-link">About</Link></li>
                            <li className="nav-item navListItems" ><Link className="nav-link" to='/register'>Register</Link></li>
                            <li className="nav-item navListItems" ><Link className="nav-link" to='/login'>Login</Link></li>
                            {/* {auth.isAuthenticated
                                ?
                                <li className="nav-item navListItems"><Link to='/' className="nav-link" onClick={() => logout()}>Logout</Link></li>

                            : [
                                    <li className="nav-item navListItems" ><Link onClick={this.toggleBurger} className="nav-link" to='/login'>Login</Link></li>,
                                    <li className="nav-item navListItems" ><Link onClick={this.toggleBurger} className="nav-link" to='/register'>Register</Link></li>
                            ]
                        } */}
                        </ul>
                    </div>
                </nav>


            </>
        )
    }
}

    export default Nav