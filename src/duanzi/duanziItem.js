import React, { Component } from 'react';

class DuanziItem extends Component {
    render() {
        return (
            <div className="card cyan darken-1">
                <div className="card-content white-text">
                    <span className="card-title">#{this.props.duanzi.duanziId}</span>
                    <p>{this.props.duanzi.duanziContent}</p>
                </div>
                <div className="card-action">
                    <div className="row zero-margin-bottom">
                        <div className="col s6">
                            <a href="#">Comments</a>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-thumbs-up"></i><span>&nbsp;{this.props.duanzi.commentLike}</span>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-thumbs-down"></i><span>&nbsp;{this.props.duanzi.commentUnlike}</span>
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