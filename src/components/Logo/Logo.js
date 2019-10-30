import React from 'react';
import classes from './Logo.css'
import LogoImage from '../../Assets/images/burger-logo.png'

const logo = () => {

    return (<div className={classes.Logo}>
        <img src={LogoImage} />
    </div>)
}

export default logo;