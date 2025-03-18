import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import {
  deposit,
  fetchTransaction,
  transactionSave,
  withdrawn,
} from "./slice/bankSlice";

function App() {
  const dispatch = useDispatch();
  const { balance, transactions, isError, isLoading } = useSelector(
    (state) => state.bank
  );

  useEffect(() => {
    dispatch(fetchTransaction);
  }, []);

  function handleDeposit(amount) {
    dispatch(deposit(amount));
    dispatch(transactionSave({ type: "deposit", amount: amount }));
  }

  function handleWithdraw(amount) {
    if (amount < balance) {
      dispatch(withdrawn(amount));
      dispatch(transactionSave({ type: "withdraw", amount: amount }));
    } else {
      alert(
        `insufficient funds, asking ${amount} and having amount ${balance}`
      );
    }
  }

  console.log(transactions, balance, isError, isLoading);
  return (
    <div>
      jai Shree Ram
      <h1>{balance}</h1>
      <button onClick={() => handleDeposit(100)}>Add 100 rupess</button>
      <button onClick={() => handleWithdraw(50)}>remove 50 rupess</button>
      <h3>Transaction History </h3>
      {isLoading && <p>Loading Transaction...</p>}
      {isError && <p>{isError}</p>}
      {transactions.map((each, index) => (
        <li key={index}>
          {each.type} :{each.amount}
        </li>
      ))}
    </div>
  );
}

export default App;
