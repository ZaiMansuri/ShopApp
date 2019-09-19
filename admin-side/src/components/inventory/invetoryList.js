
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Inventorylist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios.get('/inventory/inventory')
      .then(res => {
        this.setState({ inventory: res.data });
        console.log(this.state.inventory);
      });
  }
  delete(id) {
    console.log(id);
    axios.get('/inventory/delete/' + id)
      .then((result) => {
        this.props.history.push("/inventorylist")
      });
  }
  render() {
    return (
      <div >

        <div className="container-subcategory">

          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Inventory Catalog
            </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/addinventory"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Inventory</Link></h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Inentory ID</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Sub Category Name</th>
                    <th>Opration</th>

                  </tr>
                </thead>
                <tbody>
                  {this.state.inventory.map(inventr =>

                    <tr >
                      <td>{inventr.inventory_id}</td>
                      <td>{inventr.quantity}</td>
                      <td>{inventr.date}</td>
                      <td>{inventr.subcategory_name}</td>
                      <td>
                        <Link to={`/editinventory/${inventr._id}`} className="btn btn-primary" >Edit  </Link>

                        <button onClick={this.delete.bind(this, inventr._id)} className="btn btn-danger"> Delete</button>
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

export default Inventorylist;
