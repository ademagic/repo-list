import React from 'react';

const RepoCard = (props) => {
    return (
        <article className="repoCard">
            <small>{props.id}</small>
            <div className="repoCard__name">
                <h1>{props.name}</h1>
            </div>
            <small>watchers: {props.watchersCount}</small>
        </article>
    );
}

export default RepoCard;
