import expenseItems from "./ExpenseItems";
import Expenses from "./Expenses";

export default function ExpensesFinal(props) {
  return (
    <div>
      {props.items.map((expenses) => (
        <Expenses
          title={expenses.title}
          price={expenses.price}
          date={expenses.date}
        />
      ))}
      {/* <Expenses
        date={expenseItems[0].date}
        title={expenseItems[0].title}
        price={expenseItems[0].price}
      />
      <br />
      <Expenses
        date={expenseItems[1].date}
        title={expenseItems[1].title}
        price={expenseItems[1].price}
      />
      <br />
      <Expenses
        date={expenseItems[2].date}
        title={expenseItems[2].title}
        price={expenseItems[2].price}
      />
      <br />
      <Expenses
        date={expenseItems[3].date}
        title={expenseItems[3].title}
        price={expenseItems[3].price}
      /> */}
      <br />
    </div>
  );
}
