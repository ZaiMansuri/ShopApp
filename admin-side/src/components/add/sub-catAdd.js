import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const data = new FormData();


class AddSubcat extends Component {

    constructor() {
        super();
        this.state = {
            subcat_no: '',
            sub_name: '',
            description: '',
            price: '',
            pimage: '',
            category_name: '',
            qty: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        // data.append(e.target.name, e.target.value);
        // for (var i = files.length - 1; i >= 0; i--) {
        //     data.append("pimage", files[i]);
        // }

        console.log("category_name : " + e.target.value);
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        
        const { subcat_no, sub_name, description, price, pimage, category_name,qty } = this.state;
        data.append('subcat_no', subcat_no);
        data.append('sub_name',sub_name);
        data.append('description', description);
        data.append('price', price);
        data.append('pimage', this.state.pimage, this.state.pimage.name);
        data.append('category_name', category_name);
        data.append('qty', qty);
        console.log(data);

        axios.post('/subcategory/add',  data, ({

            onUploadProgress: ProgressEvent => {
                console.log('add progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
            }
        }))

            .then((result) => {
                console.log("file--" + result);
                this.props.history.push("/subcategorylist")
            });
    }

    handleSubmit = event => {
        this.setState({
            pimage: event.target.files[0]
        },() => {
            console.log(this.state);
        })
        console.log("body=" + event);
        
    }
    render() {
        const { subcat_no, sub_name, description, price, pimage, category_name,qty } = this.state;
        return (
            <div className="container-subcategory">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Sub-category Prodcts details
                        </h3>
                    </div>

                    <div className="panel-body">
                        <h4><Link to="/subcategorylist"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Sub-category List</Link></h4>
                        <form action="/add" method="post"
                            encType="multipart/form-data" >
                            <div className="form-group">
                                <label htmlFor="subcat_no">Sub-category no:</label>
                                <input type="text" className="form-control" name="subcat_no" value={subcat_no} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sub_name">Name:</label>
                                <input type="text" className="form-control" name="sub_name" value={sub_name} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea className="form-control" value={description} name="description" onChange={this.onChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input type="number" className="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pimage">Choose Image:</label>
                                <input type="file" className="form-control" onChange={this.handleSubmit} placeholder="/Image" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category_name">Category Name:</label>
                                <input type="text" className="form-control" name="category_name" value={category_name} onChange={this.onChange} placeholder="Category Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="qty">Quantity:</label>
                                <input type="number" className="form-control" name="qty" value={qty} onChange={this.onChange} placeholder="Quantity" />
                            </div>
                            <button type="submit" onClick={this.onSubmit} className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
export default AddSubcat;