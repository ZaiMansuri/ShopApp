
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import path from 'path';

class SubCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subcats: []
    };
  }

  componentDidMount() {
    axios.get('/subcategory/subcategory/')
      .then(res => {
        this.setState({ subcats: res.data });
        console.log(this.state.subcats);
      });
  }
  delete(id){
    console.log(id);
    axios.get('/subcategory/delete/'+id)
      .then((result) => {
        this.props.history.push("/subcategorylist")
      });
  }
  render() {
    
    return (
<div >

      <div className="container-subcategory">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Sub Category Catalog
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/addsubcat"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Sub Category</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Sub-category no</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Opration</th>
                </tr>
              </thead>
              <tbody>
                {this.state.subcats.map(subcat => 
              
                  <tr>
                    <td>{subcat.subcat_no}</td>
                    <td>{subcat.sub_name}</td>
                    <td>{subcat.description}</td>
                    <td>{subcat.price}</td>
                    <td><img width="100px" height="100px" 
                     src={subcat.pimage} /></td>
                    <td>
                      <Link to={`/editsubcat/${subcat._id}`} className="btn btn-primary" > 
                      Edit  </Link>
                 
                     <button onClick={this.delete.bind(this,subcat._id)} className="btn btn-danger"> Delete</button>
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

export default SubCategory;
