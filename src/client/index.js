import { client, redux } from 'topcoder-react-utils';

client({
  applicationModulePath: require.resolve('../shared'),
  /* eslint-disable global-require */
  getApplication: () => require('../shared').default,
  /* eslint-enable global-require */
  moduleHot: module.hot,
  storeFactory: async initialState => redux.storeFactory({
    /* eslint-disable global-require */
    getReducerFactory: () => require('reducers').factory,
    /* eslint-enable global-require */
    initialState,
    moduleHot: module.hot,
    reducerFactoryModulePath: require.resolve('reducers'),
  }),
});
