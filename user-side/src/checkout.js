import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return (
        <div>
         {/*Main layout*/}
          <main className="mt-5 pt-4">
            <div className="container wow fadeIn">
              {/* Heading */}
              <h2 className="my-5 h2 text-center">Checkout form</h2>
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-8 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Card content*/}
                    <form className="card-body">
                      {/*Grid row*/}
                      <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-6 mb-2">
                          {/*firstName*/}
                          <div className="md-form ">
                            <input type="text" id="firstName" className="form-control" />
                            <label htmlFor="firstName" >First name</label>
                          </div>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-md-6 mb-2">
                          {/*lastName*/}
                          <div className="md-form" >
                            <input type="text" id="lastName" className="form-control" />
                            <label htmlFor="lastName" >Last name</label>
                          </div>
                        </div>
                        {/*Grid column*/}
                      </div>
                      {/*Grid row*/}
                      {/*Username*/}
                      <div className="md-form input-group pl-0 mb-5">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control py-0"  placeholder="Username" aria-describedby="basic-addon1" />
                      </div>
                      {/*email*/}
                      <div className="md-form mb-5">
                        <input type="text" id="email" className="form-control"  />
                        <label htmlFor="email" >Email (optional)</label>
                      </div>
                      {/*address*/}
                      <div className="md-form mb-5">
                        <input type="text" id="address" className="form-control" />
                        <label htmlFor="address" >Address</label>
                      </div>
                      {/*address-2*/}
                      <div className="md-form mb-5">
                        <input type="text" id="address-2" className="form-control"  />
                        <label htmlFor="address-2" >Address 2 (optional)</label>
                      </div>
                      {/*Grid row*/}
                      <div className="row">
                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-12 mb-4">
                          <label htmlFor="country">Country</label>
                          <select className="custom-select d-block w-100" id="country" required>
                            <option value>Choose...</option>
                            <option>India</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6 mb-4">
                          <label htmlFor="state">State</label>
                          <select className="custom-select d-block w-100" id="state" required>
                            <option value>Choose...</option>
                            <option>Gujarat</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6 mb-4">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" className="form-control" id="zip" placeholder="Zip" required />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </div>
                        {/*Grid column*/}
                      </div>
                      {/*Grid row*/}
                      <hr />
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="same-address" />
                        <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="save-info" />
                        <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                      </div>
                      <hr />
                      <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                          <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                          <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                          <label className="custom-control-label" htmlFor="debit">Debit card</label>
                        </div>
                       
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-name">Name on card</label>
                          <input type="text" className="form-control" id="cc-name"  required />
                          <small className="text-muted">Full name as displayed on card</small>
                          <div className="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-number">Credit card number</label>
                          <input type="text" className="form-control" id="cc-number"  required />
                          <div className="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <label htmlFor="cc-expiration">Expiration</label>
                          <input type="text" className="form-control" id="cc-expiration"  required />
                          <div className="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="cc-expiration">CVV</label>
                          <input type="text" className="form-control" id="cc-cvv"  required />
                          <div className="invalid-feedback">
                            Security code required
                          </div>
                        </div>
                      </div>
                      <hr className="mb-4" />
                      <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                    </form>
                  </div>
                  {/*/.Card*/}
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-4 mb-4">
                  {/* Heading */}
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">3</span>
                  </h4>
                  {/* Cart */}
                  <ul className="list-group mb-3 z-depth-1">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">$12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">$8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between bg-light">
                      <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span className="text-success">-$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>$20</strong>
                    </li>
                  </ul>
                  {/* Cart */}
                  {/* Promo code */}
                  <form className="card p-2">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
                      </div>
                    </div>
                  </form>
                  {/* Promo code */}
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </main>
          {/*Main layout*/}
          {/*Footer*/}
          <footer className="page-footer text-center stylish-color-dark font-small mt-4 wow fadeIn">
             <hr className="my-4" />
            {/* Social icons */}
            <div className="pb-4">
              <a  >
                <i className="fa fa-facebook mr-3" />
              </a>
              <a  >
                <i className="fa fa-twitter mr-3" />
              </a>
              <a  >
                <i className="fa fa-youtube mr-3" />
              </a>
              <a >
                <i className="fa fa-google-plus mr-3" />
              </a>
              <a>
                  <i className="fa fa-dribbble mr-3" />
              </a>
              <a >
                <i className="fa fa-pinterest mr-3" />
              </a>
              <a >
                <i className="fa fa-github mr-3" />
              </a>
              <a >
                <i className="fa fa-codepen mr-3" />
              </a>
            </div>
            {/* Social icons */}
            {/*Copyright*/}
            <div className="footer-copyright py-3">
              © 2018 Copyright:
              <a> ShopApp.com </a>
            </div>
            {/*/.Copyright*/}
          </footer>
          {/*/.Footer*/}
          {/* SCRIPTS */}
          {/* JQuery */}
          {/* Bootstrap tooltips */}
          {/* Bootstrap core JavaScript */}
          {/* MDB core JavaScript */}
          {/* Initializations */}
      
  </div>
  );
}
}
export default Checkout;