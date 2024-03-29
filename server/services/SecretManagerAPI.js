import {doPost} from "./HTTPRequestAPI.js";

export function getAllSecrets(url, owner, headers) {
    console.log(headers);
    return doPost(url, owner, headers['authorization']);
}

export function createSecret(url, secret, headers) {
    console.log(headers);
    return doPost(url, secret, headers['authorization']);
}

export function updateSecret(url, data, headers) {
    return doPost(url, data, headers['authorization']);
}

export function deleteSecret(url, data, headers) {
    console.log(headers);
    return doPost(url, data, headers['authorization']);
}