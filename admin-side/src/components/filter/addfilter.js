import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Addfilter extends Component {

    constructor() {
        super();
        this.state = {
            filter_id: '',
            price: '',
            detail: '',
            color: '',
            model: '',
            subcat_id: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        console.log("Filter --- " + e.target.value);
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { filter_id, price, detail, color, model, subcat_id } = this.state;
        axios.post('/filter/add', { filter_id, price, detail, color, model, subcat_id })
            .then((result) => {
                this.props.history.push("/filterlist")
            });
    }
    render() {
   const { filter_id, price, detail, color, model, subcat_id } = this.state;
        return (
            <div className="container-subcategory">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Filter details
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/filterlist"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Category List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="filter_id">Filter ID:</label>
                                <input type="text" className="form-control" name="filter_id" value={filter_id} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input type="text" className="form-control" name="price" value={price} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="detail">Detail:</label>
                                <input type="text" className="form-control" name="detail" value={detail} onChange={this.onChange} placeholder="Detail" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <input type="text" className="form-control" name="color" value={color} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="model">Model:</label>
                                <input type="text" className="form-control" name="model" value={model} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subcat_id">Sub Category ID:</label>
                                <input type="text" className="form-control" name="subcat_id" value={subcat_id} onChange={this.onChange} />
                            </div>

                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Addfilter;