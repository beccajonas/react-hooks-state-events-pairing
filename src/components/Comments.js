import React, { useState } from 'react';

function Comments({comments}) {
    const [commentDisplay, setCommentDisplay] = useState(true)

    function handleHideComments() {
        setCommentDisplay(!commentDisplay)
    }

    return (
        <div className="comment-div">
            <button onClick={handleHideComments}>
                {commentDisplay ? "Hide Comments" : "Show Comments" }</button>  
            <h2>{comments.length} Comments</h2>
            {comments.map(comment =>
                commentDisplay ? 
                <div className="commentlist">
                    <p className="user-name">{comment.user}</p>
                    <p className="comment-text">{comment.comment}</p>
                </div>
                :
                null
            )}
        </div>
    )
}

export default Comments