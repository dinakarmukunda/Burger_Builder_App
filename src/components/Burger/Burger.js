import React from 'react';
//import default from '../../App';
import Classes from './Burger.css';
import BurgerIngradients from './BurgerIngradients/BurgerIngradients';
const burger = (props) => {
    /*const ingradientsOfBurger = Object.keys(props.Ingradients).map(
        (IngrType) => {
            return ([...Array(props.Ingradients[IngrType])]
            )

        }
    ); */
    //console.log(ingradientsOfBurger);
    console.log('BurgerBuilder_Props:' + props.Ingradientprop);
    //This will have an Ingradient Object 
    //console.log('Property:' + props.Ingradientprop.salad);
    let ingradientsOfBurger = [];
    console.log('ingradientsOfBurger :' + ingradientsOfBurger)
    //Creating an array allIngrs - string
    const allIngrs = Object.keys(props.Ingradientprop);
    console.log('allIngrs:' + allIngrs);
    for (let i = 0; i < allIngrs.length; i++) {

        for (let j = 0; j < props.Ingradientprop[allIngrs[i]]; j++) {
            //  console.log("type= " + allIngrs[i]);
            ingradientsOfBurger.push(<BurgerIngradients type={allIngrs[i]} key={allIngrs[i] + j} />)
        }
    }
    if (ingradientsOfBurger.length === 0) {
        ingradientsOfBurger = <p>Please start adding Ingradients.. </p>
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngradients type='bread-top' />
            {ingradientsOfBurger}
            <BurgerIngradients type='bread-bottom' />
        </div>
    )
}

export default burger;