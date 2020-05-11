import React from 'react';
import './RepoCard.scss'

const RepoCard = (props) => {
    return (
        <article className='repoCard'>
            <div className='repoCard__heading'>
                <small className='repoCard__surTitle'>ID: {props.id}</small>
                <a className='repoCard__title' href={props.htmlUrl}>{props.name}</a>
                <small className='repoCard__subTitle'>{props.watchersCount} watchers</small>
            </div>
            <div className='repoCard__contents'>
                <p>
                    {props.description}
                </p>
            </div>
            <div className='repoCard__footer'>
                <a href={props.authorUrl}><img alt={'Avatar of ' + props.author} src={props.authorAvatar}/> {props.author}</a>
            </div>
        </article>
    );
}

export default RepoCard;
