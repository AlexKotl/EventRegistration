
import {Dispatcher} from 'flux';

var iDispatcher = new Dispatcher();

var AppActions = {
    getUsers: function (users) {
        iDispatcher.dispatch({
            eventName: 'get-users',
            data: users
        });
    },

    addUserStore: function (user) {
        iDispatcher.dispatch({
            eventName: 'add-user',
            data: user
        });
    },

    editUserStore: function(user) {
        iDispatcher.dispatch({
            eventName: 'edit-user',
            data: user
        });
    },

    removeUserStore: function(user_id) {
        iDispatcher.dispatch({
            eventName: 'remove-user',
            data: user_id
        })
    }

};

module.exports.AppActions = AppActions;
module.exports.AppActions.iDispatcher = iDispatcher;
