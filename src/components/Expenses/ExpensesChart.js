import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) =>{
const filteredChartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
];

for(const expense of props.filteredExpenses){
    const expenseMonth = expense.date.getMonth();
    filteredChartDataPoints[expenseMonth].value += expense.amount;
};
 
//create object with years as labels and total values for each year
const expenseYears = props.allExpenses.map(expense => expense.date.getFullYear());  //get years from allExpenses
console.log(expenseYears)    
const years = [...new Set(expenseYears)];                                           //remove duplicate years
console.log(years);
const allChartDataPoints = years.map(year => {                                      //Create object
    return (
        {
            label: year,
            'value': 0
        }
    )
});
console.log(allChartDataPoints);
 
for(const expense of props.allExpenses){
    const expenseYear = expense.date.getFullYear();
   
    const index = allChartDataPoints.findIndex(item => item.label === expenseYear);
    allChartDataPoints[index].value += expense.amount;
};

if(props.selectedYear === 'All'){
    return <Chart selectedYear={props.selectedYear} allDataPoints={allChartDataPoints} />
} else{
    return <Chart selectedYear={props.selectedYear} filteredDataPoints={filteredChartDataPoints} />
}
   
}

export default ExpensesChart;