import {Form, Button, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';

const LoginUser = ({onSubmit}) => {
	
	const [username, setUsername]  = useState('');
	const [password, setPassword] = useState('');

	const submitForm:function = (evt) => {
		evt.preventDefault();
		onSubmit({
			'username' : username,
			'password' : password
		})
	}

	return (
		<Row>
      		<Col className="mx-auto" xs={6}>
        		<Form onSubmit={submitForm}>
	      			<Form.Group className="mb-3">
	        			<Form.Label id="username-label">USERNAME</Form.Label>
	        			<Form.Control type="text" aria-labelledby="username-label" onChange={e => setUsername(e.target.value)}/>
	      			</Form.Group>
	      			<Form.Group className="mb-3">
	        			<Form.Label id="password-label">PASSWORD</Form.Label>
	        			<Form.Control type="PASSWORD" aria-labelledby="password-label" onChange={e => setPassword(e.target.value)}/>
	      			</Form.Group>
	      			<Button variant="primary" type="submit" onClick={submitForm}>
	        			Submit
	      			</Button>
    			</Form>
      		</Col>
   	 	</Row>
		);
}
export default LoginUser;