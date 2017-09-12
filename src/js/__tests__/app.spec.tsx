import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';

import { App } from '../Pages/App';

/**
 * General component test
 */

describe('<App />', () => {
    it('renders without crashing', () => {
        expect(TestUtils.createRenderer().render(
            <App />
        ));
    });
});
