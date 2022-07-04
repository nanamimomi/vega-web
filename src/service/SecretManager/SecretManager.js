export function getAllSecrets() {
  /*
    TODO: get the names, ids, dates, and times of all of the secrets from vega-spring
    For now, just use a placeholder while the frontend is developed
     */
  const secrets = [
    {
      name: "Walmart",
      id: null,
      date: new Date("2022-01-17"),
      secret: "ABCDE",
    },
    {
      name: "Costco",
      id: null,
      date: new Date("2022-02-9"),
      secret: "Anjknnjrkw",
    },
    {
      name: "Amazon",
      id: null,
      date: new Date("2022-01-3"),
      secret: "AfenwjklfnewkjBCDE",
    },
    {
      name: "Clash of Clans",
      id: null,
      date: new Date("2022-03-23"),
      secret: "ABCDE",
    },
    { name: "Steam", id: null, date: new Date("2022-06-13"), secret: "ABCDE" },
    {
      name: "Mini Golf",
      id: null,
      date: new Date("2022-04-26"),
      secret: "ABCDE",
    },
    {
      name: "Swimming Pool",
      id: null,
      date: new Date("2022-01-5"),
      secret: "ABCDE",
    },
    {
      name: "House Code",
      id: null,
      date: new Date("2022-05-7"),
      secret: "ABCDE",
    },
    {
      name: "Front Window",
      id: null,
      date: new Date("2022-05-23"),
      secret: "ABCDE",
    },
    {
      name: "House Alarm",
      id: null,
      date: new Date("2022-03-10"),
      secret: "ABCDE",
    },
    {
      name: "Scissors",
      id: null,
      date: new Date("2022-04-8"),
      secret: "ABCDE",
    },
    {
      name: "Pencil",
      id: null,
      date: new Date("2022-03-28"),
      secret: "ABfenwkjenfwCDE",
    },
    {
      name: "Aligator",
      id: null,
      date: new Date("2022-06-21"),
      secret: "ABCDE",
    },
    {
      name: "Plastic",
      id: null,
      date: new Date("2022-06-26"),
      secret: "ABCDE",
    },
    {
      name: "Investments",
      id: null,
      date: new Date("2022-02-1"),
      secret: "ABCDE",
    },
    {
      name: "Credit Card",
      id: null,
      date: new Date("2022-04-18"),
      secret: "ABCDE",
    },
  ];
  for (let i = 0; i < secrets.length; i++) {
    secrets[i].id = Math.floor(Math.random() * 100000);
  }
  return secrets;
}
