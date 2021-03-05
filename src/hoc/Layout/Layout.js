import React, { Component } from 'react';

import Auxil from '../Auxil/Auxil';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer : false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	// if you reference state in setState you have to do it like this because of the asynchronous nature of the code
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !this.state.showSideDrawer };
		});
	};

	render() {
		return (
			<Auxil>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</Auxil>
		);
	}
}

export default Layout;
