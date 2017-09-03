/**
 * Created by wk on 9/2/17.
 */

import React, {Component} from 'react';

class CommentItem extends Component {

    render() {
        return (
            <div>{this.props.comment.comment_content.replace(/<a.*?<\/a>/g, "")}</div>
        )
    }
}
export default CommentItem;