import React from 'react';

export default class MembersRow extends React.Component {

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
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                        <i className="material-icons">edit</i>
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        )

    }

}