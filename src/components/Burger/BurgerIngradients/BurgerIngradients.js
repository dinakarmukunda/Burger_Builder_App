import React, { Component } from 'react';
import classes from './BurgerIngradients.css';
import Proptypes from 'prop-types';

class BurgerIngradients extends Component {

    constructor(props) {
        super(props);
        this.type = props.type;
        //console.log(this.props);
        console.log('BurgerIng:' + props.type);
    }

    render() {
        let typeofIngradient = null;

        switch (this.type) {
            case 'bread-top':
                typeofIngradient = <div className={classes.BreadTop} >top </div>;

                break;
            case 'bread-bottom':
                typeofIngradient = <div className={classes.BreadBottom} >bottom  </div>;
                //console.log('bread-bottom');

                break;
            case 'bacon':
                typeofIngradient = <div className={classes.Bacon} >bacon = 2 </div>;
                //console.log('bacon');
                break;
            case 'salad':
                typeofIngradient = <div className={classes.Salad} >salad = 1 </div>;
                break;
            case 'cheese':
                typeofIngradient = <div className={classes.Cheese} >cheese = 4 </div>;
                break;
            case 'meat':
                typeofIngradient = <div className={classes.Meat} >meat = 3 </div>;
                break;
            default:
                typeofIngradient = null;

        }

        return typeofIngradient;
    }
}

BurgerIngradients.propTypes = {
    type: Proptypes.string.isRequired
}

export default BurgerIngradients;