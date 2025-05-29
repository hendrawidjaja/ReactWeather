const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Weather = require('Weather');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// load App.css
require('style!css!sass!applicationStyles'); 

ReactDOM.render(
    <Router history={hashHistory} location={}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
        </Route>
    </Router>, document.getElementById('app'));