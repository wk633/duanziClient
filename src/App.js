import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';


import './App.css';
import Duanzi from './duanzi/duanzi';

class App extends Component {
  render() {
    return (
        <div className="height-100">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">My Demo Collection</a>
                </div>
            </nav>
            <Duanzi className="height-100"></Duanzi>
        </div>

    );
  }
}

export default App;
