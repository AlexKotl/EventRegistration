import React from 'react';
import 'material-design-lite';
import 'material-design-lite/material.css';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
require( './AppContainer.scss');

/**
 * Common container
 */
class AppContainer extends React.Component {

    showDialog() {
        var dialog = document.querySelector('#registrationForm');
        dialog.showModal();

        // TODO: add dialogPolyfill
    }

    render () {
        return (
            <div className="applicationContainer">
                <div className='applicationHeader'>
                    <img src="/images/logo.png" className="logo" alt="Logo" />
                    <h1>Register to our event now!</h1>
                    <div className="banner"></div>
                </div>

                <button onClick={this.showDialog} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    Sign Up for Event!
                </button>

                <RegistrationForm />
                
                <dialog className="mdl-dialog" id="registrationForm">
                    <RegistrationForm />
                </dialog>
            </div>
        );
    }
}

export default AppContainer;
