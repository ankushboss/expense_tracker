import { useSelector } from "react-redux";
import classes from "./Expense.module.css";

const ViewExpense = () => {
  const transactions = useSelector((state) => state.expense.tranasctions);

  let display;

  if (transactions.length) {
    display = transactions.map((data) => (
      <li key={data.time} style={{ listStyleType: "none" }}>
        {data.time} - {data.amt} - {data.type}
      </li>
    ));
  }

  return (
    <div className={classes.view}>
      <h2>Transactions : </h2>
      <b>{display}</b>
    </div>
  );
};

export default ViewExpense;
