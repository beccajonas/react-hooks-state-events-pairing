import React, { useState } from 'react';

function Details ({views, createdAt, upvotes, downvotes}) {
    console.log(downvotes);

    const [countLikes, setCountLikes] = useState(upvotes)
    const [countDislikes, setCountDislikes] = useState(downvotes)
    
    function handleUpvoteClick() {
        setCountLikes(countLikes + 1)
    }

    function handleDownvoteClick() {
        setCountDislikes(countDislikes + 1)
    }

    return(
        <div className="details">
            <p>Views: {views} | Created: {createdAt}</p>
            <button onClick={handleUpvoteClick}>{countLikes}👍</button>
            <button onClick={handleDownvoteClick}>{countDislikes}👎</button>
        </div>
    )
}

export default Details