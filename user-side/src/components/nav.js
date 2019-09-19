import React from 'react';
import { Link, BrowserRouter , withRouter } from 'react-router-dom';
import {
  Container, FormInline, NavbarToggler, NavbarNav, Navbar,
  NavbarBrand, Collapse, NavItem, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'mdbreact';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import store from '../store';
import { logoutUser } from '../actions/authentication';
import axios from 'axios';
import '../App.css';

class Nav extends React.Component {

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
    this.props.logoutUser(this.props.history);
  }

  

  myFunction = ((props) => {
     if (this.props.auth.isAuthenticated === true) {
      this.props.history.push("/cart");
     }
     else {
     alert("please login first so you can view cart ")
    }
  });

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
          <img src={user.avatar} alt={user.name} title={user.name}
            className="rounded-circle"
            style={{ width: '25px', marginRight: '5px' }} />
          <font color="azure">Logout</font>
        </a>
      </ul>
    )
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/register" ><font color="azure">Sign Up</font></a>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login" ><font color="azure">Sign In</font></a>
        </li>
      </ul>
    )
    return (

      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Container>

              <Navbar className="navbar fixed-top navbar-expand-lg  navbar-light scrolling-navbar cyan">
                <NavbarBrand>
                  <h2><a href="/" ><font color="azure"> ShopApp </font></a></h2>
                </NavbarBrand>
                <NavbarToggler className="text-white" onClick={this.handleTogglerClick} />
                <Collapse isOpen={this.state.collapsed} navbar>

                  <NavbarNav left onClick={this.handleNavbarClick}>
                    <div className="input-group-append">
                      <FormInline className="mr-auto m-0">

                        <input className="form-control mr-sm-2 mb-0" type="text" size="40"
                          placeholder="Search Products" aria-label="Search" />

                        <span>
                          <button className="input-group-text" type="submit">
                            <i className="fa fa-search text-cyan" aria-hidden="true"></i></button></span>
                      </FormInline>
                    </div>
                  </NavbarNav>

                  <NavbarNav right onClick={this.handleNavbarClick}>
                    <NavItem >

                      <div id="navbarSupportedContent">

                        {isAuthenticated ? authLinks : guestLinks}
                      </div>

                    </NavItem>

                    <NavItem>

                      <Dropdown>
                        <DropdownToggle nav caret className="text-white" > <font color="azure">More</font> </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem href="./more/sellon">
                            <i className="fa fa-briefcase text-cyen" padding="10" aria-hidden="true"></i>
                            Sell on ShopApp </DropdownItem>
                          <DropdownItem href="#">
                            <i className="fa fa-question-circle text-cyen " aria-hidden="true"></i>
                            24x7 Customer Care</DropdownItem>
                          <DropdownItem href="#">
                            <i className="fa fa-line-chart text-cyen" aria-hidden="true"></i>
                            Advertise</DropdownItem>
                          <DropdownItem href="#">
                            <i className="fa fa-download text-cyen" aria-hidden="true"></i>
                            Download App</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </NavItem>
                    <NavItem>
                    
                        <Link onClick={this.myFunction} to="/cart" className="nav-link">
                          <i className="fa fa-shopping-cart text-white" aria-hidden="true">
                          </i>
                          <font color="azure">Cart</font>
                        </Link>
                
                      {/* <a href="/cart" className="nav-link"><i className="fa fa-shopping-cart text-white" aria-hidden="true">
                     </i>
                        <font color="azure">Cart</font></a> */}
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Navbar>
            </Container>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}


Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Nav));

