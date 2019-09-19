import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {}
    };
  }
  componentDidMount() {
    axios.get('/filter/edit/' + this.props.match.params.id)
      .then(res => {
        this.setState({ filter: res.data });
        console.log(this.state.filter);
      });
  }
  onChange = (e) => {
    const state = this.state.filter
    state[e.target.name] = e.target.value;
    this.setState({ filter: state });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { filter_id, price, detail, color, model, subcat_id } = this.state.filter;
    axios.post('/filter/update/' + this.props.match.params.id, { filter_id, price, detail, color, model, subcat_id })
      .then((result) => {
        this.props.history.push("/filterlist")
      });
  }

  render() {
    return (
      <div className="container-subcategory">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Edit Filter
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/filterlist/${this.state.filter._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Filter List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="filter_id">filter ID</label>
                <input type="text" className="form-control" name="filter_id"
                  value={this.state.filter.filter_id} onChange={this.onChange} placeholder="filter ID" />
              </div>
              <div className="form-group">
                <label htmlFor="price">price:</label>
                <input type="text" className="form-control" name="price" value={this.state.filter.price} onChange={this.onChange} placeholder="price" />
              </div>
              <div className="form-group">
                <label htmlFor="detail"> Detail:</label>
                <input type="text" className="form-control" name="detail" value={this.state.filter.detail} onChange={this.onChange} placeholder=" Details" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Color:</label>
                <input type="text" className="form-control" name="color" value={this.state.filter.color} onChange={this.onChange} placeholder="color" />
              </div>
              <div className="form-group">
                <label htmlFor="model">Model:</label>
                <input type="text" className="form-control" name="model" value={this.state.filter.model} onChange={this.onChange} placeholder="model" />
              </div>
              <div className="form-group">
                <label htmlFor="subcat_id">Sub Category ID:</label>
                <input type="text" className="form-control" name="subcat_id" value={this.state.filter.subcat_id} onChange={this.onChange} placeholder="sub category id" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditFilter;