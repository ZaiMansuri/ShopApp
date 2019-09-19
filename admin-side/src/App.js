import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentAdmin, logoutAdmin } from './actions/authentication';
import './App.css';

import Sidebar from './components/sidebar';
import Edit from './components/add/updatesubcat';
import Nav from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/HOME';
import SubCategory from './components/add/subcategorylist';
import AddSubcat from './components/add/sub-catAdd';
import Show from './components/add/showsubcat';
import Frame from './components/frame';
import Addinventory from './components/inventory/addinetory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventorylist from './components/inventory/invetoryList';
import Editinventory from './components/inventory/updateinvetory';
import Addcategory from './components/category/addcategory';
import Categorylist from './components/category/categorylist';
import Editcategory from './components/category/updatecategory';

import Addfilter from './components/filter/addfilter';
import Filterlist from './components/filter/filterlist';
import EditFilter from './components/filter/updatefilter';
import Userlist from './components/user/userlist';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentAdmin(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutAdmin());
    window.location.href = '/signin'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="App">

            <Nav />
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
           <div id="page-wrap">
            <Route exact path="/" component={Home} />
            <Route  path="/subcategorylist" component={SubCategory} />
            <Route path="/showsbcat/:id" component={Show} />
            <Route path="/inventorylist/" component={Inventorylist} />
            <Route path="/userlist" component={Userlist} />
            <Route path="/addsubcat" component={AddSubcat} />
            <Route path="/editsubcat/:id" component={Edit} />
          
            <Route path="/frame" component={Frame} />

            <Route path="/addinventory" component={Addinventory} />
            <Route path="/editinventory/:id" component={Editinventory} />
            
            <Route path="/Addcategory" component={Addcategory} />
            <Route path="/Categorylist/" component={Categorylist} />
            <Route path="/Editcategory/:id" component={Editcategory} />
            
            <Route path="/addfilter" component={Addfilter} />
            <Route path="/filterlist/" component={Filterlist} />
            <Route path="/Editfilter/:id" component={EditFilter} />
            </div>

            <div className="container">
              <Route exact path="/signup" component={Register} />
              <Route exact path="/signin" component={Login} />
            </div>
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
