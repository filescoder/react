import React, { Component } from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="UserOutput panel panel-default">
            <div className="panel-body">
                <p className="">Username: {props.username}</p>
                <p>Hi {props.username}. Welcome to this assignment!</p>
            </div>
        </div>
    );
}

export default UserOutput