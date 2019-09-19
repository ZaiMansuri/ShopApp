import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subcat: {}
    };
  }

  componentDidMount() {
    axios.get('/subcategory/edit/' + this.props.match.params.id)
      .then(res => {
        this.setState({ subcat: res.data });
        console.log(this.state.subcat);
      });
  }

  onChange = (e) => {
    const state = this.state.subcat
    state[e.target.name] = e.target.value;
    this.setState({ subcat: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { subcat_no, sub_name, description, price, pimage, category_name, qty } = this.state.subcat;

    axios.post('/subcategory/update/' + this.props.match.params.id, { subcat_no, sub_name, description, price, pimage, category_name,qty })
      .then((result) => {
        this.props.history.push("/subcategorylist")
      });
  }
  render() {
    return (
      <div className="container-subcategory">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT Subcategory
            </h3>
          </div>
          <div className="panel-body" key={this.state.subcat._id}> 
            <h4><Link to={`/subcategorylist/${this.state.subcat._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Sub category List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group" method="post" encType="multipart/form-data"  >
                <label htmlFor="subcat_no">Sub-category_no:</label>
                <input type="text" className="form-control" name="subcat_no"
                  value={this.state.subcat.subcat_no} onChange={this.onChange} placeholder="sub category no" />
              </div>
              <div className="form-group">
                <label htmlFor="sub_name">Name:</label>
                <input type="text" className="form-control" name="sub_name" value={this.state.subcat.sub_name} onChange={this.onChange} placeholder="sub category name" />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.subcat.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="price">price:</label>
               
                <input type="number" className="form-control" name="price" value={this.state.subcat.price} onChange={this.onChange} placeholder="price" />
              </div>
              <div className="form-group">
                <label htmlFor="pimage">Choose Image:</label>
                <input type="file" className="form-control" onChange={this.handleSubmit} placeholder="/Image" />
                
              </div>

              <div className="form-group">
                <label htmlFor="category_name">category name:</label>
                <input type="text" className="form-control" name="category_name" value={this.state.subcat.category_name} onChange={this.onChange} placeholder="Category name" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Quantity:</label>
               
                <input type="number" className="form-control" name="price" value={this.state.subcat.qty} onChange={this.onChange} placeholder="price" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;