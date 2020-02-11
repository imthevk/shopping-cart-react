import React from 'react';

class App extends React.Component {
  state = {
    value: 'hello world',
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <div className="wrapper" name="wrapper" id="wrapper1">
          <h1>{value}</h1>
        </div>
        <a href="https://row.gymshark.com/collections/shorts/womens" className="link">
          klik
        </a>
      </>
    );
  }
}

export default App;
