import React, { useState } from "react";
import "./App.css";
import NewExpense from "./Components/NewExpense.js"
// import Expenses from "./Components/Expenses";
import ExpensesFinal from "./Components/ExpensesFinal";

const hardcodeExpenses = [
  { id: "1", date: new Date(), title: "car tools", price: 110 },
  { id: "2", date: new Date(), title: "groceries", price: 80 },
  { id: "3", date: new Date(), title: "school fee", price: 6110 },
  { id: "4", date: new Date(), title: "decor", price: 210 },
];


function App() {

  const [expenses, setExpenses] = useState(hardcodeExpenses)

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
