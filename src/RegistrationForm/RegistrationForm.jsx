import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';
import {AppActions} from './../App/AppActions';
import AppStore from './../App/AppStore';
require( './RegistrationForm.scss');


class RegistrationForm extends React.Component {

    state = {
        formCompleted: false,
        loading: false,
        name: this.props.userName,
        email: this.props.userEmail,
        phone: this.props.userPhone
    }

    componentWillReceiveProps(nextProps) {
        console.log('Updating state from props');
        this.setState({
            name: nextProps.userName,
            email: nextProps.userEmail,
            phone: nextProps.userPhone
        })
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    closeDialog() {
        var dialog = document.querySelector('#' + (this.props.dialogId ? this.props.dialogId : "registrationForm"));
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

        // get last insert row and update user data
        const row_no = result.result.updates.updatedRange.match(/Users!A(.*):/i)[1];
        let user_data = this.state.lastUserData;
        user_data[10] = row_no;

        // update store
        AppActions.addUserStore(user_data);
        AppStore.trigger('refreshUsers');

    }

    generateId() {
        return Math.random().toString(36).substring(16);
    }

    submitForm() {

        if (!this.checkFormFill()) {
            return false;
        }

        this.setState({
            loading: true
        });

        let sheets = new SheetsApi(() => {
            console.log('SHEETS API READY');

            this.setState({
                lastUserData: [
                    this.generateId(),
                    this.state.name,
                    this.state.phone,
                    this.state.email,
                    this.state.gender,
                    localStorage.userToken
                ]
            });

            sheets.authorize(false, () => {
                if (this.props.formType === 'edit') {
                    console.log('Editing col ',this.props.colNo, 'with data', this.state.lastUserData);
                    sheets.editRow(this.props.colNo, this.state.lastUserData, ::this.addSuccess)
                }
                else {
                    sheets.addRow(this.state.lastUserData, ::this.addSuccess)
                }

            });

        });

    }

    render () {
        return (
            <div className="registrationForm">
                <div className={this.state.formCompleted || this.state.loading ? 'hidden' : ''}>
                    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
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
                                <td>Sex:</td>
                                <td style={{textAlign: 'left'}}>
                                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-1" style={{marginRight: '30px'}}>
                                        <input type="radio" id="option-1" className="mdl-radio__button"  name="gender" value="1" onChange={::this.inputChange} />
                                        <span className="mdl-radio__label">Male</span>
                                    </label>
                                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-2">
                                        <input type="radio" id="option-2" className="mdl-radio__button" name="gender" value="2" onChange={::this.inputChange} />
                                        <span className="mdl-radio__label">Female</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={::this.closeDialog} style={{marginRight:'10px'}}>
                                        Close
                                    </button>
                                    <button onClick={::this.submitForm} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                                        {this.props.formType === "edit" ? "Save" : "Sign Up for Event!" }
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
                    <h4>
                        {this.props.formType === 'edit' ? "Changes have been saved" : "You have been successfully registered to even!"}
                    </h4>
                    <div style={{'textAlign':'center', 'margin':'20px'}}>
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
