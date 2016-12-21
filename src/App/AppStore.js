import MicroEvent from 'microevent';
import {AppActions} from './AppActions.js';

var AppStore = new MicroEvent();
AppStore.users = {};

AppActions.iDispatcher.register(function (payload) {
    console.log('AppStore register event', payload.eventName);
    switch (payload.eventName) {
        case 'get-users':
            AppStore.users = payload.data;
            //AppStore.trigger('putArticles');
            break;
        case 'add-user':
            AppStore.users[payload.data[0]] = payload.data;
            //AppStore.trigger('refreshComments');
            break;
        case 'remove-user':
            delete AppStore.users[payload.data];
            AppStore.trigger('refreshUsers');
            break;
    }

    return true;
});

export default AppStore;
