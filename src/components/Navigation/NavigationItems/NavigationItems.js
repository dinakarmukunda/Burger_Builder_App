import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem1.js'

const navigationItems = () => {

    return (<ul className={classes.NavigationItems}>
        <NavigationItem link='' active={true}>BURGER-BUILDER</NavigationItem>
        <NavigationItem link=''> Check-out Link </NavigationItem>
    </ul>)
}

export default navigationItems;