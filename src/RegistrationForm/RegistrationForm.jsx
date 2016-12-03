import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';
require( './RegistrationForm.scss');

class RegistrationForm extends React.Component {
    
    state = {
        formCompleted: false,
        loading: false,
        name: '',
        email: '',
        phone: ''
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    closeDialog() {
        var dialog = document.querySelector('#registrationForm');
        dialog.close();

        this.setState({
            formCompleted: false
        })
    }

    checkFormFill() {
        console.log('Checking form fill...', this.state);

        if (this.state.name == '' || this.state.phone == '' || this.state.email == '') {
            alert('Please, fill up all fields');
            return false;
        }
        else {
            return true;
        }
    }

    addSuccess(result) {
        console.log('User successfully added. ',result);

        // clean state
        this.setState({
            formCompleted: true,
            loading: false,
            name: '',
            phone: '',
            email: ''
        });

    }

    submitForm() {

        if (!this.checkFormFill()) {
            return false;
        }

        this.setState({
            loading: true
        });

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
                <div className={this.state.formCompleted || this.state.loading ? 'hidden' : ''}>
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
                                    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={::this.closeDialog} style={{marginRight:'10px'}}>
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

                <div className={this.state.loading ? 'loadingIcon' : 'hidden'} >
                    <div className="mdl-spinner mdl-js-spinner is-active"></div>
                </div>

                <div className={this.state.formCompleted ? '' : 'hidden'}>
                    <h4>You have been successfully registered to even!</h4>
                    <div style={{'text-align':'center', 'margin':'20px'}}>
                        <button onClick={::this.closeDialog} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Got it! See you on event.
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default RegistrationForm;
