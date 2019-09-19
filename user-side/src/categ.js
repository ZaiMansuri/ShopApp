import React, { Component } from 'react';


class Categ extends Component {
render() {
  return (
  <div>
   
    {/* Main Container */}
    <div className="container mt-5 pt-3">
      <div className="row pt-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <div >
            {/* Grid row */}
            <div className="row">
              <div className="col-md-6 col-lg-12 mb-5">
                {/* Panel */}
                <h5 className="font-weight-bold dark-grey-text"><strong>Order By</strong></h5>
                <div className="divider" />
                <p className="blue-text"><a>Default</a></p>
                <p className="dark-grey-text"><a>Popularity</a></p>
                <p className="dark-grey-text"><a>Average rating</a></p>
                <p className="dark-grey-text"><a>Price: low to high</a></p>
                <p className="dark-grey-text"><a>Price: high to low</a></p>
              </div>
              {/* Filter by category*/}

 
              <div className="col-md-6 col-lg-12 mb-5">
                <h5 className="font-weight-bold dark-grey-text"><strong>Category</strong></h5>
                <div className="divider" />
                {/*Radio group*/}
                <div className="form-group ">
                  <input className="form-check-input text-dark" name="group100" type="radio" id="radio100" color="#212121"/>
                  <label htmlFor="radio100" className="form-check-label dark-grey-text">All</label>
                </div>
                <div className="form-group">
                  <input className="form-check-input" name="group100" type="radio" id="radio101" defaultChecked />
                  <label htmlFor="radio101" className="form-check-label dark-grey-text">Laptop</label>
                </div>
                <div className="form-group">
                  <input className="form-check-input" name="group100" type="radio" id="radio102" />
                  <label htmlFor="radio102" className="form-check-label dark-grey-text">Smartphone</label>
                </div>
                <div className="form-group">
                  <input className="form-check-input" name="group100" type="radio" id="radio103" />
                  <label htmlFor="radio103" className="form-check-label dark-grey-text">Tablet</label>
                </div>
                <div className="form-group">
                  <input className="form-check-input" name="group100" type="radio" id="radio104" />
                  <label htmlFor="radio104" className="form-check-label dark-grey-text">Headphones</label>
                </div>
                {/*Radio group*/}
              </div>
              {/* /Filter by category*/}
            </div>
            {/* /Grid row */}
            {/* Grid row */}
            
            {/* /Grid row */}
          </div>
        </div>
        {/* /.Sidebar */}
        {/* Content */}
        <div className="col-lg-9">
          {/* Filter Area */}
          <div className="row">
            
            <div className="col-md-8 text-right">
              {/* View Switcher */}
              <a className="btn btn-blue-grey btn-sm"><i className="fa fa-th mr-2" aria-hidden="true" /><strong> Grid</strong></a>
              <a className="btn btn-blue-grey btn-sm"><i className="fa fa-th-list mr-2" aria-hidden="true" /><strong> List</strong></a>
              {/* /.View Switcher */}
            </div>
          </div>
          {/* /.Filter Area */}
          {/* Products Grid */}
          <section className="section pt-4">
            {/* Grid row */}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                {/*Card*/}
                <div className="card card-ecommerce">
                  {/*Card image*/}
                  <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" className="img-fluid" alt="#" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  {/*Card image*/}
                  {/*Card content*/}
                  <div className="card-body">
                    {/*Category & Title*/}
                    <h5 className="card-title mb-1"><strong><a  className="dark-grey-text">iPad</a></strong></h5><span className="badge badge-danger mb-2">bestseller</span>
                    {/* Rating */}
                    
                    {/*Card footer*/}
                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left"><strong>1439$</strong></span>
                        <span className="float-right">
                          <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fa fa-shopping-cart ml-3" /></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Card content*/}
                </div>
                {/*Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                {/*Card*/}
                <div className="card card-ecommerce">
                  {/*Card image*/}
                  <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/15.jpg" className="img-fluid" alt="#" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  {/*Card image*/}
                  {/*Card content*/}
                  <div className="card-body">
                    {/*Category & Title*/}
                    <h5 className="card-title mb-1"><strong><a className="dark-grey-text">Sony T56-v</a></strong></h5><span className="badge badge-info mb-2">new</span>
                    {/* Rating */}
                    
                    {/*Card footer*/}
                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left"><strong>1439$</strong></span>
                        <span className="float-right">
                          <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fa fa-shopping-cart ml-3" /></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Card content*/}
                </div>
                {/*Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4">
                {/*Card*/}
                <div className="card card-ecommerce">
                  {/*Card image*/}
                  <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg" className="img-fluid" alt="#" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  {/*Card image*/}
                  {/*Card content*/}
                  <div className="card-body">
                    {/*Category & Title*/}
                    <h5 className="card-title mb-1"><strong><a className="dark-grey-text">Headphones</a></strong></h5><span className="badge badge-danger mb-2">bestseller</span>
                    {/* Rating */}
                    
                    {/*Card footer*/}
                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left"><strong>1439$</strong></span>
                        <span className="float-right">
                          <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fa fa-shopping-cart ml-3" /></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Card content*/}
                </div>
                {/*Card*/}
            </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/* Grid row */}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                {/*Card*/}
                <div className="card card-ecommerce">
                  {/*Card image*/}
                  <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="#" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  {/*Card image*/}
                  {/*Card content*/}
                  <div className="card-body">
                    {/*Category & Title*/}
                    <h5 className="card-title mb-1"><strong><a className="dark-grey-text">Samsung CT-567</a></strong></h5><span className="badge grey mb-2">best rated</span>
                    {/* Rating */}
                    
                    {/*Card footer*/}
                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left"><strong>1439$</strong></span>
                        <span className="float-right">
                          <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fa fa-shopping-cart ml-3" /></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Card content*/}
                </div>
                {/*Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
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
                    <h5 className="card-title mb-1"><strong><a className="dark-grey-text">Sony TV-675</a></strong></h5><span className="badge badge-danger mb-2">bestseller</span>
                    {/* Rating */}
                  
                    {/*Card footer*/}
                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left"><strong>1439$</strong></span>
                        <span className="float-right">
                          <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fa fa-shopping-cart ml-3" /></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Card content*/}
                </div>
                {/*Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                {/*Card*/}
                <div className="card card-ecommerce">
                  {/*Card image*/}
                  <div className="view overlay">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="#" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  {/*Card image*/}
                  {/*Card content*/}
                  <div className="card-body">
                    {/*Category & Title*/}
                    <h5 className="card-title mb-1"><strong><a className="dark-grey-text">Dell V-964i</a></strong></h5><span className="badge badge-info mb-2">new</span>
                    {/* Rating */}
                    
                    {/*Card footer*/}
                    <div className="card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left"><strong>1439$</strong></span>
                        <span className="float-right">
                          <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><i className="fa fa-shopping-cart ml-3" /></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Card content*/}
                </div>
                {/*Card*/}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/* Grid row */}
            
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row justify-content-center mb-4">
              {/*Pagination */}
              <nav className="mb-4">
                <ul className="pagination pagination-circle pg-blue mb-0">
                  {/*First*/}
                  <li className="page-item disabled clearfix d-none d-md-block"><a className="page-link waves-effect waves-effect">First</a></li>
                  {/*Arrow left*/}
                  <li className="page-item disabled">
                    <a className="page-link waves-effect waves-effect" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {/*Numbers*/}
                  <li className="page-item active"><a className="page-link waves-effect waves-effect">1</a></li>
                  <li className="page-item"><a className="page-link waves-effect waves-effect">2</a></li>
                  <li className="page-item"><a className="page-link waves-effect waves-effect">3</a></li>
                  <li className="page-item"><a className="page-link waves-effect waves-effect">4</a></li>
                  <li className="page-item"><a className="page-link waves-effect waves-effect">5</a></li>
                  {/*Arrow right*/}
                  <li className="page-item">
                    <a className="page-link waves-effect waves-effect" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                  {/*First*/}
                  <li className="page-item clearfix d-none d-md-block"><a className="page-link waves-effect waves-effect">Last</a></li>
                </ul>
              </nav>
              {/*/Pagination */}
            </div>
            {/*Grid row*/}
          </section>
          {/* /.Products Grid */}
        </div>
        {/* /.Content */}
      </div>
    </div>
    {/* /.Main Container */}
    {/*Footer*/}
    <footer className="page-footer text-center text-md-left stylish-color-dark pt-0">
      <div style={{backgroundColor: '#26c6da'}}>
        <div className="container">
          {/*Grid row*/}
          <div className="row py-4 d-flex align-items-center">
            {/*Grid column*/}
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              {/*Facebook*/}
              <a className="fb-ic ml-0 px-2"><i className="fa fa-facebook white-text"> </i></a>
              {/*Twitter*/}
              <a className="tw-ic px-2"><i className="fa fa-twitter white-text"> </i></a>
              {/*Google +*/}
              <a className="gplus-ic px-2"><i className="fa fa-google-plus white-text"> </i></a>
              {/*Linkedin*/}
              <a className="li-ic px-2"><i className="fa fa-linkedin white-text"> </i></a>
              {/*Instagram*/}
              <a className="ins-ic px-2"><i className="fa fa-instagram white-text"> </i></a>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
      </div>
      {/*Footer Links*/}
      <div className="container mt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">
          {/*First column*/}
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold"><strong>ShopApp</strong></h6>
            <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
            <p> 504-505, City Center, Nr. Param Doctor House, Laldarwaja, Station Road,, Surat - 395006, Gujarat, INDIA, Surat, Gujarat 395006</p>
          </div>
          {/*/.First column*/}
          {/*Second column*/}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold"><strong>About</strong></h6>
            <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
            <p><a href="/contect">Contect Us</a></p>
            <p><a href="#!">About Us</a></p>
            <p><a href="#!">Press</a></p>
           
          </div>
          {/*/.Second column*/}
          {/*Third column*/}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
            <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
            <p><a href="#!">Your Account</a></p>
            <p><a href="#!">Become an Affiliate</a></p>
            <p><a href="#!">Shipping Rates</a></p>
            <p><a href="#!">Help</a></p>
          </div>
          {/*/.Third column*/}
          {/*Fourth column*/}
          <div className="col-md-4 col-lg-3 col-xl-3">
            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
            <hr className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60}} />
            <p><i className="fa fa-home mr-3" /> Surat 395006, Gujarat, India</p>
            <p><i className="fa fa-envelope mr-3" /> info@shopapp.com</p>
            <p><i className="fa fa-phone mr-3" /> + 91 234 567 88</p>
            <p><i className="fa fa-print mr-3" /> + 91 234 567 89</p>
          </div>
          {/*/.Fourth column*/}
        </div>
      </div>
      {/*/.Footer Links*/}
      {/* Copyright*/}
      <div className="footer-copyright py-3 text-center">
        <div className="container-fluid">
          © 2018 Copyright: <a href="/" target="_blank">ShopApp.com </a>
        </div>
      </div>
      {/*/.Copyright */}
    </footer>
    {/*/.Footer*/}
  
  </div>
    );
  }
}
    export default Categ; 
  