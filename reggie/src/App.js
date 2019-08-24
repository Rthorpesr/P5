import React from 'react';
import './App.css';
import "materialize/dist/css/materialize.min.css";


class App extends Component {
  render() {
     return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={School} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
    
  }
}


export default App;
