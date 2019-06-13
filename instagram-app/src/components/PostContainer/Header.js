import React from 'react';
import './Post.css';

const Header = props => {
    return (
        <div className="header">
            <div className="thumbnail-container">
                <img alt="post header" className="thumbnail" src="{props.thumbnailUrl" />
            </div>
            <div>{props.username}</div>
        </div>
    )
}

export default Header;