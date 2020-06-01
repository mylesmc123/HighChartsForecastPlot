import React, { Component } from 'react';
import './App.css';
import HighChart from './components/HighChart'
import Chart from './components/Chart'


class App extends Component {

  toggleZoomHandler = () => {
    this.xAxis[0].setExtremes()
    console.log('toggleZoomHandler Run')
  }

  render () {

    return (
      <div className="App">
        {/* <header className="App-header" /> */}
        <HighChart
          clicked={console.log('click!')} />
        <Chart />
      </div>
    );
  }
}
  
export default App;
