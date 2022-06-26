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

    // const filteredExpenses = props.data.filter((expense) => {
    //    return expense.date.getFullYear().toString() === selectedYear;
    // });     

    return(
        <div>            
            <Card className="expenses">
                <ExpensesFilter 
                    selected={selectedYear} 
                    onSelectYear={selectedYearHandler} 
                />  
                {selectedYear ==='All' ?      
                    props.data.map((expense) => (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                    )) :
                    props.data.filter((expense) => ( 
                        expense.date.getFullYear().toString() === selectedYear)
                        ).map((expense) => (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                    ))    
                }               
            </Card>  
        </div>              
    )
}

export default Expenses;