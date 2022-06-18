import bodyParser from 'body-parser';
import express from 'express';
import {login} from '../services/LoginRequestAPI.js';

function authModule(req, res) {
	if (req.method == 'POST') {
    	const userInfo = req.body;
    	console.log(userInfo);
    	login(process.env.API_URL + "/venus/authenticate", userInfo)
    		.then(response => {
    			console.log("Response", response);
    			res.send(response);
    		})
    		.catch(error => {
    			console.log("ERROR:", error);
    			res.send(error);
    		})
    }
}

export default authModule;