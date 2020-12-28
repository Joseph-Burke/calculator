import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
