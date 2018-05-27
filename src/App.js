import React, { Component } from 'react';
import './App.css';
import data from './static/data';
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Educations from "./components/Education";

class App extends Component {
  render() {
      let {summary , experiences, educations}= data;
    return (
      <div className="App">
          <Summary {...summary}/>
          <Experience experiences={experiences}/>
          <Educations educations={educations}/>
      </div>
    );
  }
}

export default App;
