import React, {useContext, useState} from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
//Future me refactor this into Formik

const Login = props => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const login = e => {
		e.preventDefault();
		console.log(`Username:${username} and password${password}`);
		axios
			.post('http://localhost:5000/api/login', {
				username: username,
				password: password
			})
			.then(res => {
				console.log('success', res);
				localStorage.setItem('token', res.data.payload);
				props.history.push('/bubbles');
			})
			.catch(err => console.log('errror', err));
	};
	return (
		<Container>
			<h1>Welcome to the Bubble App!</h1>
			<p>Behold a Login Page!</p>

			<form onSubmit={el => login(el)}>
				<TextField
					id="username"
					label="username"
					value={username}
					onChange={el => {
						setUsername(el.target.value);
					}}
				/>
				<TextField
					id="password"
					label="password"
					value={password}
					onChange={el => {
						setPassword(el.target.value);
					}}
				/>
				<Button onClick={el => login(el)}>Submit</Button>
			</form>
		</Container>
	);
};

export default Login;
