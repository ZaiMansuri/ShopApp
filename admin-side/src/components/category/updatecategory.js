import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Editcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {}
    };
  }
  componentDidMount() {
    axios.get('/category/edit/' + this.props.match.params.id)
      .then(res => {
        this.setState({ category: res.data });
        console.log(this.state.category);
      });
  }
  onChange = (e) => {
    const state = this.state.category
    state[e.target.name] = e.target.value;
    this.setState({ category: state });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { category_id, name, detail } = this.state.category;
    axios.post('/category/update/' + this.props.match.params.id, { category_id, name, detail })
      .then((result) => {
        this.props.history.push("/Categorylist")
      });
  }

  render() {
    return (
      <div className="container-subcategory">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Edit category
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/Categorylist/${this.state.category._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Category List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="category_id">category ID</label>
                <input type="text" className="form-control" name="category_id"
                  value={this.state.category.category_id} onChange={this.onChange} placeholder="category ID" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={this.state.category.name} onChange={this.onChange} placeholder="name" />
              </div>
              <div className="form-group">
                <label htmlFor="detail"> Detail:</label>
                <input type="text" className="form-control" name="detail" value={this.state.category.detail} onChange={this.onChange} placeholder=" Category name" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Editcategory;