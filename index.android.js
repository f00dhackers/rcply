import React, {
  AppRegistry,
  Component
} from 'react-native';

import { Provider } from 'react-redux';
import App from './src/containers/App';
import configureStore from './src/store/configureStore';
/* const { configureStore } = require('./src/store/configureStore'); */

const store = configureStore();

class Rcply extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Rcply', () => Rcply);
