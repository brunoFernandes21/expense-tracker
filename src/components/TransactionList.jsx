import { useGlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useGlobalContext();

  const allTransactions = transactions.map((transaction) => (
   <Transaction key={transaction.id} transaction={transaction}/>
  ));

  return (
    <>
      <h3 className="text-md font-bold border-b border-gray-400">History</h3>
      <ul className="flex flex-col gap-2">
      { allTransactions }
      </ul>
    </>
  );
};
