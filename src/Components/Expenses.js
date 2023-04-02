import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
// import ExpenseFilter from "./ExpenseFilter.js"

export default function Expenses(props) {

  const [title, setTitle] = useState(props.title)

  function updateSetTitle(){
    setTitle("Enter Title")
  }

  // const [filteredYear, setFilteredYear] = useState("2021")

  // function handleDropdown(selectedYear){
  //   setFilteredYear(selectedYear)
  // }

  return (
    <div>
      {/* <ExpenseFilter selected={filteredYear} onChangeExpense={handleDropdown}/> */}
      <div className="expenses-div">
        <ExpenseDate date={props.date} />
        <div className="expenses-td">
          <h1 className="title-name">{title}</h1>
        </div>
        <div>
          <button className="price-btn">
            <b>{props.price} $</b>
          </button>
        </div>
        <button onClick={updateSetTitle}>Change Title</button>
      </div>
    </div>
  );
}
