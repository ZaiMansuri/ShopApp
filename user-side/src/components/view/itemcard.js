import React, { Component } from 'react';

import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Tooltip } from 'mdbreact';
import axios from 'axios';
import { addToCart } from './cartitem';


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subcats: []
        };
    }

    componentDidMount() {
        axios.get('/subcategory/subcategory/')
            .then(res => {
                this.setState({ subcats: res.data });
                console.log(this.state.subcats);
            });
    }


    addToCart() {
        addToCart(this.props.subcatID);
    }

    render() {
        const subcat = this.state.subcats.find(subcat =>  this.state.subcats.id === this.props.subcatID);

        return (
            <Card cascade narrow ecommerce >
            <div className="view zoom">
                <CardImage cascade src={subcat.pimage} top alt="sample photo" overlay="white-slight" height="380px" width="260px" /> </div>
            <CardBody cascade className="text-center">
                <a href="" className="grey-text">
                    <h5></h5>
                </a>
                <CardTitle>
                    <strong >
                        <a className="cyan-text" href="">{subcat.sub_name}</a>
                    </strong>
                </CardTitle>

                <CardText>{subcat.description}</CardText>
                <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                        <strong>{subcat.price}$</strong>
                    </span>

                    <span className="float-right">
                      <button  onClick={this.addToCart.bind(this)} >  
                      <Tooltip placement="top" tag="a" component="i" className="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart" /></button>
                        <Tooltip placement="top" tag="a" component="i" className="fa fa-share-alt grey-text ml-3" tooltipContent="Share. " />
                        {/*<Tooltip placement="center" tag="a" component="i" className="active" className="fa fa-heart ml-3" tooltipContent="Added to watch-list  "/>*/}
                    </span>
                </CardFooter>
            </CardBody>
        </Card>


        );
    }
}

export default ProductCard;
