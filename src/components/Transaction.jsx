import { useGlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { text, amount, id} = transaction
  const { deleteTransaction } = useGlobalContext();
  const sign = amount < 0 ? "-" : "+";
  return (
    <li
      className={`bg-white p-2 relative flex justify-between items-center  ${
        amount < 0
          ? "border-r-4 rounded-r-md border-red-500"
          : "border-r-4 rounded-r-md border-green-500"
      } shadow-md font-semibold`}
    >
      {text} <span>{sign}${Math.abs(amount)}</span><button onClick={() => deleteTransaction(id)} className="absolute left-[-25px] bg-red-500 rounded-l text-white p-2">x</button>
    </li>
  );
};
