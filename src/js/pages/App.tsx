import * as React from "react";
import { Router, hashHistory } from "react-router";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

/**
 * This is the main app component - it houses all other components and sets up the
 * template of the application. It is also a DUMB components and uses the App container component
 * to provide it information about state and application data - please the the containers/App file
 */

export interface IAppProps {
    app: Array<{
        value: boolean
    }>;
    initApplication: () => void;
}

export class App extends React.Component<IAppProps, any> {
    constructor(props: any) {
        super(props);
    }
    
    // If the user is not logged in, we push them to the login screen
    public componentWillMount() {
        this.props.initApplication();
    }

    public render() {
        return(
            <div>
                Hey, hello world!
            </div>
        );
    }
}
