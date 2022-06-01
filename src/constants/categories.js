const incomeColors = ["#028838", "#21c65b", "#52d37f"];
const expenseColors = [
  "#70050c",
  "#a10813",
  "#cd0b18",
  "#f91121",
  "#ed5938",
  "#ee8269",
  "#f18a4e",
  "#eca57c",
  "#ecb13c",
  "#f2a305",
  "#f27f05",
];

export const incomeCategories = [
  { type: "Investments", amount: 0, color: incomeColors[0] },
  { type: "Gifts", amount: 0, color: incomeColors[1] },
  { type: "Salary", amount: 0, color: incomeColors[2] },
];

export const expenseCategories = [
  { type: "Child", amount: 0, color: expenseColors[0] },
  { type: "Car", amount: 0, color: expenseColors[1] },
  { type: "Travel", amount: 0, color: expenseColors[2] },
  { type: "Food", amount: 0, color: expenseColors[3] },
  { type: "Daliy use", amount: 0, color: expenseColors[4] },
  { type: "Entertainment", amount: 0, color: expenseColors[5] },
  { type: "Education", amount: 0, color: expenseColors[6] },
  { type: "Pets", amount: 0, color: expenseColors[7] },
  { type: "Loan", amount: 0, color: expenseColors[8] },
  { type: "Medical", amount: 0, color: expenseColors[9] },
  { type: "Others", amount: 0, color: expenseColors[10] },
];

export const IncomeMonth = [
  { type: "01", amount: 0 },
  { type: "02", amount: 0 },
  { type: "03", amount: 0 },
  { type: "04", amount: 0 },
  { type: "05", amount: 0 },
  { type: "06", amount: 0 },
  { type: "07", amount: 0 },
  { type: "08", amount: 0 },
  { type: "09", amount: 0 },
  { type: "10", amount: 0 },
  { type: "11", amount: 0 },
  { type: "12", amount: 0 },
];

export const ExpenseMonth = [
  { type: "01", amount: 0 },
  { type: "02", amount: 0 },
  { type: "03", amount: 0 },
  { type: "04", amount: 0 },
  { type: "05", amount: 0 },
  { type: "06", amount: 0 },
  { type: "07", amount: 0 },
  { type: "08", amount: 0 },
  { type: "09", amount: 0 },
  { type: "10", amount: 0 },
  { type: "11", amount: 0 },
  { type: "12", amount: 0 },
];
// export const expenseMon = [
//   { type: 'Investments', amount: 0, color: incomeColors[0] },
//   { type: 'Gifts', amount: 0, color: incomeColors[1] },
//   { type: 'Salary', amount: 0, color: incomeColors[2] },
// ];

export const resetCategories = () => {
  ExpenseMonth.forEach((c) => (c.amount = 0));
  IncomeMonth.forEach((c) => (c.amount = 0));
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
