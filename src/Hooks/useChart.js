import {
  incomeCategories,
  expenseCategories,
  resetCategories,
  IncomeMonth,
  ExpenseMonth,
} from "../constants/categories";

export const useChart = (title1, documents, title2) => {
  resetCategories();

  const TransactionsPerDounut = documents.filter((t) => t.earn === title1);

  const TransactionsPerBarChartIncome = documents.filter(
    (t) => t.earn === title1
  );
  const TransactionsPerBarChartExpend = documents.filter(
    (t) => t.earn === title2
  );

  const total = TransactionsPerDounut.reduce(
    (acc, currVal) => (acc += parseInt(currVal.amount)),
    0
  );

  // const IncomeMontotal=TransactionsPerBarChartIncome.reduce((acc, currVal) => acc += parseInt(currVal.amount), 0);
  // const ExpendMontotal=TransactionsPerBarChartExpend.reduce((acc, currVal) => acc += parseInt(currVal.amount), 0);

  // console.log(total)

  const categories = title1 == "Income" ? incomeCategories : expenseCategories;
  // console.log(categories)

  const Incomemon = title1 == "Income" ? IncomeMonth : ExpenseMonth;
  // console.log(Incomemonth)

  const Expendmon = title2 == "Expend" ? ExpenseMonth : IncomeMonth;
  // console.log(Expendmonth)

  TransactionsPerDounut.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    // console.log(t.date.slice(3,5))
    // console.log(category)

    if (category) category.amount += parseInt(t.amount);
  });

  // console.log(TransactionsPerDounut)
  TransactionsPerBarChartIncome.forEach((t) => {
    const Mon = Incomemon.find((c) => c.type === t.date.slice(5, 7));
    // console.log(t.date.slice(3,5))
    // console.log(Mon)
    if (Mon) Mon.amount += parseInt(t.amount);
  });

  TransactionsPerBarChartExpend.forEach((t) => {
    const Mon = Expendmon.find((c) => c.type === t.date.slice(5, 7));
    // console.log(t.date.slice(3,5))
    // console.log(Mon)
    if (Mon) Mon.amount += parseInt(t.amount);
  });

  const filteredCategories = categories.filter((sc) => parseInt(sc.amount) > 0);


  const Montotal = []
  for(let i=0 ; i <12 ; i++){
    let account = Incomemon[i].amount- Expendmon[i].amount
    Montotal.push(account)
  }

  // TransactionsPerDounut.forEach((t) => {
  //   const mon = month.find((c) => c.type === t.date);

  //   if (category) category.amount += parseInt(t.amount);
  // });

  const DounutData = {
    labels: filteredCategories.map((c) => c.type),
    series: filteredCategories.map((c) => c.amount),
    colors: filteredCategories.map((c) => c.color),
    plotOptions:{
      pie:{
        donut:{
          size:"55px",
          labels:{
            show:true,
            total:{
              show:true,
              showAlways:true,
              fontSize:"16px",
            }
          }
        }
      }
    }
  };

  const BarData = {
  series: [{
    name: 'Income',
    type: 'column',
    color:"#7FFFD4",
    data: Incomemon.map((c) => c.amount),
  }, {
    name: 'Expend',
    type: 'column',
    color:"#F08080",
    data: Expendmon.map((c) => c.amount),
  }, {
    name: 'Total',
    type: 'line',
    data: Montotal
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: 'Total Amount Analysis',
      align: 'middle',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#FEB019',
      },
    },
    xaxis: {
      categories: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            colors: '#008FFB',
          }
        },
        title: {
          text: "Income / Expend",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: 'Income / Expend',
        opposite: false,
        show: false,
        axisTicks: {
          show: false,
        },
      },
      {
        seriesName: 'MonTotal',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019'
        },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          text: "MonTotal",
          style: {
            color: '#FEB019',
          }
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  },


};



  // console.log(DounutData)
  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const BarData = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: Incomemon.map((c) => c.amount),
  //       backgroundColor: ["rgba(2, 136, 56,0.2)"],
  //       borderColor: ["rgb(2, 136, 56,0.2)"],
  //       borderWidth: 1,
  //     },
  //     {
  //       label: "Expend",
  //       data: Expendmon.map((c) => c.amount),
  //       backgroundColor: [" rgba(195, 15, 27,0.2)"],
  //       borderColor: ["rgb(195, 15, 27)"],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return { total, DounutData, BarData };
};
