import { combineReducers } from "redux";
import app from "./app";

/**
 * These are our reducers that manage our application state, and receive actions dispatched
 * from the UI and certain events. We are creating 1 combined state below that will drive our app.
 *
 * The basic usage of a reducer is having a default state and a function that returns a mutated state
 */

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
