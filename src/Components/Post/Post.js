import React from 'react';
import './Post.css'

const Post = (props) => {
    const { title, id, body } = props.post;
    return (
        <div className='post'>
            <h4>Post Title : {title}</h4>
            <p><small>Post Id : {id}</small></p>
            <p>Post Body : {body}</p>
        </div>
    );
};

export default Post;