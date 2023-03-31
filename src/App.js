import "./App.css";
import ExpensesFinal from "./Components/ExpensesFinal"
import NewExpense from "./Components/NewExpense.js"


function App() {

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
