import React from 'react'

export default function BlogPost(props) {
    return (
        <div>
            <h1>Blog Post</h1>
            <h2>{props.match.params.slug}</h2>
        </div>
    )
}
