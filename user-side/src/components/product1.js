import React, { Component } from 'react';

 class Product extends Component {
    render() {
        return (
                 <div>
                      {/* Main Container */}
                      <div className="container mt-5 pt-3">
                        {/*Section: Product detail */}  
      <section id="productDetails" className="pb-5">
        {/*News card*/}
        <div className="card mt-5 hoverable">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="row mx-2">
                {/*Carousel Wrapper*/}
                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails mb-5 pb-4" data-ride="carousel">
                  {/*Slides*/}
                  <div className="carousel-inner text-center text-md-left" role="listbox">
                    <div className="carousel-item active">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" alt="First slide" className="img-fluid" />
                    </div>
                    <div className="carousel-item">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg" alt="Second slide" className="img-fluid" />
                    </div>
                    <div className="carousel-item">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg" alt="Third slide" className="img-fluid" />
                    </div>
                  </div>
                  {/*/.Slides*/}
                  {/*Thumbnails*/}
                  <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                  {/*/.Thumbnails*/}
                </div>
                {/*/.Carousel Wrapper*/}
              </div>
              {/*Grid row*/}
              <div className="row mb-4">
                <div className="col-md-12">
                  <div id="mdb-lightbox-ui" />
                  <div className="mdb-lightbox no-margin">
                    {/*Grid column*/}
                    <figure className="col-md-4">
                      {/*Large image*/}
                      <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" data-size="1600x1067">
                        {/* Thumbnail*/}
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" className="img-fluid" alt="#"/>
                      </a>
                    </figure>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <figure className="col-md-4">
                      {/*Large image*/}
                      <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg" data-size="1600x1067">
                        {/* Thumbnail*/}
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg" className="img-fluid" alt="#" />
                      </a>
                    </figure>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <figure className="col-md-4">
                      {/*Large image*/}
                      <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg" data-size="1600x1067">
                        {/* Thumbnail*/}
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg" className="img-fluid" alt="#" />
                      </a>
                    </figure>
                    {/*Grid column*/}
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            </div>
            
            <div className="col-lg-5 mr-3 text-center text-md-left">
              <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>iPad PRO </strong>
              </h2>
              <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
              <span className="badge badge-success product mb-4 ml-2">SALE</span>
              <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span className="red-text font-weight-bold">
                  <strong>$1449</strong>
                </span>
                <span className="grey-text">
                  <small>
                    <s>$1789</s>
                  </small>
                </span>
              </h3>
              <p className="ml-xl-0 ml-4">
              <strong>Apple iPad Pro  Tablet (10.5 inch, 64GB, Wi-Fi Only)</strong > <br/>
              iPad has always offered the ultimate Multi-Touch experience. 
              The redesigned Retina display on iPad Pro sets a whole new standard. 
              It’s not just brighter and less reflective — with ProMotion technology, 
              it’s also far more responsive. So whether you’re scrolling through pages in Safari or 
              playing an intense 3D game, everything feels utterly smooth, fast and immersive.
              </p>
              <p className="ml-xl-0 ml-4">
                <strong>Storage: </strong>64GB</p>
              <p className="ml-xl-0 ml-4">
                <strong>Size: </strong>9.6-inch</p>
              <p className="ml-xl-0 ml-4">
                <strong>Resolution: </strong>2048 x 1536</p>
              <p className="ml-xl-0 ml-4">
                <strong>Availability: </strong>In stock</p>
              {/* Add to Cart */}
              <section className="color">
                <div className="mt-5">
                  <p className="grey-text">Choose your color</p>
                  <div className="row text-center text-md-left">
                    <div className="col-md-4 col-12 ">
                      {/*Radio group*/}
                      <div className="form-group">
                        <input className="form-check-input" name="group100" type="radio" id="radio100" defaultChecked="checked" />
                        <label htmlFor="radio100" className="form-check-label dark-grey-text">White</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/*Radio group*/}
                      <div className="form-group">
                        <input className="form-check-input" name="group100" type="radio" id="radio101" />
                        <label htmlFor="radio101" className="form-check-label dark-grey-text">Silver</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/*Radio group*/}
                      <div className="form-group">
                        <input className="form-check-input" name="group100" type="radio" id="radio102" />
                        <label htmlFor="radio102" className="form-check-label dark-grey-text">Gold</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 mb-4">
                    <div className="col-md-12 text-center text-md-left text-md-right">
                      <button className="btn btn-primary btn-rounded">
                        <i className="fa fa-cart-plus mr-2" aria-hidden="true" /> Add to cart</button>
                    </div>
                  </div>
                </div>
              </section>
              {/* /.Add to Cart */}
            </div>
          </div>
        </div>
        {/*News card*/}
      </section>
      </div>
      {/* /.Main Container */}
      {/*Footer*/}
      {/*Carousel Wrapper*/}
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        {/*Controls*/}
        <div className="controls-top">
          <a className="btn-floating primary-color waves-effect waves-light" href="#multi-item-example" data-slide="prev">
            <i className="fa fa-chevron-left" />
          </a>
          <a className="btn-floating primary-color waves-effect waves-light" href="#multi-item-example" data-slide="next">
            <i className="fa fa-chevron-right" />
          </a>
        </div>
        {/*Controls*/}
        {/*Indicators*/}

        <ol className="carousel-indicators">
          <li className="primary-color" data-target="#multi-item-example" data-slide-to={0} />
          <li className="primary-color" data-target="#multi-item-example" data-slide-to={1} />
          <li className="primary-color" data-target="#multi-item-example" data-slide-to={2} />
        </ol>
        {/*Indicators*/}
        {/*Slides*/}

        <div className="carousel-inner" role="listbox">
  {/*First slide*/}
          <div className="carousel-item active">
            <div className="col-md-4 mb-4">
              {/*Card*/}
              <div className="card card-ecommerce">
                {/*Card image*/}
                <div className="view overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt="#" />
                  <a>
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                {/*Card image*/}
                {/*Card content*/}
                <div className="card-body">
                  {/*Category & Title*/}
                  <h5 className="card-title mb-1">
                    <strong>
                      <a  className="dark-grey-text">Sony TV-675i</a>
                    </strong>
                  </h5>
                  <span className="badge badge-danger mb-2">bestseller</span>
                  {/* Rating */}
                 
                  {/*Card footer*/}
                  <div className="card-footer pb-0">
                    <div className="row mb-0">
                      <span className="float-left">
                        <strong>1439$</strong>
                      </span>
                      <span className="float-right">
                        <a  data-toggle="tooltip" data-placement="top" title="Add to Cart">
                          <i className="fa fa-shopping-cart ml-3" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/*Card content*/}
              </div>
              {/*Card*/}
            </div>
            <div className="col-md-4 clearfix d-none d-md-block mb-4">
              {/*Card*/}
              <div className="card card-ecommerce">
                {/*Card image*/}
                <div className="view overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="#"  />
                  <a>
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                {/*Card image*/}
                {/*Card content*/}
                <div className="card-body">
                  {/*Category & Title*/}
                  <h5 className="card-title mb-1">
                    <strong>
                      <a  className="dark-grey-text">Samsung 786i</a>
                    </strong>
                  </h5>
                  <span className="badge badge-info mb-2">new</span>
                  {/* Rating */}
                  
                  {/*Card footer*/}
                  <div className="card-footer pb-0">
                    <div className="row mb-0">
                      <span className="float-left">
                        <strong>1439$</strong>
                      </span>
                      <span className="float-right">
                        <a  data-toggle="tooltip" data-placement="top" title="Add to Cart">
                          <i className="fa fa-shopping-cart ml-3" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/*Card content*/}
              </div>
              {/*Card*/}
            </div>
            <div className="col-md-4 clearfix d-none d-md-block mb-4">
              {/*Card*/}
              <div className="card card-ecommerce">
                {/*Card image*/}
                <div className="view overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/9.jpg" className="img-fluid" alt="#" />
                  <a>
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                {/*Card image*/}
                {/*Card content*/}
                <div className="card-body">
                  {/*Category & Title*/}
                  <h5 className="card-title mb-1">
                    <strong>
                      <a  className="dark-grey-text">Canon 675-D</a>
                    </strong>
                  </h5>

                  <span className="badge badge-danger mb-2">bestseller</span>
                  {/* Rating */}
                  
                  {/*Card footer*/}
                  <div className="card-footer pb-0">
                    <div className="row mb-0">
                      <span className="float-left">
                        <strong>1439$</strong>
                      </span>
                      <span className="float-right">
                        <a  data-toggle="tooltip" data-placement="top" title="Add to Cart">
                          <i className="fa fa-shopping-cart ml-3" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/*Card content*/}
              </div>
              {/*Card*/}
            </div>
          </div>
          {/*First slide*/}
          {/*Second slide*/}
       
          {/*Second slide*/}
          {/*Third slide*/}
          
          {/*Third slide*/}
        </div>
        {/*Slides*/}
      </div>

       <section id="products" className="pb-5 mt-4">
                      {/*/.Footer*/}
                      {/* Cart Modal */}
                      <div className="modal fade cart-modal" id="cart-modal-ex" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          {/*Content*/}
                          <div className="modal-content">
                            {/*Header*/}
                            <div className="modal-header">
                              <h4 className="modal-title font-weight-bold dark-grey-text" id="myModalLabel">Your cart</h4>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            {/*Body*/}
                            <div className="modal-body">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Product name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Product 1</td>
                                    <td>100$</td>
                                    <td>
                                      <a>
                                        <i className="fa fa-remove" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Product 2</td>
                                    <td>100$</td>
                                    <td>
                                      <a>
                                        <i className="fa fa-remove" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Product 3</td>
                                    <td>100$</td>
                                    <td>
                                      <a>
                                        <i className="fa fa-remove" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>Product 4</td>
                                    <td>100$</td>
                                    <td>
                                      <a>
                                        <i className="fa fa-remove" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <button className="btn btn-primary btn-rounded btn-sm">Checkout</button>
                            </div>
                            {/*Footer*/}
                            <div className="modal-footer">
                              <button type="button" className="btn btn-grey btn-rounded btn-sm" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                          {/*/.Content*/}
                        </div>
                      </div>
                      </section>
                    </div>     
        );
    }
}
export default Product;


