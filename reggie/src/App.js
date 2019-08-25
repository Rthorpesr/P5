
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import createhomework from "./components/createhomework.js";
import edithomework from "./components/edithomework.js";
import homeworklist from "./components/homeworklist.js";

class App extends Component {
  render() {
     return (
       <Router>
         <div className="Container">

             <nav className="navbar nabbar-expan-lg navbar-light bg-light">
               <Link to="/" className="navbar-bran">Reggie Mern Stack app</Link>
               <div className="collapse nav-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                       <Link to="/" className="nav-link">Homework</Link>
                    </li>
                    <li className="navbar-item">
                       <Link to="/create" className="nav-link">Create Homework</Link>
                    </li>
                  </ul>  
               </div>   
             </nav>
        
             <h2>Hello Reggie</h2>
             <Route path="/homework" exact component={homeworklist} />
             <Route path="/edit/:id" component={edithomework} />
            <Route path="/create" component={createhomework} />
         </div>
        
         </Router>
        );
    
  }
}


export default App;
