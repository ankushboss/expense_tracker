//import logo from './logo.svg';
import "./App.css";
import React from "react";
import EnterExpense from "./Components/EnterExpense";
import ViewExpense from "./Components/ViewExpense";

function App() {
  return (
    <React.Fragment>
      <EnterExpense></EnterExpense>
      <ViewExpense></ViewExpense>
    </React.Fragment>
  );
}

export default App;
