import { getCookie, setCookie, deleteCookie } from "../util";
import axios from "axios";
import { hashHistory } from "react-router";
import { APP_ACTION } from "../constants";

/**
 * General application wide state updates. They get fired from the logging in actions, but
 * also from some of the UI contrainers - the logout button for instance.
 */

export function appThunkAction(val: boolean) {
    return function(dispatch: any, getState: any) {
        dispatch(appThunkActionDeploy(val));
    };
}

export function appThunkActionDeploy(val: boolean) {
    return {
        type: APP_ACTION,
        payload: val,
    };
}
