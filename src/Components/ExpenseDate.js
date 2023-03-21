import "./ExpenseDate.css"

export default function ExpenseDate(props) {
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expenses-date">
      <div><h3>{date}</h3></div>
      <div><h2>{month}</h2></div>
      <div><h4>{year}</h4></div>
    </div>
  );
}
