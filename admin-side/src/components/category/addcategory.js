import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';


class Addcategory extends Component {

    constructor() {
        super();
        this.state = {
            category_id: '',
            name: '',
            detail: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        console.log("Category --- " + e.target.value);
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { category_id, name, detail } = this.state;
        axios.post('/category/add', { category_id, name, detail })
            .then((result) => {
                this.props.history.push("/Categorylist")
            });
    }
    render() {
        const { category_id, name, detail } = this.state;
        return (
            <div className="container-subcategory">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Category details
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/Categorylist"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Category List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">

                                <label htmlFor="category_id">Category ID:</label>
                                <input type="text" className="form-control" name="category_id" value={category_id} onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="detail">Detail:</label>
                                <input type="text" className="form-control" name="detail" value={detail} onChange={this.onChange} placeholder="Category Name" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Addcategory;