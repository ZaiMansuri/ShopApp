import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import '../App.css';
class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    
render() {
        const { errors } = this.state;
return (

<div className="container-fluid form-bg px-0">
     <div className="row e-com-bg py-4 mx-0">
        <div className="col-12 text-center text-white px-0">
            <h2>ShopApp</h2>
        </div>
    </div> 
        <div className="container form-margin">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-6 form-pad bg-white logbox">
                   
                    <div className="row my-5 ">
                        <div className="col-6 signup-bg-deactive text-center  hoverable">
                            <Link to="/register"><span>SIGN UP</span></Link>
                        </div>
                        <div className="col-6 text-center signin-bg-active hoverable">
                            <Link to="/login"><span>SIGN IN</span></Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 px-0">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mb-0">
                                    <input
                                        type="email"
                                        placeholder="User Name"
                                        className={classnames('form-control1', {
                                            'is-invalid': errors.username
                                        })}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        value={this.state.username}
                                    />
                                    <span><img src="img/email.png" className="input-icon" alt="" /></span>
                                    {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                                </div>
                                <div className="form-group mb-0">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={classnames('form-control1', {
                                            'is-invalid': errors.password
                                        })}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        value={this.state.password}
                                    />
                                    <span><img src="img/password.png" className="input-icon" alt="" /></span>
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </div>
                                <button type="submit"
                                    className="btn1 signup-btn-color btn-block my-5 example hoverable">SIGN IN</button>
                            </form>
                        </div> </div>
                </div>
            </div>
       
    </div>
</div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);
