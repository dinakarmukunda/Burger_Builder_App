import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems.js'
import SideDrawer from '../sideDrawer/SideDrawer.js'
import HamBurger from '../../UI/HamBurger/HamBurger.js'

const toolbar = (props) => {

    return (<div className={classes.Toolbar}>

        <HamBurger clickme={props.showSDSToTrue} />
        <Logo />
        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </div >
    )
}

export default toolbar; 