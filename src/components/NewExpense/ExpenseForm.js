import { useState } from "react";
import { BaseButton } from "../UI";
import { InputForm } from "../UI/Form";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <InputForm
            label={"Title"}
            type="text"
            placeholder={"Title"}
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
          <InputForm
            label={"Amount"}
            type="number"
            placeholder={"Amount"}
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
          <InputForm
            label={"Date"}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          <div className="flex justify-end">
            <BaseButton
              onClick={onCancel}
              children={"Cancel"}
              kind={"danger"}
            />
            <BaseButton
              children={"Add Expense"}
              type={"submit"}
              kind={"success"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
