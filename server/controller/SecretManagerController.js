import express from "express";
import fileUpload from "express-fileupload";
import {getAllSecrets} from "../services/SecretManagerAPI.js";

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

export default router;