import { Card } from "../UI";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <Card className="flex flex-col justify-center items-center w-20 h-20 border-2 border-red-500 text-white bg-red-400">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-2xl">{day}</div>
    </Card>
  );
};
export default ExpenseDate;
