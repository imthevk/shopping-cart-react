import React from 'react';
import { Provider } from 'react-redux';
import store from 'services/store';
import RootContainer from 'containers/RootContainer';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
