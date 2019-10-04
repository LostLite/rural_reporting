import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputField, Button, ErrorCard} from '../../helpers/form';
import { ValidateEmail} from '../../helpers/customValidator';
import {logUserIn} from '../../store/actions/userActions';
import './login.css'

class index extends Component {
    state = {
        data: {
            emailAddress:'',
            password:''
        },
        loading: false,
        validationErrors: {},
        serverErrors: {}
    }

    handleChange = e => this.setState({ data: {...this.state.data, [e.target.id]: e.target.value} });

    handleSubmit = e => {
        e.preventDefault(); //Do not submit form

        const validationErrors = this.validateIput(this.state.data);
        this.setState({validationErrors});

        if(Object.keys(validationErrors).length === 0) {
            this.props.logUserIn(this.state.data);
            this.props.history.push('/dashboard');
        }
        
    }

    validateIput = data => {
        const errors = {};
        if(!data.password) errors.password = "Password cannot be blank."
        
        const emailError = ValidateEmail(data.emailAddress);
        if(emailError) errors.emailAddress = emailError;

        return errors;
    }

    render() {
        const { validationErrors, serverErrors, loading} = this.state;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card-panel">
                            <div className="section">
                                <h5 className="grey-text text-darken-3">Sign In</h5>
                                {serverErrors.message && <ErrorCard errorMessage={serverErrors.message} />}
                                <form onSubmit={this.handleSubmit}>

                                    <InputField id="emailAddress" name="email address" type="email" onChange={this.handleChange} errorMessage={validationErrors.emailAddress} />
                                    <InputField id="password" name="password" type="password" onChange={this.handleChange} errorMessage={validationErrors.password} />
                                    <Button buttonText={loading? 'Please wait...': 'Login'}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        logUserIn: (loggedInUser) => dispatch(logUserIn(loggedInUser))
    }
}

export default connect(null, mapDispatchToProps)(index)
