const format = "YYYY-MM-DD";

export const Spend = (day, documents) => {
  const currtDay = day.format(format);
  let money = [];
  documents.map((t) => {
    if (t.date == currtDay) {
      money.push(t);
    }
  });
  let total = 0;
  if (money[0] == undefined) {
    return (total = 0);
  } else {
    let dayearn = 0;
    let daylost = 0;
    let daymoney = 0;
    for (let i = 0; i < money.length; i++) {
      let dict = money[i];
      if (dict["earn"] == "Income") {
        dayearn = 0 + Number(dict["amount"]);
        daymoney = daymoney + dayearn;
      } else {
        daylost = 0 + Number(dict["amount"]);
        daymoney = daymoney - daylost;
      }
    }
    return daymoney;
  }
};