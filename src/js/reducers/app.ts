import { APP_ACTION } from "../constants";

const initialAppState = {
    initialised: false,
};

const app = (state = initialAppState, action: any) => {
    switch (action.type) {
        case APP_ACTION:
            return Object.assign({}, state, {
                initialised: action.payload,
            });

        /*
        This is for updating only a part of the state:

        case APP_ACTION:
            if (state.initialised) {
                return Object.assign({}, state, {
                    initialised: false,
                });
            } else {
                return Object.assign({}, state, {
                    initialised: true,
                });
            }
         */

        default:
            return state;
    }
};

export default app;
