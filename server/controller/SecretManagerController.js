import express from "express";
import fileUpload from "express-fileupload";
import {getAllSecrets, createSecret, deleteSecret} from "../services/SecretManagerAPI.js";

let router = express();

router.use(fileUpload({limits: {fileSize: 50 * 1024 * 1024}}));

router.get("/all", (req, res) => {
    console.log("Entered into all secrets");
    getAllSecrets(process.env.API_URL + "/venus/secrets/all", req.headers)
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

router.delete("/delete", (req, res) => {
    console.log("Attempting to delete secret");
    const id = req.query.ID;
    console.log("attempting to delete secret with id:", id);
    deleteSecret(process.env.API_URL + "/venus/secrets/delete?ID=" + id, req.headers)
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