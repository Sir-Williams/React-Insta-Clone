import React from 'react';

const Reactions = props => {
    return [
    <div className="reactions" key="likes-container" onClick={props.plusLike}>
        <div>
            <i className="fav" />
        </div>
    </div>
    ];
};