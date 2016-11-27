import React from 'react';
import 'material-design-lite';
import 'material-design-lite/material.css';

/**
 * Page
 */
class AppHeader extends React.Component {
    render () {
        return (
            <div className='applicationHeader'>
                <h1>Register to our event now!</h1>
                <button className="mdl-button mdl-js-button  mdl-button--colored">
                    Button
                </button>
            </div>
        );
    }
}

export default AppHeader;
