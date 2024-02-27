import { useSelector } from "react-redux";

export const Sort = () => {
  const { transcations } = useSelector((state) => state.tracker);
  let income = transcations.filter((element) => element.amount > 0);
  let expense = transcations.filter((element) => element.amount < 0);
  const toatlExpense = expense.reduce((cur, acc) => (cur += acc.amount), 0);
  const toatlIncome = income.reduce((cur, acc) => (cur += acc.amount), 0);

  return (
    <div>
      <h2>Total Income: ${toatlIncome}</h2>
      <h2>Total Expense: ${toatlExpense}</h2>
    </div>
  );
};
