import {doGet, doPost} from "../BaseAPI";

export function getAllSecrets(token) {
    return doGet(process.env.REACT_APP_API_URL + "/api/venus/secrets/all", token)
        .then((secrets) => {
            secrets.map((secret) => secret.dateCreated = new Date(secret.dateCreated));
            console.log("All secrets:", secrets)
            return secrets;
        });
}

export function createSecret(secret, token) {
    console.log(process.env.REACT_APP_API_URL + "/api/venus/secrets/create")
    return doPost(process.env.REACT_APP_API_URL + "/api/venus/secrets/create", secret, token)
}

export function updateSecret(secret, name, content, token) {
    // TODO: actually update the secret
    return doPost(process.env.REACT_APP_API_URL + "/api/venus/secrets/update", {name, text:content, secret}, token)
}

export function deleteSecret(secret) {
    // TODO: actually delete the secret
    console.log("Attempting to delete secret", secret);
    return Promise.resolve("Secret Deleted Successfully");
}