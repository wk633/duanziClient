/**
 * Created by wk on 9/2/17.
 */

import React, {Component} from 'react';

class CommentItem extends Component {

    render() {
        const firstLine = {marginBottom: 5};
        const zeroLeftPadding = {paddingLeft: 0};
        const commentName = {paddingLeft: 0, fontWeight: "bold"};
        return (
            <div>
                <div className="row" style={firstLine}>
                    <div className="col s6" style={commentName}>{this.props.comment.comment_author}</div>
                    <div className="col s6">{this.props.comment.comment_date}</div>
                </div>
                <div className="row">
                    <div className="col s12" style={zeroLeftPadding}>{this.props.comment.comment_content.replace(/<a.*?<\/a>/g, "").replace(/<br \/>/g, "\n")}</div>
                </div>

            </div>

        )
    }
}
export default CommentItem;