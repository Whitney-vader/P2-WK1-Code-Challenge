import "./App.css";
import React, { useState } from 'react'
import TableListofTransactions from './components/TableListofTransactions';
import FormofTransactions from './components/FormofTransactions'
import SearchofTransactions from "./components/SearchofTransactions";
import DisplayRoyalBankofFlatiron from "./components/RoyalBankofFlatiron";
 
function App() {
  const[transactions,setTransaction]=useState([
    {date: "2019-12-01", description:"Paycheck from Bob's Burgers", category:"Income", amount: 1000, },
  {date: "2019-12-01", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55, },
  {date: "2019-12-02", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55, },
  {date: "2019-12-04", description:"Sunglasses, Urban Outfitters", category:"Fashion", amount: -24.99, },
  {date: "2019-12-06", description:"Venmo, Alice Pays you for Burrito", category:"Food", amount: 8.75, },
  {date: "2019-12-06", description:"Chipotle", category:"Food", amount: -17.59 },
  ])

  const addTransaction = (newTransaction) => {
    setTransaction([...transactions, newTransaction]);
  };

  const manageSearch = (searchName) => {
    const searchFilter = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchName.toLowerCase())
    );
    setTransaction(searchFilter);
  };

  return(
    <div>
    <DisplayRoyalBankofFlatiron/>
    <SearchofTransactions setSearch={manageSearch} />
      <FormofTransactions includeTransaction={addTransaction} />
      <TableListofTransactions transactions={transactions}/>
    </div>
  )
  
}

export default App;