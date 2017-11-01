import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';


//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';


//data
import comments from './data/comments';
import posts from './data/posts';


//components
import Header from './components/Header';
import NotFound from './components/NotFound';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';


const defaultState = {
    posts,
    comments
};

let store = createStore(rootReducer, defaultState);


const router = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/view' component={PhotoGrid} />
                    <Route path='/view/:postId' component={Single}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));