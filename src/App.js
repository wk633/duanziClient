import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css';
import Duanzi from './duanzi/duanzi';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="height-100">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Demo Collections</Link>
                        <ul className="right hide-on-small-and-down">
                            <li><Link to="/favorite">Favorites</Link></li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Duanzi}/>
            </div>
        </Router>


    );
  }
}

export default App;
