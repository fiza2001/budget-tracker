import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";

export default function Expenses(props) {
  return (
    <div className="expenses-div">
      <ExpenseDate date={props.date} />
      <div className="expenses-td">
        <h1 className="title-name">{props.title}</h1>
      </div>
      <div>
        <button className="price-btn">
          <b>{props.price} $</b>
        </button>
      </div>
    </div>
  );
}
