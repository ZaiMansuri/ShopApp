import React, { Component } from 'react';
import { Container } from 'mdbreact';

import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import path from 'path';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import View from './view/subcat-view';
class Home extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <Container>
          <div className="col-md-15" style={{marginTop: '50px'}}>
            <div className="row align-items-center">
              <View />
            </div>
          </div>
        </Container>

        <footer className="page-footer text-center text-md-left stylish-color-dark pt-0">
          <div style={{ backgroundColor: '#26c6da' }}>
            <div className="container">
              {/*Grid row*/}
              <div className="row py-4 d-flex align-items-center">
                {/*Grid column*/}
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6 col-lg-7 text-center text-md-right">
                  {/*Facebook*/}
                  <a className="fb-ic ml-0 px-2"><i className="fa fa-facebook white-text"> </i></a>
                  {/*Twitter*/}
                  <a className="tw-ic px-2"><i className="fa fa-twitter white-text"> </i></a>
                  {/*Google +*/}
                  <a className="gplus-ic px-2"><i className="fa fa-google-plus white-text"> </i></a>
                  {/*Linkedin*/}
                  <a className="li-ic px-2"><i className="fa fa-linkedin white-text"> </i></a>
                  {/*Instagram*/}
                  <a className="ins-ic px-2"><i className="fa fa-instagram white-text"> </i></a>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </div>
          {/*Footer Links*/}
          <div className="container mt-5 mb-4 text-center text-md-left">
            <div className="row mt-3">
              {/*First column*/}
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 className="text-uppercase font-weight-bold"><strong>ShopApp</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                <p>  ShopApp Pvt. Ltd , Surat - 395006, Gujarat, INDIA</p>
              </div>
              {/*/.First column*/}
              {/*Second column*/}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold"><strong>About</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" width="60" />
                <p><a href="/contect">Contect Us</a></p>
                <p><a href="#!">About Us</a></p>
                <p><a href="#!">Press</a></p>

              </div>
              {/*/.Second column*/}
              {/*Third column*/}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                <p><a href="#!">Your Account</a></p>
                <p><a href="#!">Become an Affiliate</a></p>
                <p><a href="#!">Shipping Rates</a></p>
                <p><a href="#!">Help</a></p>
              </div>
              {/*/.Third column*/}
              {/*Fourth column*/}
              <div className="col-md-4 col-lg-3 col-xl-3">
                <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                <p><i className="fa fa-home mr-3" /> Surat 395006, Gujarat, India</p>
                <p><i className="fa fa-envelope mr-3" /> info@shopapp.com</p>
                <p><i className="fa fa-phone mr-3" /> + 91 234 567 88</p>
                <p><i className="fa fa-whatsapp mr-3" /> + 91 234 567 89</p>
              </div>
              {/*/.Fourth column*/}
            </div>
          </div>
          {/*/.Footer Links*/}
          {/* Copyright*/}
          <div className="footer-copyright py-3 text-center">
            <div className="container-fluid">
              © 2018 Copyright: <a href="/" target="_blank">ShopApp.com </a>
            </div>
          </div>
          {/*/.Copyright */}
        </footer>
      </div>
    );
  };
}

Home.propTypes = {

  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Home));

