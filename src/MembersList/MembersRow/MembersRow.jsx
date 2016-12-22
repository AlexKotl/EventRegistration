import React from 'react';
import SheetsApi from './../../SheetsApi/SheetsApi.jsx';
import {AppActions} from './../../App/AppActions';

export default class MembersRow extends React.Component {

    state = {
        processing: false
    };
    
    removeUser() {
        console.log('Removing user ',this.props.userId);

        this.setState({
            processing: true
        });
        
        let api = new SheetsApi(() => {
            api.deleteRow(this.props.colNo, () => {
                AppActions.removeUserStore(this.props.userId);

                this.setState({
                    processing: false
                })
            });
        });

    }

    render() {
        return (
           
            <tr className={this.state.processing ? 'loading' : ''}>
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