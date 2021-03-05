import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
// it's important to understand that because we are using webpack we have to import the picture for when the project is exported as just the src folder. you can't just have the img src be a static file reference

const logo = (props) => (
	<div className={classes.Logo} style={{ height: props.height }}>
		<img src={burgerLogo} alt='MyBurger' />
	</div>
);

export default logo;
