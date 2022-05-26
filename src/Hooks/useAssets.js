import Medical from "../assets/Medical.png";
import Car from "../assets/Car.png";
import Child from "../assets/Child.png";
import Daliy from "../assets/Daliy.png";
import Education from "../assets/Education.png";
import Food from "../assets/Food.png";
import Investment from "../assets/Investment.png";
import Loan from "../assets/Loan.png";
import Pets from "../assets/Pets.png";
import Salary from "../assets/Salary.png";
import Entertainment from "../assets/Entertainment.png";

export function icon(category) {
  let img = [
    Medical,
    Car,
    Child,
    Daliy,
    Education,
    Food,
    Investment,
    Loan,
    Pets,
    Salary,
    Entertainment,
  ];
  let icons = [
    "Medical",
    "Car",
    "Child",
    "Daliy use",
    "Education",
    "Food",
    "Investment",
    "Loan",
    "Pets",
    "Salary",
    "Entertainment",
  ];

  const picimg = icons.map((title, idx) => {
    if (title == category) {
      return idx;
    }
  });
  return img[picimg.filter((item) => item != undefined)];
}
