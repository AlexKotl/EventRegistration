import React from 'react';
import 'material-design-lite';
import 'material-design-lite/material.css';
require( './AppContainer.scss');

/**
 * Page
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
            </div>
        );
    }
}

export default AppContainer;
