import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import customTheme from './components/Theme/Theme';
 
import reducers from './reducers'
import './index.css';
import App from './containers/AppContainer';
import Admin from './containers/AdminContainer'
import Login from './containers/LoginContainer'
// import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

const TestComponent = (props) => {
    console.log(props);
    return (
      <div>This is test component</div>
    )
};

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <MuiThemeProvider theme={customTheme}>
                <Switch>
                    <Route path="/shopify" component={App}></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/item/:id" component={TestComponent}></Route>
                    <Route path="/forgot-password" component={TestComponent}></Route>
                    <Route path="/cart" component={App}></Route>
                    <Redirect to="/login" />
                </Switch>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// registerServiceWorker();
