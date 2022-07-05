import {doGet} from "../BaseAPI";

export function getAllSecrets(token) {
    return doGet(process.env.REACT_APP_API_URL + "/api/venus/secrets/all", token);
}

export function createSecret(secret) {
    // TODO: actually make the secret
    console.log("Attempting to create secret", secret);
    return Promise.resolve("Secret Created Successfully");
}

export function updateSecret(secret) {
    // TODO: actually update the secret
    console.log("Attempting to update secret", secret);
    return Promise.resolve("Secret Updated Successfully");
}

export function deleteSecret(secret) {
    // TODO: actually delete the secret
    console.log("Attempting to delete secret", secret);
    return Promise.resolve("Secret Deleted Successfully");
}