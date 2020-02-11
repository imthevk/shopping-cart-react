import React from 'react';
import ProductsList from 'components/productsList/ProductsList';
import GlobalStyle from 'theme/GlobalStyle';

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyle />
        <ProductsList />
      </>
    );
  }
}

export default App;
