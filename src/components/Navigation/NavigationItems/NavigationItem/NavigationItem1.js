import React from 'react';
import classes from './NavigationItem1.css';

const navigationItem = (props) => {

    return (<li className={classes.NavigationItem}><a className={props.active ? classes.active : null} href={props.link}>{props.children}</a> </li >);
}

export default navigationItem;