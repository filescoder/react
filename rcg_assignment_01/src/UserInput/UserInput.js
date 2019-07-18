import React, { Component } from 'react';

const UserInput = (props) => {
    const styles = {
        UserInput: {
            margin: '10px',
        }
    };

    return (
        <div style={styles.UserInput}>
            <input type="text" onChange={props.changed} value={props.currentName}></input>
        </div>
    );
}

export default UserInput