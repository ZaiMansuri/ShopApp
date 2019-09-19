import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter } from 'mdbreact';
import { addToCart } from '../../actions/cartAction'
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';


class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subcats: []

        };
    }

    
render() {


    return (
        <div></div>
      );
        }
    }

export default class Add;