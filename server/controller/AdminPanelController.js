import bodyParser from 'body-parser';
import express from 'express';
import {fetchusers, enableAccount, changeRole} from '../services/AdminPanelAPI.js';
import fileUpload from 'express-fileupload';

let router = express();

router.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

router.get("/getusers", (req, res) => {
	console.log("Entered list files");
	fetchusers(process.env.API_URL + "/venus/admin/fetchusers", req.headers)
	.then(response => {
    	console.log("Response", response);
    	res.send(response);
    })
    .catch(error => {
    	console.log("ERROR:", error);
    	res.send(error);
    })
})

router.get("/enableuser", (req, res) => {
	console.log("Request: Enable User");
	const {username} = req.query;
	const {enable} = req.query;
	enableAccount(process.env.API_URL + `/venus/admin/enableuser?username=${username}&enable=${enable}`, req.headers)
	.then(response => {
    	console.log("Response", response);
    	res.send(response);
    })
    .catch(error => {
    	console.log("ERROR:", error);
    	res.send(error);
    })
})

router.get("/changerole", (req, res) => {
	console.log("Request: Change Role")
	const {username} = req.query;
	const {role} = req.query;
	changeRole(process.env.API_URL + `/venus/admin/changerole?username=${username}&role=${role}`, req.headers)
	.then(response => {
		console.log("Response", response);
		res.send(response);
	})
	.catch(error => {
		console.log("ERROR:", error);
		res.send(error)
	})
})

export default router;