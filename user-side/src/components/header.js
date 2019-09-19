import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem,
      NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router , Link} from 'react-router-dom';
import '../App.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
 
    render() {
        return (
            <div>
            <Router> 
                 
                <Navbar dark  expand="lg" color="cyan lighten-1" fixed="top"  scrolling>
<div>
                 <NavbarBrand href="#">
                        <h2>  ShopApp </h2>
                </NavbarBrand> 


                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                   
                        <NavbarNav >

                               <NavItem>
                        <form className="form-inline md-form mt-0">
                            <input className="form-control mr-sm-2 mb-0 text-white "
                            type="text" size="40" placeholder="Search" aria-label="Search"/>
                            
                                <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </form>
                        </NavItem>

                          <NavItem>
                              <NavLink to="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              Cart</NavLink>
                          </NavItem>
                          
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>More</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">
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

                            <NavItem >
                              <NavLink to="#">Home </NavLink>
                          </NavItem>

                          <NavItem >
                              <NavLink to="#">
                          </NavLink>
                              
                          </NavItem>
                        </NavbarNav>

                       
       </Collapse> </div>
      
               </Navbar>
               
            </Router>
           
                </div>
           
       );
    }
}
export default Navigation;