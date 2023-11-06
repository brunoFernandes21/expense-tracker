import { useGlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map(transaction => transaction.amount)
  const totalIncome = amounts.filter(amount => amount > 0).reduce((acc, curr) => acc += curr).toFixed(2)
  const totalExpense = (amounts.filter(amount => amount < 0).reduce((acc, curr) => acc += curr) * -1).toFixed(2)
  return (
    <div className="bg-white py-4 flex justify-center items-center  shadow-md divide-x-2">
      <div className="flex flex-col justify-center items-center pr-10">
        <h4 className="text-lg font-bold">Income</h4>
        <p className="text-lg text-green-600 font-bold">£{totalIncome}</p>
      </div>
      <div className="flex flex-col justify-center items-center pl-10">
        <h4 className="text-lg font-bold">Expense</h4>
        <p className="text-lg text-red-600 font-bold">£{totalExpense}</p>
      </div>
    </div>
  );
};
