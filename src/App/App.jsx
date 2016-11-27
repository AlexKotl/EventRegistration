

import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import AppHeader from 'src/AppHeader/AppHeader.jsx';

render (
    <Router history={browserHistory}>
        <Route path='/' component={AppHeader}/>
    </Router>,

    document.getElementById('container')
)
