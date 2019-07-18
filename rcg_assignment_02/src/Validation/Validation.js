import React, { Component } from 'react';

const Validation = (props) => {

    const minimumLength = 5;
    var text = 'Text too short';

    if (props.textLength > minimumLength) {
        text = 'Text long enough';
    }

    console.log(props.textLength);

    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default Validation;