import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
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

    let expensesContent = props.data;

    if (selectedYear === 'All'){
        expensesContent = props.data.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        ))
    } else if(filteredExpenses.length > 0){
        expensesContent =  filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
            ))                    
    } else {
        expensesContent = <p>No Content found.</p>
    }

    return(
        <div>            
            <Card className="expenses">
                <ExpensesFilter 
                    selected={selectedYear} 
                    onSelectYear={selectedYearHandler} 
                />  
                {expensesContent}               
            </Card>  
        </div>              
    )
}

export default Expenses;