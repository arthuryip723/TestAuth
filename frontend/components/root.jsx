import React from 'react';
import App from './app';
import CompOne from './compone';
import CompTwo from './comptwo';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CompOne}/>
          <Route path="/two" component={CompTwo}/>
        </Route>
      </Router>
    );
  }
}
// const Root = () => (
//   <h1>Hello Root!</h1>
// );

export default Root;