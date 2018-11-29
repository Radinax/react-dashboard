import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';

//Components
import Invoice from "./Components/Invoice.js";
import Navbar from "./Components/Navbar.js";
import Overview from "./Components/Overview.js";
import Direction from "./Components/Direction.js";

// Assets
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron>
          <Invoice />
          <Direction />
          <Overview />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
