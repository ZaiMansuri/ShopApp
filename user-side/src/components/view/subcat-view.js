import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter } from 'mdbreact';
import { addToCart } from '../../actions/cartAction'
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

class View extends Component {
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

render() {


return (
<div>
<Container>
<div className="row">
<div className="col-12 mt-4 pt-3 text-center">
<h2 className="h1-responsive font-weight-bold text-center ">Our Bestsellers</h2>
<p className="grey-text text-center w-responsive mx-auto "> Fastival mood On!!  </p>
</div>

<div className="col-12 text-center my-5">
<div className="row align-item-center" >
{this.state.subcats.map((subcat, _id) =>

<Col lg="3" md="6" className="mb-lg-0 mb-4 " padding="10" key={_id} >
<Card cascade narrow ecommerce  >
<div className="view zoom" >
    <CardImage cascade src={subcat.pimage} top alt="sample photo" overlay="white-slight" height="380px" width="260px" /> </div>
<CardBody cascade className="text-center">

    <CardTitle>
        <strong >
            <a className="cyan-text" href="">{subcat.sub_name}</a>
        </strong>
    </CardTitle>

    <CardText>{subcat.description}</CardText>
    <CardFooter className="px-1">
        <span className="float-left font-weight-bold">
            <strong>${subcat.price}</strong>
        </span>

        <span className="float-right">

            <Button aria-label="Add to shopping cart"
                onClick={() =>{
                    if (this.props.auth.isAuthenticated === true) {
                        this.props.addToCart(subcat)
                   }
                   else {
                    alert("please login first so you can add prodcts to cart ")
                  }  } }
                disable={subcat.qty > 0 ? '' : 'disabled'}>
                {subcat.qty > 0 ? ' ' : 'Sold Out'}
                <AddShoppingCartIcon className="cyan-text ml-3" fontSize="large" />
            </Button>
        </span>
    </CardFooter>
</CardBody>
</Card>

</Col>
)}
</div>

</div>

</div>

</Container>

</div >
        );
    }
}



function mapStateToProps(state, props) {
    return {
        subcats: state.subcats,
        auth: state.auth
    };

}

function mapDispatchToProps(dispatch) {
    return {

        addToCart: (subcat, _id, ) => dispatch(addToCart(subcat))

    }

}
View.propTypes = {

    auth: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(View));
