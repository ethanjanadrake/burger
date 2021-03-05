import React, { Component } from 'react';

import Auxil from '../../../hoc/Auxil/Auxil';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// this could be functional instead of class-based. we were just using componentDidUpdate for debugging
	componentDidUpdate() {
		console.log('[OrderSummary] WillUpdate');
	}
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Auxil>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: ${this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout</p>
				<Button btnType='Danger' clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button btnType='Success' clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</Auxil>
		);
	}
}

export default OrderSummary;
