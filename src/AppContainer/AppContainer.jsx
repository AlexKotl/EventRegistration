import React from 'react';
import 'material-design-lite';
import 'material-design-lite/material.css';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
require( './AppContainer.scss');

/**
 * Common container
 */
class AppContainer extends React.Component {
    render () {
        return (
            <div className="applicationContainer">
                <div className='applicationHeader'>
                    <img src="/images/logo.png" className="logo" alt="Logo" />
                    <h1>Register to our event now!</h1>
                    <div className="banner"></div>
                </div>
                
                <RegistrationForm />
            </div>
        );
    }
}

export default AppContainer;
