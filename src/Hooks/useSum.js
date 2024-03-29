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
    if (daymoney > 10000 || daymoney < -10000){
      let quo = daymoney / 10000
      return Math.floor(Math.floor(quo * Math.pow(10, (2 || 0) + 1)) / 10) / Math.pow(10, (2 || 0)) + "萬"

    }
    return daymoney;
  }
};

