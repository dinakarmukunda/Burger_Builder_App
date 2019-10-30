import React from 'react';
import BuildControl from '../BuildController/BuildControl.js';
import classes from './BurgerController.css';
//import default from '../../HOC/Layout/Layout';

const burgerController = (props) => {

    const allControls = ['salad', 'bacon', 'cheese', 'meat'];

    const allControllerComps = [];

    for (let i = 0; i < allControls.length; i++) {
        allControllerComps.push(<BuildControl ingrLabel={allControls[i]} key={allControls[i]} changeIngrPositive={props.changeIngrPositive} changeIngrNegative={props.changeIngrNegative} disableLess={props.disableLess[allControls[i]]} />);
        console.log(allControllerComps);

    }

    console.log('Ordering State: ' + props.changeOrderingState);
    return (
        <div className={classes.BurgerController}>
            <p>current price =<strong> {props.totalprice} </strong></p>
            {allControllerComps}
            <button className={classes.OrderButton} disabled={!(props.totalprice > 4)} onClick={props.changeOrderingState}>ORDER NOW</button>
        </div >
    )


}

export default burgerController;

