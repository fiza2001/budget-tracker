import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

export default function Expenses(props) {

  const [title, setTitle] = useState(props.title)

  function updateSetTitle(){
    setTitle("Updated Title")
  }
  return (
    <div>
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
