import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

 
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createBrowserHistory as history } from 'history';
import Checkout from './checkout';
import Cart from './components/Cart/Cart';
import Nav from './components/nav';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Categ from './categ'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product';
import Contact from './contact';
import View from './components/view/subcat-view';
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/product" component={Product} />
            <Route path="/category" component={Categ} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/contect" component={Contact} />
            <Route path="/view" component={View} />
            <Nav />
            <Route exact path="/" component={Home} />
           
            <div className="container">
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
