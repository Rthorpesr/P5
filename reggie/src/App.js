
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import createhomework from "./components/createhomework.js/index.js";
import edithomework from "./components/edithomework.js/index.js";
import homeworklist from "./components/homeworklist";

class App extends Component {
  render() {
     return (
       <Router>
         <div className="Container">
             <h2> ----------             Hello Reggie</h2>
             <Route path="/homework" exact component={homeworklist} />
             <Route path="/edit/:id" component={edithomework} />
            <Route path="/create" component={createhomework} />
         </div>
        
         </Router>
        );
    
  }
}


export default App;
