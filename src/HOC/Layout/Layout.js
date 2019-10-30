import React, { Component } from 'react';
import BurgerBuilder from '../../Container/BurgerBuilder/BurgerBuilder.js'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js'
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/sideDrawer/SideDrawer.js'


class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = { sideDrawer: false }
    }

    changeSideDrawerStateToFalse = () => {

        this.setState({ sideDrawer: false })
    }

    changeSideDrawerStateToTrue = () => {
        this.setState({ sideDrawer: true })
    }


    render() {

        return (
            <div className={classes.Content}>

                <Toolbar showSDSToTrue={this.changeSideDrawerStateToTrue} />
                <SideDrawer show={this.state.sideDrawer} changeSDStoFalse={this.changeSideDrawerStateToFalse} />
                <BurgerBuilder />
            </div>
        )
    }
}

export default Layout;