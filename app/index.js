import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';
import Header from './components/Header';
import NotFound from './components/NotFound';


import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
    render(){
        return(
            <div>
                <h3>APP Component</h3>
            </div>
        );
    }
}


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={App} />}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));