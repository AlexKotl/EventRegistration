import React from 'react';
import 'material-design-lite';
import 'material-design-lite/material.css';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import EventDescription from './../EventDescription/EventDescription';
import dialogPolyfill from 'dialog-polyfill/dialog-polyfill.js';
require('dialog-polyfill/dialog-polyfill.css');
require( './AppContainer.scss');


/**
 * Common container
 */
class AppContainer extends React.Component {

    state = {
        gapiLoaded: false
    };

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
        
        // run cycle to detect if google api loaded
        this.checkGapiLoaded();
    }
    
    checkGapiLoaded() {
        if (typeof gapi === 'object' && typeof gapi.auth === 'object') {
            this.setState({
                gapiLoaded: true
            })
        }
        else {
            setTimeout(::this.checkGapiLoaded, 300);
        }
    }

    showDialog() {
        var dialog = document.querySelector('#registrationForm');
        dialogPolyfill.registerDialog(dialog);
        dialog.showModal();
    }

    render () {
        return (
            <div className="applicationContainer">
                <div className='applicationHeader'>
                    <img src="/images/logo.png" className="logo" alt="Logo" />
                    <h1>GoIT super event!</h1>
                    <div className="banner"></div>
                </div>

                <div className={!this.state.gapiLoaded ? 'loadingIcon' : 'hidden'} >
                    Loading Google API... <p/>
                    <div className="mdl-spinner mdl-js-spinner is-active"></div>
                </div>

                {this.state.gapiLoaded ? <EventDescription showDialog={this.showDialog} /> : ''}

                <dialog className="mdl-dialog" id="registrationForm">
                    <RegistrationForm />
                </dialog>
            </div>
        );
    }
}

export default AppContainer;
