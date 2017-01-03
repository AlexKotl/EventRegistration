import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';
import MembersRow from './MembersRow/MembersRow.jsx';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import AppStore from './../App/AppStore';
import {AppActions} from './../App/AppActions';
import dialogPolyfill from 'dialog-polyfill/dialog-polyfill.js';
require('dialog-polyfill/dialog-polyfill.css');


require( './MembersList.scss');

export default class MembersList extends React.Component {

    state = {
        items: [],
        loaded: false,
        editUserData: {}, // data of current user that editing
    };

    refreshUsers() {
        console.log('setting new store ', AppStore.users);
        this.setState({
            //items:
        })
    };

    componentDidMount() {
        var api = new SheetsApi(() => {
            let col_no = 0;
            api.getAllData(data => {
                data.filter(user => {
                    col_no++;
                    user[10] = col_no; // save col number for further API calls

                    if (user[5] === localStorage.userToken) {
                        AppActions.addUserStore(user);
                        return true;
                    }
                });

                console.log('data loaded');
                this.setState({
                    items: AppStore.users,
                    loaded: true
                });
            }, () => {
                // if failed - just mark as loaded
                this.setState({
                    loaded: true
                });
            });
        });

        // bind store action
        AppStore.bind('refreshUsers', ::this.refreshUsers);
    }

    componentWillUnmount() {
        AppStore.bind('refreshUsers', ::this.refreshUsers);
    }

    showForm(data) {
        console.log('Displaying edit form...', data);

        this.setState({
            editUserData: data
        });

        var dialog = document.querySelector('#editForm');
        dialogPolyfill.registerDialog(dialog);
        dialog.showModal();
    }

    render() {

        let n = 0;

        return (
            <div>
                <div className={!this.state.loaded ? 'loadingIcon' : 'hidden'} >
                    <div className="mdl-spinner mdl-js-spinner is-active"></div>
                </div>

                <dialog className="mdl-dialog" id="editForm">
                    <RegistrationForm
                        dialogId="editForm"
                        formType="edit"
                        colNo={this.state.editUserData.colNo}
                        userName={this.state.editUserData.userName}
                        userEmail={this.state.editUserData.email}
                        userPhone={this.state.editUserData.phone}
                    />
                </dialog>

                <table className="membersList mdl-data-table mdl-shadow--2dp" style={{width: '100%', display: Object.keys(this.state.items).length>0 ? '' : 'none'}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>


                        {Object.keys(this.state.items).map(key => {
                            n++;
                            let el = this.state.items[key];
                            console.log('rendering', key, el);
                            return <MembersRow
                                key={'member_' + n}
                                num={n}
                                userId={el[0]}
                                userName={el[1]}
                                phone={el[3]}
                                email={el[2]}
                                gender={el[4]}
                                colNo={el[10]}
                                showForm={::this.showForm}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )

    }

}
