import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer"
//initial state

const initialState = {
    transactions: [
        {id: 1, text: "Camera", amount: -470},
        {id: 2, text: "Food Shopping", amount: -200},
        {id: 3, text: "Investment", amount: 200},
        {id: 4, text: "Car Finance", amount: -320},
        {id: 5, text: "Salary", amount: 650}
    ]
}

//create context
export const GlobalContext = createContext(initialState)

//Provider component

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions}}>
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
