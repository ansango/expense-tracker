const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center w-20 h-20 border-2 border-red-400 dark:border-gray-700  bg-red-300 dark:bg-gray-700 rounded-lg">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-2xl">{day}</div>
    </div>
  );
};
export default ExpenseDate;
