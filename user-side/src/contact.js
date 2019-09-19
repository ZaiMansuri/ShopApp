import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//API key 1
import { compose, withProps, lifecycle } from "recompose";
 

const MyMapComponent = compose(
  withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `480px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
      componentWillMount() {
          const refs = {}

          this.setState({
              position: null,
              onMarkerMounted: ref => {
                  refs.marker = ref;
              },

              onPositionChanged: () => {
                  const position = refs.marker.getPosition();
                  console.log(position.toString());
              }
          })
      },
  }),
  withScriptjs, withGoogleMap)((props) =>
  <GoogleMap defaultZoom={17} defaultCenter={{ lat:21.206152, lng:72.836431  }}>
      {props.isMarkerShown && <Marker position={{ lat: 21.206152,lng:72.836431 }}
       draggable={true} ref={props.onMarkerMounted} onPositionChanged={props.onPositionChanged} />}
  </GoogleMap>
  )

class Contact extends Component {
  
  state = {
    isMarkerShown: false,
}
render() {
  return (
         
   <div>

         <section>
        <div className="mdb-map">
            <div id="map-container" className="z-depth-1-half map-container" style={{height: '480px'}}>
            <MyMapComponent isMarkerShown={true} />   
            </div>
        </div>
    </section>
    
        {/*Main Layout*/}
        <main >
         
          <div  className="container-fluid mb-4">
            {/*Grid row*/}
            <div className="row" >
           
              {/*Grid column*/}
              <div className="col-md-12">
                
                  <div className="card-body">
                    <div className="container">
                      {/* Section: Contact v.3 */}
                      <section className="contact-section my-5">
                        {/* Form with header */}
                        <div className="card">
                          {/* Grid row */}
                          <div className="row">
                            {/* Grid column */}
                            <div className="col-lg-8">
                              <div className="card-body form">
                                {/* Header */}
                                <h3 className="mt-4"><i className="fa fa-envelope pr-2" />Write to us:</h3>
                                {/* Grid row */}
                                <div className="row">
                                  {/* Grid column */}
                                  <div className="col-md-6">
                                    <div className="md-form mb-0">
                                      <input type="text" id="form-contact-name" className="form-control" />
                                      <label htmlFor="form-contact-name" >Your name</label>
                                    </div>
                                  </div>
                                  {/* Grid column */}
                                  {/* Grid column */}
                                  <div className="col-md-6">
                                    <div className="md-form mb-0">
                                      <input type="text" id="form-contact-email" className="form-control" />
                                      <label htmlFor="form-contact-email" >Your email</label>
                                    </div>
                                  </div>
                                  {/* Grid column */}
                                </div>
                                {/* Grid row */}
                                {/* Grid row */}
                                <div className="row">
                                  {/* Grid column */}
                                  <div className="col-md-6">
                                    <div className="md-form mb-0">
                                      <input type="text" id="form-contact-phone" className="form-control" />
                                      <label htmlFor="form-contact-phone" >Your phone</label>
                                    </div>
                                  </div>
                                  {/* Grid column */}
                                  {/* Grid column */}
                                  <div className="col-md-6">
                                    <div className="md-form mb-0">
                                      <input type="text" id="form-contact-company" className="form-control" />
                                      <label htmlFor="form-contact-company" >Your company</label>
                                    </div>
                                  </div>
                                  {/* Grid column */}
                                </div>
                                {/* Grid row */}
                                {/* Grid row */}
                                <div className="row">
                                  {/* Grid column */}
                                  <div className="col-md-12">
                                    <div className="md-form mb-0">
                                      <textarea type="text" id="form-contact-message" className="form-control md-textarea" rows={3} defaultValue={""} />
                                      <label htmlFor="form-contact-message">Your message</label>
                                      <a className="btn-floating btn-lg blue">
                                        <i className="fa fa-send-o" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* Grid column */}
                                </div>
                                {/* Grid row */}
                              </div>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-lg-4">
                              <div className="card-body contact text-center h-100 white-text">
                                <h3 className="my-4 pb-2">Contact information</h3>
                                <ul className="text-lg-left list-unstyled ml-4">
                                  <li>
                                    <p><i className="fa fa-map-marker pr-2 mb-4" />Surat, 395006 India</p>
                                  </li>
                                  <li>
                                    <p><i className="fa fa-phone pr-2 mb-4" />+ 91 234 567 89</p>
                                  </li>
                                  <li>
                                    <p><i className="fa fa-envelope pr-2" />contact@shopapp.com</p>
                                  </li>
                                </ul>
                                <hr className="hr-light my-4" />
                                <ul className="list-inline text-center list-unstyled">
                                  <li className="list-inline-item">
                                    <a className="p-2 fa-lg tw-ic">
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="p-2 fa-lg li-ic">
                                      <i className="fa fa-linkedin"> </i>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="p-2 fa-lg ins-ic">
                                      <i className="fa fa-instagram"> </i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* Grid column */}
                          </div>
                          {/* Grid row */}
                        </div>
                        {/* Form with header */}
                      </section>
                      {/* Section: Contact v.3 */}
                    </div>
                
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
      
        </main>
        
        {/*Main Layout*/}
        {/*Footer*/}
        
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
                      <td><a><i className="fa fa-remove" /></a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Product 2</td>
                      <td>100$</td>
                      <td><a><i className="fa fa-remove" /></a></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Product 3</td>
                      <td>100$</td>
                      <td><a><i className="fa fa-remove" /></a></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Product 4</td>
                      <td>100$</td>
                      <td><a><i className="fa fa-remove" /></a></td>
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
              <p> 504-505, City Center, Nr. Param Doctor House, Laldarwaja, Station Road,, Surat - 395006, Gujarat, INDIA</p>
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
              <p><i className="fa fa-whatsapp mr-3" /> + 91 234 567 89</p>
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
         </div>
        );
    }
}
export default Contact;

