import React from 'react';

export default (props) =>
    <button className={props.classes} onClick={props.onClick}>
        {props.children}
    </button>