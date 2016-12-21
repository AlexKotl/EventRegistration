import React from 'react';
import AppStore from './../../App/AppStore';
import {AppActions} from './../../App/AppActions';

export default class MembersRow extends React.Component {

    removeUser() {
        console.log('Removing user ',this.props.userId);
        AppActions.removeUserStore(this.props.userId);
        //console.log('after delete', AppStore.users);
    }

    render() {
        return (
           
            <tr>
                <td>
                    {this.props.num}
                </td>
                <td>
                    {this.props.userName}
                </td>
                <td>
                    {this.props.phone}
                </td>
                <td>
                    {this.props.email}
                </td>
                <td>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" onClick={::this.removeUser} title="Remove">
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        )

    }

}