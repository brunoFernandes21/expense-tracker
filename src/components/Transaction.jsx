import { useGlobalContext } from "../context/GlobalState";
import { BsTrashFill } from "react-icons/bs"

export const Transaction = ({ transaction }) => {
  const { text, amount, id} = transaction
  const { deleteTransaction } = useGlobalContext();
  const sign = amount < 0 ? "-" : "+";
  return (
    <li
      className={`group bg-white p-2 relative flex justify-between items-center   ${
        amount < 0
          ? "border-r-4 rounded-r-md border-red-500"
          : "border-r-4 rounded-r-md border-green-500"
      } shadow-md font-semibold`}
    >
      {text} <span>{sign}${Math.abs(amount)}</span>
      <button onClick={() => deleteTransaction(id)} className="absolute left-[-32px] bg-red-500 hidden group-hover:block rounded-l text-white py-3 px-2">
        <BsTrashFill/>
      </button>
    </li>
  );
};
