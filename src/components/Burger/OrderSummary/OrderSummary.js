import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // this could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('OrderSummary will update');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        })

        return (
            <Auxiliary>
                <h3>Your order</h3>
                <p>A delicious burger with the folowing ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType='Danger'
                    clicked={this.props.purchasedCancelled}
                >CANCEL</Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchasedContinued}
                >CONTINUE</Button>
            </Auxiliary>
        )
    }

}

export default OrderSummary;