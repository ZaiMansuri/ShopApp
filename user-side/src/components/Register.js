import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            phone: '',
            name: '',
            username: '',
            password: '',
            password_confirm: '',
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
            phone: this.state.phone,
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
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

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
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

                <div className="row my-5">
                    <div className="col-6 signup-bg text-center  hoverable">
                        <Link to="/register"><span>SIGN UP</span></Link>
                    </div>
                    <div className="col-6 text-center signin-bg  hoverable">
                        <Link to="/login"><span>SIGN IN</span></Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 px-0">
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group mb-0">
                                <input
                                    type="text"
                                    value={this.state.phone}
                                    className="form-control1"
                                    onChange={this.handleInputChange}
                                    placeholder="Phone"
                                    name="phone"

                                />
                                {errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
                                <span><img src="img/contact.png" className="input-icon" alt="" /></span>
                            </div>
                            <div className="form-group mb-0">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className={classnames('form-control1', {
                                        'is-invalid': errors.name
                                    })}
                                    name="name"
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                />
                                <span><img src="img/first_Last_name.png" className="input-icon" alt="" /></span>
                                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                            </div>
                            <div className="form-group mb-0">
                                <input
                                    type="email"
                                    placeholder="User Name"
                                    className={classnames('form-control1', {
                                        'is-invalid': errors.email
                                    })}
                                    name="username"
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                />
                                <span><img src="img/email.png" className="input-icon"  alt= "" /></span>
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
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
                            <div className="form-group mb-0">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className={classnames('form-control1', {
                                        'is-invalid': errors.password_confirm
                                    })}
                                    name="password_confirm"
                                    onChange={this.handleInputChange}
                                    value={this.state.password_confirm}
                                />
                                <span><img src="img/password.png" className="input-icon" alt="" /></span>
                                {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                            </div>

                            <button type="submit" className="btn1 example hoverable signup-btn-color btn-block my-5">
                                SIGN UP</button>
                        </form>
                    </div> </div>
            </div>
        </div> </div>
</div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
