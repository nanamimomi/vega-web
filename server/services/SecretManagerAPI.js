import {doGet, doPost} from "./HTTPRequestAPI.js";

export function getAllSecrets(url, headers) {
    console.log(headers);
    return doGet(url, headers['authorization']);
}

export function createSecret(url, secret, headers) {
    console.log(headers);
    return doPost(url, secret, headers['authorization']);
}

export function updateSecret(url, data, headers) {
    return doPost(url, data, headers['authorization'])
}