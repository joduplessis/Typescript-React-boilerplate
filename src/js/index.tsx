import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import AppContainer from "./containers/AppContainer";
import { accountFetch } from "./actions";
import { combineReducers, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

/**
 * We create our main store from our combined state (reducer), we use Redux Thunk so we can
 * returns functions from actions (useful for Promises for interacting with our API)
 */

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

/**
 * These are our application routes
 */

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppContainer} />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
