import React, { Component } from 'react';
import AddList from './components/AddList';
import WE_LIST from './components/WE_LIST';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <AddList />
        <WE_LIST />
      </div>
    )
  }
}

export default App;
