import React from 'react';
import CustomButton from '../Button/CustomButton.js';

const OrderSummary = (props) => {

    let ingradientsOfBurger = [];
    //Creating an array allIngrs
    const allIngrs = Object.keys(props.listOfIng);

    for (let i = 0; i < allIngrs.length; i++) {

        ingradientsOfBurger.push(<li key={allIngrs[i]}> {allIngrs[i]} : {props.listOfIng[allIngrs[i]]}</li>);

    }

    return (<div>

        <h3> Order Summary </h3>
        <p> Below is the list of items in your burger </p>
        <ul>{ingradientsOfBurger}</ul>
        <p> Do you want to check-out? </p>
        <CustomButton btntype={'Success'} clickme={props.checkout}> checkout </CustomButton>
        <CustomButton btntype={'Danger'} clickme={props.cancel}> Cancel </CustomButton>

        <p> <h3>Total Price : {props.totalprice}</h3></p>
    </div>)
}

export default OrderSummary;