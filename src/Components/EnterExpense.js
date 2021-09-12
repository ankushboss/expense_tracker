import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExpenseAction } from "../store/ExpenseSlice";
import classes from  "./Expense.module.css";

const EnterExpense = () => {
  const amt = useRef(0);
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.expense.balance);

  const addButtonHandler = () => {
    if(+amt.current.value <= 0){
      alert("Please enter a valid number greater than 0 without sign to Add");
    } else {
      dispatch(
        ExpenseAction.handleTranaction({
          time: new Date().toISOString(),
          amt: +amt.current.value,
          type: "Add",
        })
      );
    }

  };

  const removeButtonHandler = () => {

    if(+amt.current.value <= 0){
      alert("Please enter a valid number greater than 0 without sign to Remove");
    } else {
      dispatch(
        ExpenseAction.handleTranaction({
          time: new Date().toISOString(),
          amt: +amt.current.value,
          type: "Remove",
        })
      );
    }

  };

  return (
    <div className={classes.enter}>
      <b style={{fontSize:"25px"}}>Balance : {balance} </b> <br />
      <input type="number" ref={amt}></input> <br />
      <button onClick={addButtonHandler}>Add</button>
      <button onClick={removeButtonHandler}>Remove</button>
    </div>
  );
};

export default EnterExpense;
