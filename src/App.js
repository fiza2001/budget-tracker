import "./App.css";
import NewExpense from "./Components/NewExpense.js"
// import expenseItems from "./Components/ExpenseItems";
// import Expenses from "./Components/Expenses";
import ExpensesFinal from "./Components/ExpensesFinal";



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
      <ExpensesFinal />
    </div>
  );
}

export default App;
