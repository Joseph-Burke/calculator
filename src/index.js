import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './containers/Home';
import App from './containers/App';
import Quote from './containers/Quote';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
