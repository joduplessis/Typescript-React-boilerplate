import { connect } from "react-redux";
import { App } from "../pages/App";
import { appThunkAction } from "../actions";

/**
 * All of the components in the "containers" folder are the intelligent components
 * that wrap dumb components, they all follow the same pattern of linking state objects
 * to dumb React components
 *
 * Each intelligent compoment wraps 1 dumb component
 */

const mapAppStateToProps = (state: any) => ({
    app: state.app
});

const mapAppDispatchToProps = (dispatch: any) => ({
    initApplication: () => {
        dispatch(appThunkAction(true));
    },
});

export default connect(
    mapAppStateToProps,
    mapAppDispatchToProps,
)(App);
