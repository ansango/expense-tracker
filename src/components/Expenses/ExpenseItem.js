import ExpenseDate from "./ExpenseDate";

export const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <div className="flex justify-between items-center p-2 my-4 bg-red-200 dark:bg-gray-800 rounded-lg shadow-lg">
        <ExpenseDate date={date} />
        <div className="flex gap-4 items-end flex-col-reverse justify-start flex-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="flex-1 mx-4 font-extrabold sm:text-lg">{title}</h2>
          <div className="font-extrabold text-white bg-red-600 dark:bg-gray-600 p-2 rounded-lg sm:text-lg sm:py-2 sm:px-6">
            {`${amount} €`}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
