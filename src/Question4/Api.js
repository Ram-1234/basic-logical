import React from 'react';
import './styles.css'

export default function Api(props) {
    return (
        <>
        <div className="userdata">
            <h1>{props.username}</h1>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </div>
        </>
    )
}
