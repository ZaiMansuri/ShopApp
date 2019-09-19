
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Categorylist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  componentDidMount() {
    axios.get('/category/category')
      .then(res => {
        this.setState({ category: res.data });
        console.log(this.state.category);
      });
  }
  delete(id) {
    console.log(id);
    axios.get('/category/delete/' + id)
      .then((result) => {
        this.props.history.push("/Categorylist")
      });
  }
  render() {
    return (
      <div >
        <div className="container-subcategory">

          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Category Catalog
            </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/Addcategory"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Category</Link></h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Category ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <th>Opration</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.category.map(categry =>
                    <tr key={categry._id}>
                      <td>{categry.category_id}</td>
                      <td>{categry.name}</td>
                      <td>{categry.detail}</td>
                      <td>
                        <Link to={`/Editcategory/${categry._id}`} className="btn btn-primary" >Edit  </Link>
                        <button onClick={this.delete.bind(this, categry._id)} className="btn btn-danger"> Delete</button>
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

export default Categorylist;
