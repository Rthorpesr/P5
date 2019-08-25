
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import createhomework from "./components/createhomework.js";
import edithomework from "../src/components/edithomework.component";
import homeworklist from "../src/components/homeworklist.component";

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
