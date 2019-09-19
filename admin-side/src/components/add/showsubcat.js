import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subcat: {}
    };

  }

  componentDidMount() {
    axios.get('/subcategory/edit/'+this.props.match.params.id)
      .then(res => {
        this.setState({ subcat: res.data });
        console.log(this.state.subcat);
      });
  }

  delete(id){
    console.log(id);
    axios.get('/subcategory/delete/'+id)
    .exec()
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
              {this.state.subcat.sub_name}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/">
            <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Sub Category List</Link></h4>
            <dl>
              <dt>sub category no:</dt>
              <dd>{this.state.subcat.subcat_no}</dd>
              <dt>Name:</dt>
              <dd>{this.state.subcat.sub_name}</dd>
              <dt>Description:</dt>
              <dd>{this.state.subcat.description}</dd>
              <dt>Price:</dt>
              <dd>{this.state.subcat.price}</dd>
              <dt>Category Name:</dt>
              <dd>{this.state.subcat.category_name}</dd>
            </dl>
            <Link to={`/editsubcat/${this.state.subcat._id}`} className="btn btn-success">edit</Link>&nbsp;
            
          </div>
        </div>
      </div>
    );
  }
}

export default Show;