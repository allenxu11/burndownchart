import React, { Component } from 'react';
import './App.scss';
import Chart from './Chart.js'
// import Overpayment from './Overpayment.js';
// import Payment from './Payment.js';
import BaseFigures from './BaseFigures';

class App extends Component {
  constructor() {
    super()
  }
  
  render() {
  //   var data = [
  // {date: new Date(2007, 3, 24), value: 93.24},
  // {date: new Date(2007, 3, 25), value: 95.35},
  // {date: new Date(2007, 3, 26), value: 98.84},
  // {date: new Date(2007, 3, 27), value: 99.92},
  // {date: new Date(2007, 3, 30), value: 99.80},
  // {date: new Date(2007, 4,  1), value: 99.47},
  // ];
      var data = [
  {x: 1, y: 93.24, color: 'red'},
  {x: 2, y: 95.35, color: 'red'},
  {x: 3, y: 98.84, color: 'red'},
  {x: 4, y: 99.92, color: 'red'},
  {x: 5, y: 99.80, color: 'red'},
  {x: 6, y: 99.47, color: 'red'},
  ];
var payments = [1,2,3,4,5,6];
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Welcome to Burndownchart</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BaseFigures className="col-sm-4" />
        <Chart data={data} payments={payments}/>
      </div>
    );
  }
}

export default App;
