import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//GET TRANSACTIONS FROM LOCALSTORAGE
const getTransactions = () => {
    let transactionsInLocalStorage = localStorage.getItem("transactions")
    if(transactionsInLocalStorage) {
        transactionsInLocalStorage = JSON.parse(localStorage.getItem("transactions"))
    } else {
        transactionsInLocalStorage = []
    }

    return transactionsInLocalStorage
}

//initial state
const initialState = {
    transactions: getTransactions()
//   transactions: [
//     { id: 1, text: "Camera", amount: -470 },
//     { id: 2, text: "Food Shopping", amount: -200 },
//     { id: 3, text: "Investment", amount: 200 },
//     { id: 4, text: "Car Finance", amount: -320 },
//     { id: 5, text: "Salary", amount: 650 },
//   ],
};


//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    const updatedTransactions =  state.transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions))
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
    const allTransactions = [transaction, ...state.transactions]
    localStorage.setItem("transactions", JSON.stringify(allTransactions))
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
