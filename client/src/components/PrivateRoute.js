import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...stuff}) => {
	return (
		<Route
			{...stuff}
			render={props => {
				if (localStorage.getItem('token')) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
