import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.js"

export default function NewExpense(props) {

    function saveExpenseDataHandler(enteredExpensedata){
        const myObj = {
            ...enteredExpensedata,
            id : Math.random().toString()
        }
        props.onAddExpense(myObj)
    }

    return (
        <div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

        </div>
    )
    
};
