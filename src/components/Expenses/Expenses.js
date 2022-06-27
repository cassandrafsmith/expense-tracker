import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('All');

    const selectedYearHandler = (selection) =>{        
       setSelectedYear(selection);
    };

    const filteredExpenses = props.data.filter((expense) => {
       return expense.date.getFullYear().toString() === selectedYear;
    });     

    return(
        <div>            
            <Card className="expenses">
                <ExpensesFilter 
                    selected={selectedYear} 
                    onSelectYear={selectedYearHandler} 
                />
                <ExpensesChart selectedYear={selectedYear} allExpenses={props.data} filteredExpenses={filteredExpenses} />  
                <ExpensesList data={props.data} selectedYear={selectedYear} filteredExpenses={filteredExpenses} />            
            </Card>  
        </div>              
    )
}

export default Expenses;