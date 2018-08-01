import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
 
import reducers from './reducers'
import './index.css';
import App from './containers/AppContainer';
import Admin from './containers/AdminContainer'
// import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

const TestComponent = () => {
    return (
      <div>This is test component</div>
    )
};

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/shopify" component={App}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/login" component={Admin}></Route>
                    <Route path="/item/:id" component={TestComponent}></Route>
                    <Redirect to="/shopify" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// registerServiceWorker();
