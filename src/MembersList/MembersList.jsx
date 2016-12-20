import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';
import MembersRow from './MembersRow/MembersRow.jsx';

require( './MembersList.scss');

export default class MembersList extends React.Component {

    state = {
        items: [],
        loaded: false
    }

    componentDidMount() {
        var api = new SheetsApi(() => {
            console.log('api INITED');
            api.getAllData(data => {
                const rows = data.filter(el => {
                    return el[5] === localStorage.userToken;
                });

                this.setState({
                    items: rows,
                    loaded: true
                });
            });
        });
    }
  
    render() {

        var n = 0;

        return (
            <div>
                <div className={!this.state.loaded ? 'loadingIcon' : 'hidden'} >
                    <div className="mdl-spinner mdl-js-spinner is-active"></div>
                </div>

                <table className="mdl-data-table mdl-shadow--2dp" style={{width: '100%', display: this.state.items.length>0 ? '' : 'none'}}>
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.items.map( el => {
                            n++;
                            return <MembersRow key={'member_' + n} num={n} userName={el[1]} phone={el[2]}  email={el[3]}  gender={el[4]} />
                        } )}
                    </tbody>
                </table>
            </div>
        )

    }
    
}