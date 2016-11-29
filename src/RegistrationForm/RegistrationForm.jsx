import React from 'react';
require( './RegistrationForm.scss');

class RegistrationForm extends React.Component {
    closeDialog() {
        var dialog = document.querySelector('#registrationForm');
        dialog.close();
    }

    render () {
        return (
            <div className="registrationForm">

                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                    <tbody>
                        <tr>
                            <td>Your name:</td>
                            <td>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" id="sample1" />
                                    <label className="mdl-textfield__label" htmlFor="sample1">Name</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Your phone:</td>
                            <td>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2"/>
                                    <label className="mdl-textfield__label" htmlFor="sample2">093 222 33 44</label>
                                    <span className="mdl-textfield__error">Enter phone in correct format!</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Email address:</td>
                            <td>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" id="sample1" />
                                    <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.closeDialog} style={{marginRight:'10px'}}>
                                    Close
                                </button>
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                                    Sign Up for Event!
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default RegistrationForm;
