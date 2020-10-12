import React from 'react';


const Issue = (props) => {
    const { title, url, body } = props.issue;
    return (
        <div>
            <h1>{title}</h1>
            <a href={url}>{url}</a>
            <p>{body}</p>
        </div>
    );
}


export default Issue;