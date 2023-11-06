export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={`bg-white p-2 flex justify-between ${
        transaction.amount < 0
          ? "border-r-4 rounded-r-md border-red-500"
          : "border-r-4 rounded-r-md border-green-500"
      } shadow-md font-semibold`}
    >
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    </li>
  );
};
