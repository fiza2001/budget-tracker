import "./App.css";
// import ExpensesFinal from "./Components/ExpensesFinal"
import NewExpense from "./Components/NewExpense.js"
import expenseItems from "./Components/ExpenseItems";
import Expenses from "./Components/Expenses";



function App(props) {

  function addExpenseHandler(expense){
    console.log("In App.js")
    console.log(expense)

  }
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <br />
      <br />
      <NewExpense onAddExpense={addExpenseHandler}/>
      <br />
      {expenseItems.map((expenses) => (
        <Expenses title={expenses.title} price={expenses.price} date={expenses.date} />
      ))}
    </div>
  );
}

export default App;
