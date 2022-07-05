import {doGet} from "./HTTPRequestAPI.js";

export function getAllSecrets(url, headers) {
    console.log(headers);
    return doGet(url, headers['authorization']);
}