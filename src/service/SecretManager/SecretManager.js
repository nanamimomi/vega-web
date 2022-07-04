export function getAllSecrets() {
  /*
    TODO: get the names, ids, dates, and times of all of the secrets from vega-spring
    For now, just use a placeholder while the frontend is developed
     */
    let exampleFiles = new FormData();
    fetch(process.env.PUBLIC_URL + "/logo192.png").then(res => res.blob()).then(blob => {blob.name = "react-logo.png"; return blob;}).then(blob => exampleFiles.append("file", blob));
    fetch(process.env.PUBLIC_URL + "/../src/assets/images/logo.png").then(res => res.blob()).then(blob => {blob.name = "react-logo.png"; return blob;}).then(blob => exampleFiles.append("file", blob));
  const secrets = [
    {
      name: "Walmart",
      id: null,
      date: new Date("2022-01-17"),
      text: "this is my secret for WALMART",
        files: exampleFiles
    },
    {
      name: "Costco",
      id: null,
      date: new Date("2022-02-9"),
        text: "this is my secret for COSTCO",
        files: exampleFiles
    },
    {
      name: "Amazon",
      id: null,
      date: new Date("2022-01-3"),
        text: "this is my secret for AMAZON",
        files: exampleFiles
    },
    {
      name: "Clash of Clans",
      id: null,
      date: new Date("2022-03-23"),
        text: "this is my secret for CLASH OF CLANS",
        files: exampleFiles
    },
    {
        name: "Steam",
        id: null,
        date: new Date("2022-06-13"),
        text: "this is my secret for STEAM",
        files: exampleFiles
    },
    {
      name: "Mini Golf",
      id: null,
      date: new Date("2022-04-26"),
        text: "this is my secret for MINI GOLF",
        files: exampleFiles
    },
    {
      name: "Swimming Pool",
      id: null,
      date: new Date("2022-01-5"),
        text: "this is my secret for SWIMMING POOL",
        files: exampleFiles
    },
    {
      name: "House Code",
      id: null,
      date: new Date("2022-05-7"),
        text: "this is my secret for HOUSE CODE",
        files: exampleFiles
    },
    {
      name: "Front Window",
      id: null,
      date: new Date("2022-05-23"),
        text: "this is my secret for FRONT WINDOW",
        files: exampleFiles
    },
    {
      name: "House Alarm",
      id: null,
      date: new Date("2022-03-10"),
        text: "this is my secret for HOUSE ALARM",
        files: exampleFiles
    },
    {
      name: "Scissors",
      id: null,
      date: new Date("2022-04-8"),
        text: "this is my secret for SCISSORS",
        files: exampleFiles
    },
    {
      name: "Pencil",
      id: null,
      date: new Date("2022-03-28"),
        text: "this is my secret for PENCIL",
        files: exampleFiles
    },
    {
      name: "Aligator",
      id: null,
      date: new Date("2022-06-21"),
        text: "this is my secret for ALIGATOR",
        files: exampleFiles
    },
    {
      name: "Plastic",
      id: null,
      date: new Date("2022-06-26"),
        text: "this is my secret for PLASTIC",
        files: exampleFiles
    },
    {
      name: "Investments",
      id: null,
      date: new Date("2022-02-1"),
        text: "this is my secret for INVESTMENTS",
        files: exampleFiles
    },
    {
      name: "Credit Card",
      id: null,
      date: new Date("2022-04-18"),
        text: "this is my secret for CREDIT CARD",
        files: exampleFiles
    },
  ];
  for (let i = 0; i < secrets.length; i++) {
    secrets[i].id = Math.floor(Math.random() * 100000);
  }
  return secrets;
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