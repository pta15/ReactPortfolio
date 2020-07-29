import React from 'react';
import Header from "./components/header.component";
import Showcase from "./components/showcase.component";
import Cards from "./components/cards.component";
import { BrowserRouter as Router, /*Route*/} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./images/background-1.gif";


function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Showcase />
        <div className="test">
          hello <br />
          world
        </div>
        <div></div>
      </Router>  
    </div>
  );
}

export default App;
