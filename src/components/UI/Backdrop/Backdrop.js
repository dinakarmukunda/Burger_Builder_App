
import React from 'react';
import classes from './Backdrop.css';

const BackDrop = (props) => {

    return (props.showme ? <div className={classes.Backdrop} onClick={props.clickme}></div> : null)
}

export default BackDrop;