import React from 'react';
import "./PostContainer.css";
import Post from "./Post"

const PostContainer = props => {
    return (
        <div className="postContainer">
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </div>
    )
}

export default PostContainer;