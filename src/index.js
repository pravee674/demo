import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route , Switch} from 'react-router';
import './index.css';
import App from './App';
import Channel from './Channel';
import { history } from './util/history';
import * as serviceWorker from './serviceWorker';
import { browserHistory } from 'react-router';

const routing = (
      <Router history = {history}>
        <div>
          <Switch>
            <Route exact path={'/'} component={App} />
            <Route exact path={'/channel'} component={Channel} />
            <Route exact path={'/trending'} component={App} />
          </Switch>
        </div>
      </Router>
  );
  
  ReactDOM.render(routing, document.getElementById('root'))
  serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
