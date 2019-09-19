import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Editinventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: {}
    };
  }

  componentDidMount() {
    axios.get('/inventory/edit/'+this.props.match.params.id)
      .then(res => {
        this.setState({ inventory: res.data });
        console.log(this.state.inventory);
      });
  }

  onChange = (e) => {
    const state = this.state.inventory
    state[e.target.name] = e.target.value;
    this.setState({inventory:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { inventory_id, quantity, date,  subcategory_name } = this.state.inventory;

    axios.post('/inventory/update/'+this.props.match.params.id, { inventory_id, quantity, date,  subcategory_name})
      .then((result) => {
        this.props.history.push("/inventorylist")
      });
  }

  render() {
    return (
      <div className="container-subcategory">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT inventory
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/inventorylist/${this.state.inventory._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="inventory_id">Inventory ID</label>
                <input type="text" className="form-control" name="inventory_id" 
                value={this.state.inventory.inventory_id} onChange={this.onChange} placeholder="Inventory ID" />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" className="form-control" name="quantity" value={this.state.inventory.quantity} onChange={this.onChange} placeholder="Quantity" />
              </div>
            
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" className="form-control" name="date" value={this.state.inventory.date} onChange={this.onChange} placeholder="date" />
              </div>
             
              <div className="form-group">
                <label htmlFor="subcategory_name"> Sub category name:</label>
                <input type="text" className="form-control" name="subcategory_name" value={this.state.inventory.subcategory_name} onChange={this.onChange} placeholder="Sub Category name" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Editinventory;