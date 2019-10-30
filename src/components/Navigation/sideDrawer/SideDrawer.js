import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js'
import Backdrop from '../../UI/Backdrop/Backdrop.js'
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        sideDrawerClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <div>
            <Backdrop showme={props.show} clickme={props.changeSDStoFalse} />
            <div className={sideDrawerClasses.join(' ')}>

                <div className={classes.Logo}> <Logo /> </div>>
            <nav> <NavigationItems /> </nav>
            </div>
        </div>)
}

export default sideDrawer;