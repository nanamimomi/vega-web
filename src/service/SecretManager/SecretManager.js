export function allSecrets() {
    /*
    TODO: get the names, ids, dates, and times of all of the secrets from vega-spring
    For now, just use a placeholder while the frontend is developed
     */
    const secrets = [
        {"name": "Walmart", "id": null, "date": new Date()},
        {"name": "Costco", "id": null, "date": new Date()},
        {"name": "Amazon", "id": null, "date": new Date()},
        {"name": "Clash of Clans", "id": null, "date": new Date()},
        {"name": "Steam", "id": null, "date": new Date()},
        {"name": "Mini Golf", "id": null, "date": new Date()},
        {"name": "Swimming Pool", "id": null, "date": new Date()},
        {"name": "House Code", "id": null, "date": new Date()},
        {"name": "Front Window", "id": null, "date": new Date()},
        {"name": "House Alarm", "id": null, "date": new Date()},
        {"name": "Scissors", "id": null, "date": new Date()},
        {"name": "Pencil", "id": null, "date": new Date()},
        {"name": "Aligator", "id": null, "date": new Date()},
        {"name": "Plastic", "id": null, "date": new Date()},
        {"name": "Investments", "id": null, "date": new Date()},
        {"name": "Credit Card", "id": null, "date": new Date()}
    ]
    for(let i = 0; i < secrets.length; i++) {
        secrets[i].id = Math.floor(Math.random() * 100000);
        secrets[i].date.setMonth(Math.floor(Math.random() * 12));
    }
    return secrets;
}
