// import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Home from '../containers/Home';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { requestRobots, searchRobots } from '../redux/reducers';

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

const Index = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default Index;

// serviceWorkerRegistration.register();

// reportWebVitals();
