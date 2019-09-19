import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Addinventory extends Component {

    constructor() {
        super();
        this.state = {
            inventory_id: '',
            quantity: '',
            date: '',
            subcategory_name: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        console.log("inventory_name : " + e.target.value);
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { inventory_id, quantity, date, subcategory_name } = this.state;
        axios.post('/inventory/add', { inventory_id, quantity, date, subcategory_name })
            .then((result) => {
                this.props.history.push("/inventorylist")
            });
    }
    render() {
        const { inventory_id, quantity, date, subcategory_name } = this.state;
        return (
            <div className="container-subcategory">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Inventory details
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/inventorylist"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Inventory List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">

                                <label htmlFor="inventory_id">Inventory ID:</label>
                                <input type="text" className="form-control" name="inventory_id" value={inventory_id} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity:</label>
                                <input type="number" className="form-control" name="quantity" value={quantity} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date:</label>
                                <input type="date" className="form-control" value={date} name="date" onChange={this.onChange} />                            
                            </div>

                            <div className="form-group">
                                <label htmlFor="subcategory_name">Sub category Name:</label>
                                <input type="text" className="form-control" name="subcategory_name" value={subcategory_name} onChange={this.onChange} placeholder="Category Name" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Addinventory;