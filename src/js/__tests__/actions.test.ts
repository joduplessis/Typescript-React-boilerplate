import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import {} from 'jasmine';

import { appThunkAction, appThunkActionDeploy } from '../actions';
import { APP_ACTION } from '../constants';

/**
 * General layout for writing tests for the actions
 * format can be followed for reducers, etc.
 * Please see package.json for Jest config
 */

describe('App has initialised', () => {
    const mockValue: boolean = true;

    it('sends the initialised value via an action', () => {
        expect(appThunkActionDeploy(true)).toEqual({
            type: APP_ACTION,
            payload: true
        });
    });
});
