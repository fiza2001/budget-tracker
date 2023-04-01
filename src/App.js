import React, { useState } from "react";
import "./App.css";
import NewExpense from "./Components/NewExpense.js"
import expenseItems from "./Components/ExpenseItems";
// import Expenses from "./Components/Expenses";
import ExpensesFinal from "./Components/ExpensesFinal";



function App() {

  const [expenses, setExpenses] = useState(expenseItems)

  function addExpenseHandler(expense){
    setExpenses((prev) => {
      return [expense, ...prev]
    })

  }
  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <br />
      <br />
      <NewExpense onAddExpense={addExpenseHandler}/>
      <br />
      <ExpensesFinal items={expenses}/>
    </div>
  );
}

export default App;
