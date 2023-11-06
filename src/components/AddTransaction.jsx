import { useState } from "react";

export const AddTransaction = () => {
  const [formData, setFormData] = useState({
    text: "",
    amount: 0,
  });

  const handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    setFormData((prevData) => {
        return {
            ...prevData,
            [name]: value
        }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = formData.text 
    const amount = Number(formData.amount)
    if(text && amount) {
        console.log(typeof amount);
        setFormData({text: "", amount:  ""})
    }

  }

  return (
    <div>
      <h3 className="font-bold">Add new transaction</h3>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex flex-col">
          <label htmlFor="text" className="font-bold">Text</label>
          <input type="text" name="text" value={formData.text} placeholder="Enter text..." onChange={handleChange} className="border border-gray-300 p-2 rounded"/>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="amount" className="font-bold">
            Amount
            <br/>
            (negative-expense, positive-income)
          </label>
          <input type="number" name="amount" value={formData.amount} placeholder="Enter amount..." onChange={handleChange} className="border border-gray-300 p-2 rounded"/>
        </div>
        <button className="bg-blue-700 text-white font-bold rounded py-1 px-4 mt-4 w-full">Add Transaction</button>
      </form>
    </div>
  );
};
