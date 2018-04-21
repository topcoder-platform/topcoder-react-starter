import HelloWorld from 'components/HelloWorld';
import React from 'react';
import { JU } from 'topcoder-react-utils';

test('Matches shallow snapshot', () => {
  JU.shallowSnapshot(<HelloWorld />);
});
