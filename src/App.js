import React from 'react';
import './App.css';

import GridOfSquares from "./components/GridOfSquares";
import DimensionsInput from "./components/DimensionsInput";
import DevTools from "./containers/DevTools";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GridOfSquares></GridOfSquares>
        <DimensionsInput></DimensionsInput>
        <DevTools/>
      </div>
    );
  };
}

export default App;
