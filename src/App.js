import React, { useState } from "react";
import NewExpense from './Components/NewExpense';
import Expenses from './Components/Expenses.js';
import "./App.css"

const hardCodedExpenses = [
  {
    id: '1',
    title: 'New CupBoard',
    amount: 700.00,
    date: new Date(2020, 1, 14),
  },
  { id: '2', title: 'Sofa Set', amount: 500, date: new Date(2021, 9, 12) },
  {
    id: '3',
    title: 'Car',
    amount: 8000,
    date: new Date(2022, 2, 28),
  },
  {
    id: '4',
    title: 'iPhone',
    amount: 10000,
    date: new Date(2023, 1, 11),
  },
  {
    id: "5",
    title: 'School Fee',
    amount: 12000,
    date: new Date(2023, 2, 22)
  },
  {
    id: "6",
    title: 'Chairs',
    amount: 200,
    date: new Date(2021, 12, 22)
  },
  {
    id: "7",
    title: 'Dish Washer',
    amount: 2000,
    date: new Date(2021, 5, 2)
  },
  {
    id: "8",
    title: 'Dining table',
    amount: 4000,
    date: new Date(2021, 8, 12)
  }
];


export default function App() {

  const [expenses, setExpenses] = useState(hardCodedExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app-div">
      <h1>Budget Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
  
};
