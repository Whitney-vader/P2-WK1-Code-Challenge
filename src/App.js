import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TransactionItem from "./components/TransactionItem";
import Transactions from './components/Transactions';


function App() {
  return (
    <div className="App">
      <Navbar />
      <TransactionItem />
      <Transactions />

      
    </div>
  );
}

export default App;