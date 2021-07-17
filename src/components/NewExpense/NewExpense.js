import { useState } from "react";
import { BaseButton, Container } from "../UI";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      {!isEditing && (
        <BaseButton
          onClick={startEditingHandler}
          children={"Add Expense"}
          kind={"success"}
        />
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </Container>
  );
};

export default NewExpense;
