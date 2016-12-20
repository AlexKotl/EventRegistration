import React from 'react';
import 'material-design-lite';
import 'material-design-lite/material.css';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import EventDescription from './../EventDescription/EventDescription'
require( './AppContainer.scss');

/**
 * Common container
 */
class AppContainer extends React.Component {

    generateToken() {
        return Math.random().toString(36).substring(10);
    }

    componentDidMount() {
        if (localStorage.userToken === undefined) {
            localStorage.userToken = this.generateToken();
            console.log('set new token');
        }
        else {
            console.log("User token: ", localStorage.userToken);
        }
    }

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
                    <h1>GoIT super event!</h1>
                    <div className="banner"></div>
                </div>

                <EventDescription showDialog={this.showDialog} />

                <dialog className="mdl-dialog" id="registrationForm">
                    <RegistrationForm />
                </dialog>
            </div>
        );
    }
}

export default AppContainer;
