import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAdmin } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          collapsed: false
        };
        this.handleTogglerClick = this.handleTogglerClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
      }
    
      handleTogglerClick() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    
      handleNavbarClick() {
        this.setState({
          collapsed: false
        });
      }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutAdmin(this.props.history);
    }

    render() {
        const {isAuthenticated, admin} = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={admin.avatar} alt={admin.name} title={admin.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                        <font color="azure">Logout</font>
                </a>
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto text-white">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/signin">Sign In</Link>
            </li>
        </ul>
      )
        return(
          
            <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar bg-shopapp" >
                <Link className="navbar-brand text-white" to="/"><h2>ShopApp</h2></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { isAuthenticated ? authLinks : guestLinks }
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutAdmin })(withRouter(Navbar));