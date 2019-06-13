import React from 'react';

const Reactions = props => {
    return [
    <div className="reactions" key="likes-container" onClick={props.plusLike}>
        <div className="reaction-container">
            <i className="far fa-fav" />
        </div>
        <div className="reaction-container">
            <i className="far fa-comment" />
        </div>
    </div>,
    <div className="like-section" key="likes-container">
        <div className="like-section-container">{props.likes}</div>
    </div>
    ];
};

export default Reactions;