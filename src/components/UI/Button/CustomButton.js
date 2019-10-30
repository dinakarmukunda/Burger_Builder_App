import React from 'react';
import classes from './CustomButton.css';

const CustomButton = (props) => {

    return (<button className={[classes.Button, classes[props.btntype]].join(' ')
    } onClick={props.clickme} > {props.children} </button >)
};

export default CustomButton;