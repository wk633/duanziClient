import React, { Component } from 'react';
import './duanziItem.css';
import CommentItem from './commentItem';
import config from '../config';
import 'whatwg-fetch';
const urlBase = config.apiBase + "tucao/";

class DuanziItem extends Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.openComment = this.openComment.bind(this);
        this.state = {
            heartO: true,
            open: false,
            loading: true
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
    openComment() {
        if (!this.state.open) {
            this.setState({
                open: true
            });
            let url = urlBase + this.props.duanzi.duanziId;
            // let request = new Request(
            //     encodeURI(url),
            //     {
            //         method: 'GET',
            //             cache: false
            //     }
            // );
            fetch(url)
                .then(res => res.json())
                .then(response => {
                    this.setState({
                        loading: false,
                        comments: response
                    });
                    if (response.length === 0) {
                        console.log("No Comment");
                    }else {
                        // generate comment items
                        console.log("have comment");
                    }
                })
        }
    }

    countHeight() {
        if (this.state.open) {
            return "auto";
        }else {
            return 0;
        }
    }
    renderComment() {
        if (this.state.comments.length === 0 || this.state.comments[0].tucao.length === 0) {
            return (
                <div>No Comment</div>
            )
        }else {
            // console.log(this.state.comments);
            var commentList = this.state.comments[0].tucao.map(tucao => {
                // console.log(tucao);
                return (
                    <CommentItem key={tucao.comment_ID} comment={tucao}></CommentItem>
                )
            });
            return commentList;
        }
    }
    render() {
        let commentContainerStyle = {height: this.countHeight(), marginTop: 10};
        let progressStyle = {
            backgroundColor: "#00acc1",
            visibility: this.state.loading && this.state.open ? "visible" : "hidden"
        };

        let indeterminate = {
            backgroundColor: "#f48fb1"
        };
        let whiteComment = {
            color: "#fafafa"
        }
        let zeroPaddingBottom={
            paddingBottom: 0
        }

        return (
            <div className="card cyan lighten-2">
                <div className="card-content">
                    <span className="card-title">#&nbsp;{this.props.duanzi.duanziId}</span>
                    <p>{this.props.duanzi.duanziContent}</p>
                </div>
                <div className="card-action" style={zeroPaddingBottom}>
                    <div className="row zero-margin-bottom">
                        <div className="col s6 comment-btn-container">
                            <a style={whiteComment} className="comment-btn" onClick={this.openComment}>Comments</a>
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
                    <div className="" style={commentContainerStyle}>
                        {!this.state.loading && this.renderComment()}
                        <div className="progress" style={progressStyle}>
                            <div className="indeterminate" style={indeterminate}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default DuanziItem;