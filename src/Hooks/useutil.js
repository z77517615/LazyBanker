import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  // console.log(firstDayOfTheMonth)
  // console.log(dayjs().day())
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      // console.log(currentMonthCount)
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getWeekday(index) {
  const weeksarray = [];
  for (let i = index; index <= i + 6; index++) {
    weeksarray.push(dayjs().day(index));
  }
  return weeksarray;
}
