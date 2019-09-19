
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Filterlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: []
    };
  }

  componentDidMount() {
    axios.get('/filter/filter')
      .then(res => {
        this.setState({ filter: res.data });
        console.log(this.state.filter);
      });
  }
  delete(id) {
    console.log(id);
    axios.get('/filter/delete/' + id)
      .then((result) => {
        this.props.history.push("/filterlist")
      });
  }
  render() {
    return (
      <div >
        <div className="container-subcategory">

          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Filter Catalog
            </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/addfilter">
              <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Filter</Link></h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Filter ID</th>
                    <th>price</th>
                    <th>Detail</th>
                    <th>Color</th>
                    <th>Model</th>
                    <th>Opration</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {this.state.filter.map(filtr =>
                    <tr>
                      <td>{filtr.filter_id}</td>
                      <td>{filtr.price}</td>
                      <td>{filtr.detail}</td>
                      <td>{filtr.color}</td>
                      <td>{filtr.model}</td>
                      <td>
                        <Link to={`/Editfilter/${filtr._id}`} className="btn btn-primary" >Edit  </Link>
                        <button onClick={this.delete.bind(this, filtr._id)} className="btn btn-danger"> Delete</button>
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

export default Filterlist;
