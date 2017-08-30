import React, { Component } from 'react';

class DuanziItem extends Component {
    render() {
        return (
            <div className="card cyan darken-1">
                <div className="card-content white-text">
                    <span className="card-title">#xxxxxxx</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <div className="row zero-margin-bottom">
                        <div className="col s6">
                            <a href="#">Comments</a>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-thumbs-up"></i><span>&nbsp;12</span>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-thumbs-down"></i><span>&nbsp;1</span>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-heart-o"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DuanziItem;