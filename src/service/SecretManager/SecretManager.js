import {doGet, doPost, doDelete} from "../BaseAPI";

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

export function updateSecret(secret, token) {
    return doPost(process.env.REACT_APP_API_URL + "/api/venus/secrets/update", secret, token);
}

export function deleteSecret(id, token) {
    console.log("Attempting to delete secret with id:", id);
    return doDelete(process.env.REACT_APP_API_URL + "/api/venus/secrets/delete?ID="+ id , token);
}