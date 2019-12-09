import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navStyles">
                    <Link to='/'><img className="navbar-brand logo" style={{ width: 80 + 'px', height: 100 + "%" }} src="./wood-cutting.png" alt="splinter-logo" /></Link>
                    <Link to='/'><h1 className="title is-1">Splinter</h1></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto" style={{ 'paddingRight': 50 + 'px' }}>

                            <li className="nav-item navListItems"><Link to='/about' className="nav-link">About</Link></li>
                            {this.props.auth.isAuthenticated ?
                                <li className="nav-item navListItems"><Link to='/' className="nav-link" onClick={() => [this.props.logout(),location.reload(true)]}>Logout</Link></li> :
                                [<li className="nav-item navListItems" ><Link className="nav-link" to='/signup'>Signup</Link></li>,
                                <li className="nav-item navListItems" ><Link className="nav-link" to='/login'>Login</Link></li>]
                            }

                        </ul>
                    </div>
                </nav>


            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
        
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

