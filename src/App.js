import "./App.css";
import ExpensesFinal from "./Components/ExpensesFinal"
import NewExpense from "./Components/NewExpense.js"


function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <br />
      <br />
      <NewExpense />
      <br />
      <ExpensesFinal />
    </div>
  );
}

export default App;
