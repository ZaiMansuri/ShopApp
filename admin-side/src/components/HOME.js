import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      User:[],
    };
  }
  componentDidMount() {
    axios.get('/category/category')
      .then(res => {
        this.setState({ category: res.data });
        console.log(this.state.category);
         
      });

      axios.get('/api/users/user')
      .then(res => {
        this.setState({ User: res.data });
        console.log(this.state.User);
      });
  }
  render() {

    return (
      <div className="container-subcategory" style={{ textAlign: 'center' }}>
        Welcome to ShopApp
        this is Admin Web
        <div class="row w-100">           
            <div class="col-md-3">
              <div class="card border-info mx-sm-1 p-3" style={{borderRadius:'1.50rem'}}> 
                <div class="card border-info shadow text-info p-3"  style={{borderRadius:'1.50rem'}} >
                  <span class="fa fa-th" aria-hidden="true"> </span>
                  </div>
                <div class="text-info text-center mt-3"><h4>Category</h4></div>
                <div class="text-info text-center mt-2"><h1>{this.state.category.length}</h1></div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card border-info mx-sm-1 p-3" style={{borderRadius:'1.50rem'}}> 
                <div class="card border-info shadow text-info p-3"  style={{borderRadius:'1.50rem'}} >
                  <span class="fa fa-user" aria-hidden="true"> </span>
                  </div> 
                <div class="text-info text-center mt-3"><h4>User</h4></div>
                <div class="text-info text-center mt-2"><h1>{this.state.User.length}</h1></div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
