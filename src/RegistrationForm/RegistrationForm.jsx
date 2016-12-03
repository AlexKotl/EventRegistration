import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';
require( './RegistrationForm.scss');

class RegistrationForm extends React.Component {
    
    state = {}

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    closeDialog() {
        var dialog = document.querySelector('#registrationForm');
        dialog.close();
    }

    checkFormFill() {
        if (this.state.name == '' || this.state.phone == '' || this.state.email == '') {
            alert('Please, fill up all fields');
            return false;
        }

        return true;
    }

    addSuccess(result) {
        console.log('User successfully added. ',result);

        this.closeDialog();

        // clean state
        this.setState({
            name: '',
            phone: '',
            email: ''
        });

        // reset form inputs

    }

    submitForm() {
        if (!this.checkFormFill()) {
            return false;
        }

        let sheets = new SheetsApi(() => {
            console.log('SHEETS READY');

            sheets.authorize(false, () => {
                console.log('state',this.state);
                sheets.addRow([
                    '',
                    this.state.name,
                    this.state.phone,
                    this.state.email
                ], ::this.addSuccess)
            });

        });

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
                                    <input className="mdl-textfield__input" type="text" name="name" id="nameInput" value={this.state.name} onChange={::this.inputChange} />
                                    <label className="mdl-textfield__label" htmlFor="nameInput">Name</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Your phone:</td>
                            <td>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" name="phone" pattern="-?[0-9]*(\.[0-9]+)?" id="phoneInput" value={this.state.phone} onChange={::this.inputChange} />
                                    <label className="mdl-textfield__label" htmlFor="phoneInput">093 222 33 44</label>
                                    <span className="mdl-textfield__error">Enter phone in correct format!</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Email address:</td>
                            <td>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" name="email" id="emailInput" value={this.state.email} onChange={::this.inputChange} />
                                    <label className="mdl-textfield__label" htmlFor="emailInput">Email address</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.closeDialog} style={{marginRight:'10px'}}>
                                    Close
                                </button>
                                <button onClick={::this.submitForm} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
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
