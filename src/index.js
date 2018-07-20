import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route} from 'react-router-dom';
 
import reducers from './reducers'
import './index.css';
import App from './components/App/App';
import Admin from './components/Admin/Admin'
// import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/shopify" component={App}></Route>
                <Route path="/admin" component={Admin}></Route>
                <Route path="/login" component={Admin}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// registerServiceWorker();
