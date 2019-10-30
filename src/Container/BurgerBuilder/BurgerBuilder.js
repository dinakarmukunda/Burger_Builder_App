import React, { Component } from 'react';
//import Component from 'react';
import Burger from '../../components/Burger/Burger.js';
import Burgercontroler from '../../components/BurgerController/BurgerController.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary.js';

const Ingradient_prices = {
    salad: 1,
    bacon: 2,
    meat: 3,
    cheese: 4
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ingradients: {
                salad: 0,
                meat: 0,
                bacon: 0,
                cheese: 0
            },
            toprice: 4,
            orderingState: false
        }


    }

    changeIngrPositive = (type) => {
        const copystate = { ...this.state.Ingradients };
        console.log('type:' + type);
        copystate[type]++;
        let newPrice = this.state.toprice + Ingradient_prices[type];
        this.setState({
            Ingradients: copystate,
            toprice: newPrice
        });
    }

    changeIngrNegative = (type) => {
        const copystate = { ...this.state.Ingradients };
        if (copystate[type] >= 1) {
            copystate[type]--;
        }
        let newPrice = this.state.toprice - Ingradient_prices[type];
        this.setState({
            Ingradients: copystate,
            toprice: newPrice
        });
    }

    changeOrderingStateTrue = () => {

        this.setState({ orderingState: true });
    }

    changeOrderStatusToCancel = () => {


        this.setState({ orderingState: false })
    }

    doCheckout = () => {

        alert("Your order is going to be Checkedout");
    }

    render() {

        console.log('Log-1:Render Burger Builder')

        let disableLessButton = { ...this.state.Ingradients };
        for (let key in disableLessButton)
            disableLessButton[key] = disableLessButton[key] <= 0;
        return (
            <div>
                <Modal show={this.state.orderingState} changeOrderStatusToCancel={this.changeOrderStatusToCancel}>

                    <OrderSummary
                        totalprice={this.state.toprice}
                        listOfIng={this.state.Ingradients}
                        cancel={this.changeOrderStatusToCancel}
                        checkout={this.doCheckout}
                    />

                </Modal>
                <Burger Ingradientprop={this.state.Ingradients} />
                <div> <Burgercontroler
                    changeIngrPositive={this.changeIngrPositive}
                    changeIngrNegative={this.changeIngrNegative}
                    disableLess={disableLessButton}
                    totalprice={this.state.toprice}
                    changeOrderingState={this.changeOrderingStateTrue}
                /> </div>
            </div>
        )
    }

}

export default BurgerBuilder;