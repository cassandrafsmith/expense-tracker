import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) =>{
    

    if (props.selectedYear === 'All'){
        return(
            <ul className="expenses-list">
            {props.data.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
            ))}
            </ul>
        )
    } else if(props.filteredExpenses.length > 0){
        return(
            <ul className="expenses-list">
                {props.filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />
                ))} 
            </ul>
        )                   
    } else {
        return<h2 className="expenses-list__fallback">No Content found.</h2>;
    }
}

export default ExpensesList;