import React, { Component } from 'react';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
        <AnotherComponent />
      </div>
    );
  }
}

export default App;