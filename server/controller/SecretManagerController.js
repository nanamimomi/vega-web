import express from "express";
import fileUpload from "express-fileupload";
import {getAllSecrets, createSecret, deleteSecret, updateSecret} from "../services/SecretManagerAPI.js";

let router = express();

router.use(fileUpload({limits: {fileSize: 50 * 1024 * 1024}}));

router.post("/all", (req, res) => {
    console.log("Entered into all secrets");
    console.log(req.body);
    getAllSecrets(process.env.API_URL + "/venus/secrets/all", req.body, req.headers)
        .then((response) => {
            console.log("Response:", response);
            res.send(response);
        })
        .catch((error) => {
            console.log("ERROR:", error);
            res.send(error);
        });
});

router.post("/create", (req, res) => {
    console.log("Attempting to create secret:", req.body);
    createSecret(process.env.API_URL + "/venus/secrets/create", req.body, req.headers)
        .then(response => {
            console.log("Response:", response);
            res.send(response);
        })
        .catch((error) => {
            console.log("ERROR:", error);
            res.send(error);
        })
});

router.post("/delete", (req, res) => {
    console.log("Attempting to delete secret");
    deleteSecret(process.env.API_URL + "/venus/secrets/delete", req.body, req.headers)
        .then(response => {
            console.log("Response:", response);
            res.send(response);
        })
        .catch((error) => {
            console.log("ERROR:", error);
            res.send(error);
        })
})

router.post("/update", (req, res) => {
    console.log("Attempting to update secret");
    updateSecret(process.env.API_URL + "/venus/secrets/update", req.body, req.headers)
        .then(response => {
            console.log("Response:", response);
            res.send(response);
        })
        .catch((error) => {
            console.log("ERROR:", error);
            res.send(error);
        })
})

export default router;