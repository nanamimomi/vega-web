import express from "express";
import fileUpload from "express-fileupload";
import {getAllSecrets, createSecret, deleteSecret, updateSecret} from "../services/SecretManagerAPI.js";

let router = express();

router.use(fileUpload({limits: {fileSize: 50 * 1024 * 1024}}));

function sanitize(request) {
    const safe_request = {};
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    for (const [key, value] of Object.entries(request)) {
        safe_request[key] = value.replace(reg, (match) => map[match]);
    }      
    return safe_request;
}

router.post("/all", (req, res) => {
    console.log("Entered into all secrets");
    console.log(req.body);
    const safe_request = sanitize(req.body);
    getAllSecrets(process.env.API_URL + "/venus/secrets/all", safe_request, req.headers)
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
    const safe_request = sanitize(req.body);
    createSecret(process.env.API_URL + "/venus/secrets/create", safe_request, req.headers)
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
    const safe_request = sanitize(req.body);
    deleteSecret(process.env.API_URL + "/venus/secrets/delete", safe_request, req.headers)
        .then(response => {
            res.send(response);
        })
        .catch((error) => {
            console.log("ERROR:", error);
            res.send(error);
        })
})

router.post("/update", (req, res) => {
    console.log("Attempting to update secret");
    const safe_request = sanitize(req.body);
    updateSecret(process.env.API_URL + "/venus/secrets/update", safe_request, req.headers)
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