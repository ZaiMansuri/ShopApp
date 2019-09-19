import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Userlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      User: []
    };
  }
  componentDidMount() {
    axios.get('/api/users/user')
      .then(res => {
        this.setState({ User: res.data });
        console.log(this.state.User);
      });
  }
  delete(id) {
    console.log(id);
    axios.get('/api/users/delete/' + id)
      .then((result) => {
        this.props.history.push("/userlist")
      });
  }
  render() {
    return (
      <div>
        <div className="container-subcategory">

          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                User of ShopApp 
            </h3>
            </div>
            <div className="panel-body">
              <h4><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> User List</h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>User name</th>
                    <th>Name</th>                   
                  </tr>
                </thead>
                <tbody>
                  {this.state.User.map(usr =>
                    <tr>
                      <td>{usr.username}</td>
                      <td>{usr.name}</td>
                     
                      <td>                       
                        <button onClick={this.delete.bind(this, usr._id)} className="btn btn-danger"> Delete</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Userlist;