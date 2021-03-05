import React, { Component } from 'react';

import classes from './Modal.module.css';
import Auxil from '../../../hoc/Auxil/Auxil';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	// this object is hidden most of the time, so here we are making sure that it is only updating its text when it's about to be shown
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}

	componentWillUpdate() {
		console.log('[Modal] WillUpdate');
	}

	render() {
		return (
			<Auxil>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div
					className={classes.Modal}
					style={{
						transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity   : this.props.show ? '1' : '0'
					}}
				>
					{this.props.children}
				</div>
			</Auxil>
		);
	}
}

export default Modal;
