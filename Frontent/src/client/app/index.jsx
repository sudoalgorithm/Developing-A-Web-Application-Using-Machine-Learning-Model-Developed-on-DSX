import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Main from './components/Main';

// load stylesheet
require('../sass/default.scss');

class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Route path="/" component={Main}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));