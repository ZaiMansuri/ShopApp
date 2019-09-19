import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incItem, decItem, removeFromCart } from '../../actions/cartAction';
import '../../App.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: []
    }

  }
  componentDidMount() {

    // axios.get('/subcategory/subcategory/')
    //     .then(res => {
    //         this.setState({ subcats: res.data });
    //         console.log(this.state.subcats);
    //     });
  }


  render() {
    console.log(this.props.cart)

    let totalPrice = this.props.cart.reduce((accumulator, subcat) => {
      return accumulator + subcat.price * subcat.quantity;
    }, 0);

    return (
      <main>
        {/* Main Container */}
        <div className="container">
          {this.props.cart.length !== (0) ? (
            <div className="container mt-5 pt-3">
              <section className="section my-5 pb-5">
                {/* Shopping Cart table */}
                <div className="table-responsive">
                  <h3 align="center"> Cart</h3>

                  <div >
                    <table className="table product-table">
                      <tr>
                        <th />
                        <th className="font-weight-bold">
                          <strong>Product</strong>
                        </th>
                        <th className="font-weight-bold">
                          <strong>Description</strong>
                        </th>

                        <th className="font-weight-bold">
                          <strong>Price</strong>
                        </th>
                        <th className="font-weight-bold">
                          <strong>Quantity</strong>
                        </th>
                        <th className="font-weight-bold">
                          <strong>Amount</strong>
                        </th>
                        <th width="25" />
                      </tr>

                      {this.props.cart.map((subcat, _id) => {
                        return (
                          <tr key={_id} >
                            <td width="140" scope="row">
                              <img src={subcat.pimage} style={{ width: '125px', height: '125px' }}
                                alt="imgs" className="img-fluid z-depth-0" />
                            </td>
                            <td width="45">
                              <h5 className="mt-3">
                                <strong>{subcat.sub_name}</strong>
                              </h5>
                            </td>
                            <td width="45" >{subcat.description}</td>

                            <td width="45"> $ {subcat.price} </td>
                            <td width="80" className="text-center text-md-left">
                              <button onClick={() => this.props.incItem(subcat)} type="button"
                                className="btn  btn-shop" data-toggle="tooltip" data-placement="top" title="Increment item"><strong> + </strong>
                              </button>
                              {subcat.quantity}
                              <button onClick={() => this.props.decItem(subcat)} type="button"
                                className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Remove item"> <strong> - </strong>
                              </button>

                            </td>
                            <td width="25" className="font-weight-bold">
                              <strong> ${subcat.quantity * subcat.price}</strong>
                            </td>
                            <td width="20" >
                              <button onClick={() => this.props.removeFromCart(subcat)} type="button"
                                className="btn  btn-shop" data-toggle="tooltip" data-placement="top" title="Remove item"><strong>X</strong>
                              </button>
                            </td>
                          </tr>
                        )
                      })}

                    </table>
                  </div>
                  <div>
                    <table className="table product-table"><tbody><tr>
                      <td colSpan={3} className="text-right">
                        <h4 className="mt-2">
                          <strong align="right"> Total Amount  ${totalPrice} </strong>
                        </h4></td>
                      <td colSpan={3} className="text-right">
                        <button type="button" className="btn  btn-shop btn-rounded waves-effect waves-light">
                          <a href="/checkout" className="text-white" > Complete purchase </a>
                        </button>
                      </td></tr></tbody></table></div>
                </div>

                {/* Shopping Cart table */}
              </section>

            </div>
          ) : (
              <div className="contains-no-items" align="center">
                <h3>Oops! Your cart is empty!</h3>
                <h4>Add items to proceed</h4>
              </div>

            )}

        </div>
        {/* /Main Container */}
      </main>





    );
  }
}


function mapStateToProps(state, props) {
  return {
    cart: state.cart,
    subcat: state.subcate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: subcat => dispatch(removeFromCart(subcat)),
    incItem: subcat => dispatch(incItem(subcat)),
    decItem: subcat => dispatch(decItem(subcat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
