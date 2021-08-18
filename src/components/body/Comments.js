import React from 'react';


const Comments = props => {
    return (
        <div style={{ padding: '10px' }}>
            <p>Name: {props.comment.author}</p>
            <p>Comment: {props.comment.comment}</p>
            <hr />
        </div>
    )
}

export default Comments;