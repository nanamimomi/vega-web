export function getAllSecrets() {
    /*
    TODO: get the names, ids, dates, and times of all of the secrets from vega-spring
    For now, just use a placeholder while the frontend is developed
     */
    const secrets = [
        {"name": "Walmart", "id": null, "date": new Date("2022-01-17")},
        {"name": "Costco", "id": null, "date": new Date("2022-02-9")},
        {"name": "Amazon", "id": null, "date": new Date("2022-01-3")},
        {"name": "Clash of Clans", "id": null, "date": new Date("2022-03-23")},
        {"name": "Steam", "id": null, "date": new Date("2022-06-13")},
        {"name": "Mini Golf", "id": null, "date": new Date("2022-04-26")},
        {"name": "Swimming Pool", "id": null, "date": new Date("2022-01-5")},
        {"name": "House Code", "id": null, "date": new Date("2022-05-7")},
        {"name": "Front Window", "id": null, "date": new Date("2022-05-23")},
        {"name": "House Alarm", "id": null, "date": new Date("2022-03-10")},
        {"name": "Scissors", "id": null, "date": new Date("2022-04-8")},
        {"name": "Pencil", "id": null, "date": new Date("2022-03-28")},
        {"name": "Aligator", "id": null, "date": new Date("2022-06-21")},
        {"name": "Plastic", "id": null, "date": new Date("2022-06-26")},
        {"name": "Investments", "id": null, "date": new Date("2022-02-1")},
        {"name": "Credit Card", "id": null, "date": new Date("2022-04-18")}
    ]
    for(let i = 0; i < secrets.length; i++) {
        secrets[i].id = Math.floor(Math.random() * 100000);
    }
    return secrets;
}

export function createSecret(secret) {
    // TODO: actually make the secret
    console.log("Attempting to create secret", secret);
    return Promise.resolve("Secret Created Successfully");
}