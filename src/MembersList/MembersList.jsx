import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';

require( './MembersList.scss');

export default class MembersList extends React.Component {

    componentDidMount() {
        var api = new SheetsApi(() => {
            console.log('api INITED');
            api.getAllData(data => {
                console.log("Data get: ", data);
            });
        });
    }
  
    render() {

        return (
            <table className="mdl-data-table mdl-shadow--2dp" style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                                <i className="material-icons">edit</i>
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
                                <i className="material-icons">delete</i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )

    }
    
}