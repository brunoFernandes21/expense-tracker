import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <div className="app h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[350px] flex flex-col gap-4">
        <Header />
        <div className="flex flex-col gap-4">
          <Balance />
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </div>
    </div>
  );
}

export default App;
