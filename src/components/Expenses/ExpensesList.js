import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const NotExpenses = () => (
  <h2 className="expenses-list__fallback">Found no expenses</h2>
);

const ExistExpenses = ({ items }) => (
  <ul className="expenses-list">
    {items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
);

const ExpensesList = ({ items }) => {
  const areItems = items.length !== 0;
  return (
    <>
      {!areItems && <NotExpenses />}
      {areItems && <ExistExpenses items={items} />}
    </>
  );
};
export default ExpensesList;
