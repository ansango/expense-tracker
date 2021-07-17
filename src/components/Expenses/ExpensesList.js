import ExpenseItem from "./ExpenseItem";
import { Subtitle } from "../UI";

const NotExpenses = () => <Subtitle subtitle={"Found no expenses"} />;

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
