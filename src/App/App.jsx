// require('isomorphic-fetch');
// const gsheets = require('gsheets');
//
// gsheets.getWorksheet('1iOqNjB-mI15ZLly_9lqn1hCa6MinqPc_71RoKVyCFZs', 'foobar')
//     .then(res => console.log(res), err => console.error(err));

import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import AppContainer from 'src/AppContainer/AppContainer.jsx';

render (
    <Router history={browserHistory}>
        <Route path='/' component={AppContainer}/>
    </Router>,

    document.getElementById('container')
)
