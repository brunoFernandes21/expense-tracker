import { useGlobalContext } from "../context/GlobalState";

export const Balance = () => {

  const { transactions } = useGlobalContext();

  //get all the ammount and store in an array
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, current) => acc +=current)
  const sign = total < 0 ? "-" : ""
  return (
    <div>
      <p className="text-md font-semibold">YOUR BALANCE</p>
      <p id="balance" className="text-2xl font-bold">
      {sign}£{Math.abs(total)}
      </p>
    </div>
  );
};
