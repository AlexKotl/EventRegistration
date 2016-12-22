import React from 'react';
import SheetsApi from './../SheetsApi/SheetsApi.jsx';
import MembersRow from './MembersRow/MembersRow.jsx';
import AppStore from './../App/AppStore';
import {AppActions} from './../App/AppActions';

require( './MembersList.scss');

export default class MembersList extends React.Component {

    state = {
        items: [],
        loaded: false
    }

    refreshUsers() {
        console.log('setting new store ', AppStore.users);
        this.setState({
            //items:
        })
    }

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

                this.setState({
                    items: AppStore.users,
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
  
    render() {

        let n = 0;

        return (
            <div>
                <div className={!this.state.loaded ? 'loadingIcon' : 'hidden'} >
                    <div className="mdl-spinner mdl-js-spinner is-active"></div>
                </div>

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
                            return <MembersRow key={'member_' + n} num={n} userId={el[0]} userName={el[1]} phone={el[2]}  email={el[3]}  gender={el[4]} colNo={el[10]} />
                        })}
                    </tbody>
                </table>
            </div>
        )

    }
    
}