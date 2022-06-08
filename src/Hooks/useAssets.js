import Medical from "../assets/Medical.png";
import Car from "../assets/Car.png";
import Child from "../assets/Child.png";
import Daily from "../assets/Daliy.png";
import Education from "../assets/Education.png";
import Food from "../assets/Food.png";
import Investment from "../assets/Investment.png";
import Loan from "../assets/Loan.png";
import Pets from "../assets/Pets.png";
import Salary from "../assets/Salary.png";
import Entertainment from "../assets/Entertainment.png";
import Others from "../assets/Others.png";
import Travel from "../assets/Travel.png";
import Gifts from "../assets/Gifts.png";

export function icon(category) {
  let img = [
    Medical,
    Car,
    Child,
    Daily,
    Education,
    Food,
    Investment,
    Loan,
    Pets,
    Salary,
    Entertainment,
    Travel,
    Gifts,
    Others,
  ];
  let icons = [
    "Medical",
    "Car",
    "Child",
    "Daily use",
    "Education",
    "Food",
    "Investment",
    "Loan",
    "Pets",
    "Salary",
    "Entertainment",
    "Travel",
    "Gifts",
    "Others",
  ];

  const picimg = icons.map((title, idx) => {
    if (title == category) {
      return idx;
    }
  });
  return img[picimg.filter((item) => item != undefined)];
}
