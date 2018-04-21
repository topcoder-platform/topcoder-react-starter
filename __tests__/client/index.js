jest.mock('shared', () => ({
  default: 'APPLICATION',
}));

jest.mock('reducers', () => ({
  factory: () => () => ({}),
}));

jest.mock('topcoder-react-utils', () => {
  const TRU = require.requireActual('topcoder-react-utils');
  return {
    ...TRU,
    client: jest.fn(),
  };
});

test('Passes basic testing', () => {
  require('client');
  const { client } = require('topcoder-react-utils');

  const args = client.mock.calls[0];
  expect(args).toMatchSnapshot();

  expect(args[0].getApplication()).toBe('APPLICATION');

  expect(args[0].storeFactory()).toBeInstanceOf(Promise);
});
