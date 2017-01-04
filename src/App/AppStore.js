import MicroEvent from 'microevent';
import {AppActions} from './AppActions.js';

var AppStore = new MicroEvent();
AppStore.users = {};

AppActions.iDispatcher.register(function (payload) {
    switch (payload.eventName) {
        case 'get-users':
            AppStore.users = payload.data;
            //AppStore.trigger('putArticles');
            break;
        case 'add-user':
            AppStore.users[payload.data[0]] = payload.data;
            break;
        case 'edit-user':
            console.log('Users BEFORE: ',AppStore.users);
            // save user col number from old row
            payload.data[10] = AppStore.users[payload.data[0]][10];
            
            AppStore.users[payload.data[0]] = payload.data;
            console.log('Users AFTER: ',AppStore.users);
            break;
        case 'remove-user':
            delete AppStore.users[payload.data];
            AppStore.trigger('refreshUsers');
            break;
    }

    return true;
});

export default AppStore;
