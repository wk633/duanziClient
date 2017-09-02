import React, { Component } from 'react';
import './duanziItem.css';

class DuanziItem extends Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);

        this.state = {
            heartO: true
        }
    }
    componentDidMount() {
        this.setState({
            heartO: !this.props.duanziContent.hasOwnProperty(this.props.duanzi.duanziId)
        });
    }
    clickHandler() {
        this.setState({
            heartO: !this.state.heartO
        });
        this.props.favoriteHandler(this.props.duanzi.duanziId, this.state.heartO, this.props.duanzi);
    }
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
                            <a href="/">Comments</a>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-thumbs-up"></i><span>&nbsp;{this.props.duanzi.commentLike}</span>
                        </div>
                        <div className="col s2">
                            <i className="fa fa-thumbs-down"></i><span>&nbsp;{this.props.duanzi.commentUnlike}</span>
                        </div>
                        <div className="col s2 heart" onClick={this.clickHandler}>
                            {this.state.heartO && <i className="fa fa-heart-o"></i>}
                            {!this.state.heartO && <i className="fa fa-heart"></i>}
                        </div>
                    </div>
                    <div className="">
                        No Comments
                    </div>
                </div>
            </div>
        )
    }
}
export default DuanziItem;